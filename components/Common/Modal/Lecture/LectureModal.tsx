import dayjs from 'dayjs';
import Image from 'next/image';
import { LectureData } from '../../../../types/Lecture';
import { User } from '../../../../types/User';
import Modal from '../Modal';
import * as S from './LectureModal.style';

const LectureModal = (lecture: LectureData, user: User): JSX.Element => {
  return (
    <>
      <Modal width="894px" height="722px">
        <S.LectureModalWrap>
          <S.LectureModalHeaderTitleWrap>
            <S.LectureModalTitle>{lecture.title}</S.LectureModalTitle>
            by {lecture.user.name}
          </S.LectureModalHeaderTitleWrap>

          <S.LectureModalMiddleWrap>
            <S.LectureModalPlace>{lecture.place.name}</S.LectureModalPlace>
            <S.LectureModalTime>
              {dayjs(lecture.startDate).format('MM월 DD일 HH:mm')} ~{' '}
              {dayjs(lecture.endDate).format('MM월 DD일 HH:mm')}
            </S.LectureModalTime>
          </S.LectureModalMiddleWrap>

          <S.LectureMaterial>준비물: {lecture.material}</S.LectureMaterial>

          <S.LectureTagWrap>
            {lecture.tags.map((tag) => {
              return <S.LectureTag>#{tag}</S.LectureTag>;
            })}
          </S.LectureTagWrap>

          <S.LecturePicture>
            <Image
              loader={() => lecture.picture}
              blurDataURL={lecture.picture}
              unoptimized={true}
              src={lecture.picture}
              width={600}
              height={350}
              alt="image"
              objectFit="cover"
            />
          </S.LecturePicture>

          <S.LectureContentWrap>
            <S.LectureContent>{lecture.content}</S.LectureContent>
          </S.LectureContentWrap>
        </S.LectureModalWrap>
      </Modal>
    </>
  );
};

export default LectureModal;
