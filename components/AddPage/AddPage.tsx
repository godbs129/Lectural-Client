import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './AddPage.style';
import imageCompression from 'browser-image-compression';
import { useUpload } from '../../hooks/upload/useUpload';
import toast from 'react-hot-toast';
import { useLecture } from '../../hooks/Lecture/useLecture';
import { useRouter } from 'next/router';

const places = [
  { idx: 1, name: '1-1' },
  { idx: 2, name: '1-2' },
  { idx: 3, name: '1-3' },
  { idx: 124, name: '1-4' },
  { idx: 4, name: '2-1' },
  { idx: 5, name: '2-2' },
  { idx: 6, name: '2-3' },
  { idx: 7, name: '3-1' },
  { idx: 8, name: '3-2' },
  { idx: 9, name: '3-3' },
  { idx: 31, name: '프로그래밍1' },
  { idx: 32, name: '프로그래밍2' },
  { idx: 33, name: '프로그래밍3' },
  { idx: 41, name: '국어전용실' },
  { idx: 42, name: '수학전용실' },
  { idx: 43, name: '사회/역사전용실' },
  { idx: 51, name: '도서관' },
  { idx: 52, name: '오케스트라실' },
  { idx: 54, name: '모바일프로그래밍실' },
  { idx: 55, name: '윈도우프로그래밍실' },
  { idx: 56, name: '체육관' },
  { idx: 57, name: '웹프로그래밍실습실' },
  { idx: 58, name: '시청각실' },
  { idx: 59, name: '모바일로보틱스실습실' },
  { idx: 60, name: '모둠학습실' },
  { idx: 110, name: '운동장' },
  { idx: 115, name: 'DB네트워크실습실' },
  { idx: 119, name: '미술실' },
];

const AddPage = (): JSX.Element => {
  const [lecture, setLecture] = useState({
    title: '',
    content: '',
    material: '',
    startDate: '',
    endDate: '',
    tags: [''],
    picture: '',
  });
  const [place, setPlace] = useState<number>(0);
  const fileRef = useRef<any>(null);

  const { upload } = useUpload();
  const { addLecture } = useLecture();

  const router = useRouter();

  const optimizeImage = useCallback(async (file: File) => {
    try {
      return await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 500,
        useWebWorker: true,
      });
    } catch (e: any) {
      console.error(e);
    }
  }, []);

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setLecture({
      ...lecture,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(lecture);
  }, [lecture]);

  const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const isImage: boolean = e.target.files[0].type.startsWith('image');

      const optimizedFIle = await optimizeImage(e.target.files[0]);
      const formData = new FormData();
      formData.append('files', isImage ? optimizedFIle! : e.target.files[0]);
      const res = await upload(formData);

      if (res.data.status === 200) {
        setLecture({
          ...lecture,
          picture: res.data.data[0],
        });
        toast.success('사진이 업로드 됐어요!', {
          position: 'top-right',
        });
      }
    }
  };

  const onChangeTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (lecture.tags.length <= 3) {
      let tags: string[] = e.target.value.split(',');

      setLecture({
        ...lecture,
        tags: tags,
      });
    }
  };

  const onClickSubmit = async () => {
    const result = await addLecture(lecture, place);
    if (result.status === 200) {
      router.push('/');
    }
  };

  return (
    <>
      <S.AddPageWrap>
        <S.AddPage>
          <S.AddPageTitle>특강 등록하기</S.AddPageTitle>
          <S.AddPageSummary>
            특강 장소는 지금 선택하지 않아도 선생님이 선택해 주실 거예요!
          </S.AddPageSummary>
          <S.AddPageInputWrap>
            강의 제목
            <S.AddPageInput
              onChange={onChangeInput}
              name="title"
              placeholder="제목을 입력해주세요."
            />
          </S.AddPageInputWrap>
          <S.AddPageInputWrap>
            준비물
            <S.AddPageInput
              onChange={onChangeInput}
              name="material"
              placeholder="준비물을 입력해주세요."
            />
          </S.AddPageInputWrap>
          <S.AddPageInputWrap>
            <S.AddPageDateWrap>
              <S.DateWrap>
                특강 시작
                <S.DateInput
                  type="datetime-local"
                  name="startDate"
                  value={lecture.startDate}
                  onChange={onChangeInput}
                />
              </S.DateWrap>
              <S.DateWrap>
                특강 종료
                <S.DateInput
                  type="datetime-local"
                  name="endDate"
                  value={lecture.endDate}
                  onChange={onChangeInput}
                />
              </S.DateWrap>
            </S.AddPageDateWrap>
          </S.AddPageInputWrap>
          <S.AddPageInputWrap>
            태그
            <S.AddPageInput
              onChange={onChangeTags}
              placeholder="쉼표로 구분해주세요 (태그는 최대 3개)"
            />
          </S.AddPageInputWrap>
          <S.AddPageInputWrap>
            특강 장소
            <S.AddPageSelect
              onChange={(e) => {
                setPlace(parseInt(e.target.value, 10));
              }}
            >
              {places.map((place) => {
                return (
                  <option key={place.idx} value={place.idx}>
                    {place.name}
                  </option>
                );
              })}
            </S.AddPageSelect>
          </S.AddPageInputWrap>

          <S.AddPageContentWrap>
            강의 내용
            <S.AddPageContent
              name="content"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="내용을 입력하세요"
            />
          </S.AddPageContentWrap>

          <S.ImageUploadBtn
            onClick={() => {
              fileRef?.current?.click();
            }}
          >
            파일 업로드
            <S.ImageUpload onChange={onChangeImage} ref={fileRef} type="file" />
          </S.ImageUploadBtn>

          <S.SubmitBtn onClick={onClickSubmit}>등록하기</S.SubmitBtn>
        </S.AddPage>
      </S.AddPageWrap>
    </>
  );
};

export default AddPage;
