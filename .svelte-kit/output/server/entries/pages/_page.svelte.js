import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, b as subscribe, f as each } from "../../chunks/index2.js";
import Dexie, { liveQuery } from "dexie";
import "../../chunks/index.js";
const app = "";
const db = new Dexie("myDatabase");
db.version(1).stores({
  tasks: "++id, category, title ,description, date"
  // Primary key and indexed props
});
const Modal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "dialog.svelte-1c12kov.svelte-1c12kov{max-width:600px;border-radius:0.1em;border:none;padding:0}dialog.svelte-1c12kov.svelte-1c12kov::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-1c12kov>div.svelte-1c12kov{padding:1em}dialog[open].svelte-1c12kov.svelte-1c12kov{animation:svelte-1c12kov-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-1c12kov-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-1c12kov.svelte-1c12kov::backdrop{animation:svelte-1c12kov-fade 0.2s ease-out}@keyframes svelte-1c12kov-fade{from{opacity:0}to{opacity:1}}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  const close = () => {
    dialog.close();
  };
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  $$result.css.add(css$1);
  return `


<dialog class="svelte-1c12kov"${add_attribute("this", dialog, 0)}><div class="svelte-1c12kov">${slots.header ? slots.header({}) : ``}
		<hr>
		${slots.default ? slots.default({}) : ``}
		<hr>
		
		</div>
</dialog>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modal;
  let showModal = false;
  let { category } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { date } = $$props;
  let { id } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `


<html><head></head>

<body><div class="flex flex-col justify-center items-center h-[50vh] m-2"><div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px] undefined"><div class="h-full w-full"><div class="relative w-full"><img src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png" class="mb-0 h-10 w-full rounded-xl" alt="">
                    <button class="absolute top-1 right-3 flex items-center justify-center rounded-full bg-red-400 p-2 text-brand-500 hover:cursor-pointer"><div class="flex h-full w-full items-center justify-center rounded-full text-xl hover: bg-red-400"><svg stroke="currentColor" fill="currentColor" stroke-width="0" height="1em" width="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path></svg></div></button>

                    <button class="absolute top-1 left-3 flex items-center justify-center rounded-full bg-green-400 p-2 text-brand-500 hover:cursor-pointer"><div class="flex h-full w-full items-center justify-center rounded-full text-xl hover: bg-green-400"><svg stroke="currentColor" fill="currentColor" stroke-width="0" height="1em" width="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"></path></svg></div></button></div>
                <div class="mb-0 flex flex-col items-center justify-between px-1"><div class="mb-1"><p class="mt-0 text-xl font-bold text-gray-600 md:mt-1">${escape(category)}</p></div></div>
                <div class="mb-1 flex items-center justify-between px-1 md:items-start"><div class="mb-1"><p class="mt-1 text-xl font-medium text-gray-600 md:mt-2">${escape(title)}</p></div></div>
                <div class="mb-2 flex items-center justify-between h-[6vh] md:items-start"><div class="mb-2"><p class="mt-1 text-xs font-medium text-gray-600 md:mt-2">${escape(description)}</p></div></div>
                <div class="flex items-center justify-between md:items-center lg:justify-between h-[6vh] "><div class="flex"><p class="!mb-0 text-sm font-bold text-brand-500">${escape(date)}</p></div>
                    </div></div></div>
        <div>${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal, this: modal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="relative py-1 px-16 bg-white shadow-md rounded border border-neutral-950"><div class="w-full flex justify-start text-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path></svg>
                        <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mt-1 ml-2">Edit Task
                    </h1></div>
                    
                    <label for="category" class="text-gray-800 text-xs font-bold leading-tight tracking-normal">Category</label>
                    <input id="category" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"${add_attribute("value", category, 0)}>
                    <label for="title" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Title</label>
                    <input id="title" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"${add_attribute("value", title, 0)}>
                    <label for="description" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">description</label>
                    <input id="description" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"${add_attribute("value", description, 0)}>

                    <label for="date" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Date</label>
                    <div class="relative mb-2 mt-2"><div class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><rect x="8" y="15" width="2" height="2"></rect></svg></div>
                        <input id="date" class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="DD/MM/YYYY"${add_attribute("value", date, 0)}></div>
                    <div class="flex items-center justify-center w-full"><button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                        </div>
                    </div>`;
        }
      }
    )}</div></div></body></html>`;
  } while (!$$settled);
  return $$rendered;
});
const AddTask = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal = false;
  let modal;
  let { category = "" } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { date = "" } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `


<html><head></head>

<body><script src="../../node_modules/tw-elements/dist/js/index.min.js"><\/script>
    <div class="flex flex-col items-center h-[10vh] m-4"><button class="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">Create Task !
            <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div></button></div>
    <div>${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal, this: modal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="relative py-1 px-16 bg-white shadow-md rounded border border-neutral-950"><div class="w-full flex justify-start text-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path></svg>
                    <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mt-1 ml-2">Create Task
                    </h1></div>

                <label for="category" class="text-gray-800 text-xs font-bold leading-tight tracking-normal">Category</label>
                <input id="category" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Required"${add_attribute("value", category, 0)}>
                <label for="title" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Title</label>
                <input id="title" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Required"${add_attribute("value", title, 0)}>
                <label for="description" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">description</label>
                <input id="description" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Optional"${add_attribute("value", description, 0)}>

                <label for="date" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Date</label>
                <div class="relative mb-2 mt-2">

                    <div class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><rect x="8" y="15" width="2" height="2"></rect></svg></div>
                    <div></div>

                    <input id="date" class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="DD/MM/YYYY"${add_attribute("value", date, 0)}></div>

                <div class="flex items-center justify-start w-full"><button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm mr-1">Submit</button>
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition duration-150 ease-in-out hover:bg-red-600 bg-red-700 rounded text-white px-8 py-2 text-sm">Cancel</button></div></div>`;
        }
      }
    )}</div></body></html>`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#dbeafe}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $allTasks, $$unsubscribe_allTasks;
  let allTasks = liveQuery(() => db.tasks.toArray());
  $$unsubscribe_allTasks = subscribe(allTasks, (value) => $allTasks = value);
  $$result.css.add(css);
  $$unsubscribe_allTasks();
  return `<html><head><script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet"></head>

<body><div>${validate_component(AddTask, "AddTask").$$render($$result, {}, {}, {})}
        <div><div class="bg-blue-100 bg-clip-border w-full m-5"><div class="grid grid-flow text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">${$allTasks ? `${each($allTasks, (task) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        category: task.category,
        title: task.title,
        date: task.date,
        id: task.id,
        description: task.description
      },
      {},
      {}
    )}`;
  })}` : ``}</div></div></div></div>
    
    <script src="../../node_modules/tw-elements/dist/js/index.min.js"><\/script></body></html>`;
});
export {
  Page as default
};
