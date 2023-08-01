import { certificationData } from "./certificationdata.js";

const projects = document.querySelector(".project-temp");

const filterBtn = document.querySelectorAll(".filter-btn");

function loadData(doc) {
  const loader = document.querySelector(".loader");

  loader.style.display = "none";

  let project_card = document.createElement("div");
  let certName = document.createElement("h2");
  let date = document.createElement("small");
  let content = document.createElement("p");
  let tags = document.createElement("small");
  let btn = document.createElement("div");
  // let link = document.createElement("a");
  let cred = document.createElement("a");

  project_card.setAttribute("class", "project-description");
  btn.setAttribute("class", "button");
  cred.setAttribute("href", doc.cred);

  certName.textContent = doc.certName;
  date.textContent = doc.certDate;
  // content.innerHTML = doc.certDescription;
  tags.innerHTML = "<b>Tag</b> : " + doc.tags.join(", ");
  cred.textContent = "Verify";

  // if (doc.link != "") {
  //   link.setAttribute("href", doc.link);
  //   link.textContent = "Link";
  //   btn.appendChild(link);
  // }

  btn.appendChild(cred);

  project_card.appendChild(certName);
  project_card.appendChild(date);
  project_card.appendChild(content);
  project_card.appendChild(tags);
  project_card.appendChild(btn);

  projects.appendChild(project_card);
}

function filterProjectByTags(tag) {
  if (tag !== "All") {
    return renderData(certificationData.filter((doc) => doc.tags.includes(tag)));
  } else {
    return renderData(certificationData);
  }
}

function renderData(filteredData) {
  projects.innerHTML = "";
  filteredData.forEach((doc) => {
    loadData(doc);
  });
}

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    filterProjectByTags(filterBtn[i].id);
  });
}

filterProjectByTags("All");
