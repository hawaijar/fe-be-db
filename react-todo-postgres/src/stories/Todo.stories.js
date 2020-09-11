import React from "react";
import Todo from "../components/todo/todo";

export default {
  component: Todo,
  title: "Todo",
};

const Template = (args) => <Todo {...args} />;
export const Default = Template.bind({});
Default.args = {
  name: "Hello",
};
export const Todo1 = Template.bind({});
Todo1.args = {
    name: "Eat breakfast",
};
export const Todo2 = Template.bind({});
Todo2.args = {
    name: "Go to Gym",
};
