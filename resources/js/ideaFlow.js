/* 
 * Constants and global variables
 */

 //stores the name of the various application views used by renderer
var VIEWS = {
	current: "",
	type : {
		task: "task"
	}
};

//stores global html elements
var $VIEWPORT,
	$NAVBAR,
	$FOOTER;

//stores the resource path to the logo
var LOGO = "../resources/img/logo.png";

/* 
 * Main Application renderer used to create the ui html
 */
var Renderer = {
	renderView: function (name) {
		VIEWS.current = name;
		createViewport();
		switch(name) {
	    case VIEWS.type.task:
	    	createNavbar();
	        createContentTask();
	        createFooter();
	        break;
		}
	}
};

/*
 * called by the renderer to generate the root viewport container
 * that everything else goes in
 */
function createViewport() {
	$VIEWPORT = $("<div>", {
		id: "viewport", 
		class: "container-viewport",
	});
	$(document.body).append($VIEWPORT);
};

/*
 * called by the renderer to generate the html for the header
 * of the application
 */
function createNavbar() {
	$NAVBAR = $("<nav>", {
		id: "navbar", 
		class: "navbar navbar-toggleable-sm sticky-top navbar-inverse bg-primary",
	});
	var $brand = $("<a>", {
		id: "brand", 
		class: "navbar-brand",
		href: "#"
	});
	var $logo = $("<img>", {
		id: "logo", 
		class: "d-inline-block align-top",
		alt:"",
		src: LOGO,
		width: "30",
		height: "30"
	});
	var $title = $("<span>", {
		id: "title", 
		class: "mb-0",
		html: " Idea Flow"
	});
	var $toggleBtn = $("<button>", {
		id: "toggleBtn", 
		class: "navbar-toggler navbar-toggler-right",
		type: "button",
		"data-toggle": "collapse",
		"data-target": "#navbarNav",
		"aria-controls": "navbarNav",
		"aria-expanded" : "false",
		"aria-label": "Toggle Navigation"
	});
	var $toggleBtnIcon = $("<span>", {
		id: "toggleBtnIcon", 
		class: "navbar-toggler-icon"
	});
	var $navbarNav = $("<div>", {
		id: "navbarNav", 
		class: "collapse navbar-collapse"
	});
	var $navbarNavUl = $("<ul>", {
		id: "navbarNavUl", 
		class: "navbar-nav mr-auto mt-2 mt-md-0"
	});
	var $navbarNavUl = $("<ul>", {
		id: "navbarNavUl", 
		class: "navbar-nav mr-auto mt-2 mt-md-0"
	});
	var $navbarNavLiCurrent = $("<span>", {
		id: "navbarNavLiCurrent", 
		class: "sr-only",
		html: "(current)"
	});
	var $navbarNavLiTasks = $("<li>", {
		id: "navbarNavLiTasks", 
		class: "nav-item active"
	});
	var $navbarNavLiTasksLink = $("<a>", {
		id: "navbarNavLiTasksLink", 
		class: "nav-link",
		href: "#",
		html: "Tasks"
	});
	var $navbarNavLiFaq = $("<li>", {
		id: "navbarNavLiFaq", 
		class: "nav-item"
	});
	var $navbarNavLiFaqLink = $("<a>", {
		id: "navbarNavLiFaqLink", 
		class: "nav-link",
		href: "#",
		html: "FAQ"
	});
	var $navbarNavLiGlossary = $("<li>", {
		id: "navbarNavLiGlossary", 
		class: "nav-item"
	});
	var $navbarNavLiGlossaryLink = $("<a>", {
		id: "navbarNavLiGlossaryLink", 
		class: "nav-link",
		href: "#",
		html: "Glossary"
	});
	var $navbarNavLiSpc = $("<li>", {
		id: "navbarNavLiSpc", 
		class: "nav-item"
	});
	var $navbarNavLiSpcLink = $("<a>", {
		id: "navbarNavLiSpcLink", 
		class: "nav-link",
		href: "#",
		html: "SPC"
	});

	//render nav branding and title
	$toggleBtn.append($toggleBtnIcon);
	$NAVBAR.append($toggleBtn);
	$brand.append($logo);
	$brand.append($title);
	$NAVBAR.append($brand);

	//render nav items
	$navbarNavLiTasksLink.append($navbarNavLiCurrent);
	$navbarNavLiTasks.append($navbarNavLiTasksLink);
	$navbarNavUl.append($navbarNavLiTasks);
	$navbarNavLiFaq.append($navbarNavLiFaqLink);
	$navbarNavUl.append($navbarNavLiFaq);
	$navbarNavLiGlossary.append($navbarNavLiGlossaryLink);
	$navbarNavUl.append($navbarNavLiGlossary);
	$navbarNavLiSpc.append($navbarNavLiSpcLink);
	$navbarNavUl.append($navbarNavLiSpc);
	$navbarNav.append($navbarNavUl);
	
	//render nav in the viewport
	$NAVBAR.append($navbarNav);
	$VIEWPORT.append($NAVBAR);
};

/*
 * called by the renderer to generate the html for the footer
 * of the application
 */
function createFooter() {
	$FOOTER = $("<footer>", {
		id: "footer", 
		class: "footer"
	});
	var $footerContent = $("<div>", {
		id: "footerContent",
		class: "container text-center"
	});
	var $footerContentText = $("<span>", {
		id: "footerContentText",
		class: "text-muted",
		html: "Copyright 2016 "
	});
	var $footerContentOmLink = $("<a>", {
		id: "footerContentOmLink",
		target: "_blank",
		href: "http://www.openmastery.org/",
		html: "Open Mastery"
	});

	$footerContentText.append($footerContentOmLink);
	$footerContentText.append(" | All Rights Reserved");

	//render the footer and add to viewport
	$footerContent.append($footerContentText);
	$FOOTER.append($footerContent);
	$VIEWPORT.append($FOOTER);
};

function createContentTask() {
	console.log("create content task html");
};