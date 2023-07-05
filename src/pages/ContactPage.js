import { Form, useActionData } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="p-8">
      <Form method="post" action="/contact">
        <label htmlFor="fullname">Name</label>
        <input
          type="text"
          type="text"
          id="fullname"
          name="fullname"
          className="border-4 border-black p-2 rounded"
        />
        <button className="bg-blue-500 rounded px-4 py-2">Submit</button>
      </Form>
    </div>
  );
};
export default ContactPage;
