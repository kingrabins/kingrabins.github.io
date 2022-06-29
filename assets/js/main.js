import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
  ".html",
  "The modern interface design tool. Figma is a free, online UI tool to create, collaborate, prototype, and handoff."
);
hoverChangeDescription(
  ".css",
  "Adobe XD is a vector-based UI and UX design tool and it can be used to design anything from smartwatch apps to fully fledged websites."
);
hoverChangeDescription(
  ".js",
  "Adobe Illustrator is a professional vector-based design and drawing program used to create posters, symbols, logos, patterns, icons, etc."
);
hoverChangeDescription(
  ".sass",
  "Adobe After Effects is an application for creating motion graphics and special effects. These effects can be created in videos, online digital content and presentations."
);
hoverChangeDescription(
  ".react",
  "Photoshop is an image creation, graphic design and photo editing software for pixel-based images, raster graphics and vector graphics."
);
hoverChangeDescription(
  ".next",
  "Asana is a web and mobile work management platform designed to help teams organize, track, and manage the teamwork. "
);
hoverChangeDescription(
  ".styled",
  "React JS is a JavaScript library used in web development to build interactive elements (user interfaces based on UI components) on websites."
);
hoverChangeDescription(
  ".tailwind",
  "Flutter is an open-source UI software development kit used to develop cross platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase. "
);
