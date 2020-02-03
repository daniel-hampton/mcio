# Contact

::: tip
This form doesn't really work.
:::

Please enter your information below:

<form @:submit.prevent="">
    <div v-for="n in 5">
        <label :for="`item-${n}`">{{n}}</label>
        <input type="text" :id="`item-${n}`" placeholder="Text goes here" />
    </div>
    <button>Submit</button>
</form>