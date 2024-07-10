import GitHubCalendar from 'react-github-calendar';

export default function GitHubCalendarSection() {
  return (
    <section className="my-12 flex flex-col items-center">
      <h2 className="mb-4 inline-block">How frequently I code</h2>
      <div className="dark:bg-primary-bg bg-secondary-bg hidden rounded-lg border border-zinc-200 p-8 dark:border-zinc-800 lg:block">
        <GitHubCalendar username={'MasabBinZia'} blockSize={9} year={'last'} />
      </div>
      <div className="dark:bg-primary-bg bg-secondary-bg block w-full max-w-4xl rounded-lg border border-zinc-200 p-8 dark:border-zinc-800 lg:hidden">
        <GitHubCalendar username={'MasabBinZia'} blockSize={9} year={'last'} />
      </div>
    </section>
  );
}
