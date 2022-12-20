
import { Title } from "solid-start";
import Counter from "~/components/Counter";


export function MyComponent() {
  const [_, { Form }] = createRouteAction(async (formData: FormData) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    const username = formData.get("username");
    if (username === "admin") {
      return redirect("/admin");
    } else {
      throw new Error("Invalid username");
    }
    return redirect("/home");
  });
 
  return (
    <Form>
      <label for="username">Username:</label>
      <input type="text" name="username" />
      <input type="submit" value="submit" />
    </Form>
  );
}


export default function Home() {
  return (
    <main>
      
      <Title>Paired Comparison Program</Title>
      <h1>Insert essays and their ID numbers here.</h1>
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
