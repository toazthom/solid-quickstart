
import { Title } from "solid-start";
import Counter from "~/components/Counter";




export default function Home() {
  return (
    <main>
      
      <Title>Paired Comparison Program</Title>
      <h1>Insert essays and their ID numbers here.</h1>

      
      
      table, th, td {
        border:1px solid black;
      }
      </style>
      <body>

      <h2>A basic HTML table</h2>

      <table style="width:100%">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>

      <p>To understand the example better, we have added borders to the table.</p>

      </body>
      </html>

      
    
    
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