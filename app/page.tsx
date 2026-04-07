import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import ActiveTask from "@/components/TasksPage/active-task";
import TaskList from "@/components/TasksPage/task-list";
import PrioritiesList from "@/components/TasksPage/priorities-list";

async function ToDoListData() {
  const supabase = await createClient();
  const { data: tasks } = await supabase.from("Daily_Tasks").select();
  return <pre>{JSON.stringify(tasks, null, 2)}</pre>;
}

export default function Home() {
  return (
    <main className="border border-violet-200 p-8">
      <ThemeSwitcher></ThemeSwitcher>
      <ActiveTask className="border border-violet-300 p-8 flex flex-col"></ActiveTask>
      <div className="border border-violet-600 p-8 grid grid-cols-3 gap-32">
        <TaskList className="border border-violet-300 p-8 flex flex-col col-span-2"></TaskList>
        <PrioritiesList className="border border-violet-300 p-8 flex flex-col col-span-1"></PrioritiesList>
      </div>
      <Suspense fallback={<div>Loading Tasks...</div>}>
        <ToDoListData />
      </Suspense>
    </main>
  );
}
