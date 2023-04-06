<script>
  import "../app.css";
  import { browser } from '$app/environment';
  import { db } from '$lib/db';
  import { liveQuery } from 'dexie';
  import Card from './components/Card.svelte';
  import AddTask from './components/AddTask.svelte';
  // import * as te from 'tw-elements';

  // import datepicker  from 'flowbite/dist/datepicker.js';
//   const datepickerEl = document.getElementById('datepickerId');
// new Datepicker(datepickerEl, {
//     // options
// });
      let allTasks = liveQuery(
    () => db.tasks.toArray()
  );

  let category = "";
  let title = "";
  let date = '5/4/2023';
</script>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.blue.100);
  }

</style>
<!-- component -->
<html>

<head>
    <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" />
</head>
<!-- "src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/datepicker.min.js" -->
<!-- src="../../../../node_modules/flowbite/dist/datepicker.js" -->
<body >
  
    <div>
        <AddTask />
        <!-- <div class="w-full h-screen bg-gray-200 flex justify-center items-center">
  <div class="bg-gray-400 w-96 h-96 relative z-10">
    <p class="italic text-bold bd-red-100 font-serif">Map</p>
    <div class="absolute inset-0 flex justify-center items-center z-5">
      <p class="text-2xl font-bold">This should be on top of the map</p>
    </div>
  </div>
</div> -->
        <div>
            <div class="bg-blue-100 bg-clip-border w-full m-5">
                <div class="grid grid-flow text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                    {#if $allTasks}
                    {#each $allTasks as task (task.id)}
                    <Card category={task.category} title={task.title} date={task.date} id={task.id} description={task.description}/>
                    {/each}
                    {/if}
                </div>
            </div>
        </div>

    </div>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script> -->
<script src="../../node_modules/tw-elements/dist/js/index.min.js"></script>

</body>

</html>
