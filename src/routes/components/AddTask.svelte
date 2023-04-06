<!-- component to add new task using Modal component-->
<script>
    import { db } from '$lib/db';
    import Modal from './Modal.svelte';
    import { error } from '@sveltejs/kit';


	let showModal = false; 
    let modal;

	export let category="";
    export let title="";
    export let description="";
    export let date="";

    // async function to add new task records into db
    // implemented as funcrion as required in description
    async function add_task() {
    try {
        if(category=="" || title==""){
            throw error(422, {
            message: 'Please, Insert Missing Field',
	        code: '422'
        });
        }
        const task = await db.tasks.add({
        category: category,
        title: title,
        description :description ,
        date:date
      });
      // status = `Friend ${title} successfully added. Got id ${id}`;
    } catch (error) {
      status = `Failed to add ${title}: ${error}`;
      alert(error.body.message)
    } finally{
        // close the Modal after submission and reset the used variables
        modal.close();
        category="";
        title="";
        description="";
        date="";
    }
  }

</script>

<html>

<head>
    <!-- <link rel="stylesheet" href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css" /> -->
</head>

<body>
    <script src="../../node_modules/tw-elements/dist/js/index.min.js"></script>
    <div class="flex flex-col items-center h-[10vh] m-4">
        <button class="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden"
            on:click={()=> (showModal = true)}>
            Create Task !
            <div
                class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
            </div>
        </button>
    </div>
    <div>
        <Modal bind:showModal bind:this={modal}>
            <div class="relative py-1 px-16 bg-white shadow-md rounded border border-neutral-950">
                <div class="w-full flex justify-start text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="30"
                        height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path
                            d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                    </svg>
                    <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mt-1 ml-2">
                        Create Task
                    </h1>
                </div>

                <label for="category"
                    class="text-gray-800 text-xs font-bold leading-tight tracking-normal">Category</label>
                <input id="category" bind:value={category}
                    class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Required" />
                <label for="title" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Title</label>
                <input id="title" bind:value={title}
                    class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Required" />
                <label for="description"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal">description</label>
                <input id="description" bind:value={description}
                    class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Optional" />

                <label for="date" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Date</label>
                <div class="relative mb-2 mt-2">
                    <!-- <div>
                        <div class="relative mb-3 xl:w-96" data-te-datepicker-init>
  <input
    type="text"
    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    placeholder="Select a date" />
  <label
    for="floatingInput"
    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
    >Select a date</label
  >
</div> -->

                    <div class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event"
                            width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x="4" y="5" width="16" height="16" rx="2" />
                            <line x1="16" y1="3" x2="16" y2="7" />
                            <line x1="8" y1="3" x2="8" y2="7" />
                            <line x1="4" y1="11" x2="20" y2="11" />
                            <rect x="8" y="15" width="2" height="2" />
                        </svg>
                    </div>
                    <div> </div>

                    <input id="date" bind:value={date}
                        class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder="DD/MM/YYYY" />

                </div>

                <div class="flex items-center justify-start w-full">
                    <button on:click={()=> add_task()}
                        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition
                        duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm
                        mr-1">Submit</button>
                    <button on:click={()=> modal.close()}
                        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition
                        duration-150 ease-in-out hover:bg-red-600 bg-red-700 rounded text-white px-8 py-2
                        text-sm">Cancel</button>

                </div>
            </div>
        </Modal>
    </div>

</body>

</html>