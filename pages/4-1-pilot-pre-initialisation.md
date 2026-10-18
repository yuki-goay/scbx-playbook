[← Back to playbook](../playbook%20md/SCBx_Agentic_PDLC_Playbook.md)

---

# 4.1 Pilot pre-initiation and getting started

Before beginning the pilot workflow, confirm that the required development environment, approved agents, source documents and backlog platform are available to the squad.

### Install the HVE Core All extension

1. Open VS Code.
2. Search for the **HVE Core All** extension and install it.
3. After installation, switch to the **Pre-Release Version** to access the experimental agents.
4. Restart VS Code or use **Developer: Reload Window**.
5. Open GitHub Copilot Chat and check the Agent Picker. The HVE Core agents should appear in the list.

### Install packaged agents from a VSIX file

1. Open **Extensions** in VS Code and select **Install from VSIX**.
2. Choose and install the required VSIX file.
3. Open the command palette (`Ctrl/Cmd + Shift + P`), search for and select **Install Packaged Workspace Folder**.
4. Confirm that the `.github` folder has been added to the workspace.

For the full step-by-step agent walkthroughs (BRD, PRD, backlog, specification, planning, implementation, API testing, and functional testing), see:
