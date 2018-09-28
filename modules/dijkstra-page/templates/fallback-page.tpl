<html>
	<head>
		<title>ITI0205 Student HW Root Page Fallback</title>
	</head>

	<body style="font-family: sans-serif">
		<div>
			<h1>Veebirakendused (ITI0205)</h1>
			<ul style="list-style-type: circle;">
			{{#each practiceData}}
				<li style="font-weight: bold; text-transform: uppercase;" >
					<a href="{{ href }}">
						{{ textContent }}
					</a>
				</li>
			{{/each}}
			</ul>
		</div>
	</body>
</html>
