import useLoading from '@/hooks/loading';
import styles from './heading.module.scss';

interface HeadingProps {
  text: string;
}

export const Heading = ({ text }: HeadingProps): JSX.Element => {
  const { loading } = useLoading();
  return (
    <div className={styles.heading}>
      <h1>
        _{text}
        {loading && <span className={'blink'}>.</span>}
      </h1>
    </div>
  );
};
