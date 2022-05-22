"# Devcamp_API-Design-Project-Structure" 
<ul> 
To remove a submodule you need to:
  <li>
Delete the relevant line from the . gitmodules file.
     </li>
     <li>
Delete the relevant section from . git/config .
        </li>
        <li>
Run git rm --cached path_to_submodule (no trailing slash).
           </li>
           <li>
Commit and delete the now untracked submodule files. Stack Overflow reference.
              </li>
</ul>
