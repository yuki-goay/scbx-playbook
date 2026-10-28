---
name: cmd-audio
description: Workflow command: Turn Claude's chiptune sound alerts on/off, or pick the macOS output device and cue volume Trigger on "/audio" or "audio".
---

> Generated from harnesses/discovery (or base) commands/audio.md by `scripts/harness`.
> Arguments, if any, follow the invocation in the user message.


Manage the base-harness sound alerts — the chiptune cues fired by `play-alert.sh`
(coin / 1-up / aw / bump / power-up).

Run the toggler with the requested action and report its result verbatim (the
`devices` / `status` output can be multi-line). Do nothing else.

```
"$CLAUDE_PROJECT_DIR/.claude/hooks/sound-alerts.sh" $ARGUMENTS
```

**Mute**
- `off` mutes the cues for this workspace (writes the git-ignored `.audit/sound-muted` flag).
- `on` un-mutes.
- `status`, or no argument, reports mute + device + volume state.

**Output device** (macOS only; needs `ffmpeg` — `brew install ffmpeg`)
- `devices` lists the available CoreAudio output devices.
- `device <name>` pins the cues to that device (matched case-insensitively) using `ffmpeg`'s
  audiotoolbox output, so the cues play there **even when system audio is routed to your earphones** —
  routing is per-stream and does not change the system default. Writes `.audit/sound-device`.
- `device off` clears the pin (cues follow the system output again).
- `device` with no name shows the current pin.

**Volume**
- `volume <0-100>` sets the cue volume percentage (writes `.audit/sound-volume`). Because a pinned
  device is not the system default, the Mac volume keys can't reach it — this is how you turn those
  cues down. `100` = the cue's authored level, `0` = silent.
- `volume off` reverts to the authored level; `volume` with no number shows the current setting.

**Diagnose**
- `doctor` runs an end-to-end self-check and reports each layer (mute state, pinned device, volume,
  whether `ffmpeg`/`afplay` are on `PATH`, the resolved CoreAudio device index) then plays **one real
  test cue synchronously** through the same routing code the hook fires, printing a PASS/FAIL verdict.
  Run this first whenever "the alert stopped working" — it distinguishes a missing `ffmpeg`, an
  unavailable pinned device, and a mute from a genuinely-silent path. Plays even when muted (says so).

Notes:
- Cues only route to a pinned device when `ffmpeg` is on `PATH`. The hooks prepend the usual Homebrew /
  MacPorts bin dirs so this holds even when the app is launched from Finder/Dock (which gives a minimal
  `PATH`); if `ffmpeg` is genuinely absent, the pin can't be honoured and cues fall back to the
  system-default device. `doctor` tells you which case you're in.
- The `HARNESS_SOUND_ALERTS=0` env var is a separate **hard** mute for CI/headless runs and always
  wins until it is unset — `/audio on` cannot override it.
- `HARNESS_SOUND_DEVICE` / `HARNESS_SOUND_VOLUME` env vars act as durable defaults (handy since the
  `.audit/` flags are per-workspace and ephemeral); a `/audio device`/`volume` flag **overrides** them
  for the current workspace.
