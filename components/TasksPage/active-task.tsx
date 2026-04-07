interface ActiveTaskProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ActiveTask({ className }: ActiveTaskProps) {
  return (
    <section className={`${className}`}>
      <h1>Active Task</h1>
      <div className="bg-violet-700 p-8 rounded-xl flex flex-col">
        <p className="pb-8 flex">Description of Active Task</p>
        <button className="justify-end flex">Mark as Completed</button>
      </div>
    </section>
  );
}
