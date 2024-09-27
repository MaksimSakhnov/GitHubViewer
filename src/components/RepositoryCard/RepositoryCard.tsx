import type { RepositoryCardProps } from 'components/RepositoryCard/RepositoryCard.type.ts';
import StarIcon from 'assets/star.svg?react';
import EyeIcon from 'assets/eye.svg?react';
import styles from './RepositoryCard.module.scss';

export function RepositoryCard({ repositoryData }: RepositoryCardProps) {
  return (
    <div className={styles.content}>
      <div className={styles.first_row}>
        <img
          src={repositoryData.owner.avatarUrl}
          alt=""
          loading="lazy"
          className={styles.owner_image}
        />
        <div className={styles.full_name}>
          <a href={repositoryData.url}>{repositoryData.fullName}</a>
        </div>
        <div className={styles.content_with_icon}>
          <EyeIcon style={{ height: 20, width: 20 }} />
          {repositoryData.watchersCount}
        </div>
      </div>

      <div className={styles.second_row}>
        <div style={{ marginRight: repositoryData.language ? '10px' : 0 }}>
          {repositoryData.language}
        </div>
        <div className={styles.content_with_icon}>
          <StarIcon style={{ height: 20, width: 20 }} />
          {repositoryData.stargazersCount}
        </div>
      </div>
    </div>
  );
}
