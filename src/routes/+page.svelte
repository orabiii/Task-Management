<script>
  import "../app.css";
  import { browser } from '$app/environment';
  import { db } from '$lib/db';
  import { liveQuery } from 'dexie';
  import Card from './components/Card.svelte';
  import AddTask from './components/AddTask.svelte';
  // make a query to indexedDb to get all tasks from the table
  let allTasks = liveQuery(
    () => db.tasks.toArray()
  );

  let category = "";
  let title = "";
  let description="";
  let date = '';
  
</script>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.white);
  }

</style>

<html>

<head>
    <!-- <script src="https://cdn.tailwindcss.com"></script> -->
    <!-- <link rel="stylesheet" href="https://unpkg.com/flowbite@latest/dist/flowbite.min.css" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" /> -->
</head>

<body>

    <div>

        <AddTask />
        <div>
            <div class="bg-white bg-clip-border w-full m-5">
                <div
                    class="grid grid-flow text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                    {#if $allTasks}
                    {#each $allTasks as task (task.id)}
                    <Card category={task.category} title={task.title} date={task.date} id={task.id}
                        description={task.description} />
                    {/each}
                    {/if}
                </div>
            </div>
        </div>

    </div>
    <!-- <script src="../../node_modules/flowbite-datepicker/dist/js/datepicker.js"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/datepicker.min.js"></script> -->
</body>

</html>