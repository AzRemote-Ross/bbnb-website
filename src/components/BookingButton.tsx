export default function BookingButton({ lang }: { lang: 'en' | 'ja' }) {
  const url = lang === 'ja'
    ? import.meta.env.PUBLIC_BOOKING_URL_JA
    : import.meta.env.PUBLIC_BOOKING_URL_EN;

  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="btn-primary inline-flex items-center gap-2 text-base"
    >
      <span>📅</span>
      {lang === 'ja' ? '予約する（Google カレンダー）' : 'Book Appointment'}
    </a>
  );
}
