import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      
      <Title>Paired Comparison Program</Title>
      <h1>Thomas is amazing and can build websites now! Yeet.</h1>
      <!--Form Code--> 
<form action=”mailto:contact@yourdomain.com”


method=”POST”


enctype=”text/plain”


name=”EmailForm”>


<label for="name">Name:</label><br>
<input type="text" id="name" name="name"><br>


<label for="ContactCommentt">Message:</label><br>
<textarea id=”ContactCommentt” rows=”6″ cols=”20″>

<input type="submit" value="Send">
</form>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://github.com/toazthom/solid-quickstart/blob/main/mmmm%2C%20pupy!!!.jpg">
          start.solidjs.com
        </a>{" "}
        to learn how Thomas defeated the Mongoals!.
      </p>
    </main>
  );
}
