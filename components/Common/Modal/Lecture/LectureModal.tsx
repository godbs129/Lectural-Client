import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLecture } from '../../../../hooks/Lecture/useLecture';
import { LectureData } from '../../../../types/Lecture';
import { User } from '../../../../types/User';
import Modal from '../Modal';
import * as S from './LectureModal.style';

const LectureModal = ({
  lecture,
  user,
}: {
  lecture: LectureData;
  user: User;
}): JSX.Element => {
  const { deleteLecture } = useLecture();

  const router = useRouter();

  const onClickDelete = async () => {
    const response = await deleteLecture(lecture.idx);

    if (response === 200) {
      router.reload();
    }
  };

  return (
    <>
      <Modal width="894px" height="722px">
        <S.LectureModalWrap>
          <S.LectureModalHeaderTitleWrap>
            <S.LectureModalTitle>{lecture.title}</S.LectureModalTitle>
            by {lecture.user.name}
          </S.LectureModalHeaderTitleWrap>

          <S.LectureModalMiddleWrap>
            <S.LectureModalPlace>
              {lecture.place !== null ? (
                <>{lecture.place.name}</>
              ) : (
                <S.LecutrePlaceText>장소 선택 전</S.LecutrePlaceText>
              )}
            </S.LectureModalPlace>
            <S.LectureModalTime>
              {dayjs(lecture.startDate).format('MM월 DD일 HH:mm')} ~{' '}
              {dayjs(lecture.endDate).format('MM월 DD일 HH:mm')}
            </S.LectureModalTime>
          </S.LectureModalMiddleWrap>

          <S.LectureMaterial>준비물: {lecture.material}</S.LectureMaterial>

          <S.LectureBottomWrap>
            <S.LectureTagWrap>
              {lecture.tags.map((tag) => {
                return <S.LectureTag key={tag.idx}>#{tag.name}</S.LectureTag>;
              })}
            </S.LectureTagWrap>

            {lecture.user.uniqueId === user.uniqueId && (
              <S.LectureEditWrap>
                <S.LectureEditBtn>편집</S.LectureEditBtn>
                <S.LectureEditBtn onClick={onClickDelete}>
                  삭제
                </S.LectureEditBtn>
              </S.LectureEditWrap>
            )}
          </S.LectureBottomWrap>

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
