import { Clock } from 'lucide-react';
import { Suspense } from 'react';

export function CodingHours() {
  return (
    <div className="flex w-full flex-col gap-1 rounded-xl border p-4">
      <div className="flex items-center gap-2">
        <Clock className="h-6 w-6" />
        <h2 className="text-sm font-light">Coding hours</h2>
      </div>
      <p className="font-title flex grow items-center justify-center text-4xl font-semibold">
        <Suspense fallback="-- hrs">
          <CodingHoursValue />
        </Suspense>
      </p>
    </div>
  );
}

async function getData() {
  if (!process.env.WAKATIME_API_KEY) {
    console.error('WAKATIME_API_KEY is not set');
    return null;
  }

  try {
    const res = await fetch(
      'https://wakatime.com/api/v1/users/masabmbz/all_time_since_today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.WAKATIME_API_KEY,
          ).toString('base64')}`,
        },
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      return null;
    }

    const data = await res.json();
    return {
      seconds: data.data.total_seconds as number,
    };
  } catch (error) {
    console.error('Error fetching WakaTime data:', error);
    return null;
  }
}

async function CodingHoursValue() {
  const data = await getData();
  if (data === null) {
    return '-- hrs';
  }
  return `${Math.round(data.seconds / 60 / 60)} hrs`;
}

export default CodingHours;
