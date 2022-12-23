<script>
	import '../app.postcss';
</script>
<div class="p-4 flex justify-center">
	<div class="p-4 flex flex-col">
		<h1 class="text-8xl yellowtail text-center">Kyler Figgins</h1>
		<slot/>
	</div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
	.yellowtail{
		font-family: 'Yellowtail';
	}
</style>