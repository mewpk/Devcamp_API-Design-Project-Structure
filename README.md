"# Devcamp_API-Design-Project-Structure" 

To remove a submodule you need to:
Delete the relevant line from the . gitmodules file.
Delete the relevant section from . git/config .
Run git rm --cached path_to_submodule (no trailing slash).
Commit and delete the now untracked submodule files. Stack Overflow reference.
