// Project data with additional images
const projectData = {
  project1: {
    title:
      "Lhyn Herbals: An E-Commerce Platform for Herbal and Organic Medicines",
    description:
      "Built a responsive e-commerce platform that enables users to browse, order, and manage herbal products online, featuring an intuitive interface and secure data handling.",
    technologies: ["HTML", "CSS", "JavaScript", "MySql PhpMyAdmin"],
    images: [
      "images/1.png",
      "images/herbal1.png",
      "images/herbal2.png",
      "images/herbal3.png",
    ],
    links: [],
  },
  project2: {
    title:
      "Reservation and Destination Rate System for Organization-Owned Vans",
    description:
      "Developed a web-based system for managing van reservations and automated fare computation, improving scheduling efficiency for organization-owned transport services.",
    technologies: ["React JS", "Node JS", "MySql Database"],
    images: [
      "images/2.png",
      "images/van1.png",
      "images/van2.png",
      "images/van3.png",
      "images/van4.png",
    ],
    links: [],
  },
  project3: {
    title:
      "Enhancing Continuous Ambulatory Peritoneal Dialysis (CAPD) Management through DialiEase: A Digital Approach to Home-Based Dialysis Monitoring",
    description:
      "Created a digital health platform to help Peritoneal Dialysis patients log treatment sessions, monitor fluid balance, and transmit data to healthcare professionals in real time.",
    technologies: [
      "React Native",
      "Figma",
      "Expo",
      "Node.js",
      "Google Cloud MySql",
    ],
    images: [
      "images/4.png",
      "images/dia1.png",
      "images/dia2.png",
      "images/dia3.png",
      "images/dia4.png",
      "images/dia5.png",
      "images/dia6.png",
      "images/dia7.png",
    ],
    links: [],
  },
  project4: {
    title:
      "MindConnect: A Mobile Platform for Mental Health Advocacy and Personalized Support Guidances",
    description:
      "Designed and prototyped a mobile app promoting mental health awareness, with guided support tools, self-assessment features, and personalized recommendations.",
    technologies: ["Flutter", "Firebase", "Figma"],
    images: [
      "images/5.png",
      "images/mind1.png",
      "images/mind2.png",
      "images/mind3.png",
      "images/mind4.png",
    ],
    links: [],
  },
  //   project5: {
  //     title:
  //       "MindConnect: A Mobile Platform for Mental Health Advocacy and Personalized Support Guidances",
  //     description:
  //       "Designed and prototyped a mobile app promoting mental health awareness, with guided support tools, self-assessment features, and personalized recommendations.",
  //     technologies: ["Flutter", "Firebase", "Figma"],
  //     images: [
  //       "images/5.png",
  //       "images/project5-1.jpg",
  //       "images/project5-2.jpg",
  //       "images/project5-3.jpg",
  //     ],
  //     links: [],
  //   },
};

// DOM Elements
const projectModal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("close-modal");
const projectGallery = document.getElementById("project-gallery");
const modalProjectTitle = document.getElementById("modal-project-title");
const modalProjectDescription = document.getElementById(
  "modal-project-description"
);
const modalProjectTech = document.getElementById("modal-project-tech");
const modalProjectLinks = document.getElementById("modal-project-links");

const imageLightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightboxBtn = document.getElementById("close-lightbox");
const prevImageBtn = document.getElementById("prev-image");
const nextImageBtn = document.getElementById("next-image");

// Variables for lightbox navigation
let currentImageIndex = 0;
let currentProjectImages = [];

// Open project modal
function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  // Set modal content
  modalProjectTitle.textContent = project.title;
  modalProjectDescription.textContent = project.description;

  // Clear previous content
  projectGallery.innerHTML = "";
  modalProjectTech.innerHTML = "";
  modalProjectLinks.innerHTML = "";

  // Add gallery images
  project.images.forEach((imageSrc, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;
    imgElement.alt = `${project.title} - Image ${index + 1}`;
    imgElement.className = "gallery-image";
    imgElement.addEventListener("click", () =>
      openLightbox(project.images, index)
    );
    projectGallery.appendChild(imgElement);
  });

  // Add technology tags
  project.technologies.forEach((tech) => {
    const techSpan = document.createElement("span");
    techSpan.textContent = tech;
    modalProjectTech.appendChild(techSpan);
  });

  // Add project links
  project.links.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.innerHTML = `<i class='bx ${
      link.type === "demo" ? "bx-link-external" : "bxl-github"
    }'></i> ${link.text}`;
    modalProjectLinks.appendChild(linkElement);
  });

  // Store current project images for lightbox navigation
  currentProjectImages = project.images;

  // Show modal
  projectModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close project modal
function closeProjectModal() {
  projectModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Open lightbox with specific image
function openLightbox(images, index) {
  currentImageIndex = index;
  currentProjectImages = images;
  updateLightboxImage();
  imageLightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close lightbox
function closeLightbox() {
  imageLightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Update lightbox image
function updateLightboxImage() {
  if (currentProjectImages.length > 0) {
    lightboxImage.src = currentProjectImages[currentImageIndex];
  }
}

// Navigate to previous image
function prevImage() {
  if (currentProjectImages.length > 0) {
    currentImageIndex =
      (currentImageIndex - 1 + currentProjectImages.length) %
      currentProjectImages.length;
    updateLightboxImage();
  }
}

// Navigate to next image
function nextImage() {
  if (currentProjectImages.length > 0) {
    currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
    updateLightboxImage();
  }
}

// Event Listeners
closeModalBtn.addEventListener("click", closeProjectModal);
closeLightboxBtn.addEventListener("click", closeLightbox);
prevImageBtn.addEventListener("click", prevImage);
nextImageBtn.addEventListener("click", nextImage);

// Close modal when clicking outside content
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    closeProjectModal();
  }
});

// Close lightbox when clicking outside content
imageLightbox.addEventListener("click", (e) => {
  if (e.target === imageLightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (imageLightbox.classList.contains("active")) {
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    }
  } else if (projectModal.classList.contains("active")) {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  }
});

// Initialize project cards with click events
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card, index) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      openProjectModal(`project${index + 1}`);
    });
  });
});
