import React, { useState } from "react";
import { N1ED } from "@edsdk/n1ed-react";

const App = () => {
  const [value, setValue] = useState("");
  function handleEditorChange(content, editor) {
    setValue(content);
    console.log("Content was updated:", content);
  }
// Lets take an example that values are coming from formik library for forms and validation is handled by Yup thats where we have to plug in initial value with formik values prop and issue happens there
  return (
    <N1ED
      apiKey="REACDFLT"
      initialValue={value}
      onEditorChange={handleEditorChange}
      init={{
        height: 500,
        toolbar:
          "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | myCustomToolbarButton",
        setup: (editor) => {
          console.log("TinyMCE initialized");
          editor.ui.registry.addButton("myCustomToolbarButton", {
            text: "My Custom Button",
            onAction: () => alert("Custom button clicked!"),
          });
        },
      }}
    />
  );
};

export default App;
