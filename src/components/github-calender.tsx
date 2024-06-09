import GitHubCalendar from "react-github-calendar";

export default function GitHubCalendarSection() {
  return (
    <div className="my-12 flex flex-col items-center">
      <h2 className="inline-block mb-4">How frequently I code</h2>
      <GitHubCalendar year={"last"} blockSize={9}  username="MasabBinZia" />
    </div>
  );
}