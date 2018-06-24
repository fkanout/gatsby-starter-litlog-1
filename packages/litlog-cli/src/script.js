module.exports.run = (verb, slug, comment, timestamp) => {
  const { execSync } = require('child_process');
  
  const isTrackedInGit = (file) => {
    const gitLsFiles = `git ls-files ${file}`;
    console.log(gitLsFiles);
    const gitLsFilesOut = execSync(gitLsFiles);
    if (gitLsFilesOut.toString() == "") {
      return false;
    } else {
      return true;
    }
  };

  const site = process.env.LITLOG_SITE;
  if (site === undefined) {
    console.log("please set LITLOG_SITE");
  } else {
    const fs = require("fs-extra");
    
    const now = new Date();
    const today = now.toISOString().substring(0, 10);
    if (timestamp === undefined) {
      timestamp = now.toISOString().substring(0, 16).replace(":", "");
    }
    let slug_remainder = slug;
    let file = slug;
    let type = slug;
    let change_title = "";
    let change_status = "";
    let change = "";
    if (comment === undefined) {
      comment = "";
    }

    if (verb === "created") {
      change_title = 'Create';
      change_status = 'created';
    } else if (verb === "creating") {
      change_title = 'Create';
      change_status = 'creating';
    } else if (verb === "updated") {
      change_title = 'Update';
      change_status = 'updated';
    } else if (verb === "updating") {
      change_title = 'Update';
      change_status = 'updating';
    }

    let matches = slug.match(/^([^/]+)\//);
    if (matches && !slug.match(/index\.md$/)) {
      type = matches[1];
      slug_remainder = slug.replace(new RegExp(`^${type}`), "");
      file = `./sites/${site}/${type}${slug_remainder}`;
      if (type !== "files" && !slug.match(/\.md$/)) {
        file = file.replace(/$/, ".md");
      }
      if (type === "files") {
        slug = slug.replace(/$/, ".file");
      }
    } 

    const change_file = `src/pages/litlog/sites/${site}/changes/${slug}/${timestamp}.md`;
    console.log(`creating new change ${change_file}`);

    change = `---
title: "${change_title}"
status: "${change_status}"
---
${comment}
`  

    if (verb.match(/ed$/)) {
      console.log(`adding git diff of ${file} to change ${change_file}`);
      change = `${change}\`\`\`diff`;
      if (verb === "updated" && isTrackedInGit(file)) {
        const gitDiff = `git diff ${file} | tail -n +5`;
  //     git diff $file | tail -n +5 >> $change_file
        console.log(gitDiff);
        const gitDiffOut = execSync(gitDiff);
        change = `${change}
${gitDiffOut.toString()}`;
      } else {
        console.log(`${file} is untracked`);
        const blank_file = "__blank";
        if (fs.existsSync(blank_file)) {
          console.log(`${blank_file} exists. Please fix.`);
        } else {
          try{
            fs.outputFileSync(blank_file, "");
          }catch (e){
            console.log("Cannot write file ", e);
          }
          const gitDiff = `git diff --no-index ${blank_file} ${file} | tail -n +5`;
          console.log(gitDiff);
          const gitDiffOut = execSync(gitDiff);
          change = `${change}
${gitDiffOut.toString()}`;
          if (fs.existsSync(blank_file)) {
            fs.unlinkSync(blank_file);
          }            

        }
      }
      change = `${change}\`\`\``;
    }
  
  // else
  //   if [[ $verb =~ creating ]]; then
  //     if [[ $slug =~ /files/ ]]; then
  //       echo "file is $file"
  //     elif [[ $slug =~ /tasks/task- ]]; then
  //       echo "creating new task ${file}"
  //       cat << EOF > $file
  // ---
  // title: ""
  // date: "$today"
  // request: ""
  // status: "not-started"
  // ---
  // ## Plan
  // EOF
  //     elif [[ $slug =~ /requests/request- ]]; then
  //       echo "creating new request ${file}"
  //       cat << EOF > $file
  // ---
  // title: ""
  // date: "$today"
  // status: "open"
  // ---
  // ## Specification
  // EOF
  //     fi
  //   fi
  // fi
    
    try{
      fs.outputFileSync(change_file, change);
    }catch (e){
      console.log("Cannot write file ", e);
    }
  
    console.log("site", site);
    console.log("verb", verb);
    console.log("slug", slug);
    console.log("slug_remainder", slug_remainder);
    console.log("file", file);
    console.log("comment", comment);
    console.log("timestamp", timestamp);
    console.log("today", today);
  }
};