import type { RepositoryCardProps } from 'components/RepositoryCard/RepositoryCard.type.ts';
import StarIcon from 'assets/star.svg?react';
import EyeIcon from 'assets/eye.svg?react';
import styles from './RepositoryCard.module.scss';
import Skeleton from 'react-loading-skeleton';

export function RepositoryCard({
  repositoryData,
  isLoading,
}: RepositoryCardProps) {
  return (
    <div className={styles.content}>
      <div className={styles.row}>
        {isLoading ?? (
          <img
            src={repositoryData?.owner.avatarUrl}
            alt=""
            loading="lazy"
            className={styles.owner_image}
          />
        )}
        <div className={styles.full_name}>
          {isLoading ? (
            <Skeleton containerClassName={styles.skeleton} width={'20vw'} />
          ) : (
            <a href={repositoryData?.url} target="_blank">
              {repositoryData?.fullName}
            </a>
          )}
        </div>

        <div className={styles.content_with_icon}>
          <EyeIcon style={{ height: 20, width: 20 }} />
          {isLoading ? (
            <Skeleton containerClassName={styles.skeleton} width={'5vw'} />
          ) : (
            repositoryData.watchersCount
          )}
        </div>
      </div>

      <div className={styles.row}>
        <div style={{ marginRight: repositoryData?.language ? '10px' : 0 }}>
          {isLoading ? (
            <Skeleton containerClassName={styles.skeleton} width={'5vw'} />
          ) : (
            repositoryData?.language
          )}
        </div>
        <div className={styles.content_with_icon}>
          <StarIcon style={{ height: 20, width: 20 }} />
          {isLoading ? (
            <Skeleton containerClassName={styles.skeleton} width={'5vw'} />
          ) : (
            repositoryData?.stargazersCount
          )}
        </div>
      </div>
    </div>
  );
}
