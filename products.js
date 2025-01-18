const products = [
  {
    id: 1,
    title: "WHMCS - Loyalty Points System",
    image:
      "https://builtbybit.com/attachments/screenshot-2024-12-05-at-23-07-02-loyalty-points-dashboard-virtue-host-png.853095/",
    description:
      "Reward customers with points for actions including invoice payments, affiliate signups, and more",
    price: 15.0,
    version: "v1.7",
    category: "WHMCS Addon",
    tags: ["WHMCS", "Loyalty"],
    availableOn: ["BuiltByBit", "SourceXChange"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/whmcs-loyalty-points-system.55592/",
      SourceXChange:
        "https://www.sourcexchange.net/products/whmcs-loyalty-points-system",
    },
  },
  {
    id: 2,
    title: "Inferno Host - Hosting Company Template",
    image:
      "https://builtbybit.com/attachments/screenshot-2024-11-27-at-01-41-57-home-infernohost-png.848371/",
    description:
      "A Front-End Website for Game Hosting Companies, Built with React and Tailwind CSS",
    price: 25.0,
    version: "v1.1",
    category: "Standalone Websites",
    tags: ["React", "TailwindCSS", "Hosting"],
    availableOn: ["BuiltByBit", "SourceXChange"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/inferno-host-hosting-company-template.55366/",
      SourceXChange:
        "https://www.sourcexchange.net/products/inferno-host-hosting-company-template",
    },
  },
  {
    id: 3,
    title: "GameCloud - Hosting Company Template",
    image:
      "https://builtbybit.com/attachments/screenshot-2024-11-20-at-19-59-43-minecraft-hosting-gamecloud-png.845137/",
    description:
      "A Game Hosting Company Front End Website Made in React & Tailwindcss",
    price: 25.0,
    version: "v1.0",
    category: "Standalone Websites",
    tags: ["React", "TailwindCSS", "Hosting"],
    availableOn: ["BuiltByBit", "SourceXChange"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/gamecloud-hosting-company-template.54896/",
      SourceXChange:
        "https://www.sourcexchange.net/products/gamecloud-hosting-company-template",
    },
  },
  {
    id: 4,
    title: "GameHost - Hosting Company Template",
    image:
      "https://builtbybit.com/attachments/screenshot-2024-11-11-at-10-00-51-vite-react-png.841570/",
    description:
      "A Game Hosting Company Front End Website Made in React & Tailwindcss",
    price: 25.0,
    version: "v1.1",
    category: "Standalone Websites",
    tags: ["React", "TailwindCSS", "Hosting"],
    availableOn: ["BuiltByBit", "SourceXChange"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/gamehost-hosting-company-template.54480/",
      SourceXChange:
        "https://www.sourcexchange.net/products/gamehost-hosting-template",
    },
  },
  {
    id: 5,
    title: "Site Portal - Server Template",
    image:
      "https://builtbybit.com/attachments/screenshot-2024-11-07-at-03-04-48-vite-react-png.839324/",
    description:
      "A simple single-page Minecraft community website serving as a portal",
    price: 10.0,
    version: "v1.0",
    category: "Standalone Websites",
    tags: ["Minecraft", "Portal"],
    availableOn: ["BuiltByBit"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/site-portal-server-template.54257/",
    },
  },
  {
    id: 6,
    title: "VoltForge - Hosting Company Template",
    image:
      "https://builtbybit.com/attachments/screenshot-2024-11-05-at-16-26-47-home-voltforge-png.838804/",
    description:
      "A Front-End Website for Game Hosting Companies, Built with React and Tailwind CSS",
    price: 25.0,
    version: "v1.1",
    category: "Standalone Websites",
    tags: ["React", "TailwindCSS", "Hosting"],
    availableOn: ["BuiltByBit", "SourceXChange"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/voltforge-hosting-company-template.54167/",
      SourceXChange:
        "https://www.sourcexchange.net/products/voltforge-hosting-template",
    },
  },
  {
    id: 7,
    title: "GameBoyz - Hosting Company Template",
    image:
      "https://builtbybit.com/attachments/screenshot-2024-11-01-at-06-24-09-home-gameboyz-png.837080/",
    description:
      "A Front-End Website for Game Hosting Companies, Built with React and Tailwind CSS",
    price: 25.0,
    version: "v1.1",
    category: "Standalone Websites",
    tags: ["React", "TailwindCSS", "Hosting"],
    availableOn: ["BuiltByBit", "SourceXChange"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/gameboyz-hosting-company-template.53986/",
      SourceXChange:
        "https://www.sourcexchange.net/products/gameboyz-hosting-template",
    },
  },
  {
    id: 8,
    title: "GameHub - Hosting Company Template",
    image: "https://builtbybit.com/attachments/homepage-png.834124",
    description:
      "A Front-End Website for Game Hosting Companies, Built with React and Tailwind CSS",
    price: 25.0,
    version: "v1.2",
    category: "Standalone Websites",
    tags: ["React", "TailwindCSS", "Hosting"],
    availableOn: ["BuiltByBit", "SourceXChange"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/gamehub-hosting-company-template.53667/",
      SourceXChange:
        "https://www.sourcexchange.net/products/gamehub-hosting-template",
    },
  },
  {
    id: 9,
    title: "ExampleCraft - Server Template",
    image:
      "https://builtbybit.com/attachments/screenshot-2024-10-23-at-11-44-28-examplecraft-png.833185/",
    description:
      "A single-page Minecraft community website serving as a front page",
    price: 5.0,
    originalPrice: 5.0,
    version: "v1.3",
    category: "Standalone Websites",
    tags: ["Minecraft", "Website"],
    availableOn: ["BuiltByBit"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/examplecraft-server-template.53567/",
    },
  },
  {
    id: 10,
    title: "WHMCS x Discord - Assistant Bot",
    image: "https://builtbybit.com/attachments/section-1-1-png.829429",
    description:
      "A Discord.js bot that allows you to use your WHMCS API directly in Discord securely",
    price: 15.0,
    version: "v1.3",
    category: "Discord Bots",
    tags: ["WHMCS", "Discord.js", "Bot"],
    availableOn: ["BuiltByBit", "SourceXChange"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/whmcs-x-discord-assistant-bot.53098/",
      SourceXChange:
        "https://www.sourcexchange.net/products/whmcs-x-discord-assistant-bot",
    },
  },
  {
    id: 11,
    title: "Universal WHMCS Child Theme",
    image:
      "https://builtbybit.com/attachments/screenshot-2024-12-23-at-17-30-17-client-area-virtue-host-png.862322/?variant=display",
    description: "A Child Theme for the WHMCS Twenty-One System Template",
    price: 10.0,
    version: "v1.4",
    category: "WHMCS Addon",
    tags: ["WHMCS", "Theme"],
    availableOn: ["BuiltByBit", "SourceXChange"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/universal-whmcs-child-theme.56882/",
      SourceXChange:
        "https://www.sourcexchange.net/products/universal-whmcs-child-theme",
    },
  },
  {
    id: 12,
    title: "WHMCS To Discord Client Verification",
    image: "https://builtbybit.com/attachments/image-png.864586/",
    description: "Simple Discord Role Assignment for WHMCS Clients",
    price: 0,
    version: "v1.3",
    category: "WHMCS Addon",
    tags: ["WHMCS", "Discord"],
    availableOn: ["BuiltByBit", "SourceXChange"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/whmcs-to-discord-client-verification.57157/",
      SourceXChange:
        "https://www.sourcexchange.net/products/whmcs-to-discord-client-verification",
    },
  },
  {
    id: 13,
    title: "GameZone - Hosting Company Template",
    image: "https://builtbybit.com/attachments/cover-png.870317/",
    description:
      "A Front-End Website for Game Hosting Companies, Built with React and Tailwind CSS",
    price: 25,
    version: "v1.0",
    category: "Standalone Websites",
    tags: ["React", "TailwindCSS", "Hosting"],
    availableOn: ["BuiltByBit"],
    href: {
      BuiltByBit:
        "https://builtbybit.com/resources/gamezone-hosting-company-template.57822/",
    },
  },
];

const formatPrice = (price) => {
  if (price === 0) {
    return "Free";
  }
  return `$${price.toFixed(2)} USD`;
};

const storeIcons = {
  BuiltByBit: "https://avatars.githubusercontent.com/u/86993355?s=200&v=4",
  SourceXChange: "https://avatars.githubusercontent.com/u/109313076?s=200&v=4",
};

function renderProducts() {
  const productsContainer = document.querySelector(".products-grid");
  if (!productsContainer) {
    console.error("Products container not found!");
    return;
  }

  console.log("Rendering", products.length, "products");

  productsContainer.innerHTML = products
    .map(
      (product) => `
<article class="bg-bg-secondary rounded-md overflow-hidden transition-all duration-300 border border-zinc-800 hover:border-accent flex flex-col">
<div class="relative aspect-video overflow-hidden">
<a href="${product.href.BuiltByBit}" class="block w-full h-full">
  <img
      src="${product.image}"
      alt="${product.title} preview"
      class="w-full h-full object-cover"
      loading="lazy"
  >
</a>
${product.availableOn.includes("SourceXChange")
          ? `
  <a href="${product.href.SourceXChange}" class="block w-full h-full">
      <img
          src="${product.image}"
          alt="${product.title} preview"
          class="w-full h-full object-cover"
          loading="lazy"
      >
  </a>
`
          : ""
        }
<span class="absolute top-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm">
  ${product.version}
</span>
</div>

    
    <div class="flex flex-col flex-1 p-6 gap-4">
        <div>
            <span class="text-sm text-gray-400 mb-1 block">${product.category
        }</span>
            <h3 class="text-xl font-semibold leading-tight">
                <a href="${product.href.BuiltByBit
        }" class="hover:text-gray-300 transition-colors">
                    ${product.title}
                </a>
            </h3>
        </div>
        
        <p class="text-gray-400 text-sm leading-relaxed">
            ${product.description}
        </p>
        
        <div class="flex flex-wrap gap-2">
            ${product.tags
          .map(
            (tag) => `
                <span class="px-3 py-1 bg-accent rounded text-xs text-gray-300">
                    ${tag}
                </span>
            `
          )
          .join("")}
        </div>
        
        <div class="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800">
            <div class="text-xl font-semibold">${formatPrice(
            product.price
          )}</div>
            <div class="flex gap-2">
<a 
  href="${product.href.BuiltByBit}" 
  class="p-2 bg-accent rounded hover:bg-accent-hover transition-colors"
  title="View on BuiltByBit"
>
  <img 
      src="${storeIcons.BuiltByBit}" 
      alt="Buy on BuiltByBit" 
      class="w-8 h-8 rounded"
  >
</a>
${product.availableOn.includes("SourceXChange")
          ? `
  <a 
      href="${product.href.SourceXChange}" 
      class="p-2 bg-accent rounded hover:bg-accent-hover transition-colors"
      title="View on SourceXChange"
  >
      <img 
          src="${storeIcons.SourceXChange}" 
          alt="Buy on SourceXChange" 
          class="w-8 h-8 rounded"
      >
  </a>
`
          : ""
        }
</div>
        </div>
    </div>
</article>
`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");
  try {
    renderProducts();
  } catch (e) {
    console.error("Error rendering products:", e);
  }
});
