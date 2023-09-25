<script lang="ts">
    import { superForm } from 'sveltekit-superforms/client'
    import PageData from "./$types"
    export let data:
</script>

<div class="flex justify-center items-center flex-col">
    <div class="space-y-2 mb-4">
        Sign Up
    </div>
    <form method="POST" class="flex flex-col space-y-6">
        <label class="space-y-2 flex justify-between" for="user_email">
            <input type="text" name="user_email"/>
        </label>
        <label class="space-y-2 flex justify-between items-center" for="user_password">
            <input type="text" name="user_password"/>
        </label>
        <label class="space-y-2 flex justify-between" for="user_confirm_password">
            <input type="text" name="user_confirm_password"/>
        </label>
    </form>
</div>