export default function BookingButton({ lang }: { lang: 'en' | 'ja' }) {
  const url = lang === 'ja'
    ? import.meta.env.PUBLIC_BOOKING_URL_JA
    : import.meta.env.PUBLIC_BOOKING_URL_EN;

  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-white dark:bg-white dark:text-black hover:opacity-90"
    >
      {lang === 'ja' ? '予約する（Google カレンダー）' : 'Book on Google Calendar'}
    </a>
  );
}
