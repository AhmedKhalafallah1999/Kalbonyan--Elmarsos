class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
  static move(elementId, newDistination) {
    const element = document.getElementById(elementId);
    const distination = document.querySelector(newDistination);
    distination.append(element);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId){
      this.hostElementId = document.getElementById(hostElementId)
    } else{
      this.hostElementId = document.body;
    }
    this.insertBefore = insertBefore;
  }
  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}
class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.show();
  }
  closeToolTip() {
    this.closeNotifier();

    this.detach();
  }
  show() {
    const toolTipElement = document.createElement("div");
    toolTipElement.className = "card";
    toolTipElement.textContent = this.text;
    
    toolTipElement.addEventListener("click", this.closeToolTip.bind(this));
    this.element = toolTipElement;
  }
}
class ProjectItem {
  check = false;

  constructor(id, updateProjectsListFunction, type) {
    this.id = id;
    this.updateProjectsListHandler = updateProjectsListFunction;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn(type);
  }
  showMoreInfoHandler() {
    if (this.check) {
      return;
    } else {
      const toolTipElement = document.getElementById(this.id);
      const toolTipText = toolTipElement.dataset.extraInfo;
      const toolTip = new Tooltip(() => {
        this.check = false;
      }, toolTipText,this.id);
      toolTip.attach();
      this.check = true;
    }
  }
  connectMoreInfoBtn() {
    const projectElement = document.getElementById(this.id);
    const moreInfoBtn = projectElement.querySelector("button:first-of-type");
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
  }
  connectSwitchBtn(type) {
    const projectItem = document.getElementById(this.id);
    let switchBtn = projectItem.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener(
      "click",
      this.updateProjectsListHandler.bind(null, this.id)
    );
  }
  update(updateProjectListenFn, type) {
    this.updateProjectsListHandler = updateProjectListenFn;
    this.connectSwitchBtn(type);
  }
}
class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
  }
  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }
  addProject(project) {
    this.projects.push(project);
    DOMHelper.move(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }
  switchProject(projectId) {
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    const findIndex = this.projects.findIndex((p) => p.id === projectId);
    this.projects.splice(findIndex, 1);
  }
}
class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}
App.init();
