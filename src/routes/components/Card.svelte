<!-- Card Component -->
<script>
    // import db file to access the db instance
    // import Modal Components with will be inegrated into card
    import { db } from '$lib/db';
    import Modal from './Modal.svelte';
	
	function datepicked (e) {
		console.log(e.detail.datepicked)
	}
    let modal;
	let showModal = false; 

	export let category;
    export let title;
    export let description;
    export let date;
    export let id;

    // async functions to delte or update records from db
    // implemented as funcrion as required in description
    async function deleteCard(id) {
        try{
        await db.tasks.delete(id);
        } catch (error) {
      status = `Failed to add ${title}: ${error}`;
      alert(status)
	} }

    async function editCard(id) {
        try{
        await db.tasks.put({id: id, category: category, title: title , description:description , date:date});
        } catch (error) {
      status = `Failed to add ${title}: ${error}`;
      alert(status)
    } finally{
        modal.close();
    }
	} 

</script>

<html>
<head>
    <!-- <link rel="stylesheet" href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css" /> -->
</head>

<body>
    <div class="flex flex-col justify-center items-center h-[50vh] m-2">
        <div
            class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px] undefined">
            <div class="h-full w-full">
                <div class="relative w-full">
                    <img src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                        class="mb-0 h-10 w-full rounded-xl" alt="">
                    <button
                        class="absolute top-1 right-3 flex items-center justify-center rounded-full bg-red-400 p-2 text-brand-500 hover:cursor-pointer"
                        on:click={deleteCard(id)}>
                        <div
                            class="flex h-full w-full items-center justify-center rounded-full text-xl hover: bg-red-400">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" height="1em" width="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                        </div>
                    </button>

                    <button
                        class="absolute top-1 left-3 flex items-center justify-center rounded-full bg-green-400 p-2 text-brand-500 hover:cursor-pointer"
                        on:click={()=> (showModal = true)}>
                        <div
                            class="flex h-full w-full items-center justify-center rounded-full text-xl hover: bg-green-400">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" height="1em" width="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>

                        </div>
                    </button>
                </div>
                <div class="mb-0 flex flex-col items-center justify-between px-1">
                    <div class="mb-1">
                        <p class="mt-0 text-xl font-bold text-gray-600 md:mt-1">{category} </p>
                    </div>

                </div>
                <div class="mb-1 flex items-center justify-between px-1 md:items-start">
                    <div class="mb-1">
                        <p class="mt-1 text-xl font-medium text-gray-600 md:mt-2">{title} </p>
                    </div>

                </div>
                <div class="mb-2 flex items-center justify-between h-[6vh] md:items-start">
                    <div class="mb-2">
                        <p class="mt-1 text-xs font-medium text-gray-600 md:mt-2">{description} </p>
                    </div>

                </div>
                <div class="flex items-center justify-between md:items-center lg:justify-between h-[6vh] ">
                    <div class="flex">
                        <p class="!mb-0 text-sm font-bold text-brand-500">{date} </p>
                    </div>
                    <!-- <button href=""
                        class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place
                        Bid</button> -->
                </div>
            </div>
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
                        Edit Task
                    </h1>
                    </div>
                    
                    <label for="category"
                        class="text-gray-800 text-xs font-bold leading-tight tracking-normal">Category</label>
                    <input id="category" bind:value={category}
                        class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
                    <label for="title"
                        class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Title</label>
                    <input id="title" bind:value={title}
                        class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
                    <label for="description"
                        class="text-gray-800 text-sm font-bold leading-tight tracking-normal">description</label>
                    <input id="description" bind:value={description}
                        class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />

                    <label for="date" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Date</label>
                    <div class="relative mb-2 mt-2">
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
                        <input id="date" bind:value={date}
                            class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                            placeholder="DD/MM/YYYY" />
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <button on:click={editCard(id)}
                            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                        <!-- <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick="modalHandler()">Cancel</button> -->
                    </div>
                    <!-- <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
                            <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button> -->
                </div>
            </Modal>
        </div>
    </div>
</body>

</html>