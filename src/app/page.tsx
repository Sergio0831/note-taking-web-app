import Logo from '@/icons/logo.svg';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
  return (
    <div className="wrapper">
      <Logo />
      <ThemeSwitch />
    </div>
  );
}
