// hash: 93d9165d86f4e35b25401c0927d3490b3b89f2769721adb3091245c37e28b1a2
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '~/redux/store';

const APPTARGET = 1;
const RINGLE = 1;
const userLocale = 'kr';
const LOCALE_KO = 'ko';
const LOCALE_EN = 'en';
const tempLocale = 'ko';
const key = '';

const getVars = () => {};

export const useLocale = () => {
  const {languageType} = useSelector((state: RootState) => state.webinar);

  let locale = 'ko';
  if (APPTARGET === RINGLE) {
    if (userLocale) {
      locale = userLocale == 'kr' ? LOCALE_KO : userLocale;
    } else {
      locale = tempLocale;
    }
  }

  const isEN = locale == LOCALE_EN;
  const isKO = locale == LOCALE_KO;
  const t = (obj): any => {
    if (typeof obj === 'string') {
      return obj;
    }
    const value = obj[key ? 2 : languageType];
    return value ? value : '';
  };
  const vars = getVars(t);
  return {t, locale, isKO, isEN, vars, tempLocale};
};

export const s_common = {
  lesson_1_1: [
    '1:1수업',
    '1:1 Lessons',
    's_common.lesson_1_1',
    '1:1课程',
    '1:1課程',
    '1対1レッスン',
    'Buổi học 1:1',
  ],
  original: [
    '콘텐츠',
    'Content',
    's_common.original',
    '内容',
    '內容',
    'コンテンツ',
    'Nội dung',
  ],
  home: ['홈', 'Home', 's_common.home', '主页', '主頁', 'ホーム', 'Trang chủ'],
  log: [
    '학습 활동',
    'Activities',
    's_common.log',
    '学习活动',
    '學習活動',
    '学習内容',
    'Hoạt động',
  ],
  my_page: [
    '내 페이지',
    'My Page',
    's_common.my_page',
    '我的页面',
    '我的頁面',
    'マイページ',
    'Trang của tôi',
  ],
  upcoming: [
    '예습 & 수업',
    'Prep & Lesson',
    's_common.upcoming',
    '预习 & 课程',
    '預習 & 課程',
    '予習 & レッスン',
    'Tài liệu Chuẩn bị & Buổi học',
  ],
  review: [
    '복습',
    'Review',
    's_common.review',
    '复习',
    '複習',
    '復習',
    'Đánh giá',
  ],
  stats: [
    '수업 통계',
    'Stats',
    's_common.stats',
    '课程统计',
    '課程統計',
    'レッスン統計',
    'Thống kê',
  ],
  schedule: [
    '예약',
    'Book',
    's_common.schedule',
    '预约',
    '預約',
    '予約',
    'Đặt lịch',
  ],
  webinar: [
    '웨비나',
    'Webinar',
    's_common.webinar',
    '网络研讨会',
    '網路研討會',
    'ウェビナー',
    'Webinar',
  ],
  packets: [
    '교재',
    'Materials',
    's_common.packets',
    '教材',
    '教材',
    '教材',
    'Tài liệu',
  ],
  coupon: [
    '수업권',
    'Credits',
    's_common.coupon',
    '课程券',
    '課程券',
    'マイレッスンチケット',
    'Thẻ học',
  ],
  _40min: [
    '40분',
    '40min',
    's_common._40min',
    '40分钟',
    '40分鐘',
    '40分',
    '40 phút',
  ],
  _20min: [
    '20분',
    '20min',
    's_common._20min',
    '20分钟',
    '20分鐘',
    '20分',
    '20 phút',
  ],
  free: ['무료', 'Free', 's_common.free', '免费', '免費', '無料', 'Miễn phí'],
  ok: ['확인', 'OK', 's_common.ok', '确认', '確定', 'OK', 'OK'],
  save: ['저장', 'Save', 's_common.save', '保存', '儲存', '保存', 'Lưu'],
  save_long: [
    '저장하기',
    'Save',
    's_common.save_long',
    '保存',
    '儲存',
    '保存する',
    'Lưu',
  ],
  cancel: [
    '취소',
    'Cancel',
    's_common.cancel',
    '取消',
    '取消',
    'キャンセル',
    'Hủy',
  ],
  submit: ['제출', 'Submit', 's_common.submit', '提交', '提交', '送信', 'Gửi'],
  see_more: [
    '더보기',
    'See More',
    's_common.see_more',
    '查看更多',
    '查看更多',
    'もっと見る',
    'Xem thêm',
  ],
  delete: ['삭제', 'Delete', 's_common.delete', '删除', '刪除', '削除', 'Bỏ'],
  next: [
    '다음',
    'Next',
    's_common.next',
    '下一步',
    '繼續',
    '次へ',
    'Tiếp theo',
  ],
  sun: ['일', 'Sun', 's_common.sun', '日', '日', '日', 'CN'],
  mon: ['월', 'Mon', 's_common.mon', '一', '一', '月', 'T2'],
  tue: ['화', 'Tue', 's_common.tue', '二', '二', '火', 'T3'],
  wed: ['수', 'Wed', 's_common.wed', '三', '三', '水', 'T4'],
  thu: ['목', 'Thu', 's_common.thu', '四', '四', '木', 'T5'],
  fri: ['금', 'Fri', 's_common.fri', '五', '五', '金', 'T6'],
  sat: ['토', 'Sat', 's_common.sat', '六', '六', '土', 'T7'],
  confirm: [
    '확인',
    'Confirm',
    's_common.confirm',
    '确认',
    '確定',
    '確認',
    'Xác nhận',
  ],
  something_wrong: [
    '오류가 발생했습니다. 다시 시도해주세요',
    'Sorry, something went wrong. Please try again.',
    's_common.something_wrong',
    '发生错误，请重新尝试',
    '發生錯誤，請重新嘗試。',
    'エラーが発生しました。もう一度お試しください。',
    'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.',
  ],
  the_value_you_entered_is_invalid: [
    '값이 유효하지 않음',
    'The value you entered is invalid.',
    's_common.the_value_you_entered_is_invalid',
    '该值无效',
    '該值無效',
    '入力した値は有効ではありません。',
    'Giá trị bạn nhập không hợp lệ.',
  ],
  you_can_only_upload_and_delete_material_from_the_web_browser: [
    '관련자료의 업로드 및 삭제는 웹브라우저에서 가능합니다.',
    'You can only upload and delete material from the web browser.',
    's_common.you_can_only_upload_and_delete_material_from_the_web_browser',
    '相关材料的上传及删除可在网络浏览器上进行。',
    '可於網路瀏覽器上傳或刪除相關資料。',
    '関連資料のアップロードおよび削除はウェブブラウザから可能です。',
    'Bạn chỉ có thể tải lên và xoá tài liệu từ trình duyệt web.',
  ],
  material_free_talking_1: [
    <>
      [Free Topic 수업 유의 사항]
      <br />
      1) 수업 예약 후, 예정된 수업 페이지에서 자료를 업로드 할 수 있습니다.{' '}
      <br />
      2) 수업 시작 24시간 전까지 문서 업로드를 권장 드립니다. <br />
      3) 문서 교정은 수업 시간에 실시간으로 진행됩니다. <br />
      4) 수업 중 영문 교정을 위해 개인 자료를 업로드 시, 20분 수업은 500 단어
      (A4 1장), 40분 수업은 1000 단어 (A4 2장 분량) 분량을 권장 드립니다.{' '}
    </>,
    <>
      1) After scheduling the lesson, you can upload the material on the
      upcoming lesson page.
      <br />
      2) It is recommended to upload your document at least 24 hours before the
      lesson starts.
      <br />
      3) Writing corrections will be conducted live during the lesson.
      <br />
      4) When you upload your own material to be edited during your Free Topic
      lesson, please limit the word count to 500 (one A4 page) for a 20-minute
      lesson, and 1,000 (two A4 pages) for a 40-minute lesson.
    </>,
    's_common.material_free_talking_1',
    <>
      1) 完成课程预约后, 可在预约课程的页面上传您的资料。
      <br />
      2) 建议最晚于课程开始前24小时完成资料上传。
      <br />
      3) 文本校正可在课程中随堂进行。
      <br />
      4) Writing为主的课程, &nbsp; 教师将不提供Feedback Report。
    </>,
    <>
      1) 預約課程後，可於預定的課程頁面上傳資料。
      <br />
      2) 建議最晚於課程開始24小時前上傳資料。
      <br />
      3) 將於上課時間即時糾正文件。
      <br />
      4) 以Writing為主的課程&nbsp; 將不提供任課教師的Feedback Report。
    </>,
    <>
      1) レッスン予約後、レッスン予定ページから資料をアップロードすることが
      できます。
      <br />
      2) レッスン開始24時間前までに文書をアップロードすることを推奨します。
      <br />
      3) 文書校正はレッスン時間にリアルタイムで行われます。
      <br />
      4)
      レッスン中の英文添削のため個人の材料をアップロードする場合、20分レッスンは500字（A41枚）、40分レッスンは1000字（A42枚）の分量をお勧めします。
    </>,
    <>
      1) Sau khi đặt lịch học, bạn có thể tải lên tài liệu học trên trang tiếp
      theo của buổi học.
      <br />
      2) Chúng tôi khuyến khích tải tài liệu lên tối thiểu 24 giờ trước khi buổi
      học bắt đầu.
      <br />
      3) Chỉnh lỗi bài viết sẽ diễn ra trong quá trình học.
      <br />
      4) Báo cáo đánh giá sẽ không có trong buổi tập trung viết.
    </>,
  ],
  material_free_talking_2: [
    '* 모의 인터뷰 수업, Writing 첨삭으로 진행되는 수업 에는 튜터의 Feedback Report가 제공되지 않습니다.',
    "* For the lessons on mock interviews or editing a written piece, we do not provide the tutor's feedback report.",
    's_common.material_free_talking_2',
    '* 模拟采访课程及Writing修改课程，不提供任课教师的Feedback Report。',
    '* 模擬面試課程及Writing增刪課程未提供任課教師的Feedback Report。',
    '* 模擬面接レッスン、Writing添削で行われるレッスンではチューターのFeedback Reportは提供されません。',
    '* Với buổi học phỏng vấn thử hoặc chỉnh sửa bài viết, chúng tôi sẽ không cung cấp bản đánh giá của gia sư.',
  ],
  we_will_send_you_news_special_offers_and_other_information_about_ringle: [
    '링글의 다양한 정보를 받아보실 수 있습니다.',
    'We will send you news, special offers, and other information about Ringle.',
    's_common.we_will_send_you_news_special_offers_and_other_information_about_ringle',
    '您可接收Ringle的各种信息。',
    '您可接收Ringle的各種資訊。',
    'Ringleのさまざまな情報を受け取ることができます。',
    'Chúng tôi sẽ gửi bạn tin tức, ưu đãi đặc biệt và các tin tức khác về Ringle.',
  ],
  new_version_of_this_application_is_available: [
    '새로운 업데이트가 있습니다',
    'Application Update, A new version of this application is available.',
    's_common.new_version_of_this_application_is_available',
    '有新的更新',
    '有新的更新',
    '新しいバージョンがあります。',
    'Ứng dụng nâng cấp, Phiên bản mới đã sẵn sàng.',
  ],
  canceled: [
    '취소된 수업',
    'Canceled Lesson',
    's_common.canceled',
    '已取消的课程',
    '已取消的課程',
    'キャンセルされたレッスン',
    'Đã huỷ buổi học',
  ],
  close: ['닫기', 'Close', 's_common.close', '关闭', '關閉', '閉じる', 'Đóng'],
  new_updates: [
    '새로운 업데이트가 있습니다.',
    'New updates',
    's_common.new_updates',
    '有新的更新。',
    '有新的更新。',
    '新しいバージョンがあります。',
    'Cập nhật mới',
  ],
  mandatory_update_message: [
    '링글 앱이 업데이트 되어 홈 화면으로 이동합니다.',
    'Redirecting to Home page due to Ringle app update',
    's_common.mandatory_update_message',
    'Ringle APP已更新，前往主画面。',
    'Ringle APP已更新，前往主畫面。',
    'Ringleアプリのアップデートによりホーム画面に移動します。',
    'Quay lại Trang chủ do ứng dụng Ringle đang cập nhật',
  ],
  update: [
    '업데이트',
    'Update',
    's_common.update',
    '更新',
    '更新',
    'アップデート',
    'Cập nhật',
  ],
  later: [
    '나중에',
    'Later',
    's_common.later',
    '下次',
    '下次',
    'あとで',
    'Để sau',
  ],
  update_message: [
    '지금 업데이트 하시겠습니까?',
    'Would you like to update now?',
    's_common.update_message',
    '现在要进行更新吗？',
    '現在要進行更新嗎？',
    '今すぐアップデートしますか？',
    'Bạn có muốn cập nhật ngay bây giờ?',
  ],
  my_original: [
    '내 콘텐츠',
    'My Content',
    's_common.my_original',
    '我的收藏',
    '我的收藏',
    'マイコンテンツ',
    'Nội dung của tôi',
  ],
  purchase: [
    '구매하러가기',
    'Purchase',
    's_common.purchase',
    '前往购买',
    '前往購買',
    '購入する',
    'Thanh toán',
  ],
  purchase_coupon: [
    '수업권을 구매하러 가시겠습니까?',
    'Do you want to purchase lesson credits?',
    's_common.purchase_coupon',
    '您要前往购买课程券吗？',
    '您要前往購買課程券嗎？',
    'レッスンチケットを購入しますか？',
    'Bạn có muốn thanh toán cho thẻ học?',
  ],
  alert_saved: [
    '입력한 내용이 저장되었습니다.',
    'Successfully saved',
    's_common.alert_saved',
    '内容保存成功。',
    '內容儲存成功。',
    '入力した内容が保存されました。',
    'Đã lưu thành công',
  ],
  alert_canceled: [
    '수업이 취소되었습니다.',
    'Lesson canceled',
    's_common.alert_canceled',
    '已取消课程。',
    '已取消課程。',
    'レッスンがキャンセルされました。',
    'Buổi học đã huỷ',
  ],
  alert_verified: [
    '입력한 코드를 인증했습니다.',
    'Successfully verified',
    's_common.alert_verified',
    '代码验证成功。',
    '代碼驗證成功。',
    '入力したコードを認証しました。',
    'Đã xác nhận thành công',
  ],
  alert_packet_changed: [
    '교재를 변경했습니다.',
    'Materials changed',
    's_common.alert_packet_changed',
    '教材变更成功。',
    '教材變更成功。',
    '教材を変更しました。',
    'Tài liệu đã thay đổi',
  ],
  alert_time_changed: [
    '수업 시간을 변경했습니다.',
    'Time changed',
    's_common.alert_time_changed',
    '课程时间修改成功。',
    '課程時間變更成功。',
    'レッスン時間を変更しました。',
    'Thời gian đã thay đổi',
  ],
  alert_option_changed: [
    '튜터 매칭 옵션을 변경했습니다.',
    'Tutor matching option changed',
    's_common.alert_option_changed',
    '任课教师匹配选项变更成功。',
    '任課教師配對選項變更成功。',
    'チューターマッチングオプションを変更しました。',
    'Lựa chọn sắp xếp gia sư đã thay đổi',
  ],
  alert_style_changed: [
    '수업 설정을 변경했습니다.',
    'Lesson style changed',
    's_common.alert_style_changed',
    '课程设定修改成功。',
    '課程設定變更成功。',
    'レッスン設定を変更しました。',
    'Hình thức học đã thay đổi',
  ],
  alert_already_verified: [
    '이미 인증된 번호입니다.\n링글팀에 문의해주세요.',
    'This number has already been verified.\nPlease contact us with any questions.',
    's_common.alert_already_verified',
    '是已认证过的号码。\n请咨询Ringle团队。',
    '已驗證的編號。\n請洽詢Ringle團隊。',
    'すでに認証されたコードです。\nRingleチームにお問い合わせください。',
    'Số điện thoại này đã được xác minh.\nVui lòng liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào.',
  ],
  tutor: [
    '튜터',
    'Tutor',
    's_common.tutor',
    '任课教师',
    '任課教師',
    'チューター',
    'Gia sư',
  ],
  contents: [
    '콘텐츠',
    'Contents',
    's_common.contents',
    '内容',
    '內容',
    'コンテンツ',
    'Nội dung',
  ],
  activities: [
    '학습 활동',
    'Activities',
    's_common.activities',
    '学习活动',
    '學習活動',
    '学習内容',
    'Hoạt động',
  ],
  tutors: [
    '튜터',
    'Tutors',
    's_common.tutors',
    '任课教师',
    '任課教師',
    'チューター',
    'Gia sư',
  ],
  content: [
    '콘텐츠',
    'Content',
    's_common.content',
    '内容',
    '內容',
    'コンテンツ',
    'Nội dung',
  ],
  practice: [
    '링글 활용법',
    'How Ringle works',
    's_common.practice',
    'Ringle使用方法',
    'Ringle活用方法',
    'Ringleの活用方法',
    'Cách Ringle hoạt động',
  ],
  webinars: [
    '웨비나',
    'Webinars',
    's_common.webinars',
    '网络研讨会',
    '網路研討會',
    'ウェビナー',
    'Webinars',
  ],
};
export const s_home = {
  experience_a_20_min_trial_lesson_right_now: [
    '지금 20분 체험 무료 수업을 경험하세요',
    'Start now with a free 20-min trial.',
    's_home.experience_a_20_min_trial_lesson_right_now',
    '现在立刻进行20分钟的免费体验课程吧。',
    '現在就進行20分鐘免費體驗課程吧。',
    '今すぐ20分の無料体験レッスンお試しください。',
    'Học thử miễn phí 20 phút ngay bây giờ.',
  ],
  prep: [
    '예습하기',
    'Prep',
    's_home.prep',
    '预习',
    '預習',
    '予習する',
    'Chuẩn bị',
  ],
  schedule: [
    '수업예약',
    'Book',
    's_home.schedule',
    '预约课程',
    '預約課程',
    'レッスン予約',
    'Đặt lịch',
  ],
  enter: [
    '입장하기',
    'Enter',
    's_home.enter',
    '入场',
    '進場',
    '入室する',
    'Vào học',
  ],
  you_have_no_upcoming_lessons: [
    '예정된 수업이 없습니다',
    'You have no upcoming lessons.',
    's_home.you_have_no_upcoming_lessons',
    '无预定的课程',
    '無預定的課程',
    'レッスン予定はありません',
    'Bạn không có buổi học nào sắp tới.',
  ],
  lessons_available_within_24_hours: obj => [
    <>24시간 이내 이용가능한 수업 ({obj})</>,
    <>Lessons Available Within 24 Hours ({obj})</>,
    's_home.lessons_available_within_24_hours',
    <>24小时以内可聆听的课程（{obj}）</>,
    <>24小時以內可聆聽的課程（{obj}）</>,
    <>24時間以内に受講可能なレッスン ({obj})</>,
    <>Buổi học trống trong 24 giờ tới ({obj})</>,
  ],
  you_have_upcoming_lesson: n => [
    <>예정된 수업 ({n})</>,
    <>Upcoming Lessons ({n})</>,
    's_home.you_have_upcoming_lesson',
    <>预定课程 ({n})</>,
    <>預定的課程（{n}）</>,
    <>レッスン予定 ({n})</>,
    <>Buổi học sắp tới ({n})</>,
  ],
  you_have_no_coupons: [
    '사용 가능한 수업권이 없습니다',
    'You have no lesson credits.',
    's_home.you_have_no_coupons',
    '无可使用的课程券',
    '無可使用的課程券',
    '使用可能なレッスンチケットはありません。',
    'Bạn không có thẻ học nào.',
  ],
  purchase: [
    '구매하기',
    'Buy Now',
    's_home.purchase',
    '购买',
    '購買',
    '購入する',
    'Mua ngay',
  ],
  notifications: [
    '알림 목록',
    'Notifications',
    's_home.notifications',
    '通知清单',
    '通知清單',
    'お知らせリスト',
    'Thông báo',
  ],
  select_all: [
    '모두 선택',
    'Select all',
    's_home.select_all',
    '全部选择',
    '全部選擇',
    'すべて選択',
    'Chọn tất cả',
  ],
  successfully_deleted: [
    '선택한 알림이 삭제되었습니다.',
    'Successfully turned off',
    's_home.successfully_deleted',
    '已删除选择的通知。',
    '已刪除選擇的通知。',
    '選択したお知らせが削除されました。',
    'Tắt thành công',
  ],
  hello_firstname_: name => [
    `안녕하세요, ${name}님!`,
    `Hello, ${name}!`,
    's_home.hello_firstname_',
    `您好，${name}！`,
    `您好，${name}！`,
    `こんにちは、 ${name}さん！`,
    `Xin chào, ${name}!`,
  ],
  close: ['닫기', 'Close', 's_home.close', '关闭', '關閉', '閉じる', 'Đóng'],
  lessons_in_24_hours: [
    '24시간\n이내 수업',
    'Lessons\nin 24 hours',
    's_home.lessons_in_24_hours',
    '24小时\n以内的课程',
    '24小時\n以內的課程',
    '24時間\n以内のレッスン',
    'Buổi học\ntrong 24 giờ tới',
  ],
  upcoming_lessons: [
    '예정된\n수업',
    'Upcoming\nLessons',
    's_home.upcoming_lessons',
    '预定的\n课程',
    '預定的\n課程',
    'レッスン\n予定',
    'Buổi học\nsắp tới',
  ],
  not_reviewed: [
    '복습\n미완료',
    'Not\nReviewed',
    's_home.not_reviewed',
    '复习\n未完成',
    '複習\n未完成',
    '復習\n未完了',
    'Chưa\nxem lại',
  ],
  invite: [
    '친구초대',
    'Invite',
    's_home.invite',
    '邀请朋友',
    '邀請朋友',
    '友達招待',
    'Mời',
  ],
  webinar_live: [
    '웨비나 라이브',
    'Webinar Live',
    's_home.webinar_live',
    'Ringle LIVE',
    'Ringle LIVE',
    'Ringle LIVE',
    'Ringle LIVE',
  ],
  starting_in_n_min: min => [
    `${min}분 후 시작`,
    `Starting in ${min} min`,
    's_home.starting_in_n_min',
    `${min}分钟后开始`,
    `${min}分鐘後開始`,
    `${min}分後に開始`,
    `Bắt đầu trong ${min} phút`,
  ],
  already_started_min: min => [
    `수업 시간 ${min}분 지남`,
    `Already started ${min} min ago`,
    's_home.already_started_min',
    `课程时间已过${min}分钟`,
    `課程時間已過${min}分鐘`,
    `レッスン時間 ${min}分経過`,
    `Đã bắt đầu ${min} phút trước`,
  ],
  started_streaming_min: min => [
    `${min}분 전부터 진행 중`,
    `Started streaming ${min} min ago`,
    's_home.started_streaming_min',
    `自${min}分钟前开始`,
    `自${min}分鐘前開始`,
    `${min}分前から進行中`,
    `Đã phát đầu phát trực tuyến ${min} phút trước`,
  ],
  lesson: [
    '수업',
    'Lesson',
    's_home.lesson',
    '课程',
    '課程',
    'レッスン',
    'Buổi học',
  ],
  free_trial_lesson_available: [
    '선착순 마감 혜택',
    'First-Come First-Served Benefits',
    's_home.free_trial_lesson_available',
    '先到先得优惠',
    '先搶先贏優惠',
    '先着順特典',
    'Ưu tiên cho đăng ký trước',
  ],
  try_out_our_20_mins_free_trial_lesson_: [
    '20분 무료수업 예약하기',
    'Try 20-min lesson now!',
    's_home.try_out_our_20_mins_free_trial_lesson_',
    '预约20分钟免费课程',
    '預約20分鐘免費課程',
    '20分の無料レッスンを予約する',
    'Học thử 20 phút ngay bây giờ!',
  ],
  lesson_coupon: [
    <>
      첫 구매 <View secondary>할인 혜택</View>
    </>,
    <>
      <View secondary>Benefits</View> on{'\n'}first purchase
    </>,
    's_home.lesson_coupon',
    '首次购买优惠',
    '首次購買折扣優惠',
    '初回購入割引特典',
    'Ưu đãi cho lần thanh toán đầu tiên',
  ],
  purchase_now_at_the_lowest_possible_price_: [
    <>
      체험 없이 구매하고{'\n'}
      <View primary>최대 혜택</View> 받기
    </>,
    <>
      <View primary>Best offer</View> available{'\n'}without trial lesson
    </>,
    's_home.purchase_now_at_the_lowest_possible_price_',
    <>
      无预先体验，立即购买{'\n'}
      领取<View primary>最多优惠</View>{' '}
    </>,
    <>
      未先體驗即購買{'\n'}
      領取<View primary>最高優惠</View>
    </>,
    <>
      体験せずに購入して{'\n'}
      <View primary>最大特典</View> を受け取る
    </>,
    <>
      <View primary>Ưu đãi tốt nhấtr</View> hiện có{'\n'}mà không cần học thử
    </>,
  ],
  discounts_extra_lessons_if_you_purchase_without_a_free_trial: [
    '최대 3회 수업 제공 + 10,000원 추가 할인',
    'Max 3 extra lessons + ₩10,000 Discount',
    's_home.discounts_extra_lessons_if_you_purchase_without_a_free_trial',
    '最多提供3次课程 + ₩10,000 额外优惠',
    '最多提供3次課程 + ₩10,000 額外折扣',
    '最大3回レッスン提供 + ₩10,000 追加割引',
    'Tối đa 3 buổi học thêm + ₩10,000 ưu đãi',
  ],
  full_refund_guaranteed_if_your_first_lesson_is_unsatisfactory_: [
    '첫 수업 불만족 시 100% 환불 보장',
    '100% Money-back guarantee',
    's_home.full_refund_guaranteed_if_your_first_lesson_is_unsatisfactory_',
    '首次课程不满意时，可全额退款',
    '首次課程不滿意時，可全額退款',
    '初回レッスンにご満足いただけない場合、全額返金保証',
    'Hoàn tiền 100%',
  ],
  minute_dose_of_insight_english_everyday: [
    '하루 5분으로 쌓는 상식과 영어',
    '5-minute dose of insight & English',
    's_home.minute_dose_of_insight_english_everyday',
    '每天5分钟累积常识和英语',
    '一天5分鐘累積常識與英語',
    '1日5分で知識と英語力の蓄積を',
    '5 phút đọc thêm insight & tiếng Anh',
  ],
  this_week_s_topic: [
    '이번 주 주제',
    'Weekly Topic',
    's_home.this_week_s_topic',
    '本周主题',
    '本週主題',
    '今週のテーマ',
    'Chủ đề hằng tuần',
  ],
  today_s_tutor: [
    '오늘의 튜터',
    'Tutor Highlights',
    's_home.today_s_tutor',
    '今日任课教师',
    '今日任課教師',
    '今日のチューター',
    'Gia sư nổi bật',
  ],
  check_out_tutors_recommended_by_ringle_users_: [
    '링글 수강생이 추천하는 튜터를 확인해 보세요.',
    'Check out tutors recommended by Ringle users.',
    's_home.check_out_tutors_recommended_by_ringle_users_',
    '请确认Ringle学生推荐的任课教师。',
    '請確認Ringle學生推薦的任課教師。',
    'Ringle受講生がおすすめするチューターをチェックしてみましょう。',
    'Xem thử những gia sư được Ringle giới thiệu.',
  ],
  latest_packets: [
    '최신 교재',
    'Latest Materials',
    's_home.latest_packets',
    '最新教材',
    '最新教材',
    '最新の教材',
    'Tài liệu mới nhất',
  ],
  read_new_articles_released_every_week_: [
    '매일 업데이트되는 신규 교재를 확인해 보세요.',
    'Read new materials released everyday.',
    's_home.read_new_articles_released_every_week_',
    '请确认每天更新的新教材。',
    '請確認每天更新的新教材。',
    '毎日アップデートされる新しい教材をチェックしてみましょう。',
    'Đọc tài liệu mới ra mỗi ngày.',
  ],
  view_all: [
    '전체보기',
    'View all',
    's_home.view_all',
    '查看全部',
    '查看全部',
    'すべて見る',
    'Xem tất cả',
  ],
  featured_webinars: [
    '추천 웨비나',
    'Featured Webinars',
    's_home.featured_webinars',
    '网络研讨会推荐',
    '推薦的網路研討會',
    'おすすめのウェビナー',
    'Webinar nổi bật',
  ],
  watch_video_lectures_taught_by_certified_tutors_: [
    '엄선된 튜터들의 동영상 강좌를 시청해 보세요.',
    'Watch video lectures taught by top tutors.',
    's_home.watch_video_lectures_taught_by_certified_tutors_',
    '请观看精选任课教师的视频讲座。',
    '請觀看精選任課教師的影片講座。',
    '厳選されたチューターのレッスン動画を視聴してみましょう。',
    'Xem video giảng dạy của những gia sư hàng đầu.',
  ],
  topic: ['주제', 'Topic', 's_home.topic', '主题', '主題', 'テーマ', 'Chủ đề'],
  today_s_expression: [
    '오늘의 표현',
    "Today's Expression",
    's_home.today_s_expression',
    '今日用法',
    '今日用法',
    '今日の表現',
    'Mẫu câu hôm nay',
  ],
  want_to_read_the_packet_related_to_this_memo_: [
    '이 Brief 관련 교재를 읽고 싶다면?',
    'View Lesson Materials related to this brief',
    's_home.want_to_read_the_packet_related_to_this_memo_',
    '想观看Brief相关教材吗？',
    '如果想閱讀這則Brief的相關教材？',
    'このBriefに関連する教材を読みますか？',
    'Xem lại Học liệu liên quan đến bản tóm tắt này',
  ],
  want_to_watch_the_webinar_related_to_this_memo_: [
    '이 Brief 관련 웨비나를 보고 싶다면?',
    'View Webinars related to this brief',
    's_home.want_to_watch_the_webinar_related_to_this_memo_',
    '想观看Brief相关网络研讨会吗？',
    '如果想觀看這則Brief的相關網路研討會？',
    'このBriefに関連するウェビナーを見ますか？',
    'Xem Webinars liên quan đến bản tóm tắt này',
  ],
  go_to_read_the_packet: [
    '교재 읽으러 가기',
    'Go to Lesson Materials',
    's_home.go_to_read_the_packet',
    '前往阅读教材',
    '前往閱讀教材',
    '教材を読む',
    'Truy cập Học liệu',
  ],
  go_to_watch_the_webinar: [
    '웨비나 보러 가기',
    'Go to Webinars',
    's_home.go_to_watch_the_webinar',
    '前往查看网络研讨会',
    '前往觀看網路研討會',
    'ウェビナーを見る',
    'Truy cập Webinars',
  ],
  this_week_s_memos: [
    '이번 주의 Briefs',
    "This Week's Briefs",
    's_home.this_week_s_memos',
    '本周Briefs',
    '本週Briefs',
    '今週のBriefs',
    'Tin tức tuần này',
  ],
  reading_now: [
    '지금 읽고 있음',
    'Current Daily Brief',
    's_home.reading_now',
    '正在阅读中',
    '目前正在閱讀',
    '今読んでいます',
    'Daily Brief hôm nay',
  ],
  lesson_min: ['분', 'min', 's_home.lesson_min', '分钟', '分鐘', '分', 'phút'],
  source: [
    '출처:',
    'Source:',
    's_home.source',
    '来源:',
    '出處：',
    '出典:',
    'Nguồn:',
  ],
  will_open: (day, hour, min) => [
    `${day <= 0 ? '' : `${day}일 `}${hour <= 0 ? '' : `${hour}시간 `}${
      min <= 0 ? '' : `${min}분 `
    }남음`,
    `${day <= 0 ? '' : `${day}d `}${hour <= 0 ? '' : `${hour}h `}${
      min <= 0 ? '' : `${min}m `
    }left`,
    's_home.will_open',
    `剩下${day <= 0 ? '' : `${day}日`}${hour <= 0 ? '' : `${hour}小时`}${
      min <= 0 ? '' : `${min}分钟`
    }`,
    `剩下${day <= 0 ? '' : `${day}日`}${hour <= 0 ? '' : `${hour}小時`}${
      min <= 0 ? '' : `${min}分鐘`
    }`,
    `残り${day <= 0 ? '' : `${day}日 `}${hour <= 0 ? '' : `${hour}時間 `}${
      min <= 0 ? '' : `${min}分 `
    }`,
    `${day <= 0 ? '' : `${day}d `}${hour <= 0 ? '' : `${hour}h `}${
      min <= 0 ? '' : `${min}m `
    }còn lại`,
  ],
  alert_not_opened: (day, hour, min) => [
    `이 Brief는 ${day <= 0 ? '' : `${day}일 `}${
      hour <= 0 ? '' : `${hour}시간 `
    }${min <= 0 ? '' : `${min}분 `}후에 확인할 수 있어요!`,
    `This Daily Brief will be available in ${
      day <= 0 ? '' : `${day} day${day == 1 ? ' ' : 's '}`
    }${hour <= 0 ? '' : `${hour} hour${hour == 1 ? ' ' : 's '}`}${
      min <= 0 ? '' : `${min} min${min == 1 ? '' : 's'}`
    }.`,
    's_home.alert_not_opened',
    `本Brief${day <= 0 ? '' : `${day}日`}${hour <= 0 ? '' : `${hour}小时`}${
      min <= 0 ? '' : `${min}分钟`
    }后可进行确认！`,
    `這則Brief可於${day <= 0 ? '' : `${day}日`}${
      hour <= 0 ? '' : `${hour}小時`
    }${min <= 0 ? '' : `${min}分鐘`}後確認！`,
    `このBriefは ${day <= 0 ? '' : `${day}日 `}${
      hour <= 0 ? '' : `${hour}時間 `
    }${min <= 0 ? '' : `${min}分 `}後に公開されます。`,
    `Daily Brief sẽ có trong ${
      day <= 0 ? '' : `${day} day${day == 1 ? ' ' : 's '}`
    }${hour <= 0 ? '' : `${hour} hour${hour == 1 ? ' ' : 's '}`}${
      min <= 0 ? '' : `${min} min${min == 1 ? '' : 's'}`
    }.`,
  ],
  my_lessons: [
    '내 수업',
    'My Lessons',
    's_home.my_lessons',
    '我的课程',
    '我的課程',
    'マイレッスン',
    'Buổi học tôi',
  ],
  quick: {
    trial: {
      no_slot_desc: [
        `안녕하세요, 링글 팀입니다.

최근 예상보다 빠르게 수업수 및 무료체험 신청자 증가로, 무료체험 가능 시간대가 빠르게 소진되고 있습니다.
링글 운영 정책에 따라 유료수업은 대다수 시간대에 정상 운영 중이나, 체험수업은 주요 시간대 신청 가능 슬롯 조기 마감으로 인해, 체험 신청자분들께서 불편함을 겪고 있습니다.

현재 링글 US팀이 미국 현지에서 튜터분들과 협의하며 더 많은 수업 시간을 확보 중이며, 1~2주 이내 대부분 시간대 무료체험을 제공할 수 있도록 조치하겠습니다.

무료체험 신청 과정에서 불편을 드려 죄송합니다.`,
        `Dear customers,
Currently, we are lacking in providing free trial lessons to students due to the current promotion and the increase in the number of customers.

Ringle has been providing a limited number of free trial lessons to guarantee the benefits we are giving to the existing users (Paid lessons are operating normally).

Through consultation with tutors, we have been securing more lessons for customers at present.

We will take follow-up measures to provide free trial lessons within 1-2 weeks.

We are sincerely sorry for the inconvenience.`,
        's_home.quick.trial.no_slot_desc',
        `您好，我们是Ringle团队。
 
 
 由于最近申请课程及免费体验的学生急速增加，可免费体验的时间段也在迅速耗尽。
 虽然依照Ringle经营政策，大多数的付费课程时间段都在正常运营，但由于体验课程主要可申请的时间段栏位提早结束，造成申请体验的学生面临不便。
 
 目前Ringle US团队正在通过咨询美国当地的任课教师们来确保更多的课程期间，我们将采取措施在1~2周内在大多数时间段提供免费体验。
 
 对于您在免费体验申请过程中造成不便，我们深表歉意。`,
        `您好，我們是Ringle團隊。

由於最近課程數及免費體驗的申請者急遽增加，可免費體驗的時段快速減少中。
雖然依據Ringle經營政策，大多數的付費課程時段均正常營運中，但由於體驗課程主要可申請的時段欄位提早截止，造成申請體驗的學生面臨不便。

目前Ringle US團隊於美國當地正與各位任課教師協議，以爭取更多課程時間，將盡量於1～2週內提供大部分時段的免費體驗。

為您在申請免費體驗的過程中造成不便，我們致上最深的歉意。`,
        `こんにちは、Ringleチームです。

最近、予想よりも早いレッスン数および無料体験の予約者の増加により、無料体験可能な時間帯が早く埋まっています。
Ringle運営政策により有料レッスンは大多数の時間帯に通常運営されていますが、体験レッスンは主要時間帯の予約可能枠の早期締め切りにより、体験予約者の方々にご不便をおかけしております。

現在、Ringle USチームがアメリカ現地でチューターの方々と協議し、より多くのレッスン時間を確保中であり、1~2週間以内にほとんどの時間帯で無料体験をご提供できるよう対処します。

無料体験の予約過程でご不便をおかけし、申し訳ございません。`,
        `Thân gửi quý khách hàng,
Hiện tại chúng tôi khó có thể cung cấp buổi học thử miễn phí vì các ưu đãi đang diễn ra dẫn tới sự gia tăng khách hàng mới. 

Ringle tạm thời chỉ cung cấp số lượng có hạn buổi học thử miễn phí để đảm bảo quyền lợi cho học viên đang học (các buổi học trả phí vẫn diễn ra như bình thường).

Qua việc tham khảo thêm các gia sư, chúng tôi đảm bảo sẽ có nhiều buổi học hơn cho khách hàng hiện tại.

Chúng tôi sẽ thực hiện các biện pháp tiếp theo để cung cấp các buổi học miễn phí từ 1-2 tuần tới.

Chúng tôi chân thành xin lỗi vì sự bất tiện này.`,
      ],
      no_slot: [
        '체험 가능 슬롯이 없습니다.',
        'There is no available slot.',
        's_home.quick.trial.no_slot',
        '无可体验的栏位。',
        '無可體驗的欄位。',
        '体験可能な枠がありません。',
        'Không có lịch trống.',
      ],
    },
  },
  notifications_selected: count => [
    `${count}개 선택됨`,
    `${count} selected`,
    's_home.notifications_selected',
    `已选择${count}个`,
    `已選擇${count}個`,
    `${count}個選択`,
    `${count} đã chọn`,
  ],
};
export const s_auth = {
  ringle_signup: [
    '회원가입',
    'Sign Up',
    's_auth.ringle_signup',
    '会员注册',
    '會員註冊',
    '会員登録',
    'Đăng ký',
  ],
  required: [
    '기본정보',
    'Basic Info',
    's_auth.required',
    '基本资料',
    '基本資料',
    '基本情報',
    'Thông tin cơ bản',
  ],
  email: [
    '이메일',
    'Email',
    's_auth.email',
    '电子邮箱',
    '電子信箱',
    'メールアドレス',
    'Email',
  ],
  english_name: [
    '영문 이름',
    'English Name',
    's_auth.english_name',
    '英文姓名',
    '英文姓名',
    '氏名（英語）',
    'Tên Tiếng Anh',
  ],
  password: [
    '비밀번호',
    'Password',
    's_auth.password',
    '密码',
    '密碼',
    'パスワード',
    'Mật khẩu',
  ],
  reset_password: [
    '비밀번호 재설정',
    'Reset Password',
    's_auth.reset_password',
    '密码重置',
    '重設密碼',
    'パスワード再設定',
    'Đặt lại Mật khẩu',
  ],
  enter_a_valid_emaill_address: [
    '유효한 이메일을 입력해 주세요',
    'Please enter a valid email address',
    's_auth.enter_a_valid_emaill_address',
    '请输入有效的电子邮箱地址。',
    '請輸入有效的電子信箱。',
    '有効なメールアドレスを入力してください。',
    'Vui lòng nhập địa chỉ email hợp lệ',
  ],
  view: ['보기', 'View', 's_auth.view', '查看', '查看', '見る', 'Xem'],
  new_password: [
    '새 비밀번호',
    'New Password',
    's_auth.new_password',
    '新密码',
    '新密碼',
    '新しいパスワード',
    'Mật khẩu mới',
  ],
  confirm_password: [
    '비밀번호 재확인',
    'Confirm Password',
    's_auth.confirm_password',
    '再次确认密码',
    '重新輸入密碼',
    'パスワード再確認',
    'Xác nhận Mật khẩu',
  ],
  confirm_new_password: [
    '새 비밀번호 확인',
    'Confirm New Password',
    's_auth.confirm_new_password',
    '确认新密码',
    '確認新密碼',
    '新しいパスワードを確認',
    'Xác nhận Mật khẩu mới',
  ],
  name: ['이름', 'Name', 's_auth.name', '姓名', '姓名', '氏名', 'Tên'],
  optional: [
    '기업맞춤 / 친구코드 입력 [선택]',
    'Enter B2B Partner / Referral Code [Optional]',
    's_auth.optional',
    '输入企业专用／朋友代码 [选填]',
    '輸入企業專用／朋友代碼 [選填]',
    '企業専用 / 友達コード入力 [選択]',
    'Nhập Mã đối tác B2B / Mã giới thiệu[Không bắt buộc]',
  ],
  company_code: [
    '기업맞춤코드',
    'B2B Partner Code',
    's_auth.company_code',
    '企业专用代码',
    '企業專用代碼',
    '企業専用コード',
    'Mã code đối tác B2B',
  ],
  referral_code: [
    '친구코드',
    'Referral Code',
    's_auth.referral_code',
    '朋友代码',
    '朋友代碼',
    '友達紹介コード',
    'Mã giới thiệu',
  ],
  i_agree_to_the_ringle_privacy_policy_required: [
    '개인정보 취급방침에 동의합니다 (필수)',
    "I agree to Ringle's Privacy Policy (Required)",
    's_auth.i_agree_to_the_ringle_privacy_policy_required',
    '同意个人资料处理方针（必选）',
    '同意個人資料處理方針（必選）',
    '個人情報保護方針に同意します (必須)',
    'Tôi đồng ý với Chính sách Riêng tư cùa Ringle (bắt buộc)',
  ],
  i_want_to_receive_news_and_promotions_optional: [
    '(선택) 마케팅 및 프로모션 소식을 수신하고 싶습니다',
    "[Optional] I want to receive Ringle's exclusive promotions and latest news",
    's_auth.i_want_to_receive_news_and_promotions_optional',
    '（可选）想接收营销和促销活动消息',
    '（可選）我想接收行銷與宣傳活動消息',
    '(選択) マーケティングおよびプロモーションのお知らせを受信したいです。',
    '[Không bắt buộc] Tôi muốn nhận những thông tin về ưu đãi độc quyền và tin tức mới nhất của Ringle',
  ],
  password_must_have_6_characters: [
    '6자 이상 비밀번호를 입력하세요',
    'Password has to be at least 6 characters',
    's_auth.password_must_have_6_characters',
    '请输入6字以上密码',
    '請輸入6字以上的密碼',
    '6文字以上パスワードを入力してください。',
    'Mật khẩu cần ít nhất 6 ký tự',
  ],
  passwords_do_not_match: [
    '비밀번호가 일치하지 않습니다',
    'Passwords do not match.',
    's_auth.passwords_do_not_match',
    '密码不一致',
    '密碼不一致',
    'パスワードが一致しません。',
    'Mật khẩu không khớp.',
  ],
  log_in: [
    '로그인',
    'Sign In',
    's_auth.log_in',
    '登录',
    '登入',
    'ログイン',
    'Đăng nhập',
  ],
  forget_password: [
    '비밀번호 찾기',
    'Forgot password?',
    's_auth.forget_password',
    '忘记密码',
    '忘記密碼',
    'パスワードを忘れた方はこちら',
    'Quên mật khẩu?',
  ],
  log_in_with: [
    '다른 방식으로 로그인',
    'Sign in with',
    's_auth.log_in_with',
    '使用其他方式登录',
    '使用其他方式登入',
    '別の方法でログインする',
    'Đăng nhập bằng',
  ],
  new_to_ringle: [
    '혹시 링글이 처음이신가요?',
    "Don't have a Ringle account?",
    's_auth.new_to_ringle',
    '您第一次使用Ringle吗？',
    '您第一次使用Ringle嗎？',
    'Ringleは初めてですか？',
    'Bạn không có tài khoản Ringle?',
  ],
  age_limit: [
    '(필수) 만 14세 이상입니다.',
    '[Required] I am 14 years old or older.',
    's_auth.age_limit',
    '（必选）已满14岁。',
    '（必選）已滿14歲。',
    '(必須) 満14歳以上です。',
    '[Bắt buộc] Tôi đã trên 14 tuổi',
  ],
  no_email: [
    '입력하신 이메일로 등록된 링글 계정이 없습니다.',
    'There is no registered account with this email.',
    's_auth.no_email',
    '无以该邮箱地址注册的Ringle账户。',
    '無以該電子信箱註冊的Ringle帳戶。',
    '入力したメールアドレスで登録されたRingleアカウントはありません。',
    'Không có tài khoản nào đăng ký với email này.',
  ],
  reset_email_sent: [
    '비밀번호 재설정을 위한 링크가 발송되었습니다. 이메일을 확인해보세요.\n보안 상의 이유로 링크는 10분간만 유효합니다.',
    'Password reset link sent. Please check your email.\nFor security purposes, the link will expire in 10 minutes.',
    's_auth.reset_email_sent',
    '已发送重设密码链接，请确认电子邮箱。\n 为保安全，链接将在10分钟后失效。',
    '已發送重設密碼連結，請確認電子信箱。\n為維護安全，連結將於10分鐘後失效。',
    'パスワード再設定のためのリンクが送信されました。メールを確認してみてください。\nセキュリティ上の理由からリンクは10分間のみ有効です。',
    'Đã gửi liên kết đặt lại mật khẩu. Vui lòng kiểm tra email.\nVì lý do bảo mật, link sẽ hết hạn trong 10 phút.',
  ],
  sns_signup: [
    '간편 회원가입',
    'Sign up with',
    's_auth.sns_signup',
    '简易会员注册',
    '簡易會員註冊',
    '簡単会員登録',
    'Đăng ký bằng',
  ],
  email_placeholder: [
    '아이디 (이메일)',
    'ID (email)',
    's_auth.email_placeholder',
    '用户名（电子邮箱）',
    '帳號（電子信箱）',
    'ID (メールアドレス)',
    'ID (email)',
  ],
  password_placeholder: [
    '6글자 이상 입력해주세요.',
    'at least 6 characters',
    's_auth.password_placeholder',
    '请输入6字以上。',
    '請輸入6字以上。',
    '6文字以上入力してください。',
    'ít nhất 6 kí tự',
  ],
  confirm_password_placeholder: [
    '새 비밀번호를 다시 입력해주세요.',
    'Re-enter your password',
    's_auth.confirm_password_placeholder',
    '请重新输入密码。',
    '請再次輸入新密碼。',
    '新しいパスワードを再度入力してください。',
    'Nhập lại mật khẩu',
  ],
  name_placeholder: [
    '한글 이름',
    'English name',
    's_auth.name_placeholder',
    '中文姓名',
    '中文姓名',
    '氏名（日本語）',
    'Tên Tiếng Anh',
  ],
  phone_verification: [
    '휴대폰 인증',
    'Phone Verification',
    's_auth.phone_verification',
    '手机认证',
    '手機驗證',
    'SMS認証',
    'Xác minh số điện thoại',
  ],
  phone_placeholder: [
    '휴대폰 번호 (숫자만)',
    'Phone number (number only)',
    's_auth.phone_placeholder',
    '手机号码（仅数字）',
    '手機號碼（僅數字）',
    '携帯電話番号 (数字のみ)',
    'Số điện thoại (chỉ nhập số)',
  ],
  verification_code_placeholder: [
    '비밀번호 확인',
    'Verification code',
    's_auth.verification_code_placeholder',
    '确认密码',
    '確認密碼',
    'パスワード確認',
    'Mã xác minh',
  ],
  verification_code_request: [
    '인증번호 요청',
    'Request verification code',
    's_auth.verification_code_request',
    '申请验证码',
    '傳送驗證碼',
    '認証コードリクエスト',
    'Yêu cầu mã xác minh',
  ],
  verification_code_re_request: [
    '인증번호 재요청',
    'Request verification code',
    's_auth.verification_code_re_request',
    '重新申请验证码',
    '重新傳送驗證碼',
    '認証コード再リクエスト',
    'Yêu cầu mã xác minh',
  ],
  native_languaged: [
    '모국어',
    'Native language',
    's_auth.native_languaged',
    '母语',
    '母語',
    '母国語',
    'Ngôn ngữ mẹ đẻ',
  ],
  native_language_placeholder: [
    '모국어를 선택해주세요',
    'Select your native language',
    's_auth.native_language_placeholder',
    '请选择母语',
    '請選擇母語',
    '母国語を選択してください。',
    'Chọn ngôn ngữ mẹ đẻ của bạn',
  ],
  submit_code: [
    '입력 완료',
    'Verify',
    's_auth.submit_code',
    '输入完毕',
    '輸入完畢',
    '入力完了',
    'Xác minh',
  ],
  verified: [
    '인증됨',
    'Verified',
    's_auth.verified',
    '已验证',
    '已驗證',
    '認証済み',
    'Đã xác minh',
  ],
  select_all: [
    '모두 선택',
    'Select all',
    's_auth.select_all',
    '选择全部',
    '全部選擇',
    'すべて選択',
    'Chọn tất cả',
  ],
  required_agree: [
    '(필수)',
    '[Required]',
    's_auth.required_agree',
    '（必选）',
    '（必選）',
    '(必須)',
    '[Bắt buộc]',
  ],
  agree: [
    '에 동의합니다',
    'I agree to',
    's_auth.agree',
    '同意',
    '同意',
    'に同意します',
    'Tôi đồng ý với',
  ],
  privacy_policy_required: [
    '개인정보 취급방침',
    'Privacy Policy',
    's_auth.privacy_policy_required',
    '个人资料处理方针',
    '個人資料處理方針',
    '個人情報保護方針',
    'Chính sách bảo mật',
  ],
  terms_of_service_required: [
    '이용약관',
    'Terms of Service',
    's_auth.terms_of_service_required',
    '使用条款',
    '使用條款',
    '利用規約',
    'Điều khoản dịch vụ',
  ],
  term_en: [
    '',
    '[Required] I agree to the Ringle Terms of Service and Privacy Policy',
    's_auth.term_en',
    '',
    '',
    '',
    '[Bắt buộc] Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của Ringle',
  ],
  kakao: [
    '카카오로 5초 만에 가입',
    'Sign up with Kakao',
    's_auth.kakao',
    '用Kakao简单5秒注册',
    '使用Kakao 5秒註冊',
    'KakaoTalkで5秒で登録',
    'Đăng ký bằng Kakao',
  ],
  with_email: [
    '이메일로 가입',
    'Sign up with email',
    's_auth.with_email',
    '用电子邮箱注册',
    '使用電子信箱註冊',
    'メールアドレスで登録',
    'Đăng ký bằng email',
  ],
  naver: [
    '네이버로 가입',
    'Sign up with Naver',
    's_auth.naver',
    '用NAVER注册',
    '使用NAVER註冊',
    'Naverで登録',
    'Đăng ký bằng Naver',
  ],
  choose: [
    '회원가입 방법을 선택해주세요',
    'Sign up with',
    's_auth.choose',
    '请选择会员注册方式',
    '請選擇會員註冊方式',
    '会員登録方法を選択してください。',
    'Đăng ký bằng',
  ],
  or: ['또는', 'or', 's_auth.or', '或', '或', 'または', 'hoặc'],
  en_more: [
    '',
    `If you want to sign in with Kakao, NAVER,
please change your language setting 
from English to Korean`,
    's_auth.en_more',
    '',
    '',
    '',
    `Nếu bạn muốn đăng nhập bằng Kakao, NAVER,
vui lòng đổi ngôn ngữ từ tiếng Anh qua tiếng Hàn`,
  ],
  modify: [
    '수정',
    'Update',
    's_auth.modify',
    '修改',
    '修改',
    '編集',
    'Cập nhật',
  ],
  have_account: [
    '이미 계정이 있으신가요?',
    'Already have an account?',
    's_auth.have_account',
    '您已经有账户吗？',
    '您已經有帳戶嗎？',
    'すでにアカウントをお持ちですか？',
    'Đã có tài khoản?',
  ],
  password_err: [
    '비밀번호를 6자리 이상 입력해 주세요',
    'requires at least 6 characters',
    's_auth.password_err',
    '请输入6位数以上的密码',
    '請輸入6位數以上的密碼',
    'パスワードを6桁以上入力してください。',
    'cần ít nhất 6 kí tự',
  ],
  sns_already: [
    '이미 해당 번호로 가입된 계정이 있습니다.\n링글팀에 문의해주세요.',
    'An account with this number already exists.\nPlease contact us with any questions.',
    's_auth.sns_already',
    '已有使用该号码注册的账户，\n请咨询Ringle团队。',
    '已有使用該號碼註冊的帳戶，\n請洽詢Ringle團隊。',
    'すでにこの番号で登録されたアカウントがあります。\nRingleチームにお問い合わせください。',
    'Tài khoản với số điện thoại này đã tồn tại.\nVui lòng liên hệ với chúng tôi nếu có bất kì câu hỏi nào.',
  ],
  sms_sent: [
    '전송하였습니다. 국가 코드와 번호를 올바로 입력시 2분내로 인증번호가 전송됩니다.\n\n인증번호가 문자로 수신되지 않을 경우, 홈페이지 내 [문의] 채널로 연락 주시기 바랍니다.',
    'Verification code sent. You should receive it in two minutes.\n\nIf you’re having trouble, please contact us via chat.',
    's_auth.sms_sent',
    '已发送验证码至 , \n请在3分钟内输入。',
    '已傳送驗證碼至，\n請於3分鐘內輸入。',
    'に認証コードを送信しました。\n3分以内に入力してください。',
    'Chúng tôi đã gửi mã xác nhận đến.\nVui lòng gửi lại trong 3 phút.',
  ],
  sns_agree: [
    '올바른 가입을 위해 이메일, 휴대폰 번호 모두 제공 동의해주세요.\n이메일은 링글 아이디로 사용되며,\n중요 수업 안내를 문자로 제공해드리고 있습니다.',
    'Please enter both email and phone number.\nYour email be your ID,\nWe send important lesson reminders via SMS.',
    's_auth.sns_agree',
    '请同意提供电子邮箱和手机号码以便正确注册。\n电子邮箱将作为Ringle账户使用，\n重要的课程信息将通过短信提供。',
    '為了成功註冊，請同意提供電子信箱及手機號碼。\n電子信箱將作為Ringle帳號使用，\n重要的課程資訊將透過簡訊提供。',
    '正しい登録のためにメールアドレス、携帯電話番号の両方の提供に同意してください。\nメールアドレスはRingle IDとして使用され、\n重要なレッスン案内をSMSでご提供しています。',
    'Vui lòng nhập cả email và số điện thoại.\nEmail của bạn sẽ là ID,\nChúng tôi gửi các thông báo quan trong qua tin nhắn.',
  ],
  lesson_not_opened: [
    '아직 수업에 입장할 수 없습니다.',
    "You can't enter this lesson yet.",
    's_auth.lesson_not_opened',
    '尚无法进入课程。',
    '尚無法進入課程。',
    'まだレッスンに入室できません。',
    'Bạn chưa thể vào học.',
  ],
  already_signed_up: [
    '이미 가입된 계정입니다.',
    'This account already exists.',
    's_auth.already_signed_up',
    '是已注册的账户。',
    '已註冊的帳戶。',
    'すでに登録されているアカウントです。',
    'Tài khoản này đã tồn tại.',
  ],
  name_err: [
    '이름을 입력해 주세요',
    'Enter your name',
    's_auth.name_err',
    '请输入姓名',
    '請輸入姓名',
    '氏名を入力してください。',
    'Nhập tên bạn',
  ],
  phone_check: [
    '올바른 휴대폰 번호를 입력해주세요.',
    'Invalid phone number. Please try again.',
    's_auth.phone_check',
    '请输入正确的手机号码。',
    '請輸入正確的手機號碼。',
    '正しい携帯電話番号を入力してください。',
    'Số điện thoại không hợp lệ. Vui lòng thử lại.',
  ],
  tutorapp: [
    `현재 사용하시는 앱은 학생 앱입니다.
튜터 앱을 이용해주세요.`,
    `This app is for Ringle students. 
Please download the Ringle Tutor app!`,
    's_auth.tutorapp',
    `您目前使用的APP手机软件为学生APP手机软件。
 请使用任课教师APP手机软件。`,
    `您目前使用的APP為學生APP。
請使用任課教師APP。`,
    `現在ご使用中のアプリは受講生用アプリです。
チューター用アプリをご利用ください。`,
    `Ứng dụng này dành cho học viên Ringle. 
Vui lòng tải ứng dụng Ringle Tutor!`,
  ],
  google: [
    '구글로 가입',
    'Sign up with Google',
    's_auth.google',
    '使用Google注册',
    '使用Google註冊',
    'Googleで登録',
    'Đăng ký bằng Google',
  ],
  facebook: [
    '페이스북으로 가입',
    'Sign up with Facebook',
    's_auth.facebook',
    '使用Facebook注册',
    '使用Facebook註冊',
    'Facebookで登録',
    'Đăng ký bằng Facebook',
  ],
  apple: [
    '애플로 가입',
    'Sign up with Apple',
    's_auth.apple',
    '使用Apple注册',
    '使用Apple註冊',
    'Appleで登録',
    'Đăng ký bằng Apple',
  ],
  send_code: [
    '인증번호 전송',
    'Request verification code',
    's_auth.send_code',
    '发送验证码',
    '傳送驗證碼',
    '認証コード送信',
    'Yêu cầu mã xác minh',
  ],
  apple_hide_email: [
    '"나의 이메일 가리기"를 선택한 경우, PC 로그인이 제한됩니다. PC 로그인을 희망하는 경우, "나의 이메일 공유하기"를 선택해 주세요.',
    'Selecting "Hide My Email" may restrict you from logging in via a web browser. If you want to log in via a web browser, please select "Share My Email".',
    's_auth.apple_hide_email',
    'Selecting "Hide My Email" may restrict you from logging in via a web browser. If you want to log in via a web browser, please select "Share My Email".',
    'Selecting "Hide My Email" may restrict you from logging in via a web browser. If you want to log in via a web browser, please select "Share My Email".',
    'Selecting "Hide My Email" may restrict you from logging in via a web browser. If you want to log in via a web browser, please select "Share My Email".',
    'Selecting "Hide My Email" may restrict you from logging in via a web browser. If you want to log in via a web browser, please select "Share My Email".',
  ],
};
export const s_web_auth = {
  enter_email_to_reset_your_password: [
    '이메일을 입력하시면, 비밀번호를 재설정 하실 수 있는 링크를 보내드립니다.',
    'Enter your email address to receive a link to reset your password.',
    's_web_auth.enter_email_to_reset_your_password',
    '输入电子邮箱地址，将给您发送重设密码链接。',
    '如輸入電子信箱，將為您發送重設密碼連結。',
    'メールアドレスを入力するとパスワード再設定用のリンクが送信されます。',
    'Nhập địa chỉ email của bạn để nhận link đặt lại mật khẩu.',
  ],
  enter_your_email: [
    '이메일을 입력하세요',
    'Please enter your email',
    's_web_auth.enter_your_email',
    '请输入电子邮箱',
    '請輸入電子信箱',
    'メールアドレスを入力してください。',
    'Vui lòng nhập email',
  ],
  enter_your_password: [
    '비밀번호를 입력하세요',
    'Enter your password',
    's_web_auth.enter_your_password',
    '请输入密码',
    '請輸入密碼',
    'パスワードを入力してください。',
    'Nhập mật khẩu',
  ],
  verify: [
    '인증',
    'Verify',
    's_web_auth.verify',
    '验证',
    '驗證',
    '認証',
    'Xác minh',
  ],
  verified: [
    '인증 완료',
    'Verified',
    's_web_auth.verified',
    '验证成功',
    '驗證成功',
    '認証完了',
    'Đã xác minh',
  ],
};
export const s_lessons = {
  self_intro: [
    '자기 소개',
    'Introductions',
    's_lessons.self_intro',
    '自我介绍',
    '自我介紹',
    '自己紹介',
    'Giới thiệu',
  ],
  recording: [
    '수업 녹음',
    'Record',
    's_lessons.recording',
    '课程录音',
    '課程錄音',
    'レッスン録音設定',
    'Thu âm',
  ],
  mode: [
    '수업 모드',
    'Lesson Mode',
    's_lessons.mode',
    '课程模式',
    '課程模式',
    'レッスンモード',
    'Kiểu bài học',
  ],
  focus_areas: [
    '집중 교정',
    'Main Area of Focus',
    's_lessons.focus_areas',
    '集中纠正',
    '集中糾正',
    '集中校正',
    'Phần sửa lỗi',
  ],
  in_depth_requests: [
    '상세 요청',
    'Additional requests',
    's_lessons.in_depth_requests',
    '具体要求',
    '具體要求',
    '詳細リクエスト',
    'Yêu cầu thêm',
  ],
  edit_settings: [
    '수업 방식 변경',
    'Set Lesson Style',
    's_lessons.edit_settings',
    '修改课程方式',
    '變更上課方式',
    'レッスン形式変更',
    'Chọn Hình thức học',
  ],
  available_lessons: [
    '신청 가능한 수업',
    'Available lessons',
    's_lessons.available_lessons',
    '可申请的课程',
    '可申請的課程',
    '予約可能なレッスン',
    'Buổi học trống',
  ],
  complete_scheduling: [
    '예약 완료',
    'Complete Booking',
    's_lessons.complete_scheduling',
    '预约成功',
    '預約完成',
    '予約完了',
    'Hoàn thành đặt lịch',
  ],
  select_a_lesson_for_scheduling: [
    '신청할 수업을 선택해주세요!',
    'Select a slot',
    's_lessons.select_a_lesson_for_scheduling',
    '请选择要申请的课程！',
    '請選擇欲申請的課程！',
    '予約するレッスンを選択してください',
    'Chọn buổi học',
  ],
  sorry_this_lesson_with_this_tutor_has_been_already_scheduled: [
    '선택하신 수업 시간과 튜터에 대해 다른 고객이 먼저 예약을 완료하셨습니다.',
    'Sorry, this slot is taken.',
    's_lessons.sorry_this_lesson_with_this_tutor_has_been_already_scheduled',
    '您所选的课程时间及任课教师，已被其他学生预约。',
    '其他學生已搶先預約您選擇的課程時間與任課教師。',
    '選択したレッスン時間とチューターは他のお客様が先に予約を完了しました。',
    'Xin lỗi, buổi học này đã được đặt.',
  ],
  if_the_lesson_with_the_tutor_becomes_unavailable: [
    '신청한 수업이 선택한 튜터와 이뤄지지 않을 경우 :',
    "Please select how you'd like to resolve cancellation by your tutor:",
    's_lessons.if_the_lesson_with_the_tutor_becomes_unavailable',
    '申请的课程与选择的任课教师未搭配成功时：',
    '申請的課程與選擇的任課教師未搭配成功時：',
    '予約したレッスンが選択したチューターと行われない場合 :',
    'Vui lòng lựa chọn hướng giải quyết cho buổi học bị huỷ bởi gia sư:',
  ],
  lessons_selected: [
    '신청한 수업',
    'Lessons selected',
    's_lessons.lessons_selected',
    '申请的课程',
    '申請的課程',
    '予約したレッスン',
    'Buổi học được chọn',
  ],
  you_cannot_change_the_time_for_this_lesson: [
    '예약하신 수업은 수업 시간을 변경할 수 없습니다.',
    'You cannot change time for this lesson.',
    's_lessons.you_cannot_change_the_time_for_this_lesson',
    '您无法变更已预约的课程时间。',
    '您無法變更您預約的課程時間。',
    '予約したレッスンはレッスン時間を変更することができません。',
    'Bạn không thể đổi giờ cho buổi học này.',
  ],
  your_coupon_wont_be_refunded: [
    '예약하신 수업은 수업을 취소하거나 참석 하지 않을 경우 수업권이 차감됩니다.',
    'Your credit won’t be refunded when you cancel this lesson or don’t show up.',
    's_lessons.your_coupon_wont_be_refunded',
    '取消预约的课程或未出席时，将扣除课程券。',
    '取消預約的課程或未出席時，將扣除課程券。',
    '予約したレッスンはレッスンをキャンセルしたり出席しない場合、レッスンチケットが差し引かれます。',
    'Thẻ học của bạn sẽ không được hoàn lại nếu bạn huỷ buổi học hoặc vắng mặt.',
  ],
  scheduling_failed: [
    '예약 실패',
    'Booking Failed',
    's_lessons.scheduling_failed',
    '预约失败',
    '預約失敗',
    '予約失敗',
    'Đặt lịch thất bại',
  ],
  expired_in_n_days: n => [
    `수강기간: ${n}일 남음`,
    `Expires in ${n} days`,
    's_lessons.expired_in_n_days',
    `课程时间：剩下${n}日`,
    `聽課期間：剩下${n}日`,
    `受講期間: 残り${n}日`,
    `Hết hạn trong ${n} ngày`,
  ],
  available_n: [
    '남은 횟수',
    'Available',
    's_lessons.available_n',
    '剩余次数',
    '剩餘次數',
    '残り回数',
    'Trống lịch',
  ],
  select_a_lesson_coupon: [
    '수업권 선택하기',
    'Select a lesson credit',
    's_lessons.select_a_lesson_coupon',
    '选择课程券',
    '選擇課程券',
    'レッスンチケットを選択する',
    'Chọn thẻ học',
  ],
  you_will_earn_additional_n_points_with_this_coupon: obj => [
    <>수업 포인트를 추가로 ₩{obj} 더 받습니다.</>,
    <>You will earn additional ${obj} with this credit.</>,
    's_lessons.you_will_earn_additional_n_points_with_this_coupon',
    <>额外获取₩{obj}的课程积分.</>,
    <>額外獲得${obj}P的課程點數。</>,
    <>レッスンポイントを${obj}P追加で受け取れます。</>,
    <>Bạn nhận được thêm ${obj}P với thẻ học này.</>,
  ],
  select_the_packet_you_want_to_change: [
    '변경하실 교재를 선택해주세요.',
    'Select the lesson material you want to change.',
    's_lessons.select_the_packet_you_want_to_change',
    '请选择需要变更的教材。',
    '請選擇欲變更的教材。',
    '変更する教材を選択してください。',
    'Chọn tài liệu học bạn muốn đổi.',
  ],
  no_lessons_available_for_the_selected_time: [
    '수강 신청할 수 없는 시간입니다.',
    'No lessons available for the selected time',
    's_lessons.no_lessons_available_for_the_selected_time',
    '是无法申请课程的时间。',
    '無法申請課程的時間。',
    '受講を予約することができない時間です。',
    'Không có buổi học trống trong thời gian được chọn',
  ],
  you_already_have_a_lesson_scheduled_for_the_selected_time: [
    '이미 신청한 수업과 겹치는 시간입니다.',
    'You already have a lesson scheduled for the selected time.',
    's_lessons.you_already_have_a_lesson_scheduled_for_the_selected_time',
    '与已申请的课程时间重叠。',
    '與已申請的課程時間重疊。',
    'すでに予約したレッスンと重なる時間です。',
    'Bạn đã đặt một buổi học trong thời gian được chọn.',
  ],
  the_coupon_you_selected_is_invalid: [
    '유효하지 않은 쿠폰 id 입니다.',
    'The credit you selected is invalid.',
    's_lessons.the_coupon_you_selected_is_invalid',
    '是无效的优惠券id。',
    '無效的優惠券id。',
    '有効ではないクーポンidです。',
    'Thẻ học bạn chọn không hợp lệ.',
  ],
  you_dont_have_enough_coupons: [
    '수업권 개수가 부족합니다.',
    'You have no lesson credits. Please book lessons after purchasing more credits.',
    's_lessons.you_dont_have_enough_coupons',
    '课程券数量不足。',
    '課程券數量不足。',
    'レッスンチケットの枚数が足りません。',
    'Bạn không còn thẻ học nào. Vui lòng đặt lịch học sau khi thanh toán thêm thẻ học.',
  ],
  the_selected_lesson_starts_within_48_hours: [
    '선택하신 수업은 48시간 이내에 시작하는 수업입니다. 튜터와의 시차 및 응답 속도에 따라 수업이 이뤄지지 않을 수도 있습니다.',
    'This lesson starts in less than 48 hours. Tutor may not confirm in time.',
    's_lessons.the_selected_lesson_starts_within_48_hours',
    '您选择的课程为48小时以內即将开始的课程，根据与任课教师的时差及回复速度，很有可能匹配失败。',
    '您選擇的課程為48小時以內即將開始的課程，依據與任課教師的時差與回覆速度，可能無法成功上課。',
    '選択したレッスンは48時間以内に始まるレッスンです。チューターとの時差および返答スピードからマッチングしない可能性が高いです。',
    'Buổi học bắt đầu 48 giờ tới. Gia sư có thể không kịp xác nhận.',
  ],
  me: ['나', 'Me', 's_lessons.me', '我', '我', 'あなた', 'Tôi'],
  tutor: [
    '튜터',
    'Tutor',
    's_lessons.tutor',
    '任课教师',
    '任課教師',
    'チューター',
    'Gia sư',
  ],
  avg_ringler: [
    '상위 20%',
    'Top 20%',
    's_lessons.avg_ringler',
    '前20%',
    '前20%',
    '上位20%',
    'Top 20%',
  ],
  no_content_corrected: [
    '교정된 문장이 없습니다.',
    'No correction completed.',
    's_lessons.no_content_corrected',
    '无纠正过的句子。',
    '無糾正過的句子。',
    '校正された文章はありません。',
    'Không có chỉnh sửa nào được hoàn thành.',
  ],
  within_2_hour_coupon_available: [
    '긴급편성 수업권 가능',
    'Fast-book Lesson Credit Available',
    's_lessons.within_2_hour_coupon_available',
    '可使用紧急编制课程券',
    '可使用緊急分班課程券',
    '直前予約レッスンチケットが使用可能',
    'Thẻ Đặt nhanh có sẵn',
  ],
  has_not_unassigned_lessons: [
    '현재 예약 가능한\n24시간 이내 수업이 없습니다.',
    'Sorry, there are currently\nno lessons available within 24 hours.',
    's_lessons.has_not_unassigned_lessons',
    '目前没有可预约的\n24小时以内的课程。',
    '目前沒有可預約的\n24小時以內的課程。',
    '現在予約可能な\n24時間以内のレッスンはありません。',
    'Xin lỗi, hiện giờ\nkhông có buổi học nào trống trong 24 giờ tới.',
  ],
  lesson_entering: [
    '수업에 입장 중입니다...',
    'Entering lesson...',
    's_lessons.lesson_entering',
    '正在进入课程…',
    '正在進入課程…',
    'レッスンに入室しています...',
    'Vào học...',
  ],
  trial_mode: [
    '체험 수업은 각 질문에 대한 대화가 끝난 후 교정받는 방식으로 진행합니다. 정규 수업에서는 수업 모드를 교정 중심과 토론 중심 중에 선택하고 세부 수업 방식을 선택할 수 있습니다.',
    'All trial lessons are discussion-focused. Paid lessons can either be discussion-focused or correction focused.',
    's_lessons.trial_mode',
    '体验课程将以对每个问题的对话结束后进行纠正的方式进行。进行正规课程时，可在课程模式中选择以纠正为主或以讨论为主心的上课方式，也可选择细化的上课方式。',
    '進行體驗課程時，在針對各提問結束對話後，以糾正方式進行。進行正規課程時，可於課程模式選擇以糾正為主或以討論為主後，選擇詳細的上課方式。',
    '体験レッスンは各質問の会話が終わった後に校正してもらう方式で行われます。正規レッスンでは、レッスンモードを校正中心とディスカッション中心から選択して細かいレッスン方式を選択することができます。',
    'Tất cả buổi học thử sẽ tập trung thảo luận. Buổi học trả phí có thể tùy chọn tập trung thảo luận hoặc tập trung sửa lỗi.',
  ],
  schedule: {
    matching_option: [
      '튜터 매칭 옵션',
      'Tutor matching option',
      's_lessons.schedule.matching_option',
      '任课教师匹配选项',
      '任課教師配對選項',
      'チューターマッチングオプション',
      'Lựa chọn sắp xếp gia sư',
    ],
    reason_for_failure: [
      '실패 사유:',
      'Failed:',
      's_lessons.schedule.reason_for_failure',
      '失败原因：',
      '失敗原因：',
      '失敗理由:',
      'Thất bại:',
    ],
    lessons_selected: [
      '예약 신청한 수업',
      'Selected Lesson',
      's_lessons.schedule.lessons_selected',
      '已申请预约的课程',
      '已申請預約的課程',
      '予約確定前レッスン',
      'Buổi học được chọn',
    ],
    impossible_time: [
      '선택한 시간에 다른 튜터 매칭 받기는 가능하지 않습니다.',
      "We can't  match you a different tutor at this selected time.",
      's_lessons.schedule.impossible_time',
      '无法在所选时间匹配其他任课教师。',
      '已選擇的時間無法接受其他任課教師配對。',
      '選択した時間に他のチューターをマッチングすることはできません。',
      'Chúng tôi không thể xếp bạn với một gia sư khác trong thời gian được chọn.',
    ],
  },
  upcoming: {
    view_tutors_schedule: [
      '튜터의 다른 시간 보기',
      "View tutor's availability",
      's_lessons.upcoming.view_tutors_schedule',
      '查看任课教师的其他时间',
      '查看任課教師的其他時間',
      'チューターの他の時間を見る',
      'Xem lịch trống của gia sư',
    ],
  },
};
export const s_upcoming = {
  no_lessons_are_scheduled_: [
    '현재 예정되어 있는 수업이 없습니다.',
    'You have no upcoming lessons.',
    's_upcoming.no_lessons_are_scheduled_',
    '目前无预定的课程。',
    '目前無預定的課程。',
    '現在予定されているレッスンはありません。',
    'Bạn không có buổi học nào sắp tới.',
  ],
  schedule_lesson: [
    '수업 예약 하러 가기',
    'Book Lessons',
    's_upcoming.schedule_lesson',
    '前往预约课程',
    '前往預約課程',
    'レッスンを予約する',
    'Đặt lịch buổi học',
  ],
  not_confirmed: [
    '확정 대기중',
    'Not Confirmed',
    's_upcoming.not_confirmed',
    '等待确定中',
    '等待確定中',
    '確定待ち',
    'Chưa xác nhận',
  ],
  confirmed: [
    '확정',
    'Confirmed',
    's_upcoming.confirmed',
    '已确定',
    '確定',
    '確定済み',
    'Đã xác nhận',
  ],
  auto_matching: [
    '링글 자동 매칭',
    'Auto Matching',
    's_upcoming.auto_matching',
    'Ringle自动匹配',
    'Ringle自動配對',
    'Ringle自動マッチング',
    'Xếp tự động',
  ],
  in_progress_of_tutor_matching: [
    '고객님께 적합한 튜터를 매칭 중입니다.',
    'We are finding the best tutor for you',
    's_upcoming.in_progress_of_tutor_matching',
    '正在为您匹配适合的任课教师。',
    '正在為您配對適合的任課教師。',
    'お客様に最適なチューターをマッチング中です。',
    'Chúng tôi đang tìm gia sư tốt nhất cho bạn',
  ],
  to_do_list: [
    '예습 목록',
    'To-Do List',
    's_upcoming.to_do_list',
    '预习清单',
    '預習清單',
    '予習リスト',
    'Danh sách cần làm',
  ],
  set_lesson_style: [
    '수업 방식 설정',
    'Set Lesson Style',
    's_upcoming.set_lesson_style',
    '课程方式设定',
    '上課方式設定',
    'レッスン形式設定',
    'Chọn Hình thức học',
  ],
  enter_lesson: [
    '수업 입장',
    'Enter Lesson',
    's_upcoming.enter_lesson',
    '课程入场',
    '進入課程',
    'レッスン開始',
    'Vào lớp',
  ],
  change_option_for_tutor_matching: [
    '튜터 매칭 옵션 변경',
    'Change How I match with tutors',
    's_upcoming.change_option_for_tutor_matching',
    '修改任课教师匹配选项',
    '變更任課教師配對選項',
    'チューターマッチングオプション変更',
    'Đổi cách tôi được xếp với gia sư',
  ],
  change_time: [
    '수업시간 변경',
    'Reschedule Lesson',
    's_upcoming.change_time',
    '变更课程时间',
    '變更課程時間',
    'レッスン時間変更',
    'Đổi lịch học',
  ],
  change_time_explanation: [
    '수업이 확정되기 전까지만 가능합니다.',
    'Lesson time can only be changed before the lesson is confirmed by tutor.',
    's_upcoming.change_time_explanation',
    '仅可在课程确定之前进行。',
    '僅可於課程確定之前進行。',
    'レッスン予約が確定する前まで可能です。',
    'Giờ học chỉ có thể thay đổi trước khi gia sư xác nhận buổi học.',
  ],
  change_packet: [
    '교재 변경',
    'Change Materials',
    's_upcoming.change_packet',
    '教材变更',
    '變更教材',
    '教材変更',
    'Thay đổi Tài liệu học',
  ],
  set_lesson_style_explanation: [
    '수업녹음, 수업모드 등에 대해 설정할 수 있습니다.',
    'Set lesson audio-recording, lesson mode, and other preferences',
    's_upcoming.set_lesson_style_explanation',
    '可设定课程录音、课程模式。',
    '可設定課程錄音、課程模式。',
    '録音設定、レッスンモードなどを設定することができます。',
    'Cài đặt thu âm buổi học, kiểu bài học và các tuỳ chọn khác',
  ],
  cancel_lesson: [
    '수업 취소',
    'Cancel Lesson',
    's_upcoming.cancel_lesson',
    '课程取消',
    '取消課程',
    'レッスンキャンセル',
    'Huỷ buổi học',
  ],
  select_the_reason_for_cancellation_: [
    '수업 취소 이유를 선택해 주세요.',
    'Select reason for cancellation.',
    's_upcoming.select_the_reason_for_cancellation_',
    '请选择取消课程的理由。',
    '請選擇取消課程的理由。',
    'レッスンのキャンセル理由を選択してください。',
    'Chọn lí do huỷ.',
  ],
  request_cancellation: [
    '수업 취소 요청',
    'Cancel Lessons',
    's_upcoming.request_cancellation',
    '要求取消课程',
    '要求取消課程',
    'レッスンキャンセル申請',
    'Huỷ buổi học',
  ],
  do_not_record: [
    '녹음을 원하지 않습니다.',
    'Do Not Record',
    's_upcoming.do_not_record',
    '不希望录音。',
    '不希望錄音。',
    '録音を希望しません。',
    'Không thu âm',
  ],
  mp3_explanation: [
    '수업 녹음 파일은 수업 종료 후 [복습] 메뉴에서 확인할 수 있습니다.(파일 제작은 최대 24시간이 소요됩니다)',
    'You can check the class recording file in the [Review] menu after the class is over. (It may take up to 24 hours to create a file.)',
    's_upcoming.mp3_explanation',
    '课程录音MP3文件, 可于课程结束后文件制作完成时在[复习]菜单中进行确认。（制作文件至少需要24小时）',
    '課程錄音檔可在課程結束後，於[複習]選單確認。（製作檔案最長需要24小時）',
    'レッスン録音MP3ファイルは、レッスン終了後[復習] メニューから確認することができます。(ファイル作成には最長24時間かかります。)',
    'Bạn có thể kiểm tra file thu âm ở menu [Đánh giá] sau khi buổi học kết thúc. (Có thể cần tối thiểu 24 giờ để tạo file.)',
  ],
  self_introduction: [
    '자기 소개',
    'Tutor & Student Introductions',
    's_upcoming.self_introduction',
    '自我介绍',
    '自我介紹',
    '自己紹介',
    'Gia sư & Học viên giới thiệu',
  ],
  intro_explanation: [
    '소개 없이 바로 수업할 경우 미리 튜터가 알 수 있도록 자신을 소개하는 글을 영어로 적어주세요.',
    "If you'd like to start the lesson without introductions, please write a brief intro under 'Other request.",
    's_upcoming.intro_explanation',
    '如未先进行自我介绍便开始上课，为了便于任课教师先了解您，请以英文写下自我介绍短文。',
    '如未先自我介紹便開始上課的情況，請以英文寫下介紹自己的短文，以利任課教師先認識您。',
    '自己紹介なしですぐにレッスンを受ける場合は、チューターがわかるように事前に自己紹介文を作成してください。',
    "Nếu bạn muốn bắt đầu buổi học bỏ qua phần giới thiệu, vui lòng ghi lại giới thiệu sơ lược về mình dưới phần 'Yêu cầu khác.",
  ],
  lesson_mode: [
    '수업 모드',
    'Lesson Mode',
    's_upcoming.lesson_mode',
    '课程模式',
    '課程模式',
    'レッスンモード',
    'Kiểu bài học',
  ],
  intensive_area: [
    '집중 교정 영역 (다중 선택 가능)',
    'Main Area of Focus (Multi-selectable)',
    's_upcoming.intensive_area',
    '集中纠正区域 (可进行多选)',
    '集中糾正領域（可複選）',
    '集中校正分野 (複数選択可)',
    'Phần sửa lỗi (Có thể chọn nhiều)',
  ],
  selectable_requests: [
    '상세 요청 사항 (다중 선택 가능)',
    'Additional Requests (Multi-selectable)',
    's_upcoming.selectable_requests',
    '具体要求事项(可进行多选)',
    '具體要求事項（可複選）',
    'リクエスト事項 (複数選択可)',
    'Yêu cầu thêm (có thể chọn nhiều)',
  ],
  additional_requests: [
    '추가 요청 사항',
    'Other Requests',
    's_upcoming.additional_requests',
    '额外要求事项',
    '額外要求事項',
    '追加リクエスト事項',
    'Yêu cầu khác',
  ],
  additional_requests_explanation: [
    '튜터에게 구체적으로 원하는 수업 방식을 영어로 남겨주세요.',
    'Feel free to enter your additional requests.',
    's_upcoming.additional_requests_explanation',
    '请用英文具体写下希望任课教师进行的上课方式。',
    '請以英文具體寫下希望任課教師進行的上課方式。',
    'チューターに具体的に希望するレッスン方式を英語で入力してください。',
    'Thoải mái bổ sung thêm yêu cầu khác.',
  ],
  lesson_enter_warning: [
    '수업 입장이 안되실 경우, 앱을 완전히 종료 후에 다시 시도해주세요.',
    "If you can't enter the class, please completely shut down the app and try again.",
    's_upcoming.lesson_enter_warning',
    '如无法顺利进入课程时，请关闭APP后，重新尝试一次。',
    '無法順利進入課程時，請先結束APP後，重新嘗試一次。',
    'レッスンに入室できない場合、アプリを終了してから再度お試しください。',
    'Nếu bạn không thể vào học, vui lòng tắt hoàn toàn ứng dụng và thử lại.',
  ],
  schedule_lesson_btn: [
    '수업 예약 하기',
    'Book Lesson',
    's_upcoming.schedule_lesson_btn',
    '预约课程',
    '預約課程',
    'レッスンを予約する',
    'Đặt lịch buổi học',
  ],
  noteTrial: [
    '복습을 위한 녹음 파일과 대화 스크립트 제공을 위해 수업이 녹음됩니다.',
    'Classes are recorded to provide recording files for review and dialogue scripts.',
    's_upcoming.noteTrial',
    '为提供复习录音文件与对话脚本，将进行课程录音。',
    '為提供複習錄音檔與對話腳本，將進行課程錄音。',
    '復習を目的とした録音ファイルと会話スクリプトの提供のため、レッスンは録音されます。',
    'Các buổi học được thu âm để cung cấp file ghi âm và bản ghi thoại cho bạn xem lại.',
  ],
  enter_dialog: [
    '수업 입장 안내',
    'Entering the lesson',
    's_upcoming.enter_dialog',
    '课程入场介绍',
    '課程進場通知',
    'レッスン入室方法のご案内',
    'Đang vào học',
  ],
  will_open: (day, hour, min) => [
    `${day <= 0 ? '' : `${day}일 `}${hour <= 0 ? '' : `${hour}시간 `}${
      min <= 0 ? '' : `${min}분 `
    }후에 수업이 시작됩니다.`,
    `The lesson will begin in ${day <= 0 ? '' : `${day}days `}${
      hour <= 0 ? '' : `${hour}hours `
    }${min <= 0 ? '' : `${min}mins`}.`,
    's_upcoming.will_open',
    `${day <= 0 ? '' : `${day}日`}${hour <= 0 ? '' : `${hour}小时`}${
      min <= 0 ? '' : `${min}分钟`
    }后开始上课。`,
    `${day <= 0 ? '' : `${day}日`}${hour <= 0 ? '' : `${hour}小時`}${
      min <= 0 ? '' : `${min}分鐘`
    }後開始上課。`,
    `${day <= 0 ? '' : `${day}日 `}${hour <= 0 ? '' : `${hour}時間 `}${
      min <= 0 ? '' : `${min}分 `
    }後にレッスンが始まります。`,
    `Buổi học sẽ bắt đầu trong ${day <= 0 ? '' : `${day}ngày `}${
      hour <= 0 ? '' : `${hour}giờ `
    }${min <= 0 ? '' : `${min}phút`}.`,
  ],
  lesson_time: [
    '수업 시간',
    'Lesson time',
    's_upcoming.lesson_time',
    '课程时间',
    '課程時間',
    'レッスン時間',
    'Thời gian học',
  ],
  enter_dialog_text: [
    <View>
      수업 입장은 수업 시작 <View bold>15분 전</View>부터 가능합니다.{'\n'}
      <View bold>[PC 사용 권장]</View> 수업 중 실시간 교정(Google docs)과 교재는
      <View bold> PC 환경</View>에서만 확인할 수 있습니다.
    </View>,
    <View>
      You can enter the lesson <View bold>15 minutes</View> before the lesson
      begins.{'\n'}
      Please enter Ringle lessons on a<View bold> web browser</View> to view
      real-time corrections and lesson materials.
    </View>,
    's_upcoming.enter_dialog_text',
    <View>
      可在上课开始<View bold>15分钟前</View>进入课程。 {'\n'}
      <View bold>[建议使用电脑]</View>上课时的实时纠正（Google
      docs）与教材仅可在<View bold> 电脑环境下</View>确认。{' '}
    </View>,
    <View>
      可於上課開始<View bold>15分鐘前</View>進入課程。{'\n'}
      <View bold>[建議使用電腦]</View>上課時的即時糾正（Google
      docs）與教材僅可於<View bold> 電腦</View>確認。
    </View>,
    <View>
      レッスン入室はレッスン開始<View bold>15分前</View>から可能です。{'\n'}
      <View bold>[PC使用推奨]</View>レッスン中のリアルタイム校正(Google
      docs)と教材は
      <View bold> PC環境</View>でのみ確認することができます。
    </View>,
    <View>
      Bạn có thể vào lớp <View bold>15 phút</View> trước khi buổi học bắt đầu.
      {'\n'}
      Vui lòng vào học trên
      <View bold> trình duyệt web</View> để xem trực tiếp phần sửa lỗi và tài
      liệu học.
    </View>,
  ],
  lesson_audio_recording: [
    '수업 녹음',
    'Lesson Audio-Recording',
    's_upcoming.lesson_audio_recording',
    '课程录音',
    '課程錄音',
    'レッスン録音設定',
    'Tự động ghi âm bài học',
  ],
  mp3_warning: [
    <View>
      수업 녹음 설정은 <View danger>수업 시작 15분 전까지만 변경 가능</View>
      합니다.
    </View>,
    <View>
      You can change recording preferences{' '}
      <View danger> up to 15 minutes before the lesson</View>.
    </View>,
    's_upcoming.mp3_warning',
    <View>
      课程录音设定<View danger>最晚可在课程开始15分钟前修改</View>。{' '}
    </View>,
    <View>
      課程錄音設定<View danger>最晚可於課程開始15分鐘前變更</View>。
    </View>,
    <View>
      レッスン録音設定は<View danger>レッスン開始15分前まで変更可能</View>です。
    </View>,
    <View>
      Bạn có thể đổi tuỳ chọn ghi âm{' '}
      <View danger> 15 phút trước khi bắt đầu buổi học</View>.
    </View>,
  ],
  first_user: [
    <>
      {' '}
      <View bold>예습 & 수업 페이지</View>에서는 수업 전 준비,{'\n'}예정된
      수업의 변경 및 취소,{'\n'}그리고 수업 방식을 설정할 수 있습니다.
    </>,
    <>
      You can set lesson styles and cancel or reschedule your lessons under{' '}
      <View bold>Lessons</View>.
    </>,
    's_upcoming.first_user',
    <>
      可在<View bold>预习 & 课程页面</View>进行课程开始前准备、{'\n'}修改或取消
      预定的课程，{'\n'}以及设定上课方式。{' '}
    </>,
    <>
      可於<View bold>預習 & 課程頁面</View>進行課程開始前的準備、{'\n'}
      變更或取消 預定的課程，{'\n'}以及設定上課方式。
    </>,
    <>
      {' '}
      <View bold>予習 & レッスンページ</View>ではレッスン前の準備、{'\n'}
      レッスン 予定の変更およびキャンセル、{'\n'}
      そしてレッスン方式を設定することができます。
    </>,
    <>
      Bạn có thể chọn hình thức học và huỷ hoặc dời lịch dưới phần{' '}
      <View bold>Buổi học</View>.
    </>,
  ],
};
export const s_upcoming_lessons = {
  after_tutor_cancel: {
    automatic_match_me: [
      '다른 튜터 매칭 받기',
      'Automatically match me with another tutor.',
      's_upcoming_lessons.after_tutor_cancel.automatic_match_me',
      '接受其他任课教师匹配',
      '接受其他任課教師配對',
      '他のチューターとマッチングしてもらう',
      'Tự động xếp tôi với một gia sư khác.',
    ],
    plz_let_me_know_available_times: [
      '선택한 튜터의 다른 시간 확인하기',
      "Show me this tutor's availability.",
      's_upcoming_lessons.after_tutor_cancel.plz_let_me_know_available_times',
      '确认所选任课教师的其他时间',
      '確認所選的任課教師其他時間',
      '選択したチューターの別時間帯を確認する',
      'Hiển thị lịch trống của gia sư này.',
    ],
    cancel_and_restore_credit: [
      '수업 취소 후 사용한 수업권 복구받기',
      'Cancel and restore my lesson credit.',
      's_upcoming_lessons.after_tutor_cancel.cancel_and_restore_credit',
      '课程取消后课程券返还',
      '取消課程後復原已使用的課程券',
      '予約をキャンセルし、使用したレッスンチケットを復元する',
      'Huỷ và hoàn lại thẻ học của tôi.',
    ],
  },
  change_cancel: [
    '변경/ 취소',
    'Change/Cancel',
    's_upcoming_lessons.change_cancel',
    '变更／取消',
    '變更／取消',
    '変更/キャンセル',
    'Thay đổi/Huỷ',
  ],
  addi_request: [
    '추가 요청 사항',
    'Additional requests',
    's_upcoming_lessons.addi_request',
    '额外要求事项',
    '額外要求事項',
    '追加リクエスト事項',
    'Yêu cầu thêm',
  ],
  focus_modifi: [
    '집중 교정',
    'Correction areas',
    's_upcoming_lessons.focus_modifi',
    '集中纠正',
    '集中糾正',
    '集中校正',
    'Phần sửa lỗi',
  ],
  plz_check_feedback: [
    <>
      수업 후 학습 효과를 높이기 위해
      <br />
      녹음 된 수업을 듣거나 튜터 피드백과 수업분석을 확인해보세요.
    </>,
    <>
      Try <br />
      replaying lesson recording, reading tutor feedback or checking AI
      Analysis.
    </>,
    's_upcoming_lessons.plz_check_feedback',
    <>
      课程结束后，为提高学习效果，
      <br />
      请聆听课程录音档或确认任课教师意见回馈及课程分析。{' '}
    </>,
    <>
      課程結束後，為提高學習效果，
      <br />
      請聆聽課程錄音檔或確認任課教師意見回饋及課程分析。
    </>,
    <>
      レッスン後の学習効果を高めるために
      <br />
      録音されたレッスンを聴いたり、チューターフィードバックとレッスン分析を確認してみたりしましょう。
    </>,
    <>
      Thử <br />
      phát lại ghi âm buổi học, xem đánh giá của gia sư và kiểm tra phân tích
      AI.
    </>,
  ],
  plz_choose_impossible_lesson_option: [
    '튜터가 개인적 사정으로 수업이 불가할 경우, 아래 선택 사항 중 원하시는 처리방법을 선택해주세요.',
    "Please select how you'd like to resolve cancellation by your tutor.",
    's_upcoming_lessons.plz_choose_impossible_lesson_option',
    '如任课教师因个人问题无法授课时，请在以下选项中选择希望的处理方式。',
    '如任課教師因個人問題無法授課時，請於以下選項中選擇希望的處理方式。',
    'チューターが個人的な事情によりレッスンを行えない場合は、以下の選択肢の中からご希望の処理方法をお選びください。',
    'Vui lòng lựa chọn hướng giải quyết cho buổi học bị huỷ bởi gia sư',
  ],
  desc_about_tiral_lesson: [
    '체험 수업은 각 질문에 대한 대화가 끝난 후 교정받는 방식으로 진행합니다. 정규 수업에서는 수업모드를 교정 중심과 토론 중심 중에 선택하고 세부 수업 방식을 선택할 수 있습니다.',
    'You can check the class recording file in the [Review] menu after the class is over. (It may take up to 24 hours to create a file.)',
    's_upcoming_lessons.desc_about_tiral_lesson',
    '体验课程将以对每个问题的对话结束后进行纠正的方式进行。进行正规课程时，可在课程模式中选择以纠正为主或以讨论为主的上课方式，也可选择细化的上课方式。',
    '進行體驗課程時，在針對各提問結束對話後，以糾正方式進行。進行正規課程時，可於課程模式選擇以糾正為主或以討論為主後，選擇詳細的上課方式。',
    '体験レッスンは各質問の会話が終わった後に校正してもらう方式で行われます。正規レッスンでは、レッスンモードを校正中心とディスカッション中心から選択して細かいレッスン方式を選択することができます。',
    'Tất cả buổi học thử sẽ tập trung thảo luận. Buổi học trả phí có thể tùy chọn tập trung thảo luận hoặc tập trung sửa lỗi.',
  ],
  desc_about_lesson_recording_file: [
    '수업 녹음 파일은 수업 종료 후 [복습] 메뉴에서 확인할 수 있습니다. (파일 제작은 최대 24시간이 소요됩니다.)',
    'You can check the class recording file in the [Review] menu after the class is over. (It may take up to 24 hours to create a file.)',
    's_upcoming_lessons.desc_about_lesson_recording_file',
    '课程录音MP3文件, 可于课程结束后文件制作完成时于“复习”菜单中进行确认。（制作文件至少需要24小时）',
    '課程錄音檔可在課程結束後，於[複習]選單確認。（製作檔案最長需要24小時。）',
    'レッスン録音ファイルはレッスン終了後 [復習] メニューから確認することができます。 (ファイル制作には最長24時間かかります。)',
    'Bạn có thể kiểm tra file ghi âm buổi học trong phần [Đánh giá] trên menu sau khi học xong. (Cần ít nhất 24 giờ để tạo file.)',
  ],
  desc_about_lesson_recording_policy: [
    '*복습을 위한 녹음 파일과 대화 스크립트 제공을 위해 수업이 녹음됩니다.',
    '*Lesson will be recorded for lesson audio replay and transcript.',
    's_upcoming_lessons.desc_about_lesson_recording_policy',
    '为提供复习录音文件与对话脚本，将进行课程录音。',
    '*為提供複習錄音檔與對話腳本，將進行課程錄音。',
    '*復習を目的とした録音ファイルと会話スクリプトの提供のため、レッスンは録音されます。',
    '*Buổi học sẽ được ghi âm để phát lại cả file ghi âm và bản ghi.',
  ],
};
export const s_lesson_edit = {
  select_time_to_change: [
    '변경할 시간을 선택해 주세요.',
    'Select time.',
    's_lesson_edit.select_time_to_change',
    '请选择想修改的时间。',
    '請選擇欲變更的時間。',
    '変更する時間を選択してください。',
    'Chọn giờ.',
  ],
  let_us_know_the_reason_for_cancelling: [
    '기타 취소 사유를 입력해주세요.',
    'Select reason for cancellation.',
    's_lesson_edit.let_us_know_the_reason_for_cancelling',
    '请输入其他取消原因。',
    '請輸入其他取消原因。',
    'その他のキャンセル理由を入力してください。',
    'Chọn lí do huỷ.',
  ],
};
export const s_unassigned_lessons = {
  warning: {
    not_restore_if_you_cancel: [
      '해당 수업은 학생이 수업 취소/노쇼 시 수업권 복구가 불가합니다.',
      "Your credit will not be restored if you cancel or don't show up.",
      's_unassigned_lessons.warning.not_restore_if_you_cancel',
      '学生取消/未出席该课程时, 课程券不予以退还。',
      '該課程當學生取消／未出現時，無法復原課程券。',
      'このレッスンをキャンセル/無断欠席した場合、レッスンチケットは復元されません。',
      'Thẻ học của bạn sẽ không được hoàn lại nếu bạn huỷ hoặc vắng mặt.',
    ],
    cannot_change_tutor_or_time: [
      '해당 수업은 튜터 변경 및 시간 변경이 불가합니다.',
      'You cannot change tutor or reschedule this lesson.',
      's_unassigned_lessons.warning.cannot_change_tutor_or_time',
      '该课程不可修改任课教师及时间。',
      '該課程無法變更任課教師及時間。',
      'このレッスンはチューターの変更および時間の変更ができません。',
      'Bạn không thể đổi gia sư hoặc dời lịch cho buổi học này.',
    ],
    auto_matching_after_tutor_canceled: [
      '해당 수업의 튜터는 상황에 따라 변경될 수 있습니다.',
      'The tutor for the lesson is subject to change.',
      's_unassigned_lessons.warning.auto_matching_after_tutor_canceled',
      '该课程的任课教师可能会根据具体情况有所变动。',
      '該課程的任課教師可能視狀況有所變動。',
      'このレッスンのチューターは空き状況により変更される場合があります。',
      'Gia sư cho buổi học có thể thay đổi.',
    ],
  },
  inform: {
    available_lessons: [
      '예약 가능 수업',
      'Available lessons',
      's_unassigned_lessons.inform.available_lessons',
      '可预约的课程',
      '可預約的課程',
      '予約可能なレッスン',
      'Buổi học trống',
    ],
  },
  credits: {
    no_credits_available: [
      '사용할 수 있는 수업권이 없습니다.',
      'No credits available',
      's_unassigned_lessons.credits.no_credits_available',
      '无可使用的课程券。',
      '無可使用的課程券。',
      '使用できるレッスンチケットはありません。',
      'Không có thẻ học nào',
    ],
  },
};
export const s_schedule = {
  select_how_to_schedule: [
    '예약 방식 선택',
    'Select a method',
    's_schedule.select_how_to_schedule',
    '选择预约方式',
    '選擇預約方式',
    '予約方式選択',
    'Chọn một cách',
  ],
  select_tutor_first: [
    '튜터 먼저 선택',
    'Sort by tutor',
    's_schedule.select_tutor_first',
    '先选择任课教师',
    '先選擇任課教師',
    'チューターから選ぶ',
    'Chọn theo giờ',
  ],
  select_time_first: [
    '시간 먼저 선택',
    'Sort by time',
    's_schedule.select_time_first',
    '先选择时间',
    '先選擇時間',
    '時間帯から選ぶ',
    'Chọn gia sư',
  ],
  lessons_in_24_hours: [
    '24시간 이내 수업',
    'Lessons in 24 hours',
    's_schedule.lessons_in_24_hours',
    '24小时以内的课程',
    '24小時以內的課程',
    '24時間以内のレッスン',
    'Buổi học trong 24 giờ tới',
  ],
  lessons_in_24_hours_explanation: [
    '현재부터 24시간 이내 시작하는 수업을 예약합니다.\n정규/보충/긴급편성 수업권으로 예약할 수 있습니다.',
    'You can book with Regular, Makeup, or FastBook credits',
    's_schedule.lessons_in_24_hours_explanation',
    '预约从当前起24小时以内开始的课程。可使用正规/补充/紧急编辑课程券进行预约。',
    '預約從現在起24小時以內開始的課程。\n可利用正規／補充／緊急分班課程券預約。',
    'これから24時間以内に始まるレッスンを予約します。\nレギュラー/補填レッスンチケットで予約することができます。',
    'Bạn có thể đặt lịch với Thẻ học Tiêu chuẩn, Bù hoặc Nhanh.',
  ],
  select_coupon: [
    '수업권 선택',
    'Select Credit',
    's_schedule.select_coupon',
    '选择课程券',
    '選擇課程券',
    'レッスンチケット選択',
    'Chọn thẻ học',
  ],
  expired_in_days: n => [
    `수강기간: ${n}일 남음`,
    `Expires in ${n} days`,
    's_schedule.expired_in_days',
    `课程时间：剩下${n}日`,
    `聽課期間：剩下${n}日`,
    `有効期限: 残り${n}日`,
    `Hết hạn trong ${n} ngày`,
  ],
  available: [
    '남은횟수',
    'Available',
    's_schedule.available',
    '剩余次数',
    '剩餘次數',
    '残り回数',
    'Trống lịch',
  ],
  count: ['회', '', 's_schedule.count', '次', '次', '回', ''],
  unused: [
    '아직 사용을 시작하지 않음',
    'Unused',
    's_schedule.unused',
    '尚未开始使用',
    '尚未開始使用',
    '未使用',
    'Chưa sử dụng',
  ],
  select_tutor_time: [
    '튜터 및 시간 선택',
    'Select Tutor and Time',
    's_schedule.select_tutor_time',
    '选择任课教师及时间',
    '選擇任課教師及時間',
    'チューターおよび時間帯選択',
    'Chọn gia sư và thời gian',
  ],
  add_tutor: [
    '튜터 추가',
    'Add tutor',
    's_schedule.add_tutor',
    '添加任课教师',
    '新增任課教師',
    'チューター追加選択',
    'Thêm gia sư',
  ],
  acceptance_rate: [
    '수락률',
    'Acceptance rate',
    's_schedule.acceptance_rate',
    '接受率',
    '接受率',
    '承諾率',
    'Tỷ lệ chấp nhận',
  ],
  intro: [
    '자기 소개',
    'Intro',
    's_schedule.intro',
    '自我介绍',
    '自我介紹',
    '自己紹介',
    'Giới thiệu',
  ],
  lessons_selected: [
    '신청한 수업',
    'Lessons Selected',
    's_schedule.lessons_selected',
    '申请的课程',
    '申請的課程',
    '選択したレッスン',
    'Buổi học được chọn',
  ],
  select_more_lessons: [
    '수업 더 신청하기',
    'Book more lessons',
    's_schedule.select_more_lessons',
    '申请更多课程',
    '申請更多課程',
    'もっとレッスンを選ぶ',
    'Đặt thêm buổi học',
  ],
  select_packet: [
    '교재 선택',
    'Select Lesson Materials',
    's_schedule.select_packet',
    '选择教材',
    '選擇教材',
    '教材選択',
    'Chọn Tài liệu',
  ],
  select: [
    '선택',
    'Select',
    's_schedule.select',
    '选择',
    '選擇',
    '選択',
    'Chọn',
  ],
  unselect: [
    '선택 취소',
    'Deselect',
    's_schedule.unselect',
    '取消选择',
    '取消選擇',
    '選択取消',
    'Bỏ chọn',
  ],
  search_tutors: [
    '튜터를 검색하세요',
    'Find a tutor',
    's_schedule.search_tutors',
    '请搜寻任课教师',
    '請搜尋任課教師',
    'チューターを検索してください。',
    'Tìm gia sư',
  ],
  filters: [
    '필터',
    'Filters',
    's_schedule.filters',
    '筛选',
    '篩選',
    'フィルター',
    'Bộ lọc',
  ],
  apply_filters: [
    '필터 적용',
    'Apply filters',
    's_schedule.apply_filters',
    '套用筛选',
    '套用篩選',
    'フィルター適用',
    'Áp dụng bộ lọc',
  ],
  select_time: [
    '시간 선택',
    'Select Time',
    's_schedule.select_time',
    '选择时间',
    '選擇時間',
    '時間選択',
    'Chọn giờ',
  ],
  select_tutor: [
    '튜터 선택',
    'Select a tutor',
    's_schedule.select_tutor',
    '选择任课教师',
    '選擇任課教師',
    'チューター選択',
    'Chọn gia sư',
  ],
  select_the_tutor: [
    '튜터를 선택하세요.',
    'Select a tutor',
    's_schedule.select_the_tutor',
    '请选择任课教师。',
    '請選擇任課教師。',
    'チューターを選択してください。',
    'Chọn gia sư',
  ],
  ringle_automatic_matching: [
    '링글 자동 매칭',
    'Auto matching',
    's_schedule.ringle_automatic_matching',
    'Ringle自动匹配',
    'Ringle自動配對',
    'Ringle自動マッチング',
    'Xếp tự động',
  ],
  ringle_will_match_you_with_the_most_compatible_tutor_: [
    '고객님께 가장 적합한 튜터를 지정해드립니다.',
    "We'll find and match the best tutor for you.",
    's_schedule.ringle_will_match_you_with_the_most_compatible_tutor_',
    '为您指定最合适的任课教师。',
    '為您指定最合適的任課教師。',
    'お客様に最適なチューターを自動選定します。',
    'Chúng tôi sẽ tìm và xếp bạn với gia sư tốt nhất cho bạn.',
  ],
  review_lesson_detail: [
    '수업 예약 내역 확인',
    'Lesson Booking Details',
    's_schedule.review_lesson_detail',
    '确认课程预约详情',
    '確認課程預約明細',
    'レッスン予約内容確認',
    'Chi tiết đăng ký buổi học',
  ],
  review_lesson_result: [
    '수업 예약 내역 결과',
    'Lesson Booking Details',
    's_schedule.review_lesson_result',
    '课程预约详细结果',
    '課程預約明細結果',
    'レッスン予約内容',
    'Chi tiết đăng ký buổi học',
  ],
  complete_scheduling: [
    '예약 완료',
    'Complete Booking',
    's_schedule.complete_scheduling',
    '预约成功',
    '預約完成',
    '予約完了',
    'Hoàn thành đặt lịch',
  ],
  you_can_change_the_time_until_the_tutor_confirms_the_lesson_you_can_change_the_packet_up_to_24_hours_before_the_lesson_begins_:
    [
      '학습 효과 및 맞춤 수업을 위해 수업 전에 예습 및 수업 방식 설정을 추천합니다.',
      `You can change the time until the tutor confirms the lesson.
You can change materials up to 24 hours before the lesson begins.`,
      's_schedule.you_can_change_the_time_until_the_tutor_confirms_the_lesson_you_can_change_the_packet_up_to_24_hours_before_the_lesson_begins_',
      '为了学习效果及制定课程，建议在课程开始前设定预习及上课方式。',
      '為了更佳的學習效果與客製化課程，建議於課程開始前設定預習及上課方式。',
      'より高い学習効果と質の高いカスタマイズレッスンを提供するため、レッスン前に予習やレッスン形式の設定をすることをおすすめします。',
      `Bạn có thể đổi thời gian học trước khi gia sư xác nhận buổi học.
Bạn có thể đổi tài liệu tối thiểu 24 giờ trước khi buổi học bắt đầu.`,
    ],
  lessons_failed_in_scheduling: [
    '예약 실패한 수업',
    'Your booking has failed.',
    's_schedule.lessons_failed_in_scheduling',
    '预约失败的课程',
    '預約失敗的課程',
    '予約失敗したレッスン',
    'Đặt lịch thất bại.',
  ],
  schedule_a_diffent_lesson: [
    '다른 수업 예약하기',
    'Book another lesson',
    's_schedule.schedule_a_diffent_lesson',
    '预约其他课程',
    '預約其他課程',
    '他のレッスンを予約する',
    'Đặt buổi học khác',
  ],
  go_to_prep: [
    '예습하러 가기',
    'Lesson Prep',
    's_schedule.go_to_prep',
    '前往预习',
    '前往預習',
    '予習を始める',
    'Chuẩn bị Buổi học',
  ],
  select_lesson: [
    '수업 선택',
    'Select Lesson',
    's_schedule.select_lesson',
    '选择课程',
    '選擇課程',
    'レッスン選択',
    'Chọn buổi học',
  ],
  the_topic_for_lessons_in_24_hours_is_free_topic_speaking_focused_: [
    '24시간 이내 수업은 자유주제 - 스피킹 집중 교재만 가능합니다.',
    'Lessons in 24 hours must be on Free Topic.',
    's_schedule.the_topic_for_lessons_in_24_hours_is_free_topic_speaking_focused_',
    '24小时以内的课程仅可选择自由主题-集中会话教材。',
    '24小時以內的課程僅可選擇自由主題 - 集中口說教材。',
    `他の受講生がキャンセルしたレッスン開始まで24時間以内の残席レッスンを意味します。\n
保有しているレギュラーレッスンチケット又は補填レッスンチケットを使って予約することができます。レギュラーレッスンチケットで予約する場合は$2.59ポイントが付与されます。\n
2時間以内に始まるレッスンは、保有している直前予約レッスンチケットで予約をすることができます。`,
    'Buổi học trong 24 giờ tới là Chủ đề Tự do.',
  ],
  lessons_starting_in_24_hours: [
    '24시간 이내 가능 수업',
    'Lessons in 24 hours',
    's_schedule.lessons_starting_in_24_hours',
    '24小时以内的课程',
    '24小時以內可聆聽的課程',
    '24時間以内に始まるレッスン',
    'Buổi học trong 24 giờ tới',
  ],
  select_credit_confirm: [
    '수업권 선택 & 예약 확인',
    'Select Credit & Confirm',
    's_schedule.select_credit_confirm',
    '选择课程券 & 确认预约',
    '選擇課程券 & 確認預約',
    'レッスンチケットの選択 & 予約内容確認',
    'Chọn Tiết học & Xác nhận',
  ],
  _lessons_in_24_hours_means_the_ones_that_begin_within_24_hours_at_this_point_it_is_updated_in_real_time_and_you_can_schedule_it_using_your_coupons_:
    [
      `다른 고객이 취소한, 수업 시작까지 24시간 이내 남은 수업을 의미합니다.\n
보유하고 계신 정규 수업권 및 보충 수업권을 이용하여 수업을 예약할 수 있습니다. 정규 수업권으로 신청하는 경우 3,000 포인트가 발급됩니다.\n
2시간 이내 시작하는 수업은 보유하고 계신 긴급편성 수업권으로 수업 예약할 수 있습니다.`,
      'These are lessons starting in 24 hours that opened up due to last-minute cancellations by other students.',
      's_schedule._lessons_in_24_hours_means_the_ones_that_begin_within_24_hours_at_this_point_it_is_updated_in_real_time_and_you_can_schedule_it_using_your_coupons_',
      `是指其他学生所取消且距离课程开始不到24小时的课程。\n 
 您可使用持有的正规课程券及补充课程券预约课程。利用正规课程券申请时，将累积$2.59积分。 \n
 2小时以内开始的课程可使用持有的紧急编制课程券预约课程。`,
      `意指其他學生所取消且距離課程開始不到24小時的課程。\n
您可使用持有的正規課程券及補充課程券預約課程。利用正規課程券申請時，將發送$2.59P。\n
2小時以內開始的課程可使用持有的緊急分班課程券預約課程。`,
      `他の受講生がキャンセルしたレッスン開始まで24時間以内の残席レッスンを意味します。\n
保有しているレギュラーレッスンチケット又は補填レッスンチケットを使って予約することができます。レギュラーレッスンチケットで予約する場合は$2.59ポイントが付与されます。\n
2時間以内に始まるレッスンは、保有している直前予約レッスンチケットで予約をすることができます。`,
      'Đây là những buổi học được mở vì học viên khác đã huỷ sát giờ.',
    ],
  available_tutor: [
    '예약 가능',
    'Available',
    's_schedule.available_tutor',
    '可以预约',
    '可預約',
    '予約可能',
    'Trống lịch',
  ],
  recommended_tutor: [
    '추천 튜터',
    'Featured',
    's_schedule.recommended_tutor',
    '任课教师推荐',
    '推薦的任課教師',
    'おすすめチューター',
    'Nổi bật',
  ],
  all_tutor: [
    '전체 튜터',
    'All',
    's_schedule.all_tutor',
    '所有任课教师',
    '所有任課教師',
    'すべてのチューター',
    'Tất cả',
  ],
  saved_tutor: [
    '찜한 튜터',
    'Favorites',
    's_schedule.saved_tutor',
    '收藏的任课教师',
    '我收藏的任課教師',
    'お気に入りチューター',
    'Yêu thích',
  ],
  search_result: [
    '검색 결과',
    'Search Results',
    's_schedule.search_result',
    '搜索结果',
    '搜尋結果',
    '検索結果',
    'Kết quả tìm kiếm',
  ],
  used_challenge: used => [
    `${used}회 달성`,
    `Achieved ${used} times`,
    's_schedule.used_challenge',
    `达成${used}次`,
    `達成${used}次`,
    `${used}回達成`,
    `Đạt được ${used} lần`,
  ],
  used_coupon: used => [
    `${used}회 사용`,
    `Used ${used} times`,
    's_schedule.used_coupon',
    `使用${used}次`,
    `使用${used}次`,
    `${used}回使用`,
    `Sử dụng ${used} lần`,
  ],
  used_get: used => [
    `${used}회 받음`,
    `Received ${used} times`,
    's_schedule.used_get',
    `领取${used}次`,
    `領取${used}次`,
    `${used}回受取済み`,
    `Nhận ${used} lần`,
  ],
  bonus_title: [
    '24시간 보충 수업 제공',
    'Makeup Lesson Credits',
    's_schedule.bonus_title',
    '提供24小时补充课程',
    '提供24小時補充課程',
    '24時間補填レッスン提供',
    'Tiết học bù',
  ],
  bonus_desc: [
    '매 정규 수업 4회 소진시마다, 24시간 이내 이용가능한 보충 수업권을 드립니다.',
    "For every 4 lessons you complete, you'll get one makeup lesson credit that you can use within 24 hours.",
    's_schedule.bonus_desc',
    '每上完4次正规课程，将提供24小时以内可使用的补充课程券。',
    '每耗盡4次正規課程，提供24小時以內可使用的補充課程券。',
    '毎回正規レッスンを4回消費するたびに、24時間以内に利用可能な補填レッスンチケットを差し上げます。',
    'Cứ 4 buổi bạn học hoàn thành, bạn sẽ nhận được một thẻ học bù và có thể sử dụng trong vòng 24 giờ.',
  ],
  challenge_title: date => [
    `도전 기간: ${date}`,
    `Challenge Period: ${date}`,
    's_schedule.challenge_title',
    `挑战期间：${date}`,
    `挑戰期間：${date}`,
    `挑戦期間: ${date}`,
    `Thời gian thử thách: ${date}`,
  ],
  challenge_desc: (total, bonus) => [
    `${total}회 수업권을 도전 기간 내 모두 사용하면 ${bonus}회 추가 정규 수업권이 제공됩니다.\n(*수업 노쇼/취소도 수업권 [사용]으로 인정)`,
    'If you use up all your credits during the Challenge Period, we will provide you with additional credits.',
    's_schedule.challenge_desc',
    `在挑战期间内将${total}次课程券全部使用时，会额外提供${bonus}次正规课程券。 \n（*上课未出席／取消也视同[使用]课程券）`,
    `於挑戰期間內將${total}次課程券全數使用時，額外提供${bonus}次正規課程券。\n（*上課未出現／取消也視同[使用]課程券）`,
    `${total}回レッスンチケットを挑戦期間内にすべて使用すると、${bonus}回追加で正規レッスンチケットが提供されます。\n(*レッスン無断欠席/キャンセルもレッスンチケット[使用]として認定)`,
    'Nếu bạn sử dụng hết thẻ học trong Thời gian thử thách, chúng tôi sẽ tặng cho bạn thêm thẻ học.',
  ],
  duration: [
    '수강 기간',
    'Expiration date',
    's_schedule.duration',
    '课期期限',
    '聽課期間',
    '有効期限',
    'Ngày hết hạn',
  ],
  expired: day => [
    `${day}일 남음`,
    `in ${day} days`,
    's_schedule.expired',
    `剩下${day}日`,
    `剩下${day}日`,
    `残り${day}日`,
    `trong ${day} ngày`,
  ],
  will_start: day => [
    `도전 기간: ${day}일 (첫 수업 완료 후 시작)`,
    `Challenge Period: ${day} days (Countdown will start once you complete your first lesson)`,
    's_schedule.will_start',
    `挑战期间：${day}日（首次课程结束后开始）`,
    `挑戰期間：${day}日（首次課程結束後開始）`,
    `挑戦期間: ${day}日 (初回レッスン完了後開始)`,
    `Thời gian thử thách: ${day} ngày (Tính từ lúc bạn hoàn thành buổi học đầu tiên)`,
  ],
  makeup_lesson_coupon: [
    '보충수업권',
    'Makeup\nLesson Coupon',
    's_schedule.makeup_lesson_coupon',
    '补充课程券',
    '補充課程券',
    '補填レッスンチケット',
    'Coupon Buổi học\nbù',
  ],
  next: [
    '다음',
    'Next',
    's_schedule.next',
    '下一步',
    '繼續',
    '次へ',
    'Tiếp theo',
  ],
  modal: {
    no_credit: [
      '수업권 미보유',
      'No Credit',
      's_schedule.modal.no_credit',
      '未持有课程券',
      '未持有課程券',
      'レッスンチケット未保有',
      'Không có thẻ học',
    ],
    after_purchasing: [
      '수업권 구매 후 이용 가능합니다.',
      'Available after purchasing lesson credits.',
      's_schedule.modal.after_purchasing',
      '可在购买课程券后使用。',
      '購買課程券後可使用。',
      'レッスンチケット購入後に利用可能です。',
      'Chỉ có sau khi thanh toán thẻ học.',
    ],
    purchase: [
      '구매하러 가기',
      'Purchase',
      's_schedule.modal.purchase',
      '前往购买',
      '前往購買',
      '購入する',
      'Thanh toán',
    ],
  },
  i_will_choose_a_time_slot_first: [
    '원하는 수업 시간을 먼저 선택할 수 있습니다.',
    'See available tutors in selected time',
    's_schedule.i_will_choose_a_time_slot_first',
    '可先选择希望的课程时间。',
    '可先選擇希望的課程時間。',
    '希望する受講時間帯からレッスンを選びます。',
    'Xem gia sư trống lịch thời gian được chọn',
  ],
  i_will_choose_a_tutor_first: [
    '원하는 튜터를 먼저 선택할 수 있습니다.',
    'See available slots of selected tutors',
    's_schedule.i_will_choose_a_tutor_first',
    '可先选择希望的任课教师。',
    '可先選擇希望的任課教師。',
    '希望するチューターの空き状況から選びます。',
    'Xem những ca trống của gia sư được chọn',
  ],
  no_coupons: [
    '수업을 예약할 수 있는 수업권이 없습니다.',
    'You have no lesson credit',
    's_schedule.no_coupons',
    '无可预约的课程券。',
    '無可預約課程的課程券。',
    'レッスンを予約できるレッスンチケットはありません。',
    'Bạn không có thẻ học nào',
  ],
  empty_lesson_list: [
    '선택한 수업이 없습니다.',
    "You haven't selected any lessons.",
    's_schedule.empty_lesson_list',
    '无选择的课程',
    '無選擇的課程。',
    '選択した授業がありません。',
    'Bạn chưa chọn buổi học nào.',
  ],
  automatching_unavailable: [
    '취소 후 자동 매칭이 불가능한 시간입니다.',
    'Automatic matching is not available.',
    's_schedule.automatching_unavailable',
    '取消后无法自动配对的时间',
    '取消後無法自動配對的時間。',
    '「キャンセル後に自動マッチングする」ができない時間帯です。',
    'Xếp tự động không khả dụng.',
  ],
};
export const s_portal_schedule = {
  select_time_within_expiration: [
    '수강기간 이내의 시간을 선택해주세요.',
    'Select a time within the expiration dates of your lesson credits.',
    's_portal_schedule.select_time_within_expiration',
    '请选择课程时间以内的时间。',
    '請選擇聽課期間以內的時間。',
    '有効期限内の日時を選択してください。',
    'Chọn thời gian trong thời hạn thẻ học của bạn.',
  ],
  please_select_material: [
    '교재를 선택하세요',
    'Please select lesson materials.',
    's_portal_schedule.please_select_material',
    '请选择教材',
    '請選擇教材',
    '教材を選択してください。',
    'Vui lòng chọn Tài liệu cho buổi học.',
  ],
  btn_register: [
    '신청하기',
    'Book',
    's_portal_schedule.btn_register',
    '申请',
    '申請',
    '予約する',
    'Đặt lịch',
  ],
  complete: [
    '예약 완료한 수업',
    'Complete',
    's_portal_schedule.complete',
    '预约成功的课程',
    '預約完成的課程',
    '予約完了したレッスン',
    'Hoàn thành',
  ],
  let_us_what_to_do_if_the_lesson_with_the_tutor_becomes_unavailable: [
    '튜터와 매칭이 안 될 경우\n어떻게 진행해 드릴까요?',
    'What should we do\nif the tutor cancels?',
    's_portal_schedule.let_us_what_to_do_if_the_lesson_with_the_tutor_becomes_unavailable',
    '请选择匹配失败时的处理方式',
    '請選擇匹配失敗時的處理方式',
    'チューターマッチングが出来ない場合はオプション選択をしてください。',
    'Chúng tôi nên giải quyết thế nào nếu gia sư hủy?',
  ],
  you_can_choose_what_to_do_if_tutor_cancels_lesson: [
    <>
      <View primary>수업 정보</View>와 <View primary>튜터 매칭 옵션</View> 확인
      후{'\n'}예약을 완료해 주세요.
    </>,
    <>
      Please review the <View primary>lesson information</View> and{' '}
      <View primary>tutor matching option.</View>
    </>,
    's_portal_schedule.you_can_choose_what_to_do_if_tutor_cancels_lesson',
    <>
      请确认<View primary>课程信息</View>和<View primary>教师匹配选项</View>
      之后完成预约.
    </>,
    <>
      請確認<View primary>課程信息</View>和<View primary>教師匹配選項</View>
      之後完成預約.
    </>,
    <>
      <View primary>レッスン内容</View>と
      <View primary>チューターマッチングのオプション</View>
      を確認後、予約を完了してください。
    </>,
    <>
      Vui lòng kiểm tra lại các <View primary>thông tin buổi học</View> và{' '}
      <View primary>sự lựa chọn gia sư.</View>
    </>,
  ],
  selected: [
    '선택 완료',
    'Selected',
    's_portal_schedule.selected',
    '选择完毕',
    '選擇完畢',
    '選択完了',
    'Đã chọn',
  ],
  no_available_schedule: [
    '가능한 스케쥴이 없습니다',
    'There is no availability',
    's_portal_schedule.no_available_schedule',
    '无可进行的日程',
    '無可進行的日程',
    '空いているスケジュールがありません',
    'Không có lịch trống',
  ],
  the_selected_lesson_starts_within_48_hours: [
    '선택하신 수업은 48시간 이내에 시작하는 수업입니다. 튜터와의 시차 및 응답 속도에 따라 매칭되지 않을 가능성이 높습니다.',
    'This lesson starts in less than 48 hours. Tutor may not confirm in time.',
    's_portal_schedule.the_selected_lesson_starts_within_48_hours',
    '您选择的课程为48小时以內即将开始的课程，根据与任课教师的时差及回复速度，很有可能匹配失败。',
    '您選擇的課程為48小時以內即將開始的課程，依據與任課教師的時差與回覆速度，很有可能配對失敗。',
    '選択したレッスンは48時間以内に始まるレッスンです。チューターとの時差および応答速度により、マッチングしない可能性が高いです。',
    'Buổi học này bắt đầu trong vòng 48 giờ nữa. Gia sư có thể không kịp xác nhận.',
  ],
  check_tutor_matching_option: [
    '튜터 매칭 옵션을 선택하고 수업 예약을 완료해주세요.',
    'Please select the tutor matching option to complete your lesson booking.',
    's_portal_schedule.check_tutor_matching_option',
    '请选择教师匹配选项来完成预约的最后一步',
    '請選擇教師匹配選項來完成預約的最後一步',
    '',
    'Vui lòng chọn Sắp xếp gia sư để hoàn thành đặt lịch học',
  ],
};
export const s_credit = {
  credit_note: [
    '유의사항',
    'Terms',
    's_credit.credit_note',
    '注意事项',
    '注意事項',
    '注意事項',
    'Điều khoản',
  ],
  select_a_coupon_for_lesson_scheduling: [
    '사용하실 수업권을 선택해주세요.',
    'Select a credit to book lesson',
    's_credit.select_a_coupon_for_lesson_scheduling',
    '请选择欲使用的课程券。',
    '請選擇欲使用的課程券。',
    '使用するレッスンチケットを選択してください。',
    'Chọn một thẻ học để đặt lịch',
  ],
};
export const s_tutors = {
  any: [
    '상관없음',
    'Any',
    's_tutors.any',
    '皆可',
    '皆可',
    'こだわらない',
    'Bất kỳ',
  ],
  gender: {
    label: [
      '성별',
      'Gender',
      's_tutors.gender.label',
      '性别',
      '性別',
      '性別',
      'Giới tính',
    ],
    female: [
      '여자',
      'Female',
      's_tutors.gender.female',
      '女性',
      '女性',
      '女性',
      'Nữ',
    ],
    male: [
      '남자',
      'Male',
      's_tutors.gender.male',
      '男性',
      '男性',
      '男性',
      'Nam',
    ],
  },
  accent: {
    label: [
      '액센트',
      'Accent',
      's_tutors.accent.label',
      '口音',
      '口音',
      'アクセント',
      'Giọng',
    ],
    accent_american: [
      '미국식',
      'American',
      's_tutors.accent.accent_american',
      '美式',
      '美式',
      'アメリカ',
      'Mỹ',
    ],
    accent_british: [
      '영국식',
      'British',
      's_tutors.accent.accent_british',
      '英式',
      '英式',
      'イギリス',
      'Anh',
    ],
  },
  major: {
    label: [
      '전공',
      'Major',
      's_tutors.major.label',
      '专业',
      '主修',
      '専攻',
      'Chuyên ngành',
    ],
    social_sciences: [
      '사회과학경영',
      'Social Science/Business',
      's_tutors.major.social_sciences',
      '社会科学管理',
      '社會科學／經營',
      '社会科学・経営',
      'Khoa học xã hội/Kinh doanh',
    ],
    liberal_arts: [
      '인문계',
      'Liberal Arts',
      's_tutors.major.liberal_arts',
      '人文',
      '人文',
      '人文系',
      'Giáo dục khai phóng',
    ],
    engineering: [
      '공과계열',
      'Engineering',
      's_tutors.major.engineering',
      '理工',
      '理工',
      '工科系',
      "Kỹ sư'.",
    ],
    natural_science: [
      '자연과학계열',
      'Natural Science',
      's_tutors.major.natural_science',
      '自然科学',
      '自然科學',
      '自然科学系',
      'Khoa học tự nhiên',
    ],
    fine_arts_and_athletics: [
      '예체능',
      'Fine Arts and Athletics',
      's_tutors.major.fine_arts_and_athletics',
      '艺术／体育',
      '藝術／體育',
      '芸能/芸術/体育',
      'Mỹ thuật và Thể dục',
    ],
  },
  no_result: [
    '검색 결과가 없습니다',
    'No Result',
    's_tutors.no_result',
    '无搜寻结果',
    '無搜尋結果',
    '検索結果はありません。',
    'Không có kết quả',
  ],
  accept_rate: [
    '수락률',
    'Acceptance rate',
    's_tutors.accept_rate',
    '接受率',
    '接受率',
    '承諾率',
    'Tỷ lệ chấp nhận',
  ],
  video_preparing: [
    <>튜터가 영상을 준비중입니다.{'\n'}조금만 기다려주세요!</>,
    <>Introduction video will be provided soon!</>,
    's_tutors.video_preparing',
    <>任课教师正在准备视频，{'\n'}请稍等！</>,
    <>任課教師正在準備影像，{'\n'}請稍候！</>,
    <>チューターが動画を準備中です。{'\n'}もう少しお待ちください！</>,
    <>Video giới thiệu sẽ sớm được cung cấp!</>,
  ],
  no_tutors_available_for_the_selected_time: [
    '해당 시간에 신청 가능한 튜터가 없습니다.',
    'No tutors are available for the selected time.',
    's_tutors.no_tutors_available_for_the_selected_time',
    '该时间没有可申请的任课教师。',
    '該時間沒有可申請的任課教師。',
    'この時間に予約可能なチューターはいません。',
    'Không có gia sư nào trống lịch trong thời gian được chọn.',
  ],
  select_a_tutor_for_all_the_lessons: [
    '튜터를 모두 선택해주세요.',
    'Select a tutor for all the lessons.',
    's_tutors.select_a_tutor_for_all_the_lessons',
    '请选择所有任课教师。',
    '請選擇所有任課教師。',
    'チューターをすべて選択してください。',
    'Chọn một gia sư cho tất cả buổi học.',
  ],
  review: [
    '수업 평가',
    'Review',
    's_tutors.review',
    '课程评价',
    '課程評論',
    'レッスン評価',
    'Nhận xét',
  ],
  view_all: [
    '전체 보기',
    'View all',
    's_tutors.view_all',
    '查看全部',
    '查看全部',
    'すべて見る',
    'Xem tất cả',
  ],
  no_lessons_available_for_this_period: [
    '해당 기간에 신청 가능한 시간이 없습니다',
    'No lessons are available for the selected time.',
    's_tutors.no_lessons_available_for_this_period',
    '该期间没有可申请的时间',
    '該期間沒有可申請的時間',
    'この期間に予約可能な時間はありません。',
    'Không có buổi học nào trong thời gian bạn chọn.',
  ],
  you_already_have_a_lesson_scheduled_for_the_selected_time: [
    '이미 예약한 수업 시간과 겹치는 시간입니다.',
    'You already have a lesson scheduled for the selected time.',
    's_tutors.you_already_have_a_lesson_scheduled_for_the_selected_time',
    '与已预约的课程时间重叠。',
    '與已預約的課程時間重疊。',
    'すでに予約したレッスン時間と重なる時間です。',
    'Bạn đã đặt một buổi học trong thời gian được chọn.',
  ],
  intro: [
    '자기소개',
    'Intro',
    's_tutors.intro',
    '自我介绍',
    '自我介紹',
    '自己紹介',
    'Giới thiệu',
  ],
  no_tutor: [
    '먼저 튜터를 추가해주세요.',
    'Please add a tutor',
    's_tutors.no_tutor',
    '请先新增任课教师。',
    '請先新增任課教師。',
    '先にチューターを追加してください。',
    'Vui lòng thêm một gia sư',
  ],
  available: [
    '수업 예약 가능',
    'Available',
    's_tutors.available',
    '可预约课程',
    '可預約課程',
    'レッスン予約可能',
    'Trống lịch',
  ],
  available_lesson: [
    '예약 가능 수업',
    'Available Lessons',
    's_tutors.available_lesson',
    '可预约的课程',
    '可預約的課程',
    '予約可能なレッスン',
    'Buổi học trống',
  ],
  fully_booked: [
    '수업 예약 마감',
    'Fully booked',
    's_tutors.fully_booked',
    '课程预约结束',
    '課程預約截止',
    'レッスン予約締切',
    'Đã đặt hết',
  ],
  not_scheduled: [
    '스케쥴 오픈 전',
    'Not available',
    's_tutors.not_scheduled',
    '尚未公开日程',
    '尚未公開日程',
    'スケジュールオープン前',
    'Không trống lịch',
  ],
  my_tutors_loading: [
    '찜한 튜터를 불러오는 중입니다...',
    'Loading Favorites...',
    's_tutors.my_tutors_loading',
    '正在读取所收藏的任课教师...',
    '正在讀取我收藏的任課教師…',
    'お気に入りチューターを読み込んでいます...',
    'Đang tải Yêu thích...',
  ],
  no_my_tutor: [
    <>
      먼저 '<View bold>+튜터 추가</View>'에서 관심있는 튜터들을 찜하세요!{'\n'}
      찜한 튜터들의 수업 스케줄을 확인하시고 수업을 예약하실 수 있습니다.
    </>,
    <>
      Please '<View bold>+add tutors</View>' to your favorites first.{'\n'}Then
      you can check your favorite tutors' availabilities and book lessons here.
    </>,
    's_tutors.no_my_tutor',
    <>
      请先在「<View bold>+新增任课教师</View>」收藏您喜欢的任课教师！{'\n'}
      您可确认所收藏的任课教师的上课日程并预约课程。
    </>,
    <>
      請先於「<View bold>+新增任課教師</View>」收藏您喜歡的任課教師！{'\n'}
      您可確認您收藏的任課教師上課日程並預約課程。
    </>,
    <>
      先に '<View bold>+チューター追加</View>
      'から関心があるチューターたちをお気に入り登録してください！{'\n'}
      お気に入りチューターたちのレッスンスケジュールを確認してからレッスンを予約することができます。
    </>,
    <>
      Vui lòng '<View bold>+thêm gia sư</View>' vào mục yêu thích trước.{'\n'}
      Sau đó bạn có thể kiểm tra lịch trống của gia sư yêu thích và đặt học ở
      đây.
    </>,
  ],
  overview: [
    '수업 예약 관련 정보',
    'Overview',
    's_tutors.overview',
    '课程预约相关信息',
    '課程預約相關資訊',
    'レッスン予約関連情報',
    'Tổng quan',
  ],
  k_12: [
    '초중고생 수업',
    'K-12',
    's_tutors.k_12',
    '小学，中学，高中课程',
    '國小、國中、高中學生課程',
    '小中高生レッスン',
    'K-12',
  ],
  yes: [
    '가능',
    'Available',
    's_tutors.yes',
    '可以',
    '可以',
    '可能',
    'Trống lịch',
  ],
  no: ['불가', 'NO', 's_tutors.no', '不可以', '不可以', '不可', 'KHÔNG'],
  lesson_40_min: [
    '40분 수업',
    '40min',
    's_tutors.lesson_40_min',
    '40分钟课程',
    '40分鐘課程',
    '40分レッスン',
    '40 phút',
  ],
  lesson_20_min: [
    '20분 수업',
    '20min',
    's_tutors.lesson_20_min',
    '20分钟课程',
    '20分鐘課程',
    '20分レッスン',
    '20 phút',
  ],
  annoucement: [
    '튜터 공지사항',
    'Tutor’s Announcement',
    's_tutors.annoucement',
    '任课教师公告',
    '任課教師公告事項',
    'チューターからのお知らせ',
    'Thông báo của gia sư',
  ],
  experience: [
    '핵심 경험',
    'Experience',
    's_tutors.experience',
    '核心经验',
    '核心經驗',
    '主要な経験',
    'Kinh nghiệm',
  ],
  interests: [
    '관심사',
    'Interests',
    's_tutors.interests',
    '关注事项',
    '感興趣的領域',
    '関心事',
    'Sở thích',
  ],
  no_teach_junior: [
    '성인만 가능',
    'Adults only',
    's_tutors.no_teach_junior',
    '仅限成人',
    '僅限成人',
    '成人のみ可能',
    'Cho người lớn',
  ],
  no_junior_desc: [
    '성인 수강생 대상 수업만 진행하는 튜터입니다.\n초/중/고 수강생 예약 신청 시, 매칭되지 않을 가능성이 높습니다.',
    'This tutor prefers lessons with working professionals.\nHence, the lesson may not be matched with juniors.',
    's_tutors.no_junior_desc',
    '仅为成人学生授课的任课教师。\n小学／中学／高中生申请预约时，匹配失败率较高。',
    '僅為成人學生授課的任課教師。\n國小／國中／高中學生申請預約時，很有可能配對失敗。',
    '成人受講生対象レッスンのみ行うチューターです。\n小/中/高生の受講生が予約すると、マッチングしない可能性が高いです。',
    'Gia sư này thích hợp hơn với những người đi làm.\nVậy nên buổi học này không phù hợp với các bạn trẻ.',
  ],
  junior_available: [
    '초중고생 가능',
    'Available',
    's_tutors.junior_available',
    '小学，中学，高中生可以',
    '國小、國中、高中學生可以',
    '小中高生可能',
    'Trống lịch',
  ],
  yet_review: [
    '아직 등록된 수업 평가가 없습니다.',
    'No reviews yet',
    's_tutors.yet_review',
    '尚无课程评价。',
    '尚無課程評論。',
    'まだ登録されたレッスン評価がありません。',
    'Không có đánh giá',
  ],
  filter: [
    '상세필터',
    'Filter',
    's_tutors.filter',
    '详细筛选',
    '詳細篩選',
    'フィルターで絞り込む',
    'Bộ lọc',
  ],
  all_tutor_result: [
    '전체 튜터 검색결과',
    'Results for All Tutors',
    's_tutors.all_tutor_result',
    '所有任课教师搜寻结果',
    '所有任課教師搜尋結果',
    'すべてのチューター検索結果',
    'Kết quả tìm kiếm',
  ],
  no_favorite_tutor: [
    '같이 수업하고 싶은\n튜터를 찜해보세요.',
    '같이 수업하고 싶은\n튜터를 찜해보세요.',
    's_tutors.no_favorite_tutor',
    '请收藏想上课的\n任课教师。',
    '請收藏想一起上課的\n任課教師。',
    'レッスンを受けたい\nチューターをお気に入り登録しましょう。',
    'Thêm gia sư \nyêu thích!.',
  ],
  save_tutor_like: [
    '같이 수업하고 싶은\n튜터를 찜해보세요.',
    <>Favorite a tutor.</>,
    's_tutors.save_tutor_like',
    '请收藏想上课的\n任课教师。',
    '請收藏想一起上課的\n任課教師。',
    'レッスンを受けたい\nチューターをお気に入り登録しましょう。',
    <>Chọn gia sư yêu thích.</>,
  ],
  check_exp_tutor: [
    '나와 수업한 튜터를\n여기에서 확인할 수 있습니다.',
    <>See your previous tutors.</>,
    's_tutors.check_exp_tutor',
    '可在此确认\n和我一起上课的任课教师。',
    '可以在這裡確認\n和我上過課的任課教師。',
    'あなたとレッスンをしたチューターを\nここで確認することができます。',
    <>Xem gia trước của bạn.</>,
  ],
  experienced_tutor: [
    '수업한 튜터',
    'Prev. Tutors',
    's_tutors.experienced_tutor',
    '上过课的任课教师',
    '和我上過課的任課教師',
    'レッスンをしたチューター',
    'Gia sư trước',
  ],
  apply: ['적용', 'Apply', 's_tutors.apply', '套用', '套用', '適用', 'Áp dụng'],
  search_tutor: [
    '튜터 검색',
    'Search Tutor',
    's_tutors.search_tutor',
    '搜索任课教师',
    '搜尋任課教師',
    'チューター検索',
    'Tìm Gia sư',
  ],
  k12_lesson: [
    '초중고생 수업',
    'K-12',
    's_tutors.k12_lesson',
    '小学，中学，高中生课程',
    '國小、國中、高中學生課程',
    '小中高生レッスン',
    'K-12',
  ],
  no_search_result: [
    '조건에 맞는\n튜터가 없습니다.',
    'No results',
    's_tutors.no_search_result',
    '没有符合条件的\n任课教师。',
    '沒有符合條件的\n任課教師。',
    '条件に合う\nチューターがいません。',
    'Không có kết quả',
  ],
  header: [
    '튜터 목록',
    'Tutors',
    's_tutors.header',
    '任课教师清单',
    '任課教師清單',
    'チューターリスト',
    'Gia sư',
  ],
  my_tutor: [
    '내 튜터',
    'My Tutors',
    's_tutors.my_tutor',
    '我的任课教师',
    '我的任課教師',
    'マイチューター',
    'Gia sư của tôi',
  ],
};
export const s_prep = {
  done_reading: [
    '인사이트 읽기 완료',
    'Reading complete',
    's_prep.done_reading',
    '正文阅读完毕',
    '正文閱讀完畢',
    'インサイト読み完了',
    'Đọc xong',
  ],
  you_ve_done_listening_to_mp3: [
    'MP3 듣기를 완료하셨습니다!',
    'You completed listening to audiobook!',
    's_prep.you_ve_done_listening_to_mp3',
    '您已听完MP3！',
    '您已聽完MP3！',
    'MP3を聴くを完了しました！',
    'Bạn đã nghe xong sách nói!',
  ],
  you_ve_done_reading_insight: [
    '인사이트 읽기를 완료하셨습니다!',
    'You completed reading Insight!',
    's_prep.you_ve_done_reading_insight',
    '您已看完正文！',
    '您已看完正文！',
    'インサイトを読み終わりました！',
    'Bạn đã đọc xong Insight!',
  ],
  my_answer: [
    '내 답변',
    'My Response',
    's_prep.my_answer',
    '我的回复',
    '我的回覆',
    'あなたの回答',
    'Câu trả lời của tôi',
  ],
  show_only_to_me: [
    '튜터와 나만 보기',
    'Only visible to me & tutor',
    's_prep.show_only_to_me',
    '仅限任课教师与我查看',
    '僅任課教師與我查看',
    'チューターと自分だけ見る',
    'Chỉ hiển thị cho tôi & gia sư',
  ],
  click_to_select_this_for_discussion_during_the_lesson: [
    '수업 질문으로 선택',
    'Select question to discuss in lesson',
    's_prep.click_to_select_this_for_discussion_during_the_lesson',
    '选为课程提问',
    '選為課程提問',
    'レッスンの質問を選択',
    'Chọn câu hỏi để thảo luận trong buổi học',
  ],
  please_enter_your_answer: [
    '질문에 남기신 답변은 저장되어 다음 예습 시 열람하실 수 있습니다.',
    'Please write your response. You can revise it anytime before the lesson.',
    's_prep.please_enter_your_answer',
    '您留下的问题答案将被保存，并可在下次预习时阅览。',
    '針對提問留下的回覆將會儲存，並可於下次預習時閱覽。',
    '質問への回答は保存され、次の予習時に確認することができます。',
    'Vui lòng viết câu trả lời. Bạn có thể chỉnh lại bất cứ khi nào trước buổi học.',
  ],
  save: ['저장하기', 'Save', 's_prep.save', '保存', '儲存', '保存する', 'Lưu'],
  other_ringlers_answer: [
    '다른 링글러들의 답변',
    'Ringlers’ Response',
    's_prep.other_ringlers_answer',
    '其他Ringler的回复',
    '其他Ringler的回覆',
    '他のRinglerたちの回答',
    'Phản hồi của học viên Ringle',
  ],
  view: ['보러가기', 'View', 's_prep.view', '查看', '前往查看', '見る', 'Xem'],
  you_ve_done_watching_one_clip_: [
    '영상 1개 보기를 완료하셨습니다!',
    'You watched one video.',
    's_prep.you_ve_done_watching_one_clip_',
    '您已看完1个视频！',
    '您已看完1個影片！',
    '動画1本の視聴を完了しました！',
    'Bạn đã xem một video.',
  ],
  limit_message: [
    '교정 문장은 총 80 단어까지만 가능합니다.',
    'Submit your response in 80 words or less',
    's_prep.limit_message',
    '纠正句子最多能用80个单词。',
    '糾正句子最多80個單字。',
    '校正文章は全部で80単語まで可能です。',
    'Gửi câu trả lời 80 từ hoặc ít hơn',
  ],
};
export const s_preparation = {
  free_editing: [
    '80단어 답변 첨삭',
    '80-word Response Editing',
    's_preparation.free_editing',
    '80个单词的修改回复',
    '80個單字的增刪回覆',
    '回答添削(80単語まで)',
    'Chỉnh sửa câu trả lời 80 từ',
  ],
  correction_placeholder: [
    '수업 시작 24시간전까지 첨삭 받고 싶은 문장을 작성해 보세요.(※보안/기밀사항요청 금지)',
    'Submit your response in 80 words or at least 24 hours before the lesson starts. Please be sure not to share anything confidential!',
    's_preparation.correction_placeholder',
    '请在课程开始24小时前写下您想修改的句子。（※禁止要求安全/保密事项）',
    '最晚請於課程開始24小時前寫下希望增刪的句子。（※禁止要求保密）',
    'レッスン開始24時間前までに、添削してもらいたい文章を入力してください(※個人情報などは入力しないでください)',
    'Gừi câu trả lời của bạn trong 80 từ hoặc ít nhất 24 giờ trước khi buổi học bắt đầu. Hãy chắc chắn bạn không chia sẻ những thông tin tuyệt mật!',
  ],
  correct_policy1: [
    '교정 요청 원문 및 교정된 문장은 익명으로 공개되어, 링글 수강생들의 학습용도로 사용될 예정입니다. 이에, 교정 요청 전 수강생의 신분을 노출시킬 수 있는 단어, 사내 기밀 내용이 담긴 문장이 있는지 살펴주시면 감사하겠습니다',
    `Submitted document and tutor's edits may be used as an educational reference for other Ringlers. We will not reveal your name.
Please make sure that your document does not contain any personal or confidential information.`,
    's_preparation.correct_policy1',
    '要求纠正的原文及纠正后的句子将以匿名公开，用于Ringle学生们的学习上。因此，请在要求纠正前，查看有无暴露学生身份的单词或包含公司内部机密的文章。',
    '要求糾正的原文及糾正過的句子將以匿名方式公開，預計使用於Ringle學生們的學習用途。因此，請於要求糾正前注意句子是否包含洩漏學生身分的單字或公司機密。',
    '添削リクエストの原文および添削された文章は匿名で公開され、Ringle受講生の学習用途に使われる予定です。したがって、添削リクエスト前に、受講生の個人情報が流出するおそれのある単語や機密事項が記された文章が入っていないことを確認してください。',
    `Tài liệu được gửi và những chỉnh sửa của gia sư có thể được sử dụng với mục đích tham khảo cho những học viên Ringle khác. Chúng tôi sẽ không tiết lộ tên bạn.
Hãy đảm bảo tài liệu của bạn không bao gồm các thông tin cá nhân hoặc tuyệt mật.`,
  ],
  answer_history: [
    '지난 수업에 작성한 답변',
    'My Previous Response',
    's_preparation.answer_history',
    '上次课程的答复',
    '上次課程撰寫的回覆',
    '過去レッスンでの回答履歴',
    'Câu trả lời trước của tôi',
  ],
  correct_policy2: [
    '- 예습 답안교정 베타 서비스는 수업 당 80단어 (80 words) 까지 제공되며, 교정된 답은 수업 시작 시간에 확인 가능합니다.\n- 교정 요청하신 원문 및 튜터가 제공한 교정본은 향후 익명으로 공개될 예정이며, Ringle 수강생분들의 영어 학습 콘텐츠로 제공될 예정입니다.\n-각 질문 별 답을 작성하시는 고객 분들께, 다른 수강생이 해당 질문에 대한 예습 시 남긴 교정 요청 원문 및 튜터가 제공한 교정본을 익명으로 open 하여, 다른 수강생 분들께서 영어 공부 content 로 활용하실 수 있게 제공될 예정입니다.\n-이에, 수강생 분의 신분이 노출될 수 있는 내용, 기밀 유지가 필요한 내용에 대해서는 교정 요청을 하지 말아주시길 부탁드립니다.\n-Ringle 은 수강생 분들의 영어 학습 과정이, 다른 수강생 분들께도 영어 학습을 위한 content 로 제공될 수 있는 환경을 조성하고자 합니다. 단, 모든 content 는 익명으로 제공하여 수강생 분들의 privacy 보호에 가장 큰 중점을 둘 예정입니다.\n\n관련하여 의견 및 피드백 있으시면 언제든 고객센터를 통해 연락주십시오. 감사합니다.',
    "- For the Pre-lesson Editing Beta Service, you can submit a document of up to 80 words for free editing before the lesson.\n-The submitted document and its edited version will be used for educational purpose, without revealing the writer's name.\n-Your answers and your tutor's corrections will be shown to other Ringlers that are answering the same questions, in order to help with their learning process. All of the disclosed answers will be anonymous.\n-Therefore, please do not submit a document that contains personal or confidential information for the editing service.\n-Ringle aims to establish a learning atmosphere in which your learning experience can help other Ringlers. However, we will protect your privacy by posting everything anonymously.\n-If you have any suggestion or feedback regarding this, please do not hesitate to contact us at contact@ringleplus.com. We will respond as soon as possible, and do our best to reflect your opinions on our services. Thank you.",
    's_preparation.correct_policy2',
    '- 对于预习答案纠正测试版服务，每堂课最多提供80个单词（80 words），并可于课程开始时确认纠正的答案。\n-要求纠正的原文及任课教师提供的纠正后的答案将以匿名公开，用于Ringle学生们的英语学习上。\n-我们将为对各问题分别作答的学生，以匿名式公开其他学生对该提问预习时留下的要求纠正的原文及任课教师所提供的纠正答案，并把此内容提供给其他学习英语的学生用于英语学习上。\n-因此，请勿提出可能暴露学生身份或需要保密的内容进行纠正。\n-Ringle将把学生们的英语学习过程及资料分享给其他学生，希望为其他学生学习提供学习英语的好环境。但所有内容均以匿名方式提供，并且content将重点放在保护各学生的隐私上。\n\n如有相关反馈，欢迎随时通过客服中心联络我们，谢谢。',
    '- 預習答案糾正測試版服務每堂課最多80個單字（80 words），並可於課程開始時確認糾正的答案。\n-要求糾正的原文及任課教師提供的糾正版本之後預計以匿名方式公開，提供作為Ringle學生們的英語學習內容。\n-我們預計為針對各提問撰寫答案的學生，以匿名方式open其他學生針對該提問預習時留下的要求糾正原文及任課教師提供的糾正版本，並將提供作為英語學習content以供其他學生使用。\n-因此，請勿針對可能洩漏學生身分的內容或需要保密的內容要求糾正。\n-Ringle希望建立可以將學生們的英語學習過程提供作為其他學生英語學習content的環境。但所有content均以匿名方式提供，預計將重點放在保護各位學生的privacy。\n\n如有相關意見回饋，歡迎隨時透過客服中心聯絡我們，謝謝。',
    '- 予習回答添削Betaサービスは1レッスンあたり80単語 (80 words) まで対応し、添削された回答はレッスン開始時に確認できます。\n- 添削をリクエストした原文およびチューターが提供した添削内容は、今後匿名で公開される予定であり、Ringle受講生たちの英語学習コンテンツとして提供される予定です。\n-各質問に回答を作成される受講生の皆さまへ。他の受講生がその質問に対する予習時に提出した添削リクエストの原文およびチューターが提供した添削内容を匿名で公開し、他の受講生たちに英語学習コンテンツとして活用できるように提供される予定です。\n-したがって、受講生の個人情報が流出するおそれのある内容、機密事項などは添削リクエストに入力しないようお願いします。\n-Ringleでは、受講生の英語学習成果を他の受講生の英語学習のためのコンテンツとして提供できる環境を設ける取組みをしています。すべてのコンテンツは匿名で提供され、受講生の方のプライバシー保護を最優先することに努めます。\n\nこの件に関してご意見やフィードバックがございましたら、いつでもカスタマーセンターにご連絡ください。よろしくお願いいたします。',
    '- Với Dịch vụ chỉnh sửa câu trả lời phiên bản Beta trước buổi học, bạn có thể nộp tài liệu dưới 80 từ để được chỉnh sửa miễn phí trước buổi học.\n-Tài liệu được gửi lên và phiên bản chính sửa sẽ được dùng cho mục đích giáo dục. Tên bạn sẽ không bị tiết lộ.\n-Câu trả lời của bạn và phần chỉnh sửa của gia sư sẽ cho các học viên Ringle khác có cùng câu trả lời tham khảo, nhằm giúp đỡ quá trình học tập của mọi người. Tất cả câu trả lời sẽ được ẩn danh.\n-Vì vậy, vui lòng không nộp các tài liệu chứa thông tin cá nhân và tuyệt mật để chỉnh sửa.\n-Ringle mong muốn tạo ra một môi trường học tập nơi mà trải nghiệm học của bạn có thể giúp những học viên khác. Tuy nhiên, chúng tôi sẽ bảo vệ quyền riêng tư bằng cách đăng tải mọi thứ ở trạng thái ẩn danh.\n-Nếu bạn có bất cứ đề xuất hoặc phản hồi liên quan đến vấn đề này, hãy liên hệ với chúng tôi qua email contact@ringleplus.com. Chúng tôi sẽ phản hồi sớm nhất có thể, và cố gắng hết sức để thể hiện sự tiếp thu ý kiến trong dịch vụ của mình. Trân trọng.',
  ],
  terms: [
    '이용약관',
    'Terms of Use',
    's_preparation.terms',
    '使用条款',
    '使用條款',
    '添削利用規約',
    'Điều khoản sử dụng',
  ],
  the_size_of_file_is_less_than_10mb: [
    '크기가 10MB를 넘지 않는 파일만 업로드가 가능합니다.',
    'You cannot upload files larger than 10MB.',
    's_preparation.the_size_of_file_is_less_than_10mb',
    '仅可上传不超过10MB的文件。',
    '僅可上傳不超過10MB的檔案。',
    'サイズが10MBを超えないファイルのみアップロード可能です。',
    'Bạn không thể tải lên file lớn hơn 10MB.',
  ],
  free_editing_warning_message: [
    '수업24시간 이전까지 이용 가능',
    'Available up to 24 hours before to the lesson',
    's_preparation.free_editing_warning_message',
    '可在课程开始24小时前使用',
    '最晚於課程開始24小時前可利用',
    'レッスン24時間前まで利用可能',
    'Có sẵn tối thiểu 24 giờ trước buổi học',
  ],
  share_answer: [
    '선택 해제시 다른 수강생에게 내 답변이 공유됩니다.',
    'If you deselect, other Ringlers can view your response.',
    's_preparation.share_answer',
    '取消选择时，我的答复将会分享给其他学生。',
    '解除選擇時，其他學生將會看到我的回覆。',
    '選択解除時、他の受講生にあなたの回答が共有されます。',
    'Nếu bạn bỏ chọn, các học viên khác có thể xem câu trả lời của bạn.',
  ],
  select_question: [
    '수업 질문으로 선택하기',
    'Select questions',
    's_preparation.select_question',
    '选为课程提问',
    '選為課程提問',
    'レッスンの質問に選択する',
    'Chọn câu hỏi',
  ],
  upload_material: [
    <>
      수업에서 다루고 싶은 자료를 업로드 해보세요.
      <br />
      직접 교정받고 싶은 내용은 수업 노트에 붙여보세요.
    </>,
    <>
      Upload your lesson materials.
      <br />
      If you have a written sample that need proofreading, please try pasting it
      on Lesson Notes.
    </>,
    's_preparation.upload_material',
    <>
      请上传您想在课程中进行学习的资料。
      <br />
      请将想直接纠正的内容贴在课堂笔记中。
    </>,
    <>
      請將想於課程中進行的資料上傳。
      <br />
      請將想直接糾正的內容貼於課堂筆記。
    </>,
    <>
      レッスンで扱いたい資料をアップロードしてみましょう。
      <br />
      直接校正してほしい内容は、レッスンノートにペーストしてください。
    </>,
    <>
      Tải lên học liệu của bạn.
      <br />
      Nếu bạn có bài viết mẫu cần hiệu đính, hãy sao chép vào phần Ghi chú buổi
      học.
    </>,
  ],
  other_upload: [
    '다른 자료 업로드',
    'Replace your materials',
    's_preparation.other_upload',
    '上传其他资料',
    '上傳其他資料',
    '他の資料アップロード',
    'Thay thế tài liệu',
  ],
  delete_upload: [
    '업로드한 자료 삭제',
    'Delete your uploads',
    's_preparation.delete_upload',
    '删除上传的资料',
    '刪除上傳的資料',
    'アップロードした資料削除',
    'Xoá tài liệu đã tải lên',
  ],
  no_answer_first_writer: [
    '이 질문에 대한 공유된 답변이 없습니다.',
    'Be the first one to share your response!',
    's_preparation.no_answer_first_writer',
    '该提问无分享的回复。',
    '該提問無分享的回覆。',
    'この質問について共有された回答はありません。',
    'Là người đầu tiên chia sẻ câu trả lời của bạn!',
  ],
  no_previous_response: [
    '질문에 남기신 답변은 저장되어 다음 예습 시 열람하실 수 있습니다.',
    "You'll be able to view your responses at Lesson Prep.",
    's_preparation.no_previous_response',
    '您提出的问题答复将被保存，并可在下次预习时查看。',
    '針對提問留下的回覆將會儲存，並可於下次預習時閱覽。',
    '質問への回答は保存され、次の予習時に閲覧することができます。',
    'Bạn có thể xem câu trả lời của mình ở phần Chuẩn bị Buổi học.',
  ],
};
export const s_lesson_style = {
  record: {
    yes: [
      '녹음하기',
      'Record',
      's_lesson_style.record.yes',
      '录音',
      '錄音',
      '録音する',
      'Thu âm',
    ],
    no: [
      '녹음하지 않기',
      'Do Not Record',
      's_lesson_style.record.no',
      '不录音',
      '不錄音',
      '録音しない',
      'Không thu âm',
    ],
    yes_desc: [
      `수업 시작 시, "Recording In Progress" 안내멘트가 나오고 [● Recording]가 표기됩니다. 
(수업화면은 녹화되지 않습니다.)`,
      'You\'ll hear "Recording In Progress" and see [● Recording] sign (lesson screen isn\'t recorded).',
      's_lesson_style.record.yes_desc',
      `课程开始时，将会出现「Recording In Progress」指示音并显示[● Recording]。
 （不录制上课画面。）`,
      `課程開始時，出現「Recording In Progress」指示聲，並標示[● Recording]。
（不錄製上課畫面。）`,
      `レッスン開始時「Recording In Progress」という案内メッセージが出て[● Recording]と表示されます。
(レッスン画面は録画されません)`,
      'Bạn sẽ nghe thấy "Recording In Progress" và biểu tượng [● Recording].',
    ],
  },
  intro: {
    skip: [
      '소개 없이 바로 시작',
      'Start lesson without\nintroductions',
      's_lesson_style.intro.skip',
      '不进行自我介绍直接开始',
      '未先自我介紹便開始',
      '自己紹介なしですぐに開始',
      'Bắt đầu buổi học bỏ qua\nphần giới thiệu',
    ],
    do: [
      '서로 소개 3분 후 시작',
      'Spend first 3\nminutes exchanging\nintroductions',
      's_lesson_style.intro.do',
      '彼此进行3分钟自我介绍后开始',
      '各自我介紹3分鐘後開始',
      '3分間お互いに自己紹介してから開始',
      'Dành\n3 phút đầu\n để giới thiệu',
    ],
  },
  lesson_mode: {
    correction: [
      '교정 중심',
      'Paraphrasing-Focused',
      's_lesson_style.lesson_mode.correction',
      '以纠正为主',
      '以糾正為主',
      '校正中心',
      'Tập trung sửa lỗi',
    ],
    discussion: [
      '토론 중심',
      'Discussion-Focused',
      's_lesson_style.lesson_mode.discussion',
      '以讨论为主',
      '以討論為主',
      'ディスカッション中心',
      'Tập trung thảo luận',
    ],
  },
  mode_detail: {
    title: [
      '수업 설정 내용',
      'Correction mode',
      's_lesson_style.mode_detail.title',
      '课程设定内容',
      '課程設定內容',
      'レッスンモード',
      'Chế độ chỉnh sửa',
    ],
    correction: {
      instant_short: [
        '상시교정',
        'Instant Paraphrasing',
        's_lesson_style.mode_detail.correction.instant_short',
        '随时纠正',
        '隨時糾正',
        '常時修正モード',
        'Sửa lỗi ngay',
      ],
      instant_desc: [
        '틀린 영어 표현을 할 때마다 교정 받음',
        'Correct and paraphrase my errors as soon as I make them',
        's_lesson_style.mode_detail.correction.instant_desc',
        '每当出现错误的英语用法时接受纠正',
        '每當出現錯誤的英語用法時接受糾正',
        '間違った表現をしたらその場で校正してもらう',
        'Sửa ngay khi tôi mắc lỗi',
      ],
      intermittent_short: [
        '대화 교정모드',
        'Intermittent Paraphrasing',
        's_lesson_style.mode_detail.correction.intermittent_short',
        '对话纠正模式',
        '對話糾正模式',
        '会話優先モード',
        'Sửa lỗi ngắt quãng',
      ],
      intermittent_desc: [
        '각 질문에 대한 대화가 끝난 후 교정 받음',
        'Correct and paraphrase my errors after each question',
        's_lesson_style.mode_detail.correction.intermittent_desc',
        '针对各提问的对话结束后接受纠正',
        '針對各提問的對話結束後接受糾正',
        '各質問についての会話が終わった後に校正してもらう',
        'Sửa cho tôi sau khi thảo luận câu hỏi',
      ],
    },
    discussion: {
      mode55_desc: [
        '튜터와 내가 절반씩 이야기를 주고 받음',
        'I want my tutor to speak as much as I do (5:5)',
        's_lesson_style.mode_detail.discussion.mode55_desc',
        '任课教师和本人听说各占一半',
        '任課教師與我各發言一半',
        '',
        'Tôi muốn gia sư có thời lượng nói bằng tôi (5:5)',
      ],
      mode55_short: [
        '5:5 토론',
        '5:5 Discussion',
        's_lesson_style.mode_detail.discussion.mode55_short',
        '5：5讨论',
        '5:5討論',
        '5:5 ディスカッション',
        'Thảo luận 5:5',
      ],
      mode82_desc: [
        '튜터는 듣고 학생이 주로 이야기함',
        'I want to speak more than my tutor (8:2)',
        's_lesson_style.mode_detail.discussion.mode82_desc',
        '任课教师以听为主, 侧重于学员会话',
        '任課教師聆聽，主要由學生發言',
        'チューターと自分が半分ずつ話す',
        'Tôi muốn nói nhiều hơn gia sư (8:2)',
      ],
      mode82_short: [
        '8:2 토론',
        '8:2 Discussion',
        's_lesson_style.mode_detail.discussion.mode82_short',
        '8：2讨论',
        '8:2討論',
        '8:2 ディスカッション',
        'Thảo luận 8:2',
      ],
    },
  },
  addi_request: [
    '추가 요청',
    'Other request',
    's_lesson_style.addi_request',
    '额外要求',
    '額外要求',
    '追加リクエスト',
    'Yêu cầu khác',
  ],
  header: [
    '수업 방식',
    'Lesson Style',
    's_lesson_style.header',
    '课程方式',
    '上課方式',
    'レッスン方式',
    'Hình thức học',
  ],
};
export const s_review = {
  in_the_review_menu_you_can_check_and_review_completed_lessons_: [
    '완료한 수업이 없습니다.',
    "You haven't completed any lessons.",
    's_review.in_the_review_menu_you_can_check_and_review_completed_lessons_',
    '无已完成的课程。',
    '無已完成的課程。',
    '完了したレッスンはありません。',
    'Bạn chưa hoàn thành bài học nào.',
  ],
  lessons_you_haven_t_reviewed_yet: [
    '복습을 완료하지 않은 수업',
    'Lessons to review',
    's_review.lessons_you_haven_t_reviewed_yet',
    '未完成复习的课程',
    '未完成複習的課程',
    '復習を完了していないレッスン',
    'Buổi học chưa xem lại',
  ],
  lessons_you_have_reviewed: [
    '복습을 완료한 수업',
    'Lessons you have reviewed',
    's_review.lessons_you_have_reviewed',
    '已完成复习的课程',
    '已完成複習的課程',
    '復習を完了したレッスン',
    'Buổi học bạn đã xem lại',
  ],
  you_can_review_a_lesson_after_rating_the_lesson_: [
    '수업 평가를 완료한 후에 \n복습하실 수 있습니다.',
    'You can review a lesson \n after rating the lesson.',
    's_review.you_can_review_a_lesson_after_rating_the_lesson_',
    '完成课程评论后\n可进行复习。',
    '完成課程評論後\n可進行複習。',
    'レッスン評価を完了した後に\n復習することができます。',
    'Bạn có thể xem lại buổi học \n sau khi đánh giá buổi học đó.',
  ],
  rate_lesson: [
    '수업 평가하기',
    'Rate Lesson',
    's_review.rate_lesson',
    '评论课程',
    '評論課程',
    'レッスンを評価する',
    'Đánh giá buổi học',
  ],
  to_do_list: [
    '복습 목록',
    'To-Do List',
    's_review.to_do_list',
    '复习目录',
    '複習清單',
    '復習リスト',
    'Danh sách cần làm',
  ],
  no_show: [
    '학생 노쇼',
    'No-show',
    's_review.no_show',
    '学生未出席',
    '學生未出現',
    '無断欠席',
    'Vắng mặt',
  ],
  tutor_no_show: [
    '튜터 노쇼',
    'Tutor no-show',
    's_review.tutor_no_show',
    '任课教师未出席',
    '任課教師未出現',
    'チューター無断欠席',
    'Gia sư vắng mặt',
  ],
  my_lesson_prep: [
    '예습 내역',
    'My Lesson Prep',
    's_review.my_lesson_prep',
    '预习内容',
    '預習內容',
    '予習履歴',
    'Chuẩn bị buổi học',
  ],
  lesson_recording: [
    '수업 녹음 파일',
    'Lesson Recording',
    's_review.lesson_recording',
    '课程录音文件',
    '課程錄音檔',
    'レッスン録音',
    'Ghi âm buổi học',
  ],
  lesson_analysis: [
    '수업 분석',
    'Lesson Analysis',
    's_review.lesson_analysis',
    '课程分析',
    '課程分析',
    'レッスン分析',
    'Phân tích buổi học',
  ],
  tutor_s_feedback: [
    '튜터 피드백',
    'Tutor’s Feedback',
    's_review.tutor_s_feedback',
    '任课教师反馈',
    '任課教師意見回饋',
    'チューターフィードバック',
    'Đánh giá của gia sư',
  ],
  lesson_notes: [
    '수업 노트',
    'Lesson Notes',
    's_review.lesson_notes',
    '课程笔记',
    '課堂筆記',
    'レッスンノート',
    'Ghi chú buổi học',
  ],
  recording: [
    '수업 녹음',
    'Recording',
    's_review.recording',
    '课程录音',
    '課程錄音',
    'レッスン録音',
    'Ghi âm',
  ],
  analysis: [
    '수업 분석',
    'Analysis',
    's_review.analysis',
    '课程分析',
    '課程分析',
    'レッスン分析',
    'Phân tích',
  ],
  feedback: [
    '튜터 피드백',
    'Feedback',
    's_review.feedback',
    '任课教师反馈',
    '任課教師意見回饋',
    'チューターフィードバック',
    'Đánh giá',
  ],
  notes: [
    '수업 노트',
    'Notes',
    's_review.notes',
    '课程笔记',
    '課堂筆記',
    'レッスンノート',
    'Ghi chú',
  ],
  preparing: [
    '준비중',
    'Preparing',
    's_review.preparing',
    '准备中',
    '準備中',
    '準備中',
    'Chuẩn bị',
  ],
  the_lesson_recording_is_unavailable: [
    `"수업 녹음을 원치 않음"으로 설정하셔서 수업 녹음 콘텐츠를 이용하실 수 없습니다. \n
수업 녹음 설정은 "수업 방식 설정"에서 변경하실 수 있습니다.`,
    'Audio recording and transcripts are only available for lessons that allowed audio recording.',
    's_review.the_lesson_recording_is_unavailable',
    `课程录音您设定为「不希望录音课程」，因此无法使用课程录音内容。\n
 课程录音设定可在「课程方式设定」中进行更改。`,
    `您設定為「不希望課程錄音」，無法利用課程錄音內容。\n
課程錄音設定可於「上課方式設定」進行變更。`,
    `「レッスン録音を希望しない」に設定されているため、レッスン録音コンテンツを利用することができません。 \n
レッスン録音の設定は、「レッスン方式設定」から変更することができます。`,
    'Ghi âm và bản ghi chỉ có trong những buổi học cho phép ghi âm.',
  ],
  the_lesson_analysis_content_is_unavailable: [
    `"수업 녹음을 원치 않음"으로 설정하셔서 수업 분석을 이용하실 수 없습니다. \n
수업 녹음 설정은 "수업 방식 설정"에서 변경하실 수 있습니다.`,
    'Lesson analysis is only available for lessons that allowed audio recording.',
    's_review.the_lesson_analysis_content_is_unavailable',
    `课程录音您设定为「不希望录音课程」，无法利用课程分析。\n
 课程录音设定可在「课程方式设定」中进行更改。`,
    `您設定為「不希望課程錄音」，無法利用課程分析。\n
課程錄音設定可於「上課方式設定」進行變更。`,
    `「レッスン録音を希望しない」に設定されているため、レッスン分析を利用することができません。 \n
レッスン録音の設定は、「レッスン方式設定」から変更することができます。`,
    'Phân tích buổi học chỉ có khi cho phép ghi âm.',
  ],
  you_ve_done_listening_to_lesson_recording_: [
    '수업 다시 듣기를 완료하셨습니다.',
    'You’ve done listening to lesson recording.',
    's_review.you_ve_done_listening_to_lesson_recording_',
    '您已重新听完课程。',
    '您已重新聽完課程。',
    'レッスンをもう一度聴くを完了しました。',
    'Bạn đã nghe xong ghi âm buổi học.',
  ],
  speaking_analysis_charts: [
    '스피킹 분석 차트',
    'Speaking Analysis Charts',
    's_review.speaking_analysis_charts',
    '口语分析图表',
    '口說分析圖表',
    'スピーキング分析チャート',
    'Biểu đồ phân tích bài nói',
  ],
  vocabulary_range: [
    '사용 단어 범위',
    'Range of Words',
    's_review.vocabulary_range',
    '使用单词范围',
    '使用單字範圍',
    '使用単語範囲',
    'Vốn từ vựng',
  ],
  words_per_min: [
    '말하기 속도',
    'Speech Pace',
    's_review.words_per_min',
    '语速',
    '口說速度',
    '話すスピード',
    'Tốc độ nói',
  ],
  words_per_min_explanation: [
    `분당 말하기 속도: 1분당 말하는 단어수를 기반하여 말하기 속도를 측정합니다.\n\n
사용 단어 범위: 수업 중 학습자가 사용한 단어를 기반으로 현재 학습자가 구사할 수 있는 단어 범위를 측정합니다`,
    `Speech pace is total number of words uttered divided by the total number of minutes in lesson.\n
Vocabulary Range measures fluency based on words spoken during lesson.`,
    's_review.words_per_min_explanation',
    `每分钟语速：根据每分钟所说的单词数来测量你的语速。\n\n
 使用单词范围：根据上课时学生使用的单词来测量目前学生可使用的单词范围`,
    `每分鐘口說速度：以每分鐘所說的單字數為基礎，測量口說速度。\n\n
使用單字範圍：以上課時學生使用的單字為基礎，測量目前學生可使用的單字範圍。`,
    `レッスン中のにあなたが話した単語数を基準に計算される、1分あたりの発話単語数を示します。\n\n
使用単語範囲: レッスン中にあなたが使用した単語をもとに、現在あなたが使える単語範囲を測定します。`,
    `Tốc độ được tính bằng tổng số từ sử dụng chia ra số phút trong buổi học.\n
Vốn từ vựng đo lường sự trôi chảy dựa trên những từ bạn nói trong suốt buổi học.`,
  ],
  speaking_pattern_suggestions: [
    '수업 중 사용한 단어 관련',
    'Speaking Pattern & Suggestions',
    's_review.speaking_pattern_suggestions',
    '上课时使用的单词相关内容',
    '上課時使用的單字相關內容',
    'レッスン中に使用した単語関連',
    'Đặc điểm nói & Đề xuất',
  ],
  synonym_suggestions: [
    '추천 동의어 리스트 보기',
    'Synonyms',
    's_review.synonym_suggestions',
    '查看推荐的同义词清单',
    '查看推薦的同義詞清單',
    'おすすめ同義語リストを見る',
    'Từ đồng nghĩa',
  ],
  frequency_of_filler_word_use: [
    '필러워드 사용 빈도',
    'Filler Word Frequency',
    's_review.frequency_of_filler_word_use',
    '填充词使用频率',
    '填補詞使用頻率',
    'つなぎ言葉使用頻度',
    'Tần suất dùng Filler Words',
  ],
  filler_words: [
    '필러워드',
    'Filler Words',
    's_review.filler_words',
    '填充词',
    '填補詞',
    'つなぎ言葉(Filler Word)',
    'Filler Words',
  ],
  filler_words_explanation: [
    `Filler Word는 like, um과 같이 의미 없이 문장에서 사용되는 단어들을 말합니다.\n\n
Filler Word의 수치(%)는 한 문장을 발화할 때, Filler word를 한번 이상 사용할 확률을 의미합니다. \n\n권장값은 약 30% 내 입니다.`,
    "Filler words are words used to mark a pause or hesitation, ex. Hmm, like. Frequency calculates probability that you'll use filler words in a sentence. \n\nAppropriate rate for this category is about 30%.",
    's_review.filler_words_explanation',
    `填充词是指句子中所使用如like、um等无意义的单词。\n\n
 填充词的数值（%）是指在说一句话时，使用一次以上填充词的概率。 \n\n建议值约30%以内。`,
    `Filler Word意指句子中所使用如like、um等無意義的單字。\n\n
Filler Word的數值（%）意指在說一句話時，Filler Word使用一次以上的機率。\n\n建議值約30%以內。`,
    `つなぎ言葉(Filler Word)は「like」「um」のような会話の間を埋める用途の意味を持たない言葉のことです。\n\n
数値(%)は、一つの文章を話す時につなぎ言葉(Filler word)を1回以上使用する確率を示します。\n\n推奨値は約30%以内です。`,
    'Filler words là những từ dùng cho khoảng ngừng khi cần suy nghĩ để tìm ý, như Hmm, like. Tần suất được tính theo xác suất bạn sử dụng filler words trong câu. \n\nTỷ lệ phù hợp là khoảng 30%.',
  ],
  done_checking: [
    '확인 완료',
    'Done checking',
    's_review.done_checking',
    '确认完毕',
    '確認完畢',
    'レッスン分析確認完了',
    'Kiểm tra xong',
  ],
  you_ve_done_checking_the_lesson_analysis_: [
    '수업 분석 확인을 완료하셨습니다!',
    'You’ve done checking the lesson analysis.',
    's_review.you_ve_done_checking_the_lesson_analysis_',
    '您已确认完课程分析！',
    '您已確認完課程分析！',
    'レッスン分析確認を完了しました。',
    'Bạn đã kiểm tra xong phân tích buổi học.',
  ],
  overall_feedback: [
    'Overall Feedback',
    'Overall Feedback',
    's_review.overall_feedback',
    'Overall Feedback',
    'Overall Feedback',
    '全体のフィードバック',
    'Overall Feedback',
  ],
  average_score: [
    'Average Score',
    'Average Score',
    's_review.average_score',
    'Average Score',
    'Average Score',
    '平均点数',
    'Average Score',
  ],
  estimated_scores: [
    'Estimated Scores',
    'Estimated Scores',
    's_review.estimated_scores',
    'Estimated Scores',
    'Estimated Scores',
    '予測スコア',
    'Estimated Scores',
  ],
  in_depth_feedback: [
    'In-depth Feedback',
    'In-depth Feedback',
    's_review.in_depth_feedback',
    'In-depth Feedback',
    'In-depth Feedback',
    '詳細なフィードバック',
    'In-depth Feedback',
  ],
  feedback_on_submitted_content: [
    'Feedback on submitted content',
    'Feedback on submitted content',
    's_review.feedback_on_submitted_content',
    'Feedback on submitted content',
    'Feedback on submitted content',
    '提出物へのフィードバック',
    'Feedback on submitted content',
  ],
  how_was_the_feedback_report_for_this_lesson_: [
    '이 피드백 보고서를 평가해주세요',
    'Please rate this feedback',
    's_review.how_was_the_feedback_report_for_this_lesson_',
    '请评价这份反馈报告',
    '請評論這份意見回饋報告書',
    'このフィードバックレポートを評価してください。',
    'Vui lòng chấm điểm đánh giá này',
  ],
  write_your_opinion_on_this_feedback: [
    '평가에 대한 이유를 적어주세요\n고객님의 소중한 의견은 튜터가 양질의 피드백 보고서를 제공하는데 도움이 됩니다.',
    "Please provide explanation for your rating. It'll help your tutor produce better feedback.",
    's_review.write_your_opinion_on_this_feedback',
    '请写下评价理由。\n学生的宝贵意见有助于任课教师提供优质的反馈报告书。',
    '請針對評論寫下理由。\n學生的寶貴意見有助於任課教師提供優質的意見回饋報告書。',
    '評価の理由を入力してください。\nお客様の大切なご意見は、チューターが効果的なフィードバックレポートを提供するのに役立ちます。',
    'Vui lòng giải thích cho đánh giá của bạn. Điều này giúp cho gia sư của bạn đưa ra đánh giá tốt hơn.',
  ],
  you_ve_done_checking_and_evaluating_feedback_: [
    '튜터 피드백 확인 및 평가 완료',
    'Done checking and evaluating feedback.',
    's_review.you_ve_done_checking_and_evaluating_feedback_',
    '已确认任课教师的反馈并完成评论',
    '已確認任課教師的意見回饋並完成評論',
    'チューターフィードバック確認および評価完了',
    'Đã kiểm tra và đánh giá xong.',
  ],
  done_checking_and_evaluating_feedback: [
    '튜터 피드백 확인 및 평가를 완료하셨습니다.',
    'You’ve done checking and evaluating feedback.',
    's_review.done_checking_and_evaluating_feedback',
    '您已确认任课教师的反馈并完成评论',
    '您已確認任課教師的意見回饋並完成評論。',
    'チューターフィードバック確認および評価を完了しました。',
    'Bạn đã kiểm tra và đánh giá xong.',
  ],
  score_comparison: [
    'Score Comparison',
    'Score Comparison',
    's_review.score_comparison',
    'Score Comparison',
    'Score Comparison',
    '採点基準',
    'So sánh điểm',
  ],
  record_unavailable: [
    '수업 녹음파일과 스크립트를 생성중입니다.\n수업 종료 후, 최대 24시간 정도 소요될 수 있습니다. 조금만 기다려 주세요.',
    'Generating lesson recordings and scripts.\nThis process may take up to\n24 hours after lesson.\n\nThank you for waiting!',
    's_review.record_unavailable',
    '正在创建课程录音文件与脚本。\n课程结束后，最长可能需要24小时，请稍等。',
    '正在生成課程錄音檔與腳本。\n課程結束後，最長需要24小時，請稍候。',
    'レッスン録音ファイルとスクリプトを作成中です。\nレッスン終了後、最長24時間ほどかかることがあります。もうしばらくお待ちください。',
    'Đang tạo ghi âm và bản ghi buổi học.\nQuy trình này có thể mất tới\n24 giờ sau buổi học.\n\nCảm ơn sự kiên nhẫn của bạn!’',
  ],
  analysis_unavailable: [
    '말하기 속도, 사용 단어 수, 사용한 표현 분석 중',
    'Analyzing Speaking Speed, Range of Words, and Speaking Patterns',
    's_review.analysis_unavailable',
    '正在分析语速、使用的单词数、使用的表达方式',
    '正在分析口說速度、使用的單字數、使用的用法',
    '話すスピード、使用単語数、使用した表現の分析中',
    'Phân tích Tốc độ nói, Vốn từ vựng và Đặc điểm nói',
  ],
  frequently_used_words_phrases: [
    '내가 사용한 단어 보기',
    'View used Words',
    's_review.frequently_used_words_phrases',
    '查看我使用的单词',
    '查看我使用的單字',
    'あなたが使用した単語を見る',
    'Xem những từ đã dùng',
  ],
  phrase_btn: [
    '내가 사용한 구문 보기',
    'View used Expressions',
    's_review.phrase_btn',
    '查看我使用的句型',
    '查看我使用的句型',
    'あなたが使用した構文を見る',
    'Xem những mẫu câu đã dùng',
  ],
  havent_record: [
    '수업 녹음파일과 스크립트 생성이 지연되고 있습니다.\n\n아래 버튼을 클릭하여 링글팀에 연락 주시면,\n빠르게 확인 후 조치하겠습니다.\n\n복습 자료 제공이 늦어진 점에 사과드립니다.',
    'There is a delay in generating audio recordings and scripts.\nPlease contact the Ringle team through the button below for quick action to be followed.\n\nWe apologize for the delay in providing\nthe review materials.',
    's_review.havent_record',
    '课程录音文件与脚本创建延误中，\n\n请点击下方按钮联系Ringle团队，\n我们将尽快确认并处理。\n\n对于延误提供复习材料，我们深表歉意。',
    '課程錄音檔與腳本生成延誤中，\n\n如點擊以下按鈕聯絡Ringle團隊，\n將盡快確認後進行處理。\n\n我們為延誤提供複習資料向您致歉。',
    'レッスン録音ファイルとスクリプト生成が遅れています。\n\n下のボタンからRingleチームにご連絡いただいたのち、\n速やかに確認・対応いたします。\n\n復習資料のご提供が遅くなり申し訳ございません。',
    'Có sự chậm trễ trong quá trình tạo ghi âm và bản ghi. \nVui lòng liên hệ đội ngũ Ringle bằng nút phía dưới để có thể lấy file nhanh hơn.\n\nChúng tôi xin lỗi về sự chậm trễ trong việc cung cấp\ntài liệu để xem lại.',
  ],
  record_reported: [
    '링글팀에 복습 자료를 \n아직 제공 받지 못한 것을 알렸습니다.\n\n빠르게 확인 후 연락드리겠습니다.',
    "The report has been sent to the Ringle team.\nWe'll check quickly and inform you.",
    's_review.record_reported',
    '您已告知Ringle团队\n尚未提供复习资料，\n\n我们将尽快确认并与您联系。',
    '您已告知Ringle團隊\n尚未提供複習資料，\n\n我們將盡快確認後連絡您。',
    'Ringleチームに復習資料が\nまだ提供されていないことを通知しました。\n\n速やかに確認し、ご連絡いたします。',
    'Báo cáo đã được gửi đến cho đội ngũ Ringle.\nChúng tôi sẽ kiểm tra nhanh chóng và thông báo cho bạn.',
  ],
  havent_received_feedback: [
    '아직 튜터의 피드백을 받지 못하셨나요?\n아래 버튼을 클릭하여 링글팀에 알려주세요!\n피드백 제공이 늦어져 죄송합니다.',
    "Haven't received any feedback from your tutor yet?\nPlease let the Ringle team know by tapping the button below!\nWe apologize for the delay in providing feedback.",
    's_review.havent_received_feedback',
    '您还没有收到任课教师的反馈吗？\n请点击下方按钮联系Ringle团队！\n对于延误提供反馈，我们深表歉意。',
    '您尚未收到任課教師的意見回饋嗎？\n請點擊以下按鈕告訴Ringle團隊！\n我們為延誤提供意見回饋向您致歉。',
    'まだチューターのフィードバックを受け取っていませんか？\n下のボタンをクリックしてRingleチームに知らせてください！\nフィードバックのご提供が遅くなり申し訳ございません。',
    'Bạn chưa nhận được đánh giá của gia sư?\nHãy thông báo cho đội ngũ Ringle biết bằng nút phía dưới!\nChúng tôi xin lỗi vì sự chậm trễ trong việc cung cấp đánh giá.',
  ],
  report_to_ringle: [
    '링글팀에게 알리기',
    'Report to Ringle team',
    's_review.report_to_ringle',
    '告知Ringle团队',
    '告知Ringle團隊',
    'Ringleチームに知らせる',
    'Báo lỗi đến đội ngũ Ringle',
  ],
  report_done: [
    '링글팀에 튜터 피드백 리포트를\n아직 받지 못한 것을 알렸습니다.\n빠르게 확인 후 연락드리겠습니다.',
    "The report has been sent\nto the Ringle team.\nWe'll check quickly and inform you.",
    's_review.report_done',
    '您已告知Ringle团队尚未收到\n任课教师的反馈报告，\n我们将尽快确认并与您联系。',
    '您已告知Ringle團隊尚未收到\n任課教師的意見回饋報告書，\n我們將盡快確認後連絡您。',
    'RingleチームにチューターFeedback Reportを\nまだ受け取っていないことを知らせました。\n速やかに確認後、ご連絡いたします。',
    'Báo lỗi đã được gửi\nđến đội ngũ Ringle.\nChúng tôi sẽ kiểm tra nhanh chóng và thông báo cho bạn.',
  ],
  is_waiver: [
    '해당 수업의 피드백은\n다음의 사유 중 하나로 제공되지 않습니다 :\n\n1) 수강생의 요청\n2) 작문 위주로 진행된 수업\n3) 인터뷰 형식으로 진행된 수업',
    'Feedback from this lesson is not available for one of the following reasons:\n1) Student confirmation\n2) Writing-oriented lesson\n3) Interview-oriented lesson.',
    's_review.is_waiver',
    '由于以下原因之一\n未提供反馈：\n\n1) 学生的要求\n2) 以写作为主的课程\n3) 以面试形式进行的课程',
    '該課程的意見回饋\n由於以下原因之一未提供：\n\n1) 學生的要求\n2) 以寫作為主進行的課程\n3) 以面試形式進行的課程',
    'このレッスンのフィードバックは\n以下のいずれかの理由により提供されません。 :\n\n1) 受講生のリクエスト\n2) 作文中心に行われたレッスン\n3) 面接形式で行われたレッスン',
    'Không có đánh giá buổi học này vì một trong số lí do sau:\n1) Học viên đã xác nhận\n2) Buổi học tập trung viết\n3) Buổi học tập trung phỏng vấn.',
  ],
  writing_focused: [
    'Writing Focused 주제 수업의 피드백은\n수업 노트(Google Doc)에 포함되어\n별도의 피드백 리포트는 제공되지 않습니다.',
    'Feedback from Writing Focused Lessons is included in the Lesson Note(Google Doc), so a separate feedback report is not available.',
    's_review.writing_focused',
    'Writing Focused主题课程的反馈\n包含于课堂笔记（Google Doc），\n故不额外提供反馈报告。',
    'Writing Focused主題課程的意見回饋\n包含於課堂筆記（Google Doc），\n故不額外提供意見回饋報告書。',
    'Writing Focusedテーマレッスンのフィードバックは\nレッスンノート(Google Doc)に含まれており、\n別途のFeedback Reportは提供されません。',
    'Đánh giá cho Buổi học Tập trung viết nằm trong Ghi chú buổi học (Google Doc), nên không có báo cáo đánh giá riêng.',
  ],
  used_expressions: [
    '구문 리스트',
    'Expressions List',
    's_review.used_expressions',
    '句型清单',
    '句型清單',
    '構文リスト',
    'Danh sách mẫu câu',
  ],
  used_words: [
    '단어 리스트',
    'Word List',
    's_review.used_words',
    '单词清单',
    '單字清單',
    '単語リスト',
    'Danh sách từ',
  ],
  show_all: [
    '복습 목록 전체보기',
    'View all',
    's_review.show_all',
    '查看所有复习清单',
    '查看所有複習清單',
    '復習リストをすべて見る',
    'Xem tất cả',
  ],
  complete: [
    '복습을 완료한 수업',
    'Reviewed',
    's_review.complete',
    '已完成复习的课程',
    '已完成複習的課程',
    '復習を完了したレッスン',
    'Đã xem lại',
  ],
  incomplete: [
    '복습을 완료하지 않은 수업',
    'Not reviewed',
    's_review.incomplete',
    '未完成复习的课程',
    '未完成複習的課程',
    '復習を完了していないレッスン',
    'Chưa xem lại',
  ],
  entire: [
    '전체',
    'All',
    's_review.entire',
    '全部',
    '全部',
    'すべて',
    'Tất cả',
  ],
  no_show_lesson: [
    '노쇼한 수업',
    'No-show',
    's_review.no_show_lesson',
    '未出席的课程',
    '未出現的課程',
    '無断欠席したレッスン',
    'Vắng mặt',
  ],
  all_viewed: [
    '모두 조회했습니다.',
    'Review complete',
    's_review.all_viewed',
    '已查询全部。',
    '已全部查詢。',
    'すべて復習しました。',
    'Hoàn tất xem lại',
  ],
  noshow: [
    '노쇼',
    'No-show',
    's_review.noshow',
    '未出席的课程',
    '未出現',
    '無断欠席',
    'Vắng mặt',
  ],
  all: ['전체', 'All', 's_review.all', '全部', '全部', 'すべて', 'Tất cả'],
  no_not_reviewed: [
    '복습을 완료하지 않은 수업이 없습니다.',
    'You reviewed all lessons.',
    's_review.no_not_reviewed',
    '无未完成复习的课程。',
    '無未完成複習的課程。',
    '復習を完了していないレッスンはありません。',
    'Bạn đã xem lại các buổi học.',
  ],
  no_reviewed: [
    '복습을 완료한 수업이 없습니다.',
    "You haven't reviewed any lessons.",
    's_review.no_reviewed',
    '无完成复习的课程。',
    '無完成複習的課程。',
    '復習を完了したレッスンはありません。',
    'Bạn chưa xem lại buổi học nào.',
  ],
  no_noshow: [
    '노쇼 수업이 없습니다.',
    'You showed up to all lessons.',
    's_review.no_noshow',
    '无未出席的课程。',
    '無未出現的課程。',
    '無断欠席したレッスンはありません。',
    'Bạn tham gia tất cả buổi học.',
  ],
  first_user: [
    <>
      <View bold>복습 페이지</View>에서는 완료한 수업의{'\n'}스크립트 및 분석
      내용,{'\n'}튜터의 피드백 리포트 등을 확인하거나{'\n'}수업을 다시 들을 수
      있습니다.
    </>,
    <>
      You can replay lesson recording, read tutor feedback or check AI Analysis
      under<View bold>Lesson Review</View>.
    </>,
    's_review.first_user',
    <>
      可在<View bold>复习页面</View>确认完成的课程{'\n'}脚本及 分析内容、{'\n'}
      任课教师的反馈等，{'\n'}或再次 聆听课程。
    </>,
    <>
      可於<View bold>複習頁面</View>確認完成的課程{'\n'}腳本及 分析內容、{'\n'}
      任課教師的意見回饋報告書等，{'\n'}或再次 聆聽課程。
    </>,
    <>
      <View bold>復習ページ</View>では完了したレッスンの{'\n'}スクリプトおよび
      分析内容、{'\n'}チューターのFeedback Reportなどを確認したり{'\n'}
      レッスンを もう一度聴いたりすることができます。
    </>,
    <>
      Bạn có thể nghe lại ghi âm buổi học, xem lại đánh giá của gia sư hoặc kiểm
      tra phân tích AI dưới phần<View bold>Đánh giá buổi học</View>.
    </>,
  ],
};
export const s_lesson_review = {
  preparing_feedback: [
    '튜터가 피드백을 작성하고 있어요!\n수업 후, 최대 24시간 정도 소요될 수 있습니다.\n조금만 기다려 주시면 감사하겠습니다.',
    'The tutor is currently writing feedback!\nAfter class, it may take up to 24 hours to receive feedback.\nThank you for your patience.',
    's_lesson_review.preparing_feedback',
    '任课教师正在撰写反馈！\n课程结束后，最长可能需要24小时。\n请稍等。',
    '任課教師正在撰寫意見回饋！\n課程結束後，最長需要24小時。\n請稍候。',
    'チューターがフィードバックを作成しています！\nレッスン後、最長24時間ほどかかる場合があります。\nもうしばらくお待ちいただけますと幸いです。',
    'Gia sư đang viết đánh giá!\nSau buổi học, có thể cần tối đa 24 giờ để nhận được đánh giá.\nCảm ơn sự kiên nhẫn của bạn.',
  ],
  see_review_list: [
    '복습 목록 전체보기',
    'View all',
    's_lesson_review.see_review_list',
    '查看所有复习清单',
    '查看所有複習清單',
    '復習リストをすべて見る',
    'Xem tất cả',
  ],
  no_completed_lesson: [
    '현재  완료한 수업이 없습니다.',
    "You haven't completed any lessons.",
    's_lesson_review.no_completed_lesson',
    '目前无已完成的课程。',
    '目前無已完成的課程。',
    '現在完了したレッスンはありません。',
    'Bạn chưa hoàn thành bài học nào.',
  ],
  plz_check_feedback: [
    <>
      수업 후 학습 효과를 높이기 위해
      <br />
      녹음 된 수업을 듣거나 튜터 피드백과 수업분석을 확인해보세요.
    </>,
    <>
      Try <br />
      replaying lesson recording, reading tutor feedback or checking AI
      Analysis.
    </>,
    's_lesson_review.plz_check_feedback',
    <>
      课程结束后，为提高学习效果，
      <br />
      请聆听课程录音文件或确认任课教师意见回馈及课程分析。{' '}
    </>,
    <>
      課程結束後，為提高學習效果，
      <br />
      請聆聽課程錄音檔或確認任課教師意見回饋及課程分析。
    </>,
    <>
      レッスン後の学習効果を高めるために
      <br />
      録音されたレッスンを聴いたり、チューターフィードバックとレッスン分析を確認してみたりしましょう。
    </>,
    <>
      Thử <br />
      phát lại ghi âm buổi học, xem đánh giá của gia sư và kiểm tra phân tích
      AI.
    </>,
  ],
  recorded_script: [
    '녹음파일',
    'Recording file',
    's_lesson_review.recorded_script',
    '录音文件',
    '錄音檔',
    '録音ファイル',
    'File ghi âm',
  ],
};
export const s_log = {
  all: ['전체', 'All', 's_log.all', '全部', '全部', 'すべて', 'Tất cả'],
  read: ['읽기', 'Read', 's_log.read', '阅读', '閱讀', 'リーディング', 'Đọc'],
  write: [
    '쓰기',
    'Write',
    's_log.write',
    '写作',
    '寫作',
    'ライティング',
    'Viết',
  ],
  listen: [
    '듣기',
    'Listen',
    's_log.listen',
    '听力',
    '聽力',
    'リスニング',
    'Nghe',
  ],
  speak: [
    '말하기',
    'Speak',
    's_log.speak',
    '口语',
    '口說',
    'スピーキング',
    'Nói',
  ],
  the_study_logs_below_are_examples_: [
    '하단의 학습 활동은 예시입니다.',
    'The study logs below are examples.',
    's_log.the_study_logs_below_are_examples_',
    '下面的学习活动仅为举例。',
    '下方的學習活動僅為舉例。',
    '以下の学習内容は例です。',
    'Nhật ký học tập phía dưới là ví dụ.',
  ],
  today: ['오늘', 'Today', 's_log.today', '今日', '今日', '今日', 'Hôm nay'],
  _d_ago: day => [
    `${day}일 전`,
    `${day}d ago`,
    's_log._d_ago',
    `${day}天前`,
    `${day}天前`,
    `${day}日前`,
    `${day}d trước`,
  ],
  _w_ago: week => [
    `${week}주 전`,
    `${week}w ago`,
    's_log._w_ago',
    `${week}周前`,
    `${week}週前`,
    `${week}週間前`,
    `${week}w trước`,
  ],
  only_ringle_logs_from_mar_1_2021_can_be_checked_: [
    '2021년 3월 30일부터의 학습 활동만 확인 가능합니다.',
    'Only Ringle activities from Mar 30, 2021 can be checked.',
    's_log.only_ringle_logs_from_mar_1_2021_can_be_checked_',
    '仅可确认2021年3月30日之后的学习活动。',
    '僅可確認2021年3月30日之後的學習活動。',
    '2021年 3月 30日からの学習内容のみ確認可能です。',
    'Chỉ những hoạt động của Ringle từ 30/03/2021 có thể kiểm tra.',
  ],
  haven_t_done_ringle_yet_this_week_: [
    <>
      아직 링글 콘텐츠를 경험하지 않으셨네요!{'\n'}지금{' '}
      <View style={{fontWeight: 'bold'}}>콘텐츠</View> 메뉴에서 다양한{' '}
      <View style={{fontWeight: 'bold'}}>Live 동영상, VOD, 교재</View>를
      확인하고 <View style={{fontWeight: 'bold'}}>수업</View>을 시작해 보세요.
      {'\n'}여러분이 살펴본 모든 콘텐츠와 수업 학습 데이터까지 모두 기록해서
      알려드려요!
    </>,
    <>
      Hi, you haven't explored Ringle content yet!{'\n'}Go to{' '}
      <View style={{fontWeight: 'bold'}}>Content</View> to explore our archive
      of{' '}
      <View style={{fontWeight: 'bold'}}>live videos, VOD, and articles</View>{' '}
      and start a <View style={{fontWeight: 'bold'}}>lesson</View>. You can see
      your study activities.
    </>,
    's_log.haven_t_done_ringle_yet_this_week_',
    <>
      您尚未体验Ringle内容！ {'\n'}现在 就在
      <View style={{fontWeight: 'bold'}}>内容</View> 菜单确认各种{' '}
      <View style={{fontWeight: 'bold'}}>Ringle LIVE、VOD、教材</View>
      ，开始<View style={{fontWeight: 'bold'}}>上课</View>
      吧！ {'\n'}我们会记录您看过的所有内容与 课程学习数据并告诉您！
    </>,
    <>
      您尚未體驗Ringle內容！{'\n'}現在 就於
      <View style={{fontWeight: 'bold'}}>內容</View> 選單確認各種{' '}
      <View style={{fontWeight: 'bold'}}>Ringle LIVE、VOD、教材</View>
      ，開始<View style={{fontWeight: 'bold'}}>上課</View>
      吧！{'\n'}我們會記錄您看過的所有內容與 課程學習數據並告訴您！
    </>,
    <>
      まだRingleのコンテンツを体験していませんね！{'\n'}今すぐ{' '}
      <View style={{fontWeight: 'bold'}}>コンテンツ</View> メニューから多様な{' '}
      <View style={{fontWeight: 'bold'}}>Ringle LIVE、VOD、教材</View>
      を確認して<View style={{fontWeight: 'bold'}}>レッスン</View>を
      始めましょう。{'\n'}
      皆さんがご覧になったすべてのコンテンツやレッスン学習データまで
      すべて記録してお教えいたします！
    </>,
    <>
      Xin chào, bạn chưa khám phá nội dung của Ringle!{'\n'}Vào phần{' '}
      <View style={{fontWeight: 'bold'}}>Nội dung</View> để khám phá kho lưu trữ{' '}
      <View style={{fontWeight: 'bold'}}>
        Ringle LIVE, video từ webinar, và các bài báo
      </View>{' '}
      và bắt đầu một <View style={{fontWeight: 'bold'}}>buổi học</View>. Bạn có
      thể xem hoạt động học tập.
    </>,
  ],
  no_data_this_week_all: [
    <>
      이번 주는 아직 링글에서{' '}
      <View style={{fontWeight: 'bold'}}>영어 공부를 시작하지 않으셨네요!</View>{' '}
      {'\n'}지금, 영역별 학습을 시작하고 학습 활동을 쌓아보세요.
    </>,
    <>
      You haven't studied{' '}
      <View style={{fontWeight: 'bold'}}>English with Ringle this week! </View>
      {'\n'}Now, you can create this week's study activities.
    </>,
    's_log.no_data_this_week_all',
    <>
      这周您尚未于Ringle{' '}
      <View style={{fontWeight: 'bold'}}>开始学习英语！</View> {'\n'}
      立即开始各方面的学习, 累积学习活动吧。
    </>,
    <>
      這星期您尚未於Ringle{' '}
      <View style={{fontWeight: 'bold'}}>開始學習英語！</View> {'\n'}
      現在就開始學習各領域，累積學習活動吧！
    </>,
    <>
      今週はまだRingleで{' '}
      <View style={{fontWeight: 'bold'}}>英語の勉強を始めていませんね！</View>{' '}
      {'\n'}今すぐ分野別学習を始めて、学習内容を積み重ねてみましょう。
    </>,
    <>
      Bạn chưa học{' '}
      <View style={{fontWeight: 'bold'}}>tiếng Anh cùng Ringle tuần này! </View>
      {'\n'}Bây giờ bạn có thể tạo hoạt động học tập tuần này.
    </>,
  ],
  no_data_this_week_0: [
    <>
      이번 주는 아직 링글에서 <View style={{fontWeight: 'bold'}}>읽기</View>영역
      학습을 시작하지 않으셨네요!
      {'\n'}교재 인사이트, 핵심 표현, 관련 기사 등을 읽고 읽기 영역 학습을
      시작해 보세요.
    </>,
    <>
      You haven't <View style={{fontWeight: 'bold'}}>read</View> our lesson
      materials this week!{'\n'}Read lesson materials to tap into the{' '}
      <View style={{fontWeight: 'bold'}}>insights & expressions</View> we
      provide. Start your learning journey!
    </>,
    's_log.no_data_this_week_0',
    <>
      这周您尚未在Ringle 开始学习
      <View style={{fontWeight: 'bold'}}>阅读</View>方面内容！
      {'\n'}请阅读教材正文, 核心表达及相关新闻报道, 开始您的阅读专项学习吧！
    </>,
    <>
      這星期您尚未於Ringle 開始學習
      <View style={{fontWeight: 'bold'}}>閱讀</View>領域！
      {'\n'}閱讀教材正文、核心用法、相關報導等， 開始學習閱讀領域吧！
    </>,
    <>
      今週はまだRingleで <View style={{fontWeight: 'bold'}}>リーディング</View>
      分野の学習を 始めていませんね！
      {'\n'}
      教材インサイト、キーフレーズ、関連記事などを読んでリーディング分野の学習を
      始めてみましょう。
    </>,
    <>
      Bạn chưa <View style={{fontWeight: 'bold'}}>đọc</View> tài liệu buổi học
      tuần này!{'\n'}Đọc tài liệu buổi học để nắm rõ{' '}
      <View style={{fontWeight: 'bold'}}>insights & những mẫu câu</View> chúng
      tôi cung cấp. Cùng bắt đầu hành trình học tập của bạn!
    </>,
  ],
  no_data_this_week_1: [
    <>
      이번 주는 아직 링글에서 <View style={{fontWeight: 'bold'}}>쓰기</View>{' '}
      영역 학습을 시작하지 않으셨네요!{'\n'}교재 수업 질문에 대한 의견을
      작성하고 쓰기 영역의 학습을 시작해 보세요.
    </>,
    <>
      You haven't practiced your{' '}
      <View style={{fontWeight: 'bold'}}>writing</View> this week!
      {'\n'}Write answers to discussion questions and start your learning
      journey!
    </>,
    's_log.no_data_this_week_1',
    <>
      这周您尚未在Ringle 开始学习
      <View style={{fontWeight: 'bold'}}>写作</View>方面内容！
      {'\n'}请针对教材课程提问撰写意见， 开始您的写作专项学习吧！
    </>,
    <>
      這星期您尚未於Ringle 開始學習
      <View style={{fontWeight: 'bold'}}>寫作</View>領域！
      {'\n'}請針對教材課程提問撰寫意見， 開始學習寫作領域吧！
    </>,
    <>
      今週はまだRingleで <View style={{fontWeight: 'bold'}}>ライティング</View>
      分野の学習を 始めていませんね！{'\n'}
      レッスン教材の質問に対する意見を作成して、ライティング分野の
      学習を始めてみましょう。
    </>,
    <>
      Bạn chưa thực hành <View style={{fontWeight: 'bold'}}>viết</View> tuần
      này!
      {'\n'}Viết câu trả lời cho những câu hỏi thảo luận và bắt đầu hành trình
      học tập của mình!
    </>,
  ],
  no_data_this_week_2: [
    <>
      이번 주는 아직 링글에서 <View style={{fontWeight: 'bold'}}>듣기</View>{' '}
      영역 학습을 시작하지 않으셨네요!{'\n'}
      <View style={{fontWeight: 'bold'}}>
        교재 MP3, 웨비나, 수업 녹음파일
      </View>{' '}
      등을 듣고 듣기 영역 학습을 시작해 보세요.
    </>,
    <>
      You haven't practiced your{' '}
      <View style={{fontWeight: 'bold'}}>listening skills</View> this week!
      {'\n'}Listen to{' '}
      <View style={{fontWeight: 'bold'}}>
        audio books, Webinars, and lesson recordings.
      </View>{' '}
      Start your learning journey!
    </>,
    's_log.no_data_this_week_2',
    <>
      这周您尚未在Ringle 开始学习
      <View style={{fontWeight: 'bold'}}>听力</View>方面内容！
      {'\n'}
      请聆听
      <View style={{fontWeight: 'bold'}}>
        教材MP3、网络研讨会、课程录音文件
      </View>{' '}
      等， 开始您的听力专项学习吧!
    </>,
    <>
      這星期您尚未於Ringle 開始學習
      <View style={{fontWeight: 'bold'}}>聽力</View>領域！
      {'\n'}
      請聆聽
      <View style={{fontWeight: 'bold'}}>
        教材MP3、網路研討會、課程錄音檔
      </View>{' '}
      等， 開始學習聽力領域吧！
    </>,
    <>
      今週はまだRingleで <View style={{fontWeight: 'bold'}}>リスニング</View>
      分野の学習を 始めていませんね！{'\n'}
      <View style={{fontWeight: 'bold'}}>
        教材MP3、ウェビナー、レッスン録音ファイル
      </View>{' '}
      などを聴いてリスニング分野の学習を始めてみましょう。
    </>,
    <>
      Bạn chưa thực hành <View style={{fontWeight: 'bold'}}>kỹ năng nghe</View>{' '}
      tuần này!
      {'\n'}Nghe{' '}
      <View style={{fontWeight: 'bold'}}>
        sách nói, Webinar, và ghi âm buổi học.
      </View>{' '}
      Bắt đầu hành trình học tập của bạn!
    </>,
  ],
  no_data_this_week_3: [
    <>
      이번 주는 아직 링글에서 <View style={{fontWeight: 'bold'}}>말하기</View>{' '}
      영역 학습을 시작하지 않으셨네요!{'\n'}
      <View style={{fontWeight: 'bold'}}>1:1 화상영어 수업</View>
      에서 영어 말하기를 연습하고 말하기 영역 학습을 시작해 보세요.
    </>,
    <>
      You haven't practiced your{' '}
      <View style={{fontWeight: 'bold'}}>speaking</View> this week!
      {'\n'}Practice speaking with your tutor 1:1. Start your learning journey!
    </>,
    's_log.no_data_this_week_3',
    <>
      这周您尚未在Ringle 开始学习
      <View style={{fontWeight: 'bold'}}>口语</View>方面内容！
      {'\n'}
      请在
      <View style={{fontWeight: 'bold'}}>1:1视频英语课程中</View>
      练习英语口语，开始您的口语专项学习吧!
    </>,
    <>
      這星期您尚未於Ringle 開始學習
      <View style={{fontWeight: 'bold'}}>口說</View>領域！
      {'\n'}
      請於<View style={{fontWeight: 'bold'}}>1:1視訊英語課程</View>
      練習英語口說，開始學習口說領域吧！
    </>,
    <>
      今週はまだRingleで <View style={{fontWeight: 'bold'}}>スピーキング</View>
      分野の学習を 始めていませんね！{'\n'}
      <View style={{fontWeight: 'bold'}}>1:1オンライン英会話レッスン</View>
      でスピーキングを練習して、スピーキング分野の学習を始めてみましょう。
    </>,
    <>
      Bạn chưa thực hành kỹ năng <View style={{fontWeight: 'bold'}}>nói</View>{' '}
      tuần này!
      {'\n'}Luyện nói 1:1 cùng gia sư của bạn. Bắt đầu hành trình học tập của
      bạn!
    </>,
  ],
  _yyyy: (year, month) => [
    `${year}년 ${month}월`,
    `${month}, ${year}`,
    's_log._yyyy',
    `${year}年${month}月`,
    `${year}年${month}月`,
    `${year}年 ${month}月`,
    `$ tháng ${month}, $ năm ${year}`,
  ],
  _yyyy_mm_dd: (year, month, day) => [
    `${year}.${month}.${day}`,
    `${month} ${day}, ${year}`,
    's_log._yyyy_mm_dd',
    `${year}.${month}.${day}`,
    `${year}.${month}.${day}`,
    `${year}.${month}.${day}`,
    `${day}/${month}/${year}`,
  ],
  ringle_ing_in: month => [
    `${month}월 링글 학습`,
    `Ringle-ing in ${month} :`,
    's_log.ringle_ing_in',
    `${month}月Ringle学习`,
    `${month}月Ringle學習`,
    `${month}月のRingle学習`,
    `Học Ringle trong tháng ${month} :`,
  ],
  mmm_days: day => [
    `${day}일`,
    `${day} days`,
    's_log.mmm_days',
    `${day}日`,
    `${day}日`,
    `${day}日`,
    `${day} ngày`,
  ],
  this_week: [
    '이번 주로 가기',
    'This week',
    's_log.this_week',
    '前往本周',
    '前往本週',
    '今週に移動',
    'Tuần này',
  ],
  tutor: [
    '튜터',
    'Tutors',
    's_log.tutor',
    '任课教师',
    '任課教師',
    'チューター',
    'Gia sư',
  ],
  lesson: [
    '수업시간',
    'Lesson',
    's_log.lesson',
    '课程时间',
    '課程時間',
    'レッスン時間',
    'Buổi học',
  ],
  this_week_check_log: [
    '이 주의 모든 학습 활동을 확인하셨습니다.',
    "You've checked all the activities for this week.",
    's_log.this_week_check_log',
    '您已确认本周所有学习活动。',
    '您已確認本週所有學習活動。',
    '今週のすべての学習内容を確認しました。',
    'Bạn đã kiểm tra hết các hoạt động tuần này.',
  ],
  WEBINAR: [
    '클립 이어서 보기',
    'Continue to watch the clip',
    's_log.WEBINAR',
    '继续观看片段',
    '繼續觀看片段',
    '動画を続けて見る',
    'Tiếp tục xem clip',
  ],
  PACKETS: [
    '교재',
    'Materials',
    's_log.PACKETS',
    '教材',
    '教材',
    '教材',
    'Tài liệu',
  ],
  answer: [
    '작성한 답변',
    'Answer',
    's_log.answer',
    '撰写的答复',
    '撰寫的回覆',
    '作成した回答',
    'Trả lời',
  ],
  packet_button: [
    '교재 다시 읽기',
    'Read materials again',
    's_log.packet_button',
    '重新阅读教材',
    '重新閱讀教材',
    '教材をもう一度読む',
    'Đọc lại tài liệu',
  ],
  packet_mp3_button: full => [
    `교재 ${full ? '다시' : '이어서'} 듣기`,
    `${full ? 'Listen to the MP3 again' : 'Continue to listen to the MP3'}`,
    's_log.packet_mp3_button',
    `${full ? '重新' : '继续'}聆听教材`,
    `${full ? '重新' : '繼續'}聆聽教材`,
    `教材を ${full ? 'もう一度' : '続けて'}聞く`,
    `${full ? 'Nghe lại file MP3' : 'Tiếp tục nghe file MP3'}`,
  ],
  video_button: full => [
    `영상 ${full ? '다시' : '이어서'} 보기`,
    `${full ? 'Watch the clip again' : 'Continue to watch the clip'}`,
    's_log.video_button',
    `${full ? '重新' : '继续'}观看视频`,
    `${full ? '重新' : '繼續'}觀看影片`,
    `動画を${full ? 'もう一度' : '続けて'}見る`,
    `${full ? 'Xem lại clip' : 'Tiếp tục xem clip'}`,
  ],
  article_title: [
    '기사',
    'Article',
    's_log.article_title',
    '新闻报道',
    '報導',
    '記事',
    'Bài báo',
  ],
  article_button: [
    '기사 다시 읽기',
    'Read the article again',
    's_log.article_button',
    '新闻报道重新阅读',
    '重新閱讀報導',
    '記事をもう一度読む',
    'Đọc lại bài báo',
  ],
  key_expression: [
    '핵심 표현',
    'Expressions',
    's_log.key_expression',
    '核心表达',
    '核心用法',
    'キーフレーズ',
    'Mẫu câu',
  ],
  key_button: [
    '핵심 표현 다시 학습하기',
    'Study the expressions again',
    's_log.key_button',
    '再次学习核心表现',
    '再次學習核心用法',
    'キーフレーズをもう一度学習する',
    'Học lại những mẫu câu',
  ],
  key_examle: [
    '핵심 표현 및 예문',
    'Expression & Example',
    's_log.key_examle',
    '核心表达与例句',
    '核心用法與例句',
    'キーフレーズと例文',
    'Mẫu câu & Ví dụ',
  ],
  key_example_button: [
    '핵심 표현 예문 다시 듣기',
    'Listen to the example again',
    's_log.key_example_button',
    '重新聆听核心表达例句',
    '重新聆聽核心用法例句',
    'キーフレーズの例文をもう一度聞く',
    'Nghe lại ví dụ',
  ],
  key_question: [
    '수업 질문',
    'Questions',
    's_log.key_question',
    '课程提问',
    '課程提問',
    'レッスンの質問',
    'Câu hỏi',
  ],
  key_question_button: location => [
    `수업 ${location == 0 ? '예습' : '복습'}하기`,
    `${location == 0 ? 'Prep' : 'Review'} the lesson`,
    's_log.key_question_button',
    `${location == 0 ? '预习' : '复习'}课程`,
    `${location == 0 ? '預習' : '複習'}課程`,
    `レッスンを${location == 0 ? '予習' : '復習'}する`,
    `${location == 0 ? 'Chuẩn bị' : 'Xem lại'} buổi học`,
  ],
  mp3_button: full => [
    `수업 녹음 ${full ? '다시' : '이어서'} 듣기`,
    `${
      full
        ? 'Listen to lesson recording again'
        : 'Continue to listen to lesson recording'
    }`,
    's_log.mp3_button',
    `${full ? '重新' : '继续'}聆听课程录音`,
    `${full ? '重新' : '繼續'}聆聽課程錄音`,
    `レッスン録音を${full ? 'もう一度' : '続けて'} 聞く`,
    `${full ? 'Nghe lại ghi âm buổi học' : 'Tiếp tục nghe ghi âm buổi học'}`,
  ],
  feedback_button: [
    '튜터 피드백 다시 확인하기',
    'Read the feedback again',
    's_log.feedback_button',
    '重新确认任课教师的意见回馈',
    '重新確認任課教師的意見回饋',
    'チューターフィードバックをもう一度確認する',
    'Đọc lại đánh giá',
  ],
  clip: ['클립', 'Clips', 's_log.clip', '片段', '片段', '動画', 'Clip'],
  clip_button: full => [
    `클립 ${full ? '다시' : '이어서'} 보기`,
    `${full ? 'Watch clip again' : 'Continue'}`,
    's_log.clip_button',
    `${full ? '重新' : '继续'}观看片段`,
    `${full ? '重新' : '繼續'}觀看片段`,
    `動画を${full ? 'もう一度' : '続けて'}見る`,
    `${full ? 'Xem lại clip' : 'Tiếp tục'}`,
  ],
  webinar: [
    '웨비나',
    'Webinar',
    's_log.webinar',
    '继续观看片段',
    '繼續觀看片段',
    '動画を続けて見る',
    'Tiếp tục xem clip',
  ],
  webinar_button: [
    '웨비나 다시 보기',
    'Watch webinar again',
    's_log.webinar_button',
    '重新观看网络研讨会',
    '重新觀看網路研討會',
    'ウェビナーをもう一度見る',
    'Xem lại webinar',
  ],
  changed: [
    '변경',
    'changed',
    's_log.changed',
    '更改',
    '變更',
    '変更',
    'đã thay đổi',
  ],
  matching: [
    '매칭 중',
    'matching',
    's_log.matching',
    '匹配中',
    '配對中',
    'マッチング中',
    'đang xếp',
  ],
  th_clip: n => [
    `${n}번째 클립`,
    `${n == 1 ? '1st' : n == 2 ? '2nd' : n == 3 ? '3rd' : `${n}th`} clip`,
    's_log.th_clip',
    `第${n}个片段`,
    `第${n}個片段`,
    `${n}番目の動画`,
    `${n == 1 ? '1st' : n == 2 ? '2nd' : n == 3 ? '3rd' : `${n}th`} clip`,
  ],
  dialog: [
    <>
      학습 활동 페이지에서는 링글에서 학습한 데이터를 읽기/듣기/쓰기/말하기
      영역별로 기록하고 분석한 데이터를 제공합니다.{'\n'}
      {'\n'}
      <View style={{fontWeight: 'bold'}}>학습 활동 기록 항목</View>
      {'\n'}
      <View style={{fontWeight: 'bold'}}>읽기:</View> 교재 인사이트, 핵심 표현,
      관련 기사, 다른 링글러의 답변, 수업 노트, 튜터 피드백
      {'\n'}
      <View style={{fontWeight: 'bold'}}>듣기:</View> 교재 MP3, 핵심표현 듣기,
      관련 영상, 웨비나 Live/VOD{'\n'}
      <View style={{fontWeight: 'bold'}}>쓰기:</View> 교재 토론 질문작성{'\n'}
      <View style={{fontWeight: 'bold'}}>말하기:</View> 수업 진행
    </>,
    <>
      Activities keep record of your reading, listening, writing, and speaking
      practices.{'\n'}
      {'\n'}
      <View style={{fontWeight: 'bold'}}>Reading:</View> Lesson materials, key
      expressions, linked articles, Ringlers' responses, lesson notes, and
      tutor's feedback{'\n'}
      <View style={{fontWeight: 'bold'}}>Listening:</View> Lesson materials
      audio book, linked videos, webinars{'\n'}
      <View style={{fontWeight: 'bold'}}>Writing:</View> Submit responses to
      discussion questions {'\n'}
      <View style={{fontWeight: 'bold'}}>Speaking:</View> Lessons
    </>,
    's_log.dialog',
    <>
      学习活动页面将在Ringle学习的数据，依照阅读／
      听力／写作／口语领域记录并提供分析数据。 {'\n'}
      {'\n'}
      <View style={{fontWeight: 'bold'}}>学习活动记录项目</View>
      {'\n'}
      <View style={{fontWeight: 'bold'}}>阅读：</View>教材
      正文、核心用法、相关新闻报道、其他Ringler的回复、课堂笔记、任课教师反馈
      {'\n'}
      <View style={{fontWeight: 'bold'}}>听力：</View>教材MP3、
      聆听核心表达、相关视频、网络研讨会直播／VOD{'\n'}
      <View style={{fontWeight: 'bold'}}>写作：</View>教材讨论 提问
      {'\n'}
      <View style={{fontWeight: 'bold'}}>口语：</View>课程进行
    </>,
    <>
      學習活動頁面將您於Ringle學習的數據，依照閱讀／
      聽力／寫作／口說領域記錄並提供分析數據。{'\n'}
      {'\n'}
      <View style={{fontWeight: 'bold'}}>學習活動紀錄項目</View>
      {'\n'}
      <View style={{fontWeight: 'bold'}}>閱讀：</View>
      教材正文、核心用法、相關報導、其他Ringler的回覆、課堂筆記、任課教師意見回饋
      {'\n'}
      <View style={{fontWeight: 'bold'}}>聽力：</View>
      教材MP3、聆聽核心用法、相關影片、網路研討會Live／VOD{'\n'}
      <View style={{fontWeight: 'bold'}}>寫作：</View>
      教材討論提問的回覆{'\n'}
      <View style={{fontWeight: 'bold'}}>口說：</View>課程進行
    </>,
    <>
      学習内容では、Ringleで学習したデータを読み/聞取り/書き/話す分野別に記録して分析したデータを提供します。
      {'\n'}
      {'\n'}
      <View style={{fontWeight: 'bold'}}>学習内容記録項目</View>
      {'\n'}
      <View style={{fontWeight: 'bold'}}>読み:</View> 教材
      インサイト、キーフレーズ、関連記事、他のRinglerの回答、レッスンノート、チューターフィードバック
      {'\n'}
      <View style={{fontWeight: 'bold'}}>聞取り:</View> 教材MP3、
      キーフレーズリスニング、関連動画、ウェビナーLive/VOD{'\n'}
      <View style={{fontWeight: 'bold'}}>書き:</View> 教材ディスカッション
      質問作成{'\n'}
      <View style={{fontWeight: 'bold'}}>話す:</View> レッスン進行
    </>,
    <>
      Hoạt động ghi lại việc thực hành đọc, nghe, viết, và nói của bạn.{'\n'}
      {'\n'}
      <View style={{fontWeight: 'bold'}}>Đọc:</View> Tài liệu buổi học, mẫu câu
      chính, bài báo liên quan, câu trả lời của học viên Ringle, ghi chú buổi
      học và đánh giá của gia sư{'\n'}
      <View style={{fontWeight: 'bold'}}>Nghe:</View> Tài liệu buổi học sách
      nói, video liên quan, webinar{'\n'}
      <View style={{fontWeight: 'bold'}}>Viết:</View> Gửi câu trả lời cho những
      câu hỏi thảo luận{'\n'}
      <View style={{fontWeight: 'bold'}}>Nói:</View> Buổi học
    </>,
  ],
  view: ['보기', 'Watch', 's_log.view', '查看', '查看', '見る', 'Xem'],
};
export const s_packet = {
  free_talking: [
    '자유주제',
    'Free Topic',
    's_packet.free_talking',
    '自由主题',
    '自由主題',
    '自由テーマ',
    'Chủ đề Tự do',
  ],
  material: [
    '관련 자료',
    'Materials',
    's_packet.material',
    '相关资料',
    '相關資料',
    '関連資料',
    'Tài liệu',
  ],
  insight: [
    '인사이트',
    'Insight',
    's_packet.insight',
    '正文',
    '正文',
    'インサイト',
    'Insight',
  ],
  intro: [
    '인트로',
    'Intro',
    's_packet.intro',
    '开头',
    '開頭',
    'イントロ',
    'Giới thiệu',
  ],
  question: [
    '수업 질문',
    'Questions',
    's_packet.question',
    '课程提问',
    '課程提問',
    'レッスンの質問',
    'Câu hỏi',
  ],
  expression: [
    '핵심 표현',
    'Expressions',
    's_packet.expression',
    '核心表达',
    '核心用法',
    'キーフレーズ',
    'Mẫu câu',
  ],
  clip_article: [
    '영상 / 기사',
    'Videos & News',
    's_packet.clip_article',
    '视频 / 新闻报道',
    '影片／報導',
    '動画 / 記事',
    'Video & Tin tức',
  ],
  download_packet: [
    '교재 다운로드',
    'Download lesson materials',
    's_packet.download_packet',
    '下载教材',
    '下載教材',
    '教材ダウンロード',
    'Tải xuống tài liệu học',
  ],
  no_key_expression: [
    '해당 교재는 핵심 표현을 제공하지 않습니다.',
    'Selected lesson materials do not have key expressions.',
    's_packet.no_key_expression',
    '该教材未提供核心表达。',
    '該教材未提供核心用法。',
    'この教材はキーフレーズを提供しません。',
    'Tài liệu học được chọn không bao gồm các mẫu câu chính.',
  ],
  vocabulary_list: [
    '단어 리스트',
    'Vocabulary',
    's_packet.vocabulary_list',
    '单词清单',
    '單字清單',
    '単語リスト',
    'Từ vựng',
  ],
  example_sentence: [
    '예문',
    'Example Sentence',
    's_packet.example_sentence',
    '例句',
    '例句',
    '例文',
    'Câu ví dụ',
  ],
  no_clip: [
    '해당 교재는 관련 영상을 제공하지 않습니다.',
    'Selected lesson materials do not have videos.',
    's_packet.no_clip',
    '该教材未提供相关视频。',
    '該教材未提供相關影片。',
    'この教材は関連動画を提供しません。',
    'Tài liệu được chọn không có video.',
  ],
  no_article: [
    '해당 교재는 관련 기사를 제공하지 않습니다.',
    'Selected lesson materials do not have news articles.',
    's_packet.no_article',
    '该教材未提供相关新闻报道。',
    '該教材未提供相關報導。',
    'この教材は関連記事を提供しません。',
    'Tài liệu được chọn không có bài báo tin tức.',
  ],
};
export const s_materials = {
  no_result: [
    '키워드에 맞는\n검색 결과가 없습니다.',
    'No Result',
    's_materials.no_result',
    '无符合关键字的\n搜寻结果。',
    '無符合關鍵字的\n搜尋結果。',
    'キーワードに一致する\n検索結果はありません。',
    'Không có kết quả',
  ],
  select_a_packet_for_all_the_lessons: [
    '교재를 모두 선택해주세요.',
    'Select materials for all the lessons.',
    's_materials.select_a_packet_for_all_the_lessons',
    '请选择所有教材。',
    '請選擇所有教材。',
    '教材をすべて選択してください。',
    'Chọn tài liệu cho tất cả buổi học.',
  ],
  search_results: [
    '교재 검색 결과',
    'Search Results',
    's_materials.search_results',
    '教材搜寻结果',
    '教材搜尋結果',
    '教材内検索結果',
    'Kết quả tìm kiếm',
  ],
  search_materials: [
    '교재를 검색하세요',
    'Search Materials',
    's_materials.search_materials',
    '请搜寻教材',
    '請搜尋教材',
    '教材を検索してください',
    'Tìm Tài liệu',
  ],
  video: [
    '영상',
    'Video',
    's_materials.video',
    '视频',
    '影片',
    '動画',
    'Video',
  ],
  article: [
    '기사',
    'Article',
    's_materials.article',
    '新闻报道',
    '報導',
    '記事',
    'Bài báo',
  ],
  no_video_article: [
    '해당 교재는 영상 및 기사가 제공되지 않습니다.',
    'This lesson material does not include\n a video or an article.',
    's_materials.no_video_article',
    '该教材未提供视频及新闻报道。',
    '該教材未提供影片及報導。',
    'この教材は動画および記事が提供されません。',
    'Tài liệu buổi học không có\n video hay bài báo.',
  ],
  search_material: [
    '교재 검색',
    'Search Materials',
    's_materials.search_material',
    '搜索教材',
    '搜尋教材',
    '教材検索',
    'Tìm Tài liệu',
  ],
  hash_tag: [
    '카테고리별 교재',
    'Tagged Materials',
    's_materials.hash_tag',
    '各类别教材',
    '各類別教材',
    'カテゴリー別教材',
    'Tài liệu được gắn thẻ',
  ],
};
export const s_stats = {
  view_more_details: [
    '자세히 보러가기',
    'View details',
    's_stats.view_more_details',
    '详细内容',
    '詳細內容',
    '詳しく見る',
    'Xem chi tiết',
  ],
  title_overall: [
    '월별 수업 통계',
    'Monthly Summary',
    's_stats.title_overall',
    '每月课程统计',
    '每月課程統計',
    '月別レッスン統計',
    'Tổng kết tháng',
  ],
  monthly_lesson_num: [
    '월별 수업 수',
    'Number of Lessons per Month',
    's_stats.monthly_lesson_num',
    '每月课程数',
    '每月課程數',
    '月別レッスン数',
    'Số buổi học mỗi tháng',
  ],
  lesson_num: [
    '수업 수',
    'Lessons',
    's_stats.lesson_num',
    '课程数',
    '課程數',
    'レッスン数',
    'Buổi học',
  ],
  class_unit: ['개', '', 's_stats.class_unit', '个', '個', '回', ''],
  tutor_num: [
    '튜터 수',
    'Tutors',
    's_stats.tutor_num',
    '任课教师数',
    '任課教師人數',
    'チューター数',
    'Gia sư',
  ],
  tutor_unit: ['명', '', 's_stats.tutor_unit', '名', '名', '名', ''],
  course_num: [
    '교재 수',
    'Materials',
    's_stats.course_num',
    '教材数',
    '教材數',
    '教材数',
    'Tài liệu',
  ],
  summary: [
    '최근 3개월 수업 정보 요약',
    'Summary of the Last 3 Months',
    's_stats.summary',
    '过去3个月课程信息摘要',
    '最近3個月的課程資訊概要',
    '直近3か月のレッスン情報要約',
    'Tổng kết 3 tháng gần nhất',
  ],
  summary_sentence: [
    '상위 20% 고객의 수업 수는',
    'Top 20%:',
    's_stats.summary_sentence',
    '前20%学生的课程数是',
    '前20%學生的課程數是',
    '上位20%のお客様のレッスン数は',
    'Top 20%:',
  ],
  summary_sentence_end: [
    '회입니다.',
    'Lessons',
    's_stats.summary_sentence_end',
    '次。',
    '次。',
    '回です。',
    'Buổi học',
  ],
  part_trend: [
    '항목별 최신 결과',
    'Latest Evaluations',
    's_stats.part_trend',
    '各项目最新结果',
    '各項目最新結果',
    '項目別最新結果',
    'Đánh giá mới nhất',
  ],
  title_feedback_lesson_info: [
    '튜터 피드백 점수',
    "Tutor's Feedback Score",
    's_stats.title_feedback_lesson_info',
    '任课教师意见回馈分数',
    '任課教師意見回饋分數',
    'チューターフィードバック点数',
    'Điểm đánh giá của gia sư',
  ],
  title_half_word: [
    '사용 단어 수',
    'Used Words',
    's_stats.title_half_word',
    '使用的单词数',
    '使用的單字數',
    '使用単語数',
    'Từ đã dùng',
  ],
  title_full_word: [
    '사용 단어 수',
    'Used Words',
    's_stats.title_full_word',
    '使用的单词数',
    '使用的單字數',
    '使用単語数',
    'Từ đã dùng',
  ],
  title_half_phrase: [
    '사용 구문 수',
    'Used Expressions',
    's_stats.title_half_phrase',
    '使用的句型数',
    '使用的句型數',
    '使用構文数',
    'Mẫu câu đã dùng',
  ],
  title_full_phrase: [
    '사용 구문 수',
    'Used Expressions',
    's_stats.title_full_phrase',
    '使用的句型数',
    '使用的句型數',
    '使用構文数',
    'Mẫu câu đã dùng',
  ],
  title_wpm: [
    '말하기 속도',
    'Words Per Min',
    's_stats.title_wpm',
    '语速',
    '口說速度',
    '話すスピード',
    'Số từ mỗi phút',
  ],
  box_half_word: [
    '20분',
    '20min',
    's_stats.box_half_word',
    '20分钟',
    '20分鐘',
    '20分',
    '20 phút',
  ],
  box_half_phrase: [
    '20분',
    '20min',
    's_stats.box_half_phrase',
    '20分钟',
    '20分鐘',
    '20分',
    '20 phút',
  ],
  box_full_word: [
    '40분',
    '40min',
    's_stats.box_full_word',
    '40分钟',
    '40分鐘',
    '40分',
    '40 phút',
  ],
  box_full_phrase: [
    '40분',
    '40min',
    's_stats.box_full_phrase',
    '40分钟',
    '40分鐘',
    '40分',
    '40 phút',
  ],
  unit_feedback_lesson_info: [
    '내 점수',
    'You',
    's_stats.unit_feedback_lesson_info',
    '我的分数',
    '我的分數',
    'あなたの点数',
    'Bạn',
  ],
  unit_wpm: [
    '내 속도',
    'You',
    's_stats.unit_wpm',
    '我的语速',
    '我的速度',
    'あなたのスピード',
    'Bạn',
  ],
  unit_half_word: [
    '내 단어 수',
    'You',
    's_stats.unit_half_word',
    '我的单词数',
    '我的單字數',
    'あなたの単語数',
    'Bạn',
  ],
  unit_full_word: [
    '내 단어 수',
    'You',
    's_stats.unit_full_word',
    '我的单词数',
    '我的單字數',
    'あなたの単語数',
    'Bạn',
  ],
  unit_half_phrase: [
    '내 구문 수',
    'You',
    's_stats.unit_half_phrase',
    '我的句型数',
    '我的句型數',
    'あなたの構文数',
    'Bạn',
  ],
  unit_full_phrase: [
    '내 구문 수',
    'You',
    's_stats.unit_full_phrase',
    '我的句型数',
    '我的句型數',
    'あなたの構文数',
    'Bạn',
  ],
  top_five: [
    '상위 20%',
    'Top 20%',
    's_stats.top_five',
    '前20%',
    '前20%',
    '上位20%',
    'Top 20%',
  ],
  filter: [
    '필터',
    'Filter',
    's_stats.filter',
    '筛选',
    '篩選',
    'フィルター',
    'Bộ lọc',
  ],
  filter_save: [
    '적용하기',
    'Apply',
    's_stats.filter_save',
    '套用',
    '套用',
    '適用する',
    'Áp dụng',
  ],
  duration: [
    '기간',
    'Period',
    's_stats.duration',
    '期间',
    '期間',
    '期間',
    'Khoảng thời gian',
  ],
  filter_year: [
    '최근 1년',
    'Last 1 year',
    's_stats.filter_year',
    '最近1年',
    '最近1年',
    '直近1年',
    '1 năm qua',
  ],
  filter_3mn: [
    '최근 3개월',
    'Last 3 months',
    's_stats.filter_3mn',
    '最近3个月',
    '最近3個月',
    '直近3か月',
    '3 tháng qua',
  ],
  filter_6mn: [
    '최근 6개월',
    'Last 6 months',
    's_stats.filter_6mn',
    '最近6个月',
    '最近6個月',
    '直近6か月',
    '6 tháng qua',
  ],
  lesson_count: [
    '총 수업 수',
    'lessons',
    's_stats.lesson_count',
    '总课程数',
    '總課程數',
    '合計レッスン数',
    'buổi học',
  ],
  week_avg: [
    '일주일 평균',
    'Avg. Per Week',
    's_stats.week_avg',
    '一周平均',
    '一週平均',
    '1週間平均',
    'Trung bình mỗi tuần',
  ],
  class_unit_sec: ['회', '', 's_stats.class_unit_sec', '次', '次', '回', ''],
  yearMonth: (year, month, monthEn) => [
    `${year}년 ${month}월`,
    `${monthEn}, ${year}`,
    's_stats.yearMonth',
    `${year}年${month}月`,
    `${year}年${month}月`,
    `${year}年 ${month}月`,
    '$ tháng {monthEn}, $ năm {year}',
  ],
  month: ['월', '', 's_stats.month', '月', '月', '月', ''],
  present: [
    '현재',
    'today',
    's_stats.present',
    '目前',
    '目前',
    '現在',
    'hôm nay',
  ],
  my_class: [
    '내 수업수',
    'You',
    's_stats.my_class',
    '我的课程数',
    '我的課程數',
    'あなたのレッスン数',
    'Bạn',
  ],
  top_five_5: [
    '상위 20%',
    'Top 20%',
    's_stats.top_five_5',
    '前20%',
    '前20%',
    '上位20%',
    'Top 20%',
  ],
  you: name => [
    `${name}님은`,
    'You are in the',
    's_stats.you',
    `${name}属于`,
    `${name}屬於`,
    `${name}さんは`,
    'Bạn nằm ở',
  ],
  are_in: [
    '에 속합니다.',
    '.',
    's_stats.are_in',
    '。',
    '。',
    'に属しています。',
    '.',
  ],
  pre_re_view: [
    '예습 및 복습',
    'Lesson Prep & Review',
    's_stats.pre_re_view',
    '预习与复习',
    '預習與複習',
    '予習および復習',
    'Chuẩn bị Buổi học & Xem lại',
  ],
  average_class: [
    '수업별 평균 완료율',
    'Avg. % Completed per Lesson',
    's_stats.average_class',
    '各课程平均完成率',
    '各課程平均完成率',
    'レッスン別平均完了率',
    '% Trung bình Hoàn thành một buổi học',
  ],
  prep_rate: [
    '평균 예습률',
    'Prep',
    's_stats.prep_rate',
    '平均预习率',
    '平均預習率',
    '平均予習率',
    'Chuẩn bị',
  ],
  review_rate: [
    '평균 복습률',
    'Review',
    's_stats.review_rate',
    '平均复习率',
    '平均複習率',
    '平均復習率',
    'Xem lại',
  ],
  done_pre_re_view: [
    '예습 및 복습 완료한 수업 수',
    'Lessons Prepped & Reviewed',
    's_stats.done_pre_re_view',
    '完成预习与复习的课程数',
    '完成預習與複習的課程數',
    '予習および復習が完了したレッスン数',
    'Buổi học Đã chuẩn bị & Đã xem lại',
  ],
  prep_complete_count: [
    '예습만 완료',
    'Prep. only',
    's_stats.prep_complete_count',
    '仅完成预习',
    '僅完成預習',
    '予習のみ完了',
    'Đã chuẩn bị',
  ],
  review_complete_count: [
    '복습만 완료',
    'Rev. only',
    's_stats.review_complete_count',
    '仅完成复习',
    '僅完成複習',
    '復習のみ完了',
    'Đã xem lại',
  ],
  complete_count: [
    '모두 완료',
    'Both',
    's_stats.complete_count',
    '全部完成',
    '全部完成',
    'すべて完了',
    'Cả hai',
  ],
  incomplete_count: [
    '모두 미완료',
    'Neither',
    's_stats.incomplete_count',
    '全部未完成',
    '全部未完成',
    'すべて未完了',
    'Không cái nào',
  ],
  tutors: [
    '튜터',
    'Tutors',
    's_stats.tutors',
    '任课教师',
    '任課教師',
    'チューター',
    'Gia sư',
  ],
  tutor: [
    '튜터',
    'Tutor',
    's_stats.tutor',
    '任课教师',
    '任課教師',
    'チューター',
    'Gia sư',
  ],
  tutor_and_packet_for_this_lesson: [
    '이 수업의 튜터와 교재',
    'Tutor and Materials for This Lesson',
    's_stats.tutor_and_packet_for_this_lesson',
    '此课程的任课教师与教材',
    '此課程的任課教師與教材',
    'このレッスンのチューターと教材',
    'Gia sư và Tài liệu cho Buổi học này',
  ],
  all: ['총', 'Total', 's_stats.all', '共', '一共', '合計', 'Tổng cộng'],
  tutor_the_most: [
    '제일 많이 함께한 튜터 3명',
    '3 Tutors you had most lessons with',
    's_stats.tutor_the_most',
    '一起学习最多的3名任课教师',
    '最常一起學習的3名任課教師',
    '最も多くレッスンを受けたチューター3名',
    '3 gia sư bạn học cùng nhiều nhất',
  ],
  word_the_most: [
    '제일 많이 사용한 단어 3개',
    '3 Words you used the most',
    's_stats.word_the_most',
    '使用最多的3个单词',
    '最常使用的3個單字',
    '最も多く使用した単語3つ',
    '3 từ bạn dùng nhiều nhất',
  ],
  phrase_the_most: [
    '제일 많이 사용한 구문 3개',
    '3 Expressions you used the most',
    's_stats.phrase_the_most',
    '使用最多的3个句型',
    '最常使用的3個句型',
    '最も多く使用した構文3つ',
    '3 mẫu câu bạn dùng nhiều nhất',
  ],
  show_all: [
    '전체 보기',
    'View all',
    's_stats.show_all',
    '查看全部',
    '查看全部',
    'すべて見る',
    'Xem tất cả',
  ],
  packets: [
    '교재',
    'Materials',
    's_stats.packets',
    '教材',
    '教材',
    '教材',
    'Tài liệu',
  ],
  packet: [
    '교재',
    'Materials',
    's_stats.packet',
    '教材',
    '教材',
    '教材',
    'Tài liệu',
  ],
  packets_the_most: [
    '제일 많이 학습한 교재 3개',
    '3 Materials you used the most',
    's_stats.packets_the_most',
    '学习最多的3个教材',
    '最常學習的3個教材',
    '最も多く学習した教材3つ',
    '3 tài liệu bạn chọn nhiều nhất',
  ],
  packets_for_class: count => [
    `${count}회 수업한 교재`,
    `Materials used ${count} times`,
    's_stats.packets_for_class',
    `使用${count}次的教材`,
    `使用${count}次的教材`,
    `${count}回レッスンした教材`,
    `Tài liệu sử dụng ${count} lần`,
  ],
  packet_for_class: count => [
    `${count}회 수업한 교재`,
    `Materials used ${count} timeㄴ`,
    's_stats.packet_for_class',
    `使用${count}次的教材`,
    `使用${count}次的教材`,
    `${count}回レッスンした教材`,
    `Tài liệu sử dụng ${count} lần`,
  ],
  tutors_for_class: count => [
    `${count}회 수업한 튜터`,
    `Tutors you had ${count} lessons with`,
    's_stats.tutors_for_class',
    `上过${count}次的任课教师`,
    `上過${count}次的任課教師`,
    `${count}回レッスンをしたチューター`,
    `Gia sư bạn có ${count} buổi học với`,
  ],
  tutor_for_class: count => [
    `${count}회 수업한 튜터`,
    `Tutors you had ${count} lessons with`,
    's_stats.tutor_for_class',
    `上过${count}次的任课教师`,
    `上過${count}次的任課教師`,
    `${count}回レッスンをしたチューター`,
    `Gia sư bạn có ${count} buổi học với`,
  ],
  feedback_average: [
    '평균 점수',
    'Avg. Score',
    's_stats.feedback_average',
    '平均分数',
    '平均分數',
    '平均点数',
    'Điểm trung bình',
  ],
  feedback_detail: [
    '영역별 점수',
    'Score by Area',
    's_stats.feedback_detail',
    '各方面分数',
    '各領域分數',
    '分野別点数',
    'Điểm từng phần',
  ],
  notice_yellow_line: [
    '* 노란 선은 상위 20% 점수 구간의 평균값을 의미합니다.',
    '* The yellow line represents the average of the top 20%.',
    's_stats.notice_yellow_line',
    '* 黄线是指前20%分数区间的平均值。',
    '* 黃線意指前20%分數區間的平均值。',
    '* 黄色い線は上位20%点数区間の平均値を意味します。',
    '* Đường màu vàng thể hiện điểm trung bình của top 20% học viên Ringle.',
  ],
  score: ['점', '', 's_stats.score', '分', '分', '点', ''],
  word_used_i: [
    '내 단어 수',
    'You',
    's_stats.word_used_i',
    '我的单词数',
    '我的單字數',
    'あなたの単語数',
    'Bạn',
  ],
  phrase_used_i: [
    '내 구문 수',
    'You',
    's_stats.phrase_used_i',
    '我的句型数',
    '我的句型數',
    'あなたの構文数',
    'Bạn',
  ],
  wpm: [
    '말하기 속도',
    'Speaking Speed',
    's_stats.wpm',
    '语速',
    '口說速度',
    '話すスピード',
    'Tốc độ nói',
  ],
  wpm_i: [
    '내 속도',
    'You',
    's_stats.wpm_i',
    '我的语速',
    '我的速度',
    'あなたのスピード',
    'Bạn',
  ],
  word: ['단어', 'words', 's_stats.word', '单词', '單字', '単語', 'từ'],
  word_list: [
    '단어 리스트',
    'Word List',
    's_stats.word_list',
    '单词清单',
    '單字清單',
    '単語リスト',
    'Danh sách từ',
  ],
  phrase_list: [
    '구문 리스트',
    'Expressions List',
    's_stats.phrase_list',
    '句型清单',
    '句型清單',
    '構文リスト',
    'Danh sách mẫu câu',
  ],
  minute: ['분', 'min', 's_stats.minute', '分钟', '分鐘', '分', 'phút'],
  notice_no_data: [
    '하단의 차트와 통계 내용은 예시입니다.',
    'The charts & stats below are examples.',
    's_stats.notice_no_data',
    '下面的图表与统计内容仅为举例。',
    '下方的圖表與統計內容僅為舉例。',
    '下のチャートと統計内容は例です。',
    'Biểu đồ & thống kê dưới đây là ví dụ.',
  ],
  my_feedback: [
    '내 점수',
    'You',
    's_stats.my_feedback',
    '我的分数',
    '我的分數',
    'あなたの点数',
    'Bạn',
  ],
  statsFilterCn: [
    '수업 개수',
    'Number of Lessons',
    's_stats.statsFilterCn',
    '课程数',
    '課程數',
    'レッスン回数',
    'Số buổi học',
  ],
  filter_100: [
    '최근 수업 100회',
    'Last 100 Lessons',
    's_stats.filter_100',
    '最近100次课程',
    '最近100次課程',
    '直近100回のレッスン',
    '100 buổi học qua',
  ],
  filter_50: [
    '최근 수업 50회',
    'Last 50 Lessons',
    's_stats.filter_50',
    '最近50次课程',
    '最近50次課程',
    '直近50回のレッスン',
    '50 buổi học qua',
  ],
  filter_30: [
    '최근 수업 30회',
    'Last 30 Lessons',
    's_stats.filter_30',
    '最近30次课程',
    '最近30次課程',
    '直近30回のレッスン',
    '30 buổi học qua',
  ],
  filter_10: [
    '최근 수업 10회',
    'Last 10 Lessons',
    's_stats.filter_10',
    '最近10次课程',
    '最近10次課程',
    '直近10回のレッスン',
    '10 buổi học qua',
  ],
  statsFilterScore: [
    '튜터 피드백 점수 항목',
    'Area',
    's_stats.statsFilterScore',
    '任课教师意见回馈分数项目',
    '任課教師意見回饋分數項目',
    'チューターフィードバック点数項目',
    'Phần',
  ],
  no_lessons_in_the_last_90_days_your_last_lesson_was_days_ago_: (
    name,
    day,
  ) => [
    `최근 3개월 동안 완료한 수업이 없습니다.\n${name}님의 마지막 수업: ${day}일 전`,
    `You have not taken a lesson for more than 3 months.
Your last lesson was ${day} days ago.`,
    's_stats.no_lessons_in_the_last_90_days_your_last_lesson_was_days_ago_',
    `最近3个月没有完成的课程。 \n${name}最后一次上课：${day}天前`,
    `最近3個月沒有完成的課程。\n${name}最後一次上課：${day}天前`,
    `直近3か月間に完了したレッスンはありません。\n${name}さんの最後のレッスン: ${day}日前`,
    `Bạn chưa học buổi nào hơn 3 tháng nay.
Buổi học cuối cùng là ${day} ngày trước.`,
  ],
  are_you_curious_about_how_the_ringlers_do_lessons_: [
    '월별 수업 통계에서 \n어떤 통계 데이터가 나오는지 궁금하신가요?',
    'Sample Monthly Summary',
    's_stats.are_you_curious_about_how_the_ringlers_do_lessons_',
    '您想知道月度课程统计出来的\n统计数据是什么样的吗？',
    '您好奇每月課程統計\n出現什麼統計數據嗎？',
    '月別レッスン統計で\nどんな統計データが出るか気になりますか？',
    'Mẫu tóm tắt hằng tháng',
  ],
  summary_Dialog: [
    '최근 3개월 수업 정보 요약',
    'Summary of the Last 3 Months',
    's_stats.summary_Dialog',
    '最近3个月的课程信息摘要',
    '最近3個月的課程資訊概要',
    '直近3か月のレッスン情報要約',
    'Tổng kết 3 tháng qua',
  ],
  summary_Dialog_msg: [
    <>
      최근 세 달간 완료한 수업 데이터의 통계입니다.{'\n'}
      {'\n'}수업 수: 40분 및 20분 수업의 총합{'\n'}튜터 수: 함께한 튜터 수 (중복
      튜터 제외){'\n'}교재 수: 학습한 교재 수 (중복 교재 제외){'\n'}
      {'\n'}상위 20%: 상위 20%의 모집단은 각 링글러가 최근 3개월간 완료한 총
      수업수에 한하며, 총 수업수 상위 20% 구간의 평균값입니다.{'\n'}
      {'\n'}
      <View gray600>
        *정확한 데이터 분석을 위해 48시간 전 완료된 수업까지 반영합니다.
      </View>
    </>,
    <>
      Shows statistics on completed lessons in the past 90 days.{'\n'}
      {'\n'}Number of lessons: counts both 20-min and 40-min lessons{'\n'}Number
      of tutors: Number of unique tutors you had lessons with{'\n'}Number of
      materials: Number of unique materials you used{'\n'}
      {'\n'}Top 20%: Calculated based on all lessons taken across the Ringle
      platform in the past 90 days.{'\n'}
      {'\n'}
      <View gray600>*Lessons completed within 48 hours may not be shown.</View>
    </>,
    's_stats.summary_Dialog_msg',
    <>
      最近3个月内完成的课程数据统计。 {'\n'}
      {'\n'}课程数：40分钟及20分钟 课程的总和{'\n'}
      任课教师人数：一起学习的任课教师人数（扣除重复的任课教师）{'\n'}教材数：
      学习的教材数（扣除重复的教材）{'\n'}
      {'\n'}前20%：前20%的群组限于每个
      Ringler在最近3个月内完成的课程总数，并且是课程总数前20%区间的 平均值。{' '}
      {'\n'}
      {'\n'}
      <View gray600>*为了准确的数据分析，反映了48小时前完成的课程。</View>
    </>,
    <>
      最近3個月期間完成的課程數據統計。{'\n'}
      {'\n'}課程數：40分鐘及20分鐘課程的總和{'\n'}
      任課教師人數：一起學習的任課教師人數（扣除重複的任課教師）{'\n'}教材數：
      學習的教材數（扣除重複的教材）{'\n'}
      {'\n'}
      前20%：前20%族群僅限於各Ringler於最近3個月期間完成的總課程數，為總課程數前20%區間的平均值。
      {'\n'}
      {'\n'}
      <View gray600>*為了精確分析數據，反映48小時之前完成的課程。</View>
    </>,
    <>
      直近3か月間で完了したレッスンデータの統計です。{'\n'}
      {'\n'}レッスン数: 40分および20分 レッスンの総計{'\n'}チューター数:
      レッスンを受けたチューター数 (重複チューターを除く){'\n'}教材数:
      学習した教材数 (重複教材を除く){'\n'}
      {'\n'}上位20%: 上位20%の母集団は各
      Ringlerが直近3か月間に完了した合計レッスン数に限り、合計レッスン数上位20%区間の
      平均値です。{'\n'}
      {'\n'}
      <View gray600>
        *正確なデータ分析のため、48時間前までに完了したレッスンが反映されます。
      </View>
    </>,
    <>
      Hiển thị thống kê những buổi học đã hoàn thành trong 90 ngày qua.{'\n'}
      {'\n'}Số buổi học: tính cả buổi học 20 và 40 phút{'\n'}Số gia sư: Số gia
      sư khác nhau bạn đã học cùng{'\n'}Số tài liệu: Số tài liệu khác nhau bạn
      đã sử dụng{'\n'}
      {'\n'}Top 20%: Được tính dựa trên tất cả buổi học trên Ringle trong 90
      ngày qua.{'\n'}
      {'\n'}
      <View gray600>
        *Buổi học hoàn thành trong 48 giờ qua có thể không hiển thị.
      </View>
    </>,
  ],
  summary_trend_Dialog_msg: [
    <>
      항목별 가장 최근 수치와 상위 20% 수치를 비교 분석합니다.{'\n'}
      {'\n'}항목별 수치는 동일 수업의 결과가 아닐 수 있으며, 데이터 분석이
      완료된 가장 최근 수업의 결과입니다.{'\n'}상위 20%의 모집단은 동일 날짜에
      완료된 수업에 한합니다.{'\n'}
      {'\n'}
      <View gray600>
        *정확한 데이터 분석을 위해 48시간 전 완료된 수업까지 반영합니다.
      </View>
    </>,
    <>
      Compare your performance against top 20% Ringlers.
      {'\n'}
      {'\n'}Top 20% is calculated independently for each category.{'\n'}
      {'\n'}
      <View gray600>*Lessons completed within 48 hours may not be shown.</View>
    </>,
    's_stats.summary_trend_Dialog_msg',
    <>
      比较分析各项目的最新数值与前20%数值。 {'\n'}
      {'\n'}每个项目的 数值可能不是同一个课程的结果，而是最近完成数据分析的最新
      课程结果。 {'\n'}前20%的采集对象仅限于同一天完成的 课程。 {'\n'}
      {'\n'}
      <View gray600>*为了准确的数据分析，反映了48小时前完成的课程。</View>
    </>,
    <>
      比較分析各項目的最新數值與前20%數值。{'\n'}
      {'\n'}各項目數值可能並非相同課程的結果，而是完成數據分析的最新課程結果。
      {'\n'}前20%族群僅限於相同日期完成的課程。{'\n'}
      {'\n'}
      <View gray600>*為了精確分析數據，反映48小時之前完成的課程。</View>
    </>,
    <>
      項目別の最も直近の数値と上位20%の数値を比較分析します。{'\n'}
      {'\n'}項目別
      数値は同日レッスンの結果ではない場合があり、データ分析が完了した最も直近
      のレッスンの結果です。{'\n'}上位20%の母集団は、同日に完了したレッスンに
      限ります。{'\n'}
      {'\n'}
      <View gray600>
        *正確なデータ分析のため、48時間前までに完了したレッスンが反映されます。
      </View>
    </>,
    <>
      So sánh hiệu suất của bạn với top 20% học viên Ringle.
      {'\n'}
      {'\n'}Top 20% được tính riêng trong mỗi hạng mục.{'\n'}
      {'\n'}
      <View gray600>
        *Buổi học hoàn thành trong 48 giờ qua có thể không hiển thị.
      </View>
    </>,
  ],
  overall_class_dialog_msg: [
    '해당 월에 완료된 40분 및 20분 수업 수를 분석합니다. 일주일 평균 수업 수는 완료된 총 수업 수를 주로 나누어 일주일 평균 몇 회의 수업을 완료하였는지 분석합니다.',
    'Counts all lessons. Weekly average lessons are calculated based on monthly lessons.',
    's_stats.overall_class_dialog_msg',
    '分析当月完成的40分钟及20分钟课程数。每周平均课程数是将完成的总课程数按周区分，分析一周平均完成几次课程。',
    '分析該月完成的40分鐘及20分鐘課程數。一週平均課程數係將完成的總課程數按週區分，分析一週平均完成幾次課程。',
    'その月に完了した40分および20分のレッスン数を分析します。1週間の平均レッスン数は、完了した合計レッスン数を週に分け、1週間に平均何回のレッスンを完了したかを分析します。',
    'Đếm toàn bộ buổi học. Số buổi học trung bình mỗi tuần sẽ được tính theo từng tháng.',
  ],
  overall_class_top_dialog_msg: [
    `상위 20%의 모집단은 해당 월에 완료한 총 수업수에 한하며, 총 수업수 상위 20% 구간의 평균값입니다.
 
 *정확한 데이터 분석을 위해 48시간 전 완료된 수업까지 반영합니다.`,
    `Top 20% calculated based on monthly completed lessons by all Ringle users.

*Lessons completed within 48 hours may not be shown.`,
    's_stats.overall_class_top_dialog_msg',
    `前20%的群组仅限于该月完成的总课程数，是总课程数前20%区间的平均值。
 
 *为了准确的数据分析，反映了48小时前完成的课程。`,
    `前20%族群僅限於該月完成的總課程數，為總課程數前20%區間的平均值。
 
 *為了精確分析數據，反映48小時之前完成的課程。`,
    `上位20%の母集団は、その月に完了した合計レッスン数に限り、合計レッスン数の上位20%区間の平均値です。
 
  *正確なデータ分析のため、48時間前までに完了したレッスンが反映されます。`,
    `Top 20% được tính dựa trên buổi học hoàn thành trong tháng của các học viên Ringle.

*Buổi học hoàn thành trong 48 giờ qua có thể không hiển thị.`,
  ],
  overall_percentage_dialog_title: [
    '수업별 평균 완료율',
    'Average % Completed Per Lesson',
    's_stats.overall_percentage_dialog_title',
    '各课程平均完成率',
    '各課程平均完成率',
    'レッスン別平均完了率',
    '% Trung bình Hoàn thành một Buổi học',
  ],
  overall_percentage_dialog_msg: [
    '평균 예습률 및 복습률은 해당 월에 완료된 수업들에 대해 각각 예습률 및 복습률 총합을 완료된 수업 수로 나눈 수치입니다.',
    'Calculated by dividing lessons that you prepped and reviewed by total lessons you had on a monthly basis.',
    's_stats.overall_percentage_dialog_msg',
    '平均预习率与复习率是将该月完成的课程各自的平均预习率与复习率的总和除以完成的课程数所得到的数值。',
    '平均預習率與複習率係將該月完成的課程各自的平均預習率與複習率的總和除以完成的課程數所得到的數值。',
    '平均予習率および復習率は、その月に完了したレッスンをそれぞれ予習率と復習率の合計を完了したレッスン数で割った数値です。',
    'Được tính bằng cách chia số buổi học bạn đã chuẩn bị và xem lại với tổng số buổi học đã học trong tháng.',
  ],
  overall_comp_dialog_msg: [
    `해당 월에 완료된 수업들에 대해 예습만 완료, 복습만 완료, 예습과 복습 모두 완료 및 예습과 복습 모두 미완료한 수업 수를 제공합니다.
 
 *정확한 데이터 분석을 위해 48시간 전 완료된 수업까지 반영합니다.`,
    `Shows how many lessons you have prepped, reviewed, or both on a monthly basis.
 
*Lessons completed within 48 hours may not be shown.`,
    's_stats.overall_comp_dialog_msg',
    `针对该月完成的课程，提供仅完成预习、仅完成复习、预习与复习全部完成及预习与复习全部未完成的课程数。
 
 *为了准确的数据分析，反映了48小时前完成的课程。`,
    `針對該月完成的課程，提供僅完成預習、僅完成複習、預習與複習全部完成及預習與複習全部未完成的課程數。
 
 *為了精確分析數據，反映48小時之前完成的課程。`,
    `その月に完了したレッスンについて、予習のみ完了、復習のみ完了、予習と復習すべて完了および予習と復習すべて未完了のレッスン数を提供します。
 
 *正確なデータ分析のため、48時間前までに完了したレッスンが反映されます。`,
    `Hiển thị số buổi học đã chuẩn bị, xem lại hoặc cả hai trong một tháng.
 
*Buổi học hoàn thành trong 48 giờ qua có thể không hiển thị.`,
  ],
  filter_period_dialog: [
    '월별 수업 통계는 2020년 1월부터 확인 가능합니다.',
    'Statistics are available from January, 2020.',
    's_stats.filter_period_dialog',
    '可确认2020年1月之后的每月课程统计。',
    '可確認2020年1月以後的每月課程統計。',
    '月別のレッスン統計は2020年1月分から確認可能です。',
    'Thống kê có từ tháng 1, 2020.',
  ],
  packet_dialog: [
    `해당 월에 학습한 교재 수를 분석하며, 중복 교재는 제외합니다.
 
 *정확한 데이터 분석을 위해 48시간 전 완료된 수업까지 반영합니다.`,
    `Counts unique materials used in the selected month.
 
 *Lessons completed within 48 hours may not be shown.`,
    's_stats.packet_dialog',
    `分析该月学习的教材数，扣除重复的教材。
 
 *为了准确的数据分析，反映了48小时前完成的课程。`,
    `分析該月學習的教材數，扣除重複的教材。
 
 *為了精確分析數據，反映48小時之前完成的課程。`,
    `その月に学習した教材数を分析し、重複教材は除きます。
 
 *正確なデータ分析のため、48時間前までに完了したレッスンが反映されます。`,
    `Đếm các tài liệu khác nhau sử dụng trong tháng được chọn.
 
 *Buổi học hoàn thành trong 48 giờ qua có thể không hiển thị.`,
  ],
  tutor_dialog: [
    `해당 월에 함께한 튜터 수를 분석하며, 중복 튜터는 제외합니다.
 
 *정확한 데이터 분석을 위해 48시간 전 완료된 수업까지 반영합니다.`,
    `Counts number of different tutors you had lessons with on monthly basis.
 
 *Lessons completed within 48 hours may not be shown.`,
    's_stats.tutor_dialog',
    `分析该月一起学习的任课教师人数，扣除重复的任课教师。
 
 *为了准确的数据分析，反映了48小时前完成的课程。`,
    `分析該月一起學習的任課教師人數，扣除重複的任課教師。
 
 *為了精確分析數據，反映48小時之前完成的課程。`,
    `その月にレッスンを受けたチューターの数を分析し、重複チューターは除きます。
 
 *正確なデータ分析のため、48時間前までに完了したレッスンが反映されます。`,
    `Đếm các gia sư khác nhau bạn đã học cùng trong một tháng.
 
 *Buổi học hoàn thành trong 48 giờ qua có thể không hiển thị.`,
  ],
  feedback_dialog_title: [
    '튜터 피드백 평균 점수',
    'Avg. Tutor Feedback Score',
    's_stats.feedback_dialog_title',
    '任课教师意见回馈平均分数',
    '任課教師意見回饋平均分數',
    'チューターフィードバック平均点数',
    'Trung bình điểm đánh giá của gia sư',
  ],
  feedback_dialog_my_title: [
    '내 평균 점수',
    'Your Avg. Score',
    's_stats.feedback_dialog_my_title',
    '我的平均分数',
    '我的平均分數',
    'あなたの平均点数',
    'Điểm trung bình của bạn',
  ],
  feedback_dialog_msg: [
    '해당 수업의 영역별 - Fluency, Vocabulary, Grammar, Pronunciation - 점수의 평균값입니다.',
    'Average across Fluency, Vocabulary, Accuracy, Pronunciation.',
    's_stats.feedback_dialog_msg',
    '该课程的各方面 - Fluency、Vocabulary、Grammar、Pronunciation - 分数的平均值。',
    '該課程的各領域 - Fluency、Vocabulary、Grammar、Pronunciation - 分數的平均值。',
    'このレッスンの分野別 - Fluency、Vocabulary、Grammar、Pronunciation - 点数の平均値です。',
    'Điểm trung bình về Mức độ trôi chảy, Từ vựng, Độ chính xác, Phát âm.',
  ],
  feedback_top_msg: [
    `상위 20%의 모집단은 동일 날짜에 완료된 수업에 한하며, 튜터 피드백 평균 점수 상위 20% 구간의 평균값입니다.
 
 *정확한 데이터 분석을 위해 48시간 전 완료된 수업까지 반영합니다.
 *튜터 피드백이 제공되지 않은 수업은 해당 페이지에서 조회되지 않습니다.`,
    `Shows top 20% in tutor feedback scores among all lessons taken across the Ringle platform on the same day as this class.
 
 *Lessons completed 48 hours ago are reflected for accurate data analysis
 *Lessons which does not provide tutor's feedback will not be provided on this page`,
    's_stats.feedback_top_msg',
    `前20%群组仅限于同一天完成的课程，是任课教师反馈平均分数前20%区间的平均值。
 
 *为了准确的数据分析，反映了48小时前完成的课程。
 *无法在该页面查询未提供任课教师反馈的课程。`,
    `前20%族群僅限於相同日期完成的課程，為任課教師意見回饋平均分數前20%區間的平均值。
 
 *為了精確分析數據，反映48小時之前完成的課程。
 *無法於該頁面查詢未提供任課教師意見回饋的課程。`,
    `上位20%の母集団は同日に完了したレッスンに限り、チューターフィードバック平均点数上位20%区間の平均値です。
 
 *正確なデータ分析のため、48時間前までに完了したレッスンが反映されます。
 *チューターフィードバックが提供されないレッスンは、レッスン統計ページで照会できません。`,
    `Hiển thị top 20% điểm số cao nhất gia sư đã cho trong tất cả buổi học diễn ra cùng ngày trên nền tảng Ringle.
 
 *Buổi học hoàn thành 48 giờ trước cho số liệu phân tích chính xác
 *Buổi học không có đánh giá từ gia sư sẽ không hiển thị`,
  ],
  word_msg: [
    '해당 수업에서 내가 사용한 단어 수이며, 중복값을 제외합니다.',
    'Number of different words you used in a lesson.',
    's_stats.word_msg',
    '该课程中我使用的单词数，扣除重复值。',
    '該課程中我使用的單字數，扣除重複值。',
    'このレッスンであなたが使った単語数であり、重複値を除きます。',
    'Số từ khác nhau bạn đã sử dụng trong một buổi học.',
  ],
  word_dialog_title: [
    '내 사용 단어 수',
    'Used Words',
    's_stats.word_dialog_title',
    '我使用的单词数',
    '我使用的單字數',
    'あなたの使用単語数',
    'Từ đã dùng',
  ],
  phrase_dialog_title: [
    '내 사용 구문 수',
    'Used Expressions',
    's_stats.phrase_dialog_title',
    '我使用的句型数',
    '我使用的句型數',
    'あなたの使用構文数',
    'Mẫu câu đã dùng',
  ],
  phrase_msg: [
    '해당 수업에서 내가 사용한 구문 수이며, 중복값을 제외합니다.',
    'Number of different expressions you used in a lesson.',
    's_stats.phrase_msg',
    '该课程中我使用的句型数，扣除重复值。',
    '該課程中我使用的句型數，扣除重複值。',
    'このレッスンであなたが使った構文数であり、重複値を除きます。',
    'Số mẫu câu khác nhau bạn sử dụng trong một buổi học.',
  ],
  wpm_dialog_title: [
    '내 말하기 속도',
    'Your Speech Pace',
    's_stats.wpm_dialog_title',
    '我的语速',
    '我的口說速度',
    'あなたの話すスピード',
    'Tốc độ nói của bạn',
  ],
  wpm_dialog_msg: [
    '해당 수업에서 내가 말한 속도입니다. 말하기 속도는 수업 시간 동안 내가 말한 단어 수를 기준으로 계산하며, 1분당 말한 단어 수입니다.',
    'Total number of words uttered divided by the total number of minutes in lesson..',
    's_stats.wpm_dialog_msg',
    '这是该课程中我的语速。语速是以课程期间我说的单词数为准，每分钟所说的单词数。',
    '該課程中我的口說速度，以上課時我說的單字數為準，為每分鐘所說的單字數。',
    'このレッスンであなたが話したスピードです。話すスピードはレッスン時間中にあなたが話した単語数を基準に計算され、1分当たりに話した単語数です。',
    'Tổng số từ đã nói chia ra tổng số từ phút trong buổi học.',
  ],
  wpm_top_msg: [
    `상위 20%의 모집단은 동일 날짜에 완료된 수업에 한하며, 말하기 속도 상위 20% 구간의 평균값입니다.
 
 *정확한 데이터 분석을 위해 48시간 전 완료된 수업까지 반영합니다.
 *수업 녹음을 설정하지 않아 분석이 불가능한 수업은 해당 페이지에서 조회되지 않습니다.`,
    `Shows top 20% among all lessons taken across the Ringle platform on the same day.
 
 *Lessons completed within 48 hours may not be shown.
 *Unrecorded lessons are not included in analysis`,
    's_stats.wpm_top_msg',
    `前20%群组仅限于同一天完成的课程，是语速前20%区间的平均值。
 
 *为了准确的数据分析，反映了48小时前完成的课程。
 *无法在该页面查询由于设定课程录音而无法分析的课程。`,
    `前20%族群僅限於相同日期完成的課程，為口說速度前20%區間的平均值。
 
 *為了精確分析數據，反映48小時之前完成的課程。
 *無法於該頁面查詢由於未設定課程錄音而無法分析的課程。`,
    `上位20%の母集団は同日に完了したレッスンに限り、話すスピードの上位20%区間の平均値です。
 
 *正確なデータ分析のため、48時間前までに完了したレッスンが反映されます。
 *レッスン録音を設定していないために分析が不可能なレッスンは、レッスン統計ページで照会できません。`,
    `Hiển thị top 20% trong số các buổi học diễn ra cùng ngày trên nền tảng Ringle.
 
 *Buổi học hoàn thành trong 48 giờ có thể sẽ không hiển thị.
 *Buổi học không thu âm sẽ không nằm trong phân tích`,
  ],
  no_data_month: [
    '이 달에는 링글 수업을 안하셨습니다.\n꾸준한 링글 수업만이 영어 실력을 향상시킬 수 있습니다.',
    "You haven't taken any lessons this month.",
    's_stats.no_data_month',
    '本月您未进行Ringle课程，\n只有按时进行Ringle课程才能提升英语实力。',
    '本月您未進行Ringle課程，\n只有按時進行Ringle課程才能提升英語實力。',
    'この月はRingleのレッスンを受けませんでした。\n地道にRingleのレッスンを受けることだけが英語力を向上することができます。',
    'Bạn chưa học buổi học nào tháng này.',
  ],
  show_example: [
    '예시보기',
    'View example',
    's_stats.show_example',
    '查看例子',
    '查看例子',
    '例を見る',
    'Xem ví dụ',
  ],
  no_prev_re: [
    '예습 및 복습의 데이터는\n2021년 1월의 수업부터 확인하실 수 있습니다.',
    'Lesson Prep. & Review Data is available from January of 2021.',
    's_stats.no_prev_re',
    '您可确认2021年1月之后的\n课程预习与复习数据。',
    '您可確認2021年1月以後的\n課程預習與複習數據。',
    '予習および復習データは\n2021年 1月のレッスンから確認することができます。',
    'Chuẩn bị Buổi học & Xem lại số liệu có từ tháng 1, 2021.',
  ],
  analyse_yet: type => [
    `${type === 'word' ? '단어' : '구문'} 분석 중 입니다.`,
    `${type === 'word' ? 'Word' : 'Expression'} analysis in progress.`,
    's_stats.analyse_yet',
    `正在分析${type === 'word' ? '单词' : '句型'} 。`,
    `正在分析${type === 'word' ? '單字' : '句型'}。`,
    `${type === 'word' ? '単語' : '構文'} を分析中です。`,
    `${type === 'word' ? 'Từ' : 'Mẫu câu'} đang phân tích.`,
  ],
  word_top_msg: duration => [
    `상위 20%의 모집단은 동일 날짜에 완료된 ${
      duration === 'full' ? 40 : 20
    }분 수업에 한하며, 사용 단어 수 상위 20% 구간의 평균값입니다.

*정확한 데이터 분석을 위해 48시간 전 완료된 수업까지 반영합니다.
*수업 녹음을 설정하지 않아 분석이 불가능한 수업은 해당 페이지에서 조회되지 않습니다.`,
    `Shows top 20% among all ${
      duration === 'full' ? 40 : 20
    }min lessons taken across the Ringle platform on the same day.

*Lessons completed within 48 hours may not be shown.
*Unrecorded lessons are not included in analysis.`,
    's_stats.word_top_msg',
    `前20%群组仅限于同一天完成的${
      duration === 'full' ? 40 : 20
    }分钟课程，是使用的单词数前20%区间的平均值。
 
 *为了准确的数据分析，反映了48小时前完成的课程。
 *无法在该页面查询由于未设定课程录音而无法分析的课程。`,
    `前20%族群僅限於相同日期完成的${
      duration === 'full' ? 40 : 20
    }分鐘課程，為使用的單字數前20%區間的平均值。

*為了精確分析數據，反映48小時之前完成的課程。
*無法於該頁面查詢由於未設定課程錄音而無法分析的課程。`,
    `上位20%の母集団は、同日に完了した ${
      duration === 'full' ? 40 : 20
    }分レッスンに限り、使用単語数の上位20%区間の平均値です。 

*正確なデータ分析のため、48時間前までに完了したレッスンが反映されます。
*レッスン録音を設定していないために分析が不可能なレッスンは、レッスン統計ページで照会できません。`,
    `Hiển thị top 20% trong số buổi học ${
      duration === 'full' ? 40 : 20
    }phút diễn ra cùng ngày trên nền tảng Ringle.

*Buổi học hoàn thành trong 48 giờ có thể sẽ không hiển thị.
 *Buổi học không thu âm sẽ không nằm trong phân tích.`,
  ],
  phrase_top_msg: duration => [
    `상위 20%의 모집단은 동일 날짜에 완료된 ${
      duration === 'full' ? 40 : 20
    }분 수업에 한하며, 사용 구문 수 상위 20% 구간의 평균값입니다.
    
*정확한 데이터 분석을 위해 48시간 전 완료된 수업까지 반영합니다. 
*수업 녹음을 설정하지 않아 분석이 불가능한 수업은 해당 페이지에서 조회되지 않습니다.`,
    `Shows top 20% among all ${
      duration === 'full' ? 40 : 20
    }min lessons taken across the Ringle platform on the same day.

*Lessons completed within 48 hours may not be shown.
*Unrecorded lessons are not included in analysis.`,
    's_stats.phrase_top_msg',
    `前20%群组仅限于同一天完成的${
      duration === 'full' ? 40 : 20
    }分钟课程，是使用的单词数前20%区间的平均值。
 
 *为了准确的数据分析，反映了48小时前完成的课程。
 *无法在该页面查询由于未设定课程录音而无法分析的课程。`,
    `前20%族群僅限於相同日期完成的${
      duration === 'full' ? 40 : 20
    }分鐘課程，為使用的句型數前20%區間的平均值。
    
*為了精確分析數據，反映48小時之前完成的課程。 
*無法於該頁面查詢由於未設定課程錄音而無法分析的課程。`,
    `上位20%の母集団は、同日に完了した ${
      duration === 'full' ? 40 : 20
    }分レッスンに限り、使用構文数の上位20%区間の平均値です。 
    
*正確なデータ分析のため、48時間前までに完了したレッスンが反映されます。
*レッスン録音を設定していないために分析が不可能なレッスンは、レッスン統計ページで照会できません。`,
    `Hiển thị top 20% trong số các buổi học ${
      duration === 'full' ? 40 : 20
    }phút diễn ra cùng ngày trên nền tảng Ringle.

*Buổi học hoàn thành trong 48 giờ có thể sẽ không hiển thị.
 *Buổi học không thu âm sẽ không nằm trong phân tích.`,
  ],
};
export const s_webinar = {
  the_webinar_live_hasnt_started_yet: [
    <>아직 웨비나가 시작되지 않았습니다.{'\n'}링글 팀에 문의해주세요.</>,
    <>
      You can enter live webinars up to 15 minutes before the scheduled start
      time.
    </>,
    's_webinar.the_webinar_live_hasnt_started_yet',
    <>网络研讨会尚未开始，{'\n'}请咨询Ringle团队。 </>,
    <>網路研討會尚未開始，{'\n'}請洽詢Ringle團隊。</>,
    <>
      まだウェビナーが始まっていません。{'\n'}
      Ringleチームにお問い合わせください。
    </>,
    <>Bạn có thể vào webinar trực tuyến 15 phút trước khi bắt đầu.</>,
  ],
  view_ringle_webinar_guide: [
    '링글 웨비나 사용 가이드 보기',
    'View Ringle Webinar Guide',
    's_webinar.view_ringle_webinar_guide',
    '查看Ringle网络研讨会使用指南',
    '查看Ringle網路研討會使用指南',
    'Ringleウェビナー使用ガイドを見る',
    'Xem hướng dẫn về Ringle Webinar',
  ],
  register: [
    '신청하기',
    'RSVP',
    's_webinar.register',
    '申请',
    '申請',
    '予約する',
    'Xác nhận đăng ký',
  ],
  cancel: [
    '신청 취소',
    'Cancel RSVP',
    's_webinar.cancel',
    '取消申请',
    '取消申請',
    '予約キャンセル',
    'Huỷ đăng ký',
  ],
  enter: [
    '입장하기',
    'Overview',
    's_webinar.enter',
    '入场',
    '進場',
    '入室する',
    'Tổng quan',
  ],
  n_already_registered: n => [
    `현재 신청 ${n} 명`,
    `${n} already RSVP-ed`,
    's_webinar.n_already_registered',
    `目前申请：${n}人`,
    `目前申請：${n}人`,
    `現在予約済 ${n} 名`,
    `${n} người đã xác nhận đăng ký`,
  ],
  up_to_n_attendees: n => [
    `전체 정원 ${n} 명`,
    `Up to ${n} attendees`,
    's_webinar.up_to_n_attendees',
    `总名额：${n}人`,
    `總名額：${n}人`,
    `定員 ${n} 名`,
    `Lên đến ${n} người tham gia`,
  ],
  overview: [
    '개요',
    'Overview',
    's_webinar.overview',
    '摘要',
    '概要',
    '概要',
    'Tổng quan',
  ],
  clips: [
    '재생 목록',
    'Clips',
    's_webinar.clips',
    '播放清单',
    '片段清單',
    '再生リスト',
    'Clip',
  ],
  meet_your_tutor: [
    '튜터 소개',
    'Meet your tutor',
    's_webinar.meet_your_tutor',
    '介绍任课教师',
    '介紹任課教師',
    'チューター紹介',
    'Gặp gia sư của bạn',
  ],
  materials: [
    '자료받기',
    'Materials',
    's_webinar.materials',
    '下载资料',
    '下載資料',
    '資料を受け取る',
    'Tài liệu',
  ],
  more_webinars_by: who => [
    `${who}의 다른 웨비나`,
    `More webinars by ${who}`,
    's_webinar.more_webinars_by',
    `${who}的其他网络研讨会`,
    `${who}的其他網路研討會`,
    `${who}さんの他のウェビナー`,
    `Các webinar khác bởi ${who}`,
  ],
  no_pdf: [
    '해당 웨비나는 PDF 파일이 없습니다.',
    'This webinar has no downloadable pdf.',
    's_webinar.no_pdf',
    '该网络研讨会无PDF文件。',
    '該網路研討會無PDF檔。',
    'このウェビナーにはPDFファイルがありません。',
    'Webinar này không có pdf để tải.',
  ],
  search_webinar: [
    '웨비나를 검색하세요.',
    'Search Webinar',
    's_webinar.search_webinar',
    '请搜寻网络研讨会。',
    '請搜尋網路研討會',
    'ウェビナーを検索してください。',
    'Tìm kiếm Webinar',
  ],
  search_results: [
    '웨비나 검색 결과',
    'Search Results',
    's_webinar.search_results',
    '网络研讨会搜寻结果',
    '網路研討會搜尋結果',
    'ウェビナー検索結果',
    'Kết quả tìm kiếm',
  ],
  guide: [
    '링글 LIVE 접속 가이드',
    'Webinar Access Guide',
    's_webinar.guide',
    'APP连线指南',
    'APP連線指南',
    'アプリアクセスガイド',
    'Hướng dẫn truy cập webinar',
  ],
  detail: [
    '자세히 보기',
    'View detail',
    's_webinar.detail',
    '详细内容',
    '詳細內容',
    '詳しく見る',
    'Xem chi tiết',
  ],
  not_enterable: [
    '웨비나 시작 15분 전부터 입장하실 수 있습니다.',
    'You can enter live webinars up to 15 minutes before the scheduled start time.',
    's_webinar.not_enterable',
    '可在网络研讨会开始15分钟前入场。',
    '網路研討會開始15分鐘前可進場。',
    'ウェビナー開始15分前から入室することができます。',
    'Bạn có thể vào webinar trực tuyến 15 phút trước khi bắt đầu.',
  ],
  registration_caceled: [
    '정상 취소 되었습니다.',
    'RSVP cancelled',
    's_webinar.registration_caceled',
    '取消成功。',
    '取消成功。',
    '正常にキャンセルされました。',
    'Đã huỷ xác nhận đăng ký huỷ',
  ],
  lucky_draw_enroll: [
    '이벤트 참여',
    'Enter Event',
    's_webinar.lucky_draw_enroll',
    '参与活动',
    '參與活動',
    'イベント参加',
    'Vào sự kiện',
  ],
  related_material: [
    '관련 교재',
    'Related Materials',
    's_webinar.related_material',
    '相关教材',
    '相關教材',
    '関連教材',
    'Tài liệu liên quan',
  ],
  related_article: [
    '관련 기사',
    'Related News',
    's_webinar.related_article',
    '相关新闻报道',
    '相關報導',
    '関連記事',
    'Tin tức liên quan',
  ],
  related_video: [
    '관련 영상',
    'Related Videos',
    's_webinar.related_video',
    '相关视频',
    '相關影片',
    '関連動画',
    'Videos liên quan',
  ],
  apply: [
    '신청하기',
    'RSVP',
    's_webinar.apply',
    '申请网络研讨会',
    '申請網路研討會',
    'ウェビナー予約',
    'Xác nhận tham gia',
  ],
  complete_apply: [
    '신청이 완료되었습니다.',
    'We received your RSVP. Thanks!',
    's_webinar.complete_apply',
    '网络研讨会直播申请成功。',
    '即時網路研討會申請完成。',
    'Live Webinarの予約が完了しました。',
    'Chúng tôi nhận đăng ký của bạn. Cảm ơn!',
  ],
  live_enter: [
    '웨비나 입장',
    'Enter',
    's_webinar.live_enter',
    '进入网络研讨会',
    '進入網路研討會',
    'ウェビナー入室',
    'Vào',
  ],
  live_guide: [
    '링글 LIVE 안내',
    'Ringle LIVE Info',
    's_webinar.live_guide',
    '直播网络研讨会说明事项',
    '即時網路研討會說明事項',
    'Live Webinarのご案内',
    'Ringle LIVE Info',
  ],
  complete_cancel: [
    '신청이 취소되었습니다.',
    'You cancelled your RSVP.',
    's_webinar.complete_cancel',
    '已取消网络研讨会直播申请。',
    '已取消即時網路研討會申請。',
    'Live Webinarの予約がキャンセルされました。',
    'Bạn đã huỷ đăng ký.',
  ],
  cancel_webinar: [
    '웨비나 신청 취소',
    'Cancel RSVP',
    's_webinar.cancel_webinar',
    '取消网络研讨会申请',
    '取消網路研討會申請',
    'ウェビナー予約キャンセル',
    'Hủy đăng ký tham gia',
  ],
  hash_tag: [
    '카테고리별 웨비나',
    'Tagged Webinars',
    's_webinar.hash_tag',
    '各类别网络研讨会',
    '各類別網路研討會',
    'カテゴリ別ウェビナー',
    'Webinar được gắn thẻ',
  ],
  no_live_enter_title: [
    '웨비나 입장 안내',
    'Enter Live Webinar',
    's_webinar.no_live_enter_title',
    '网络研讨会入场说明',
    '網路研討會進場說明',
    'ウェビナー入室方法のご案内',
    'Vào Webinar trực tuyến',
  ],
  apply_description: {
    li_1: [
      "구글 계정을 사용하시면 '내 구글 캘린더'에 자동으로 일정이 추가되며 웨비나 당일 1시간 전 앱 푸시 알림을 받아볼 수 있습니다.",
      'If you RSVP with a gmail, the Webinar will automatically be added to your Google Calendar. Ringle App will also be sending you a reminder notification 1 hour before the start time.',
      's_webinar.apply_description.li_1',
      'If you RSVP with a gmail, the schedule will automatically be added to your Google Calendar. Ringle App will also be sending you a reminder notification 1 hour before the start time.',
      '如使用Google帳戶，將自動新增日程於「我的Google日歷」，並設定於網路研討會當天開始10分鐘前自動通知。',
      'Googleアカウントを使用すると「Googleカレンダー」に自動でスケジュールが追加され、ウェビナー当日開始10分前に通知を受け取る設定ができます。',
      'Nếu bạn xác nhận qua gmail, buổi Webinar sẽ được thêm trực tiếp vào Google Calendar của bạn và sẽ gửi thông báo 10 phút trước khi bắt đầu.',
    ],
    li_2: [
      "링글 LIVE 수업 자료와 녹화 영상은 세션 종료 후 최대 14일 이내로 '[링글 홈] > [콘텐츠] > [웨비나]'에 업데이트 됩니다.",
      "The recordings and class materials will be uploaded within two weeks, and can be found at '[Home] > [Content] > [Webinar]'.",
      's_webinar.apply_description.li_2',
      "The recordings and class materials will be uploaded within two weeks, and can be found at '[Home] > [Content] > [Webinar]'.",
      '課程資料及錄製影片可於研討會結束後7天內於Ringle網頁或APP確認。',
      'ウェビナー資料と録画は、セッション終了後7日以内にRingleホームページまたはアプリで確認することができます。',
      'Ghi âm của Webinar và tài liệu sẽ được đăng trong vòng 7 ngày kể từ ngày diễn ra.',
    ],
    li_3: [
      "링글 LIVE 관련하여 문의사항이 있으시면 젠데스크(https://ringleplus.zendesk.com/hc/ko)을 통해 '[기타 문의] > [링글 웨비나 보러가기]'를 통해 연락주시면 빠르게 답변 드리겠습니다.",
      'If you have any questions regarding the Ringle LIVE events, please reach us through the Chatbot on the portal: [Other Inquiries] > [Go to Ringle Webinar]. We will reach back to you as soon as possible.',
      's_webinar.apply_description.li_3',
      'If you have any questions regarding the Ringle LIVE events, please reach us through the Chatbot on the portal: [Other Inquiries] > [Go to Ringle Webinar]. We will reach back to you as soon as possible.',
      '研討會結束後，如需要複習資料，洽詢webinar@ringleplus.com或於研討會時透過Zoom Chat個別洽詢，我們將在確認資料後發送至您的電子信箱。',
      'セッション終了後すぐに復習資料が必要な方は、webinar@ringleplus.comにご連絡いただくか、セッション中に個別のZoom Chatにてお問い合わせください。確認後にメールでお送りいたします。',
      'Nếu bạn cần tài liệu Webinar sớm hơn, vui lòng chat với chúng tôi trên Zoom trong quá trình tham gia Webinar hoặc gửi email đến webinar@ringleplus.com',
    ],
    li_4: [
      '라이브 다시보기는 시범 운영 기간만 무료로 제공되어 일정 기간이 지나면 이용이 제한됩니다.',
      'Replaying LIVE Webinars is currently in beta and is offered in limited time only.',
      's_webinar.apply_description.li_4',
      '直播重放只在试运营期间免费提供, 超过规定时间时使用可能会出现限制。',
      'Live重播僅試營運期間免費提供，一定時間過後將限制使用。',
      'LIVE再配信は試験運用期間のみ無料で提供され、一定期間が過ぎると利用が制限されます。',
      'Phát lại buổi Webinar trực tuyến hiện đang trong giai đoạn thử nghiệm và chỉ được cung cấp trong thời gian giới hạn.',
    ],
    li_5: [
      "기타 문의 사항은 1:1 문의를 통해 '링글 콘텐츠 -> 웨비나'를 클릭하시면 더 빠르게 답변드릴 수 있습니다.",
      'If you have any questions, please chat us https://ringleedu.channel.io/',
      's_webinar.apply_description.li_5',
      '',
      '',
      '',
      '',
    ],
  },
};
export const s_original = {
  saved_webinars: [
    '찜한 웨비나',
    'Favorite Webinars',
    's_original.saved_webinars',
    '我收藏的网络研讨会',
    '我收藏的網路研討會',
    'お気に入り登録したウェビナー',
    'Webinar yêu thích',
  ],
  saved_packets: [
    '찜한 교재',
    'Favorite Materials',
    's_original.saved_packets',
    '我收藏的教材',
    '我收藏的教材',
    'お気に入り教材',
    'Tài liệu Yêu thích',
  ],
  save_the_webinar_that_you_want_to_watch_again_: [
    '다시 보고 싶은\n웨비나를 찜해보세요.',
    'Add your favorite webinars!',
    's_original.save_the_webinar_that_you_want_to_watch_again_',
    '请收藏想再次观看的\n网络研讨会。',
    '請收藏想再次觀看的\n網路研討會。',
    'もう一度見たい\nウェビナーをお気に入り登録しましょう。',
    'Thêm vào webinar yêu thích của bạn!',
  ],
  save_the_packet_that_you_want_to_read_again_: [
    '다시 보고 싶은\n교재를 찜해보세요.',
    'Add your favorite materials!',
    's_original.save_the_packet_that_you_want_to_read_again_',
    '请收藏想再次观看的\n教材。',
    '請收藏想再次\n觀看的教材。',
    'もう一度見たい\n教材をお気に入り登録しましょう。',
    'Thêm vào tài liệu yêu thích của bạn!',
  ],
  added_to_saved_webinars: [
    '[콘텐츠 > 내 콘텐츠] 찜한 웨비나에 추가되었습니다.',
    'Added to [Content > My Content] Favorite Webinars.',
    's_original.added_to_saved_webinars',
    '已在[内容 > 我的收藏]里添加了我收藏的网络研讨会。',
    '已新增於[內容 > 我的收藏]我收藏的網路研討會。',
    '[コンテンツ > マイコンテンツ] お気に入りウェビナーに追加されました。',
    'Thêm vào [Nội dung > Nội dung của tôi] Webinar Yêu thích.',
  ],
  removed_from_saved_webinars: [
    '[콘텐츠 > 내 콘텐츠] 찜한 웨비나에서 삭제되었습니다.',
    'Removed from [Content > My Content] Favorite Webinars.',
    's_original.removed_from_saved_webinars',
    '已在[内容 > 我的收藏]里删除了我收藏的网络研讨会。',
    '已從[內容 > 我的收藏]我收藏的網路研討會刪除。',
    '[コンテンツ > マイコンテンツ] お気に入りウェビナーから削除されました。',
    'Bỏ khỏi [Nội dung > Nội dung của tôi] Webinar Yêu thích.',
  ],
  added_to_my_favorite: [
    '[튜터 > 내 튜터] 찜한 튜터에 추가되었습니다.',
    'Added to [Tutors > My Tutors] Favorites',
    's_original.added_to_my_favorite',
    '已在[任课教师 > 我的任课教师]里添加了我收藏的任课教师。',
    '已新增於[任課教師 > 我的任課教師]我收藏的任課教師。',
    '[チューター > マイチューター] お気に入りチューターに追加されました。',
    'Thêm vào [Gia sư > Gia sư của tôi] Yêu thích',
  ],
  removed_from_my_favorite: [
    '[튜터 > 내 튜터] 찜한 튜터에서 삭제되었습니다.',
    'Removed from [Tutors > My Tutors] Favorites',
    's_original.removed_from_my_favorite',
    '已在[任课教师 > 我的任课教师]里删除了我收藏的任课教师。',
    '已從[任課教師 > 我的任課教師]我收藏的任課教師刪除。',
    '[チューター > マイチューター] お気に入りチューターから削除されました。',
    'Bỏ khỏi [Gia sư > Gia sư của tôi] Yêu thích',
  ],
  removed_from_saved_packets: [
    '[콘텐츠 > 내 콘텐츠] 찜한 교재에서 삭제되었습니다.',
    'Removed from [Content > My Content] Favorite Materials.',
    's_original.removed_from_saved_packets',
    '已在[内容 > 我的收藏]里删除了我收藏的教材。',
    '已從[內容 > 我的收藏]我收藏的教材刪除。',
    '[コンテンツ > マイコンテンツ] お気に入り教材から削除されました。',
    'Bỏ khỏi [Nội dung > Nội dung của tôi] Tài liệu yêu thích.',
  ],
  added_to_saved_packets: [
    '[콘텐츠 > 내 콘텐츠] 찜한 교재에 추가되었습니다.',
    'Added to [Content > My Content] Favorite Materials.',
    's_original.added_to_saved_packets',
    '已在[内容 > 我的收藏]里添加了我收藏的教材。',
    '已新增於[內容 > 我的收藏]我收藏的教材。',
    '[コンテンツ > マイコンテンツ] お気に入り教材に追加されました。',
    'Thêm vào [Nội dung > Nội dung của tôi] Tài liệu yêu thích.',
  ],
  delete_my_originals: [
    '[콘텐츠 > 내 콘텐츠]에서 삭제하시겠습니까?',
    'Are you sure you want to remove from [Content > My Content]?',
    's_original.delete_my_originals',
    '确定在[内容 > 我的收藏]里进行删除吗？',
    '確定要從[內容 > 我的收藏]刪除嗎？',
    '[コンテンツ > マイコンテンツ] から削除しますか？',
    'Bạn có chắc muốn bỏ khỏi [Nội dung > Nội dung của tôi]?',
  ],
};
export const s_mypage = {
  my_page: [
    '내 페이지',
    'My Page',
    's_mypage.my_page',
    '我的页面',
    '我的頁面',
    'マイページ',
    'Trang của tôi',
  ],
  points: [
    '포인트',
    'Points',
    's_mypage.points',
    '积分',
    '點數',
    'ポイント',
    'Điểm',
  ],
  notification_settings: [
    '알림 수신 설정',
    'Notification Settings',
    's_mypage.notification_settings',
    '通知接收设定',
    '通知接收設定',
    '通知受信設定',
    'Cài đặt thông báo',
  ],
  purchase_lesson_coupons: [
    '수업권 구매',
    'Add Lesson Credits',
    's_mypage.purchase_lesson_coupons',
    '购买课程券',
    '購買課程券',
    'レッスンチケット購入',
    'Thêm thẻ học',
  ],
  vouchers: [
    '쿠폰함',
    'Coupons',
    's_mypage.vouchers',
    '优惠券',
    '優惠券',
    'クーポン',
    'Coupon',
  ],
  invite_earn: [
    '친구 초대',
    'Invite',
    's_mypage.invite_earn',
    '邀请朋友',
    '邀請朋友',
    '友達招待',
    'Mời',
  ],
  notice: [
    '공지사항',
    'Updates',
    's_mypage.notice',
    '公告',
    '公告事項',
    'お知らせ',
    'Cập nhật',
  ],
  faq: [
    '고객센터',
    'Help Center',
    's_mypage.faq',
    '客服中心',
    '客服中心',
    'ヘルプセンター',
    'Help Center',
  ],
  help_support: [
    '고객지원',
    'Support',
    's_mypage.help_support',
    '支援',
    '支援',
    'サポート',
    'Hỗ trợ',
  ],
  edit_profile: [
    '프로필 설정',
    'Edit Profile',
    's_mypage.edit_profile',
    '简介设定',
    '簡介設定',
    'プロフィール設定',
    'Chỉnh sửa hồ sơ',
  ],
  change_language: [
    '언어 변경',
    'Change Language',
    's_mypage.change_language',
    '变更语言',
    '變更語言',
    '言語変更',
    'Đổi ngôn ngữ',
  ],
  change_password: [
    '비밀번호 변경',
    'Change Password',
    's_mypage.change_password',
    '变更密码',
    '變更密碼',
    'パスワード変更',
    'Đổi mật khẩu',
  ],
  change_timezone: [
    '타임존 변경',
    'Change Time zone',
    's_mypage.change_timezone',
    '变更时区',
    '變更時區',
    'タイムゾーン変更',
    'Đổi Múi giờ',
  ],
  logout: [
    '로그아웃',
    'Logout',
    's_mypage.logout',
    '退出',
    '登出',
    'ログアウト',
    'Thoát ra',
  ],
  ringle_policy: [
    '약관 및 정책',
    'Terms & conditions',
    's_mypage.ringle_policy',
    '条款与政策',
    '條款與政策',
    '規約およびポリシー',
    'Điều khoản & điều kiện',
  ],
  privacy_policy: [
    '개인정보 처리 방침',
    'Privacy Policy',
    's_mypage.privacy_policy',
    '个人信息处理方针',
    '個人資料處理方針',
    'プライバシーポリシー',
    'Chính sách bảo mật',
  ],
  terms_of_service: [
    '이용 약관',
    'Terms of Service',
    's_mypage.terms_of_service',
    '使用条款',
    '使用條款',
    '利用規約',
    'Điều khoản Dịch vụ',
  ],
  mobile: [
    '휴대폰 번호',
    'Phone Number',
    's_mypage.mobile',
    '手机号码',
    '手機號碼',
    '携帯電話番号',
    'Số điện thoại',
  ],
  name: ['이름', 'Name', 's_mypage.name', '姓名', '姓名', '氏名', 'Tên'],
  company: [
    '회사 이름',
    'Company',
    's_mypage.company',
    '公司名称',
    '公司名稱',
    '会社名',
    'Công ty',
  ],
  role_position: [
    '직책/역할',
    'Role',
    's_mypage.role_position',
    '职责／角色',
    '職責／角色',
    '役職/役割',
    'Vai trò',
  ],
  the_language_you_set_applies_to_all_ringle_services_such_as_menus_content_and_notifications:
    [
      '설정하신 언어는 메뉴, 콘텐츠, 알림 등 모든 링글 서비스에 적용됩니다.',
      'The language you set applies to all Ringle services including menus, content, and notifications.',
      's_mypage.the_language_you_set_applies_to_all_ringle_services_such_as_menus_content_and_notifications',
      '您设定的语言将套用在菜单、内容、通知等Ringle的所有服务。',
      '您設定的語言將套用於選單、內容、通知等Ringle的所有服務。',
      '設定した言語はメニュー、コンテンツ、お知らせなどすべてのRingleサービスに適用されます。',
      'Ngôn ngữ cài đặt sẽ áp dụng cho tất cả các dịch vụ của Ringle bao gồm menu, nội dung, và thông báo.',
    ],
  are_you_sure_you_want_to_logout_: [
    '로그아웃 하시겠습니까?',
    'Are you sure you want to logout?',
    's_mypage.are_you_sure_you_want_to_logout_',
    '确定退出吗?',
    '確定要登出嗎？',
    'ログアウトしますか？',
    'Bạn có chắc muốn thoát ra?',
  ],
  notification_preferences: [
    '알림 수신 정보',
    'Notification Settings',
    's_mypage.notification_preferences',
    '通知接收信息',
    '通知接收資訊',
    '通知受信情報',
    'Cài đặt thông báo',
  ],
  app_push: [
    '앱 푸시',
    'Push notification',
    's_mypage.app_push',
    'APP推送通知',
    'APP推播通知',
    'アプリプッシュ通知',
    'Thông báo điện thoại',
  ],
  notification_time_up_to_2_: [
    '알림 시간 (2개까지 설정 가능)',
    'Notification Time (Up to 2)',
    's_mypage.notification_time_up_to_2_',
    '通知时间（最多可设定2个）',
    '通知時間（最多可設定2個）',
    '通知時間 (2つまで設定可能)',
    'Thời gian thông báo (Tối đa 2)',
  ],
  _hour_before_lesson_starts: n => [
    `${n}시간 전`,
    `${n} hour before lesson`,
    's_mypage._hour_before_lesson_starts',
    `${n}小时前`,
    `${n}小時前`,
    `${n}時間前`,
    `${n} giờ trước buổi học`,
  ],
  not_selected: [
    '선택하지 않음',
    'Not selected',
    's_mypage.not_selected',
    '未选择',
    '未選擇',
    '未選択',
    'Không được chọn',
  ],
  basic_info: [
    '기본 정보',
    'Basic Info',
    's_mypage.basic_info',
    '基本资料',
    '基本資料',
    '基本情報',
    'Thông tin cơ bản',
  ],
  app_version: [
    '앱 버전',
    'App version',
    's_mypage.app_version',
    'APP版本',
    'APP版本',
    'アプリ版',
    'Phiên bản ứng dụng',
  ],
  _1_1_lesson_reminders: [
    '1:1 수업 리마인더',
    'Lesson Reminders',
    's_mypage._1_1_lesson_reminders',
    '1:1课程备忘录',
    '1:1課程備忘錄',
    '1:1レッスンリマインダー',
    'Nhắc buổi học',
  ],
  ringle_email: [
    '링글 가입 계정 이메일',
    'Email (Ringle account)',
    's_mypage.ringle_email',
    'Ringle注册账户电子邮箱',
    '註冊Ringle帳戶的電子信箱',
    'Ringle登録アカウントのメールアドレス',
    'Email (Tài khoản Ringle)',
  ],
  email2: [
    '추가 이메일',
    'Secondary email',
    's_mypage.email2',
    '其他电子邮箱',
    '其他電子信箱',
    '追加メールアドレス',
    'Email phụ',
  ],
  choose_email: [
    '알람 수신용 이메일을 입력하세요.',
    'Please enter email for notifications.',
    's_mypage.choose_email',
    '请输入接收通知的电子邮箱。',
    '請輸入接收通知的電子信箱。',
    '通知受信用のメールアドレスを入力してください。',
    'Nhập email để nhận thông báo.',
  ],
  can_only_change_email2: [
    '링글 가입 계정 이메일은 변경되지 않으며, 알림 수신 이메일만 변경됩니다.',
    "We'll send any notifications to this email. Your sign in (account) email won't change.",
    's_mypage.can_only_change_email2',
    'Ringle注册账户电子邮箱不会变，但接收通知的电子邮箱会变。',
    '註冊Ringle帳戶的電子信箱將不變動，僅變更接收通知的電子信箱。',
    'Ringle登録アカウントのメールアドレスは変更されず、通知受信メールアドレスのみ変更されます。',
    'Chúng tôi gửi bất kì thông báo nào đến email này. Email đăng nhập (tài khoản) của bạn không đổi.',
  ],
  timezone: [
    '타임존을 검색하세요',
    'Search Time zone',
    's_mypage.timezone',
    '请搜寻时区',
    '請搜尋時區',
    'タイムゾーンを検索してください',
    'Tìm Múi giờ',
  ],
  reminder: {
    channel: [
      '알림 채널',
      'Notification Channel',
      's_mypage.reminder.channel',
      '通知频道',
      '通知頻道',
      'お知らせチャンネル',
      'Kênh thông báo',
    ],
  },
  empty_notice: [
    '등록되어 있는\n공지사항이 없습니다.',
    'No updates available',
    's_mypage.empty_notice',
    '无已登记的\n公告。',
    '無登錄的\n公告事項。',
    '登録されている\nお知らせはありません。',
    'Không có cập nhật nào',
  ],
  email_us: [
    '이메일 보내기',
    'Email us',
    's_mypage.email_us',
    '联系邮箱',
    '客服信箱',
    'メールでお問い合わせ',
    'Email cho chúng tôi',
  ],
  email_us_desc: [
    '이메일 설명',
    'If you need help, please contact us via contact@ringleplus.com',
    's_mypage.email_us_desc',
    '如果您需要帮助，请联系contact@ringleplus.com',
    '如需協助，請洽詢contact@ringleplus.com。',
    'ご質問やサポートが必要な方はcontact@ringleplus.comまでご連絡ください。',
    'Nếu cần hỗ trợ, liên hệ với chúng tôi qua contact@ringleplus.com',
  ],
  copy_email: [
    '이메일 복사',
    'Copy email address',
    's_mypage.copy_email',
    '复制邮箱地址',
    '複製電子信箱',
    'メールアドレスをコピーする',
    'Copy địa chỉ email',
  ],
  invite: {
    title_1: [
      '친구 초대 이벤트',
      'INVITE & EARN',
      's_mypage.invite.title_1',
      '邀请朋友活动',
      '邀請朋友活動',
      '友達招待イベント',
      'MỜI & NHẬN THƯỞNG',
    ],
    title_2: [
      '링글을 추천하면',
      'Invite your friends to Ringle',
      's_mypage.invite.title_2',
      '推荐Ringle',
      '推薦Ringle',
      'Ringleをご紹介いただくと',
      'Mời bạn bè học Ringle',
    ],
    title_3: points => [
      `${points} 포인트 드려요!`,
      `& Earn ${points} points!`,
      's_mypage.invite.title_3',
      `就送${points}P！`,
      `就送${points}P！`,
      `${points}ポイント差し上げます!`,
      `& Nhận ${points} điểm thưởng!`,
    ],
  },
};
export const s_invite = {
  recommender_count: [
    '어제 추천한 링글러의 수',
    'Ringlers who referred their friends',
    's_invite.recommender_count',
    '昨天推荐的Ringler人数',
    '昨天推薦的Ringler人數',
    '昨日までに招待したRingler',
    'Những học viên Ringle đã giới thiệu bạn bè',
  ],
  recommendee_count: [
    '어제 추천으로 가입한 링글러의 수',
    'Ringlers who signed up with referral',
    's_invite.recommendee_count',
    '昨天因推荐而注册的Ringler人数',
    '昨天因推薦而註冊的Ringler人數',
    '昨日までに会員登録したRingler',
    'Học viên Ringle đã đăng ký qua giới thiệu',
  ],
  people: ['명', 'People', 's_invite.people', '名', '名', '名', 'người'],
  total: [
    '총 누적',
    'Total',
    's_invite.total',
    '一共累积',
    '一共累積',
    '累計',
    'Tổng cộng',
  ],
  total_used: [
    '총 사용',
    'Total Used',
    's_invite.total_used',
    '一共使用',
    '一共使用',
    '合計使用',
    'Tổng số lần sử dụng',
  ],
  precaution_list: [
    `초대받은 친구가 18만 원 이상 패키지를 구매하고, 첫 정규 수업 완료 시 5만 포인트가 최대 3회까지 제공되고, 그 이후 3만 포인트가 최대 7회, 그 다음에는 1만 포인트가 지급됩니다.\n
제공된 포인트는 [내 페이지 > 포인트]에서 확인 가능합니다\n
초대받은 친구가 정규 수강을 할 시 제공되는 포인트만 선물로 교환 가능하며, 교환한 상품은 월 말에 일괄 처리하여 배송됩니다.\n
기타 문의는 링글 홈페이지 내 채널톡 또는 카카오톡채널 @Ringle로 문의 바랍니다.`,
    `Points are awarded when the actual purchase made by the invitee exceeds $155.17. You'll earn $43.10P per invitee on first 3 friends, $25.86P per invitee on the next 4 friends, and receive $8.62P per invitee thereafter. \n
You can view your points under My Account.\n
Only Points earned through referrals can be exchanged for gift cards. The exchanged gifts will be shipped to you at the end of the month.\n
If you have further questions, please contact us.`,
    's_invite.precaution_list',
    `受邀的朋友购买18万韩元以上大礼包并且完成首次正规课程时，将最多累积3次$43.1积分，之后陆续最多累积7次$25.86积分和$8.62积分。\n
 可在[我的页面 > 点数]确认累积的积分数。\n
 受邀的朋友进行正规课程时所积累的积分，可按积分数换成礼物，换好的商品将在月末统一进行邮寄。\n
如有其他疑問請利用Ringle首頁的聊天或KakaoTalk頻道@ringle諮詢。`,
    `受邀的朋友購買$164以上的禮包，並完成首次正規課程時，發送$43.10P最多3次，之後發送$25.86P最多7次，接著發送$8.62P。\n
可於[我的頁面 > 點數]確認發送的點數。\n
受邀的朋友進行正規課程時所發送的點數僅可兌換禮物，兌換的商品將於月底一併處理配送。\n
如有其他疑問，請利用Ringle網頁的聊天或KakaoTalk頻道@Ringle諮詢。`,
    `紹介された友達が$164以上のパッケージを購入して、初めて正規レッスンを完了すると$43.10ポイントが最大3回まで付与され、それ以降$25.86ポイントが最大7回、その次には$8.62ポイントが付与されます。\n
付与されたポイントは[マイページ > ポイント]から確認可能です。\n
紹介された友達が正規レッスンを受講する場合に付与されるポイントのみギフトと交換可能で、交換した商品は月末に一括送信されます。\n
その他のお問い合わせは、Ringleホームページ内のチャネルトークまたはカカオトークチャンネル @Ringleにお問い合わせください。`,
    `Điểm được thưởng khi người bạn mời thực hiện thanh toán từ $164. Bạn sẽ nhận được $43.10 điểm/người cho 3 người bạn đầu tiên, $25.86 điểm/người cho 7 người tiếp theo, và nhận $8.62 điểm/người cho những người sau. \n
Bạn có thể xem điểm của mình dưới phần Tài khoản của tôi.\n
Chỉ những điểm có được thông qua việc giới thiệu có thể đổi để lấy mã quà tặng. Quà đổi được sẽ gửi đến bạn vào cuối tháng.\n
Nếu bạn có bất kì câu hỏi nào, vui lòng liên hệ với chúng tôi.`,
  ],
  doc: {
    saved_clipboard: [
      '초대링크가 복사되었습니다.\n원하시는 곳에 복사하여 붙여 넣어주세요.',
      'Invitation link copied to your clipboard.',
      's_invite.doc.saved_clipboard',
      '邀请链接复制成功，\n请复制并粘贴到您所需的地方。',
      '邀請連結複製成功，\n請於想要的地方複製貼上。',
      '紹介リンクがコピーされました。\n好きなところにCopy & Pasteしてください。',
      'Link mời của bạn đã được sao chép vào clipboard.',
    ],
  },
  body_header: {
    title: [
      '친구추천 이벤트',
      'Referral event',
      's_invite.body_header.title',
      '好友推荐活动',
      '推薦朋友活動',
      '友達紹介イベント',
      'Sự kiện giới thiệu',
    ],
    subheader: [
      <>
        친구를 초대하고{'\n'}
        최대 36만 원+α 선물 받으세요!
      </>,
      <>
        Invite your friends{'\n'}
        and earn up to $310.34!
      </>,
      's_invite.body_header.subheader',
      <>
        邀请朋友{'\n'}
        最多领取$310.34+α礼物！
      </>,
      <>
        邀請朋友{'\n'}
        最多領取$310.34+α禮物！
      </>,
      <>
        友達を紹介して{'\n'}
        最大$310.34+αのプレゼントを受け取りましょう！
      </>,
      <>
        Mời bạn bè {'\n'}
        và nhận đến $310.34!
      </>,
    ],
    invite_desc: [
      '10초만에 친구를 초대해 보세요!',
      'Invite your friend to Ringle in 10 seconds!',
      's_invite.body_header.invite_desc',
      '仅花10秒即可邀请朋友加入！',
      '只花10秒邀請朋友吧！',
      '10秒で友達を紹介してみましょう！',
      'Mời bạn học Ringle chỉ trong 10 giây!',
    ],
    button: [
      '친구에게 초대장 보내기',
      'Send Invitation',
      's_invite.body_header.button',
      '向朋友发送邀请函',
      '向朋友發送邀請函',
      '友達に招待状を送る',
      'Gửi lời mời',
    ],
  },
  banner: {
    my_code: [
      '내 코드',
      'My Code',
      's_invite.banner.my_code',
      '我的代码',
      '我的代碼',
      'マイコード',
      'Mã của tôi',
    ],
  },
  precaution_title: [
    '유의사항',
    'Terms',
    's_invite.precaution_title',
    '注意事项',
    '注意事項',
    '注意事項',
    'Điều khoản',
  ],
  footer: {
    copy: [
      '링크 복사하기',
      'Copy link',
      's_invite.footer.copy',
      '复制链接',
      '複製連結',
      'リンクをコピーする',
      'Sao chép link',
    ],
    invite: [
      '초대장 보내기',
      'Invite a friend',
      's_invite.footer.invite',
      '邀请朋友',
      '邀請朋友',
      '友達を招待する',
      'Mời một người bạn',
    ],
  },
  invite: {
    title_1: [
      '‘똑똑한 영어’를 선물하는 방법',
      'Share the smartest way to improve English fluency',
      's_invite.invite.title_1',
      '贈送‘智慧型英语’的方法',
      '贈送「智慧型英語」的方法',
      '「賢い英語」をプレゼントする方法',
      'Chia sẻ bạn bè cách học tiếng Anh thông minh',
    ],
    title_2: [
      '링글을 친구에게',
      'Invite Your Friends',
      's_invite.invite.title_2',
      '请向朋友',
      '請向朋友',
      'Ringleをお友達に',
      'Mời bạn bè',
    ],
    title_3: [
      '소개해 주세요!',
      'to Ringle!',
      's_invite.invite.title_3',
      '介绍Ringle',
      '介紹Ringle',
      '紹介してください。',
      'học Ringle',
    ],
    point: [
      '50,000 P',
      '$42 Points',
      's_invite.invite.point',
      '$42 P',
      '$42 P',
      '$42 P',
      '$42 Điểm',
    ],
    point_title: [
      '영어 지원금',
      'Gift Card',
      's_invite.invite.point_title',
      '英语奖励金额',
      '英語鼓勵金',
      'ギフトカード',
      'Thẻ quà tặng',
    ],
    benefit_1_title: [
      '초대장을 받은 친구는',
      'When your friend signs up with your invite code',
      's_invite.invite.benefit_1_title',
      '收到邀请函',
      '收到邀請函的朋友',
      '招待状を受け取り',
      'Khi bạn của bạn đăng ký bằng mã mời của bạn',
    ],
    benefit_1_title_2: points => [
      `회원 가입하면 ${points}P를 받아요`,
      `they’ll receive ${points} points`,
      's_invite.invite.benefit_1_title_2',
      `注册会员时可领取${points}P`,
      `註冊會員時，可領取${points}P。`,
      `会員登録すると${points}Pもらえます。`,
      `họ sẽ nhận được ${points}P`,
    ],
    benefit_1_desc: benefitPrice => [
      `(${benefitPrice} 이상 수업권 결제 시, 즉시 할인 가능)`,
      `(Can be applied towards purchases over ${benefitPrice})`,
      's_invite.invite.benefit_1_desc',
      `购买${benefitPrice}以上的课程劵时可立即获得优惠`,
      `（購買${benefitPrice}以上的課程券時，可立即享折扣。）`,
      `(購入額${benefitPrice}以上の決済時に適用されます)`,
      `(Có thể áp dụng cho lần thanh toán trên ${benefitPrice})`,
    ],
    benefit_2_title: [
      '친구가 첫 수업을 완료하면',
      'When your friend completes the first purchased lesson',
      's_invite.invite.benefit_2_title',
      '朋友完成首次课程时',
      '朋友完成首次課程時，',
      '招待した友達が最初のレッスンを完了すると',
      'Khi bạn của bạn hoàn thành buổi học đã thanh toán đầu tiên',
    ],
    benefit_2_title_2: points => [
      `나도 ${points}P를 받아요`,
      `you'll earn ${points} points`,
      's_invite.invite.benefit_2_title_2',
      `您也可领取${points}P`,
      `您也可領取${points}P。`,
      `あなたにも${points}P付与されます。`,
      `bạn nhận được ${points}P`,
    ],
    benefit_2_desc: [
      '(SSG, 스타벅스 상품권, 링글 수업권 교환 가능)',
      '(Can be exchanged to Ringle credits)',
      's_invite.invite.benefit_2_desc',
      '（可兑换新世界商品劵，星巴克饮料劵，Ringle课程劵）',
      '（可兌換新世界商品券、星巴克飲料券、Ringle課程券）',
      '(Ringleレッスンチケットに交換可)',
      '(Có thể đổi lấy thẻ học Ringle)',
    ],
    benefit_1_caption: [
      '*회원 가입 기준: ‘본인 인증’ 완료',
      '*Must complete identity verification to sign up',
      's_invite.invite.benefit_1_caption',
      '*注册会员标准：完成‘本人认证’',
      '*註冊會員標準：完成「身分驗證」',
      '*会員登録には本人認証が必要です',
      '*Phải hoàn thành xác minh danh tính để đăng ký',
    ],
    benefit_2_caption: benefitPrice => [
      `*첫 수업 기준: ‘${benefitPrice} 이상’ 유료 수업 완료`,
      `*First purchased lesson must be from a package over ${benefitPrice}`,
      's_invite.invite.benefit_2_caption',
      `首次课程标准：完成‘${benefitPrice}以上’付费课程`,
      `*首次課程標準：完成「${benefitPrice}以上」付費課程`,
      `*初回レッスンとは、${benefitPrice}以上の購入されたパックを指します。`,
      `*Gói học thanh toán đầu tiên phải trị giá hơn ${benefitPrice}`,
    ],
    promotion: [
      '신년 프로모션 최대 혜택',
      'The Biggest New Year Offer',
      's_invite.invite.promotion',
      '新年宣传活动最高优惠',
      '新年宣傳活動最高優惠',
      'お正月キャンペーン最大特典',
      'Ưu đãi năm mới lớn nhất',
    ],
    month_benefit: month => [
      `${month}월 친구초대 최대 혜택`,
      `${month} Invite & Earn Offer`,
      's_invite.invite.month_benefit',
      `${month}月邀请朋友最高优惠`,
      `${month}月邀請朋友最高優惠`,
      `${month}月の友達招待最大特典`,
      `Tháng ${month} Mời & nhận thưởng`,
    ],
    copy_link: [
      '링크 복사',
      'Copy Link',
      's_invite.invite.copy_link',
      '复制链接',
      '複製連結',
      'リンクをコピー',
      'Sao chép Link',
    ],
    btn: [
      '초대장 보내기',
      'Invite Friends',
      's_invite.invite.btn',
      '发送邀请函',
      '發送邀請函',
      '招待状を送る',
      'Mời bạn bè',
    ],
    guide_title: [
      '꼭 읽어주세요!',
      'Please read the terms!',
      's_invite.invite.guide_title',
      '必读！',
      '必讀！',
      '必ずお読みください。',
      'Vui lòng đọc điều khoản!',
    ],
    guide_1: [
      '- 신규 회원 가입한 대상에게만 포인트가 제공됩니다.',
      '- Points will be provided only for new Ringle students.',
      's_invite.invite.guide_1',
      '积分只提供给新注册的会员',
      '- 僅提供新註冊會員的學生點數。',
      '- 新規会員登録した方のみを対象にポイントが付与されます。',
      '- Điểm chỉ dành cho học viên mới.',
    ],
    guide_2: (benefitPrice, points) => [
      `- 포인트는 초대받은 친구에게는 가입 즉시 지급, 나에게는 친구가 실결제가 ${benefitPrice} 이상 수업권 구매 후, 첫 수업을 완료하는 시점에 지급됩니다.`,
      `- Your friend will earn ${points} points right after they sign up. You will earn ${points} points when your friend completes the first lesson of the credits priced over ${benefitPrice}.`,
      's_invite.invite.guide_2',
      `当受邀的朋友注册时，我们会立刻发送积分给朋友。当朋友实际付款购买${benefitPrice}以上的课程并完成首次课程时，我们将发送积分给您。`,
      `- 當受邀的朋友註冊時，我們將立即發送點數給朋友。當朋友實際付款購買${benefitPrice}以上的課程券並完成首次課程時，我們將發送點數給您。`,
      `- 招待された友達は会員登録するとその場で${points}ポイントが付与されます。あなた(招待者)は、友達が購入額${benefitPrice}以上のレッスンチケットを購入し初めてのレッスンを完了した時点で${points}ポイントが付与されます。`,
      `- Bạn của bạn sẽ nhận được ${points} điểm ngay khi đăng ký. Bạn sẽ nhận được ${points} điểm khi bạn của bạn hoàn thành buổi học đầu tiên trong gói học trị giá hơn ${benefitPrice}.`,
    ],
    guide_3: (firstPoints, secondPoints) => [
      `- 친구초대 혜택은 매월 1명까지 ${firstPoints}포인트, 이후 ${secondPoints}포인트가 제공됩니다`,
      `- The ${firstPoints} referral points will be provided once a month. Then, earn ${secondPoints} points for each additional friend.`,
      's_invite.invite.guide_3',
      `每月邀请1名朋友时提供${firstPoints}P，之后提供${secondPoints}P。`,
      `- 每月邀請1名朋友時提供${firstPoints}P，之後提供${secondPoints}P。`,
      `- 友達招待特典の${firstPoints}ポイントは毎月1人分までとし、以降${secondPoints}ポイントが付与されます`,
      `- ${firstPoints} điểm giới thiệu sẽ được nhận một lần mỗi tháng. Mỗi người bạn mới bạn sẽ nhận thêm ${secondPoints} điểm.`,
    ],
    guide_4: [
      '- 제공받은 친구초대 포인트는 링글 수업권으로 교환할 수 있습니다.',
      '- Referral points can be exchanged to Ringle credits.',
      's_invite.invite.guide_4',
      '领取的邀请朋友积分可兑换Ringle课程劵。',
      '- 可使用領取的邀請朋友點數兌換Ringle課程券。',
      '- 友達招待ポイントはRingleレッスンチケットに交換できます。',
      '- Điểm giới thiệu có thể đổi lấy thẻ học Ringle.',
    ],
    guide_5: [
      '- 본인 계정 중복 초대 등 비정상적인 참여로 판단 될 시 포인트가 지급되지 않거나 회수될 수 있습니다.',
      '- Abnormal participation such as inviting duplicate accounts may result in no points or points cancellation.',
      's_invite.invite.guide_5',
      '若发现账户重复邀请等非正当参与行为时，将不会发送积分或撤回积分。',
      '- 判斷帳戶重複邀請等異常參與時，將可能不發送點數或撤回。',
      '- 同一人物の重複招待など不適切な会員登録が判明した場合、ポイントの付与対象外となる又は没収されることがあります。',
      '- Những bất thường như mở tài khoản trùng lặp sẽ không nhận dược điểm hoặc bị hủy điểm.',
    ],
    message_title: [
      '당신의 친구가 영미권 명문대 튜터와의 1:1 화상영어 링글을 추천합니다.',
      'Your friend has invited you to Ringle, the smartest way to improve your English with tutors from top universities',
      's_invite.invite.message_title',
      '邀请朋友—您的朋友向您推荐和英美名校教师一起进行的1：1线上英语 Ringle.',
      '邀請朋友 – 您的朋友推薦您與英美名校任課教師一起進行的1:1視訊英語—Ringle。',
      'あなたの友達からRingleの招待状が届きました。英米名門校出身のチューターと1対1で英語を学んでみませんか。',
      'Bạn của bạn gửi lời mời học cùng Ringle, cách học tiếng Anh thông minh cùng những gia sư đến từ các trường đại học hàng đầu',
    ],
    message_desc: [
      '비즈니스 영어, 인터뷰, MBA \u000b에세이, 프레젠테이션까지 한번에',
      'For Business English, Interviews, Essays, Presentations, and more',
      's_invite.invite.message_desc',
      '商务英语，面试，MBA，发表，应有尽有',
      `從商務英語、面試、MBA
申論至報告，應有盡有！`,
      'ビジネス英語、インタビュー、MBAエッセイ、プレゼンテーションまで一度に',
      'Dành cho Tiếng Anh thương mại, phỏng vấn, bài luận, Thuyết trình và nhiều chương trình khác',
    ],
    message_btn: points => [
      `${points}P 받고 시작하기`,
      `Sign up & Earn ${points}P`,
      's_invite.invite.message_btn',
      `领取${points}P后，开始学习`,
      `領取${points}P後，開始學習`,
      `会員登録して${points}ポイントをもらう`,
      `Đăng ký & nhận ${points} điểm thưởng`,
    ],
    share_message_title: [
      '친구 초대 – 당신의 친구가 영미권 명문대 튜터와의 일대일 화상영어 링글을 추천합니다.',
      'Your friend has invited you to Ringle, the smartest way to improve your English with tutors from top universities',
      's_invite.invite.share_message_title',
      '邀请朋友—您的朋友向您推荐和英美名校教师一起进行的1：1线上英语 Ringle.',
      '邀請朋友 – 您的朋友推薦您與英美名校任課教師一起進行的1:1視訊英語—Ringle。',
      'あなたの友達からRingleの招待状が届きました。英米名門校出身のチューターと1対1で英語を学んでみませんか。',
      'Bạn của bạn gửi lời mời học cùng Ringle, cách học tiếng Anh thông minh cùng những gia sư đến từ các trường đại học hàng đầu',
    ],
    share_message_desc_1: points => [
      `이 초대장으로 가입하면 \u000b바로 ${points}P를 드려요!`,
      `Sign up with this link and and earn ${points} points!`,
      's_invite.invite.share_message_desc_1',
      `通过这张邀请函注册会员立刻赠送${points}P!`,
      `透過這封邀請函註冊會員，就送您$${points}P!`,
      `この招待状から会員登録いただくと、その場で${points}Pをご進呈！`,
      `Đăng ký qua link này và nhận ${points} điểm thưởng!`,
    ],
    share_message_desc_2: [
      '비즈니스 영어, 인터뷰, MBA 에세이, 프레젠테이션까지 한번에',
      'For Business English, Interviews, Essays, Presentations, and more',
      's_invite.invite.share_message_desc_2',
      '商务英语，面试，MBA，发表，应有尽有',
      `從商務英語、面試、MBA
申論至報告，應有盡有！`,
      'ビジネス英語、インタビュー、MBAエッセイ、プレゼンテーションまで一度に',
      'Dành cho Tiếng Anh thương mại, phỏng vấn, bài luận, Thuyết trình và nhiều chương trình khác',
    ],
    share_message_desc_3: [
      '링글, 지금 시작해 보세요.',
      'Sign up & start learning!',
      's_invite.invite.share_message_desc_3',
      '现在开始使用Ringle吧！',
      '現在就開始Ringle吧！',
      'Ringle, いますぐ学びはじめよう！',
      'Đăng ký & bắt đầu học!',
    ],
  },
};
export const s_trial = {
  free_trial_lesson: [
    '체험 수업',
    'Free Trial Lesson',
    's_trial.free_trial_lesson',
    '体验课程',
    '體驗課程',
    '体験レッスン',
    'Buổi học thử miễn phí',
  ],
  phone_number: [
    '휴대폰 번호',
    'Phone Number',
    's_trial.phone_number',
    '手机号码',
    '手機號碼',
    '携帯電話番号',
    'Số điện thoại',
  ],
  input_verification_code: [
    '인증 번호 입력',
    'Enter verification code',
    's_trial.input_verification_code',
    '输入验证码',
    '輸入驗證碼',
    '認証コード入力',
    'Nhập mã xác minh',
  ],
  header: [
    '20분 무료 체험 수업 신청',
    'Free 20-min Trial Lesson',
    's_trial.header',
    '申请20分钟免费体验课程',
    '申請20分鐘免費體驗課程',
    '20分無料体験レッスン予約',
    '20 phút học thử miễn phí',
  ],
  desc: [
    '무료 체험 수업은 시간과 교재 선택이 제한적일 수 있습니다. 체험없이 구매 시, 10,000원 추가 할인 및 최대 3회 추가 수업이 제공됩니다. (첫 수업 불만족 시 100% 환불 보장)',
    'Buy now without trial and get up to 3 lessons free (100% money-back guarantee)',
    's_trial.desc',
    '免费体验课程的时间和教材可能存在选择限制。未先体验直接购买时，将提供$8.62的额外折扣和及最多3次额外课程。（首次课程不满意时，可全额退款）',
    '免費體驗課程的時間與教材選擇上可能有限。未先體驗即購買時，提供$8.62額外折扣及最多3次額外課程。（首次課程不滿意時，可全額退款）',
    '無料体験レッスンは、時間と教材選択が制限されることがあります。体験なしで購入時、$8.62追加割引および最大3回追加レッスンが提供されます。(初回レッスン後にご満足いただけない場合、全額返金)',
    `Mua ngay không cần học thử miễn phí
và nhận tới 3 buổi học miễn phí (cam kết hoàn tiền 100%)`,
  ],
  time: [
    '시간 선택',
    'Select time',
    's_trial.time',
    '选择时间',
    '選擇時間',
    '時間選択',
    'Chọn giờ',
  ],
  time_desc: [
    '시간은 수업 시작 24시간 전까지 변경하실 수 있습니다.',
    'You can reschedule up to 24 hours before the lesson.',
    's_trial.time_desc',
    '最晚可在课程开始24小时前修改时间。',
    '最晚可於課程開始24小時前變更時間。',
    '時間はレッスン開始24時間前まで変更することができます。',
    'Bạn có thể dời lịch tối thiểu 24 giờ trước buổi học.',
  ],
  time_sub_desc: [
    '무료 체험 수업은 각 시간대에서 선착순으로 제공되고 있기 때문에 시간 선택이 제한적일 수 있습니다.',
    '',
    's_trial.time_sub_desc',
    '由于每个时区均以先到先得的方式提供免费试听课程，因此在选择时间使会有所限制。',
    '免費體驗課程為各時段先搶先贏，時間選擇上可能有限。',
    '無料体験レッスンは各時間帯に先着順で提供されるため、時間選択が制限されることがあります。',
    '',
  ],
  timezone: [
    '타임존',
    'Time zone',
    's_trial.timezone',
    '时间区',
    '時區',
    'タイムゾーン',
    'Múi giờ',
  ],
  choose_date: [
    '날짜 선택',
    'Select date',
    's_trial.choose_date',
    '选择日期',
    '選擇日期',
    '日付選択',
    'Chọn ngày',
  ],
  choose_date_placeholder: [
    '날짜를 선택해주세요',
    'Please select date',
    's_trial.choose_date_placeholder',
    '请选择日期',
    '請選擇日期',
    '日付を選択してください。',
    'Vui lòng chọn ngày',
  ],
  material: [
    '20분 무료 체험 수업 신청',
    'Free 20-min Trial Lesson',
    's_trial.material',
    '申请20分钟免费体验课程',
    '申請20分鐘免費體驗課程',
    '20分無料体験レッスン予約',
    '20 phút học thử miễn phí',
  ],
  material_desc: [
    '수업에서 튜터와 다룰 교재는 수업 시작 24시간 전까지 변경하실 수 있습니다.',
    'You can change materials up to 24 hours before the lesson.',
    's_trial.material_desc',
    '最晚可在课程开始24小时前变更任课教师及教材。',
    '最晚可於課程開始24小時前變更上課時要於任課教師進行的教材。',
    'レッスンでチューターと扱う教材は、レッスン開始24時間前まで変更できます。',
    'Bạn có thể đổi tài liệu tối thiểu 24 giờ trước buổi học.',
  ],
  not_opened: max => [
    `체험 수업 시, 각 주제마다
가장 인기 있는 교재 ${max}개가 제공됩니다.
정규 수업 시, 950개 이상 교재를
자유롭게 무료로 이용 가능합니다.`,
    `Choose from top ${max} materials
from each category. 
Paid lessons give you access 
to all of our 950+ materials.`,
    's_trial.not_opened',
    `进行体验课程时，将提供各主题最受欢迎的${max}个教材${max}。
 进行正规课程时，可自由利用950个以上的免费教材。`,
    `進行體驗課程時，將提供各主題最受歡迎的${max}個教材${max}。
進行正規課程時，可自由利用950個以上的免費教材。`,
    `体験レッスン時、テーマごとに
最も人気のある教材${max}個が提供されます。
正規レッスン時、950個以上の教材を
自由に無料で利用可能です。`,
    `Chọn từ top ${max} tài liệu
trong mỗi phần. 
Buổi học đã thanh toán cho bạn quyền truy cập tới 950+ tài liệu của chúng tôi.`,
  ],
  phone_auth: [
    '휴대폰 인증',
    'Verify Phone Number',
    's_trial.phone_auth',
    '手机认证',
    '手機驗證',
    'SMS認証',
    'Xác minh số điện thoại',
  ],
  phone_auth_desc: [
    '체험 수업 신청 마지막 단계입니다. 인증 중 문제가 발생하면 내 페이지>고객센터>문의하기로 연락해주세요.',
    "If you're having trouble with this step, please contact us.",
    's_trial.phone_auth_desc',
    '是申请体验课程的最后步骤。如验证途中出现问题，请通过我的页面>客服中心>咨询并联系我们。',
    '為申請體驗課程的最後步驟。如驗證途中出現問題，請透過我的頁面>客服中心>諮詢聯絡我們。',
    '無料体験レッスン予約の最終ステップです。認証中に問題が発生した場合は、マイページ>カスタマーセンター>お問い合わせからご連絡ください。',
    'Nếu bạn gặp phải vấn đề ở bước này, vui lòng liên hệ chúng tôi.',
  ],
  request_verification_code: [
    '인증 요청',
    'Request Code',
    's_trial.request_verification_code',
    '申请认证',
    '傳送驗證碼',
    '認証リクエスト',
    'Yêu cầu mã',
  ],
  authorized: [
    '인증 완료',
    'Verified',
    's_trial.authorized',
    '验证成功',
    '驗證成功',
    '認証完了',
    'Đã xác minh',
  ],
  cur_state: [
    '체험 수업 신청 정보',
    'Your Trial Lesson',
    's_trial.cur_state',
    '体验课程申请信息',
    '體驗課程申請資訊',
    '体験レッスン予約情報',
    'Buổi học thử của bạn',
  ],
  time_no: [
    '시간 선택되지 않음',
    'Select date & time',
    's_trial.time_no',
    '未选择时间',
    '未選擇時間',
    '時間未選択',
    'Chọn & giờ',
  ],
  material_no: [
    '교재 선택되지 않음',
    'Select materials',
    's_trial.material_no',
    '未选择教材',
    '未選擇教材',
    '教材未選択',
    'Chọn Tài liệu',
  ],
  auth_no: [
    '번호 인증되지 않음',
    'Verify phone number',
    's_trial.auth_no',
    '号码未被认证',
    '未驗證號碼',
    '携帯電話番号未認証',
    'Xác minh số điện thoại',
  ],
  done: [
    '체험 수업 신청 완료',
    'Submit',
    's_trial.done',
    '体验课程申请成功',
    '體驗課程申請完成',
    '体験レッスン予約完了',
    'Gửi',
  ],
  buy_now: [
    '무료 체험 수업 없이 바로 구매하기',
    'Buy now',
    's_trial.buy_now',
    '未进行免费体验课程便购买',
    '未進行免費體驗課程便購買',
    '無料体験レッスンなしですぐに購入する。',
    'Mua ngay',
  ],
  change: [
    '변경하기',
    'Edit',
    's_trial.change',
    '更改',
    '變更',
    '変更する',
    'Chỉnh sửa',
  ],
  choose_time: [
    '시간 선택',
    'Select time',
    's_trial.choose_time',
    '选择时间',
    '選擇時間',
    '時間選択',
    'Chọn giờ',
  ],
  free_topic: [
    <View sectionBody alignCenter>
      체험 수업에서는{' '}
      <View red header5>
        자유주제 수업을{'\n'} 신청할 수 없습니다.
      </View>
      {'\n'}
      정규 수업 시, 내가 원하는 주제로{'\n'} 토론 및 교정 수업을 진행할 수
      있습니다.
    </View>,
    <View sectionBody alignCenter>
      <View red header5>
        Free Topic{'\n'}
      </View>
      is only available for paid lessons.
    </View>,
    's_trial.free_topic',
    <View sectionBody alignCenter>
      进行体验课程时，{' '}
      <View red header5>
        无法申请{'\n'}自由主题。
      </View>
      {'\n'}
      进行正规课程时，能以自己希望的主题{'\n'}进行讨论与纠正课程。
    </View>,
    <View sectionBody alignCenter>
      進行體驗課程時，{' '}
      <View red header5>
        無法申請{'\n'}自由主題。
      </View>
      {'\n'}
      進行正規課程時，能以自己希望的主題{'\n'}進行討論與糾正課程。
    </View>,
    <View sectionBody alignCenter>
      体験レッスンでは{' '}
      <View red header5>
        自由テーマレッスンを{'\n'}予約することができません。
      </View>
      {'\n'}
      正規レッスンの際、あなたの好きなテーマで{'\n'}
      ディスカッションおよび校正レッスンを行うことができます。
    </View>,
    <View sectionBody alignCenter>
      <View red header5>
        Chủ đề tự do{'\n'}
      </View>
      chỉ có cho buổi học đã thanh toán.
    </View>,
  ],
  auth_placeholder: [
    '번호를 입력해주세요',
    'Enter Phone Number',
    's_trial.auth_placeholder',
    '请输入号码。',
    '請輸入號碼。',
    '携帯電話番号を入力してください。',
    'Nhập số điện thoại',
  ],
  auth_re: [
    '재발송',
    'Resend',
    's_trial.auth_re',
    '重新发送',
    '重新傳送',
    '再送信',
    'Gửi lại',
  ],
  material_done: [
    '교재 선택 완료',
    'Select materials',
    's_trial.material_done',
    '教材选择完毕',
    '教材選擇完畢',
    '教材選択完了',
    'Chọn Tài liệu',
  ],
  auth_done: [
    '번호 인증 완료',
    'Verify phone number',
    's_trial.auth_done',
    '号码验证成功',
    '號碼驗證成功',
    '携帯電話番号認証完了',
    'Xác minh số điện thoại',
  ],
  trial_info: [
    '체험 수업 신청 정보',
    'Your Trial Lesson',
    's_trial.trial_info',
    '体验课程申请信息',
    '體驗課程申請資訊',
    '体験レッスン予約情報',
    'Buổi học thử của bạn',
  ],
  half: [
    '20분',
    '20min',
    's_trial.half',
    '20分钟',
    '20分鐘',
    '20分',
    '20 phút',
  ],
  tutor: [
    '고객님께 적합한 튜터를 수업 시작 24시간 전까지 배정해 드립니다.',
    "We'll find the best tutor for you 24 hours before your lesson.",
    's_trial.tutor',
    '我们会在开课24小时前为您指派适合您的任课教师。',
    '最晚於課程開始24小時前為您分配合適的任課教師。',
    'お客様に適したチューターをレッスン開始24時間前までに割り当てします。',
    'Chúng tôi sẽ tìm gia sư tốt nhất cho bạn trong 24 giờ trước buổi học.',
  ],
  cancel_change: [
    '수업 취소 및 시간 및 교재 변경은 수업 시작 24시간 전까지 예정된 수업 페이지에서 가능합니다.',
    'You can reschedule or change materials up to 24 hours before the lesson.',
    's_trial.cancel_change',
    '最晚可于课程开始24小时前在预定的课程页面取消课程以及修改时间与教材。',
    '最晚可於課程開始24小時前於預定的課程頁面取消課程及變更時間與教材。',
    'レッスンのキャンセルおよび時間・教材の変更は、レッスン開始24時間前までにレッスン予定ページから可能です。',
    'Chúng tôi sẽ dời lịch hoặc đổi tài liệu tối thiểu 24 giờ trước buổi học.',
  ],
  inquiry: [
    '급한 사정으로 수업 시작 24시간 이내 일정 변경이 필요한 경우, 수업을 취소하시고 홈페이지의 [문의]를 통해 연락해주세요.',
    'If you must cancel less than 24 hours before the lesson, please contact us.',
    's_trial.inquiry',
    '如因紧急情况需要在课程开始后24小时内更改日程，请取消课程并通过网页【咨询】联系我们。',
    '於課程開始前24小時以內緊急需要變更日程時，請取消課程並透過首頁的[諮詢]聯絡我們。',
    '急な事情によりレッスン開始24時間以内の日程変更が必要な場合はレッスンをキャンセルし、ホームページの [お問い合わせ]からご連絡ください。',
    'Nếu bạn phải huỷ trong vòng 24 giờ trước buổi học, vui lòng liên hệ với chúng tôi.',
  ],
  check_before_lesson: [
    '수업 전 필수 확인 사항',
    'Before your lesson',
    's_trial.check_before_lesson',
    '课程开始前必须确认事项',
    '課程開始前必須確認事項',
    'レッスン前の必須確認事項',
    'Trước buổi học',
  ],
  need_to_zoom: [
    '줌(Zoom) 설치가 필요합니다.',
    'Please install Zoom.',
    's_trial.need_to_zoom',
    '需安装Zoom。',
    '需安裝Zoom。',
    'Zoomのインストールが必要です。',
    'Vui lòng cài đặt Zoom.',
  ],
  need_to_chrome: [
    '크롬 브라우저에서 최적화되어 되어 있습니다.',
    'Please use Google Chrome or Microsoft Edge.',
    's_trial.need_to_chrome',
    '建议使用优化的Chrome浏览器。',
    '建議使用Chrome瀏覽器，以獲得最佳瀏覽體驗。',
    'Chromeブラウザに最適化されています。',
    'Vui lòng sử dụng Google Chrome hoặc Microsoft Edge.',
  ],
  not_support_ie: [
    '*익스플로어 브라우저는 지원하지 않습니다.',
    '*Internet explorer not supported',
    's_trial.not_support_ie',
    '*不支持使用IE浏览器。',
    '*不支援IE瀏覽器。',
    '*Explorerブラウザには対応していません。',
    '*Không hỗ trợ Internet explorer',
  ],
  laptop: [
    '노트북 사용을 권장해드립니다.',
    'Please enter lesson on a web browser.',
    's_trial.laptop',
    '建议使用笔记本电脑。',
    '建議使用筆電。',
    'ノートパソコンの使用を推奨します。',
    'Vui lòng vào lớp bằng trình duyệt web.',
  ],
  material_ctgr: [
    '교재 선택',
    'Select materials',
    's_trial.material_ctgr',
    '选择教材',
    '選擇教材',
    '教材選択',
    'Chọn Tài liệu',
  ],
  you_have_already_requested: [
    '이미 체험신청이 완료되었습니다.',
    'You already booked your trial lesson.',
    's_trial.you_have_already_requested',
    '体验申请已完成。',
    '已完成體驗申請。',
    'すでに体験予約が完了しました。',
    'Bạn đã đặt lịch buổi học thử.',
  ],
  before_three_gray: [
    '(*수업 시작 24시간 이내 변경 및 취소 희망 시 오른쪽 하단 채널톡을 통해 연락 바랍니다.)',
    '(*If you need to reschedule or change materials in less than 24 hours before the lesson, please contact us.)',
    's_trial.before_three_gray',
    '（*课程开始前24小时内希望进行变更或取消时, 可通过右下方的在线咨询联系我们。）',
    '（*於課程開始前24小時以內希望變更或取消時，請透過右下方的聊天聯絡我們。）',
    '(*レッスン開始24時間以内に変更およびキャンセルをご希望の場合は、右下のチャネルトークよりご連絡ください。)',
    '(*Nếu bạn cần dời lịch hoặc đổi tài liệu trong 24 giờ trước buổi học, vui lòng liên hệ chúng tôi.)',
  ],
  enter_web: [
    '(PC / 노트북 사용 권장)',
    'Please enter via web browser',
    's_trial.enter_web',
    '（建议使用台式电脑／笔记本电脑）',
    '（建議使用桌上型電腦／筆電）',
    '(PC / ノートパソコンの使用推奨)',
    'Vui lòng vào bằng trình duyệt web.',
  ],
  ringle_guide: [
    '자세한 체험 수업 가이드를 확인하고 싶다면?',
    'See more: "How it works: Ringle Lessons',
    's_trial.ringle_guide',
    '如想查看详细的体验课程指南？',
    '如果想確認詳細的體驗課程指南？',
    '詳しい体験レッスンガイドを確認したいなら？',
    'Xem thêm: "Cách thức hoạt động: Buổi học Ringle',
  ],
  no_slot: [
    '신청 가능한 슬롯이 없습니다.',
    'There are no available times.',
    's_trial.no_slot',
    '无可申请的栏位。',
    '無可申請的欄位。',
    '予約可能な枠がありません。',
    'Không có thời gian trống.',
  ],
};
export const s_profile = {
  complete_your_profile_and_earn_10_000p_your_profile_will_help_your_tutor_to_tailor_your_lesson_:
    [
      <>
        프로필을 완성하고, <View color="rgb(211, 200, 252)">10,000P</View>를
        받으세요!{'\n'}튜터가 고객님을 위한 맞춤 수업을 하는데 도움이 됩니다.
      </>,
      <>
        Complete your profile and earn{' '}
        <View color="rgb(211, 200, 252)">8.6P!</View>
        {'\n'}Your profile will help your tutor tailor your lesson.
      </>,
      's_profile.complete_your_profile_and_earn_10_000p_your_profile_will_help_your_tutor_to_tailor_your_lesson_',
      <>
        请完成简介，领取<View color="rgb(211, 200, 252)">$8.62</View>的积分吧！
        {'\n'}这将有助于任课教师为您提供专用课程。
      </>,
      <>
        完成簡介，領取<View color="rgb(211, 200, 252)">$8.62P</View>吧！{'\n'}
        有助於任課教師為您提供客製化課程。
      </>,
      <>
        プロフィールを完成させて、<View color="rgb(211, 200, 252)">$8.62P</View>
        を 受け取りましょう！{'\n'}
        チューターがお客様のためのカスタマイズレッスンをするのに役立ちます。
      </>,
      <>
        Hoàn thành thông tin của bạn và nhận điểm{' '}
        <View color="rgb(211, 200, 252)">$8.6P!</View>
        {'\n'}Thông tin của bạn giúp gia sư điều chỉnh buổi học cho bạn.
      </>,
    ],
  complete_your_profile_and_earn_10_000p_your_profile_will_help_your_tutor_to_tailor_your_lesson:
    [
      <>
        프로필을 완성하면{' '}
        <View bold bgPrimary>
          10,000 포인트
        </View>
        를 드려요.
      </>,
      <>
        Complete your profile and get{' '}
        <View bold bgPrimary>
          8.6P!
        </View>
      </>,
      's_profile.complete_your_profile_and_earn_10_000p_your_profile_will_help_your_tutor_to_tailor_your_lesson',
      <>
        完成简介时将发送{' '}
        <View bold bgPrimary>
          $8.6P
        </View>
        积分。
      </>,
      <>
        完成簡介時將發送{' '}
        <View bold bgPrimary>
          $8.62P
        </View>
        。
      </>,
      <>
        プロフィールを完成させると{' '}
        <View bold bgPrimary>
          $8.62ポイント
        </View>
        を差し上げます。
      </>,
      <>
        Hoàn thành thông tin của bạn và nhận{' '}
        <View bold bgPrimary>
          $8.6 điểm!
        </View>
      </>,
    ],
  user_info_input: [
    '나와 수업하는 튜터에게만 공유됩니다.',
    'Only tutors can see your profile.',
    's_profile.user_info_input',
    '仅分享给我的任课教师。',
    '僅分享給我的任課教師。',
    '自分とレッスンをするチューターにだけ共有されます。',
    'Chỉ gia sư có thể xem thông tin của bạn.',
  ],
  user_info_input_desc: [
    '작성한 내 프로필은 맞춤 수업을 위해 해당 수업의 튜터만 확인 가능합니다. 수업 시작 전 공개되며, 수업 완료 후 확인이 불가합니다.',
    'Tutors can only see your profile before and during the lesson.',
    's_profile.user_info_input_desc',
    '为进行专用课程，学生的简介只有该课程的任课教师可以确认。将在课程开始前公开，课程结束后无法查看。',
    '為進行客製化課程，撰寫的簡介僅該課程的任課教師可確認。將於課程開始前公開，完成課程後無法確認。',
    '作成したマイプロフィールは、カスタマイズレッスンのためにそのレッスンのチューターのみ確認することができます。レッスン開始前に公開され、レッスン終了後は確認できません。',
    'Gia sư chỉ có thể xem thông tin của bạn trước và trong buổi học.',
  ],
  english_name: [
    '영어 이름',
    'English Name',
    's_profile.english_name',
    '英文名',
    '英文姓名',
    '氏名（英語）',
    'Tên Tiếng Anh',
  ],
  occupation: [
    '직업',
    'Occupation',
    's_profile.occupation',
    '职业',
    '職業',
    '職業',
    'Nghề nghiệp',
  ],
  purpose_of_usaing_ringle: [
    '링글 사용 목적',
    'Purpose of Using Ringle',
    's_profile.purpose_of_usaing_ringle',
    'Ringle使用目的',
    'Ringle使用目的',
    'Ringleの使用目的',
    'Lí do sử dụng Ringle',
  ],
  self_introduction_in_english: [
    '영어 자기 소개',
    'Self-Introduction in English',
    's_profile.self_introduction_in_english',
    '英语自我介绍',
    '英文自我介紹',
    '英語で自己紹介',
    'Giới thiệu bản thân bằng tiếng Anh',
  ],
  profile_movie: [
    '프로필 영상',
    'Profile Video',
    's_profile.profile_movie',
    '简介视频',
    '簡介影片',
    'プロフィール動画',
    'Video về bản thân',
  ],
  are_you_sure_you_want_to_stop_completing_your_profile_what_you_have_entered_so_far_has_been_saved_you_can_continue_to_enter_it_later_:
    [
      '프로필 완성을 중단하시겠습니까?\n지금까지 입력한 내용은 저장되며, 나중에 이어서 입력하실 수 있습니다.',
      'Are you sure you want to stop completing your profile?\n\nWhat you have entered so far has been saved. You can continue to enter it later.',
      's_profile.are_you_sure_you_want_to_stop_completing_your_profile_what_you_have_entered_so_far_has_been_saved_you_can_continue_to_enter_it_later_',
      '确定要停止完成简介吗？ \n目前输入的内容将被保存，之后您可继续输入。',
      '要中斷完成簡介嗎？\n至今輸入的內容將會儲存，之後您可繼續輸入。',
      'プロフィールの作成を中断しますか？\nこれまでの入力内容は保存され、後で続けて入力することができます。',
      'Bạn có chắc muốn dừng việc điền thông tin cá nhân?\n\nNhững gì bạn đã điền đến giờ đều được lưu lại. Bạn có thể tiếp tục bổ sung sau',
    ],
  leave: [
    '나가기',
    'Leave',
    's_profile.leave',
    '离开',
    '離開',
    '閉じる',
    'Rời khỏi',
  ],
  continue: [
    '계속 입력하기',
    'Continue',
    's_profile.continue',
    '继续输入',
    '繼續輸入',
    '入力を続ける',
    'Tiếp tục',
  ],
  employee: [
    '직장인',
    'Employee',
    's_profile.employee',
    '上班族',
    '上班族',
    '会社員',
    'Nhân viên',
  ],
  professional: [
    '전문직',
    'Professional',
    's_profile.professional',
    '专职人员',
    '專業人員',
    '専門職',
    'Chuyên gia',
  ],
  freelancer: [
    '프리랜서',
    'Freelancer',
    's_profile.freelancer',
    '自由工作者',
    '自由工作者',
    'フリーランス',
    'Freelancer',
  ],
  entrepreneur: [
    '사업가',
    'Entrepreneur',
    's_profile.entrepreneur',
    '企业家',
    '企業家',
    '起業家',
    'Doanh nhân',
  ],
  undergraduate_graduate_student: [
    '대학생.대학원생',
    'Undergraduate/Graduate student',
    's_profile.undergraduate_graduate_student',
    '大学生、研究生',
    '大學生、研究生',
    '大学生・大学院生',
    'Sinh viên đại học/sau đại học',
  ],
  middle_high_school_student: [
    '중학생.고등학생',
    'Middle/High school student',
    's_profile.middle_high_school_student',
    '中学生，高中生',
    '國中生、高中生',
    '中学生・高校生',
    'Học sinh trung học',
  ],
  preschoolers_elementary_school_student: [
    '유치원생.초등학생',
    'Preschoolers/Elementary school student',
    's_profile.preschoolers_elementary_school_student',
    '幼儿园，初中生',
    '幼稚園生、國小生',
    '幼稚園生・小学生',
    'Học sinh mẫu giáo/tiểu học',
  ],
  others: [
    '기타',
    'Others',
    's_profile.others',
    '其他',
    '其他',
    'その他',
    'Khác',
  ],
  to_seeking_change_job: [
    '취업 및 이직',
    'To seek/change job',
    's_profile.to_seeking_change_job',
    '就业与离职',
    '就業與離職',
    '就職および転職',
    'Tìm kiếm/ thay đổi công việc',
  ],
  to_study_abroad: [
    '해외 대학/대학원 진학',
    'To study abroad',
    's_profile.to_study_abroad',
    '就读海外大学／研究所',
    '就讀海外大學／研究所',
    '海外の大学/大学院進学',
    'Đi du học',
  ],
  required_for_work: [
    '업무상 영어 필요',
    'To study English for work',
    's_profile.required_for_work',
    '工作需要',
    '工作需要',
    '仕事で英語が必要',
    'Sử dụng tiếng Anh trong công việc',
  ],
  to_travel_abroad: [
    '해외여행',
    'To travel abroad',
    's_profile.to_travel_abroad',
    '海外旅行',
    '海外旅行',
    '海外旅行',
    'Đi du lịch nước ngoài',
  ],
  to_prepare_for_english_test: [
    '어학시험 대비',
    'To prepare for English proficiency tests',
    's_profile.to_prepare_for_english_test',
    '准备语言考试',
    '準備語言考試',
    '語学検定対策',
    'Để chuẩn bị kỳ thi năng lực tiếng Anh',
  ],
  to_maintain_and_improve_english_skills: [
    '순수 영어 실력 유지 및 항상',
    'To maintain and improve English skills in general',
    's_profile.to_maintain_and_improve_english_skills',
    '想维持与提升英语实力',
    '單純維持與提升英語實力',
    '英語力の維持および向上',
    'Để duy trì và cải thiện tiếng Anh',
  ],
  enter_why_you_are_using_ringle_: [
    '기타 목적의 내용을 입력해주세요.',
    'Enter why you are using Ringle.',
    's_profile.enter_why_you_are_using_ringle_',
    '请输入其他目的的内容。',
    '請輸入其他目的的內容。',
    'その他の目的を入力してください。',
    'Nhập lí do tại sao bạn sử dụng Ringle.',
  ],
  introduce_yourself_in_english_: [
    '영어로 자기소개를 해주세요.',
    'Introduce yourself in English.',
    's_profile.introduce_yourself_in_english_',
    '请用英文进行自我介绍。',
    '請以英文自我介紹。',
    '英語で自己紹介してください。',
    'Giới thiệu bản thân bằng tiếng Anh.',
  ],
  required: [
    '필수',
    'Required',
    's_profile.required',
    '必填',
    '必填',
    '必須',
    'Bắt buộc',
  ],
  optional: [
    '선택',
    'Optional',
    's_profile.optional',
    '选填',
    '選填',
    '選択',
    'Không bắt buộc',
  ],
  enter_your_basic_info_in_english_: [
    '영어로 고객님에 대한 기본 소개를 입력해주세요.',
    'Enter your basic info in English.\n(more than 50 words)',
    's_profile.enter_your_basic_info_in_english_',
    '请用英文输入您的基本简介。',
    '請以英文簡單介紹您自己。',
    '英語であなたについて基本的な紹介を入力してください。',
    'Nhập thông tin cơ bản bằng tiếng Anh.\n(hơn 50 từ)',
  ],
  enter_intro_limit: [
    '(50 단어 이상 입력)',
    '',
    's_profile.enter_intro_limit',
    '（输入50个以上单词）',
    '（輸入50單字以上）',
    '(50単語以上入力)',
    '',
  ],
  enter_your_career_career_goal_in_english_: [
    '영어로 고객님의 경력 및 커리어 목표를 입력해주세요.',
    'Enter your career goals in English.',
    's_profile.enter_your_career_career_goal_in_english_',
    '请用英文输入您的经历与资历目标。',
    '請以英文輸入您的經歷與職涯目標。',
    '英語でお客様のキャリア目標を入力してください。',
    'Nhập mục tiêu nghề nghiệp bằng tiếng Anh.',
  ],
  enter_your_hobbies_interests_in_english_: [
    '영어로 고객님의 취미 및 관심사를 입력해주세요.',
    'Enter your hobbies & interests in English.',
    's_profile.enter_your_hobbies_interests_in_english_',
    '请用英文输入您的兴趣与感兴趣的领域。',
    '請以英文輸入您的興趣與感興趣的領域。',
    '英語でお客様の趣味および関心事を入力してください。',
    'Nhập sở thích của bạn bằng tiếng Anh.',
  ],
  upload_video: [
    '동영상 촬영/업로드',
    'Take/Upload video',
    's_profile.upload_video',
    '拍摄／上传视频',
    '拍攝／上傳影片',
    '動画撮影/アップロード',
    'Chụp/ Tải lên video',
  ],
  take_video: [
    '동영상 촬영',
    'Take video',
    's_profile.take_video',
    '拍摄视频',
    '拍攝影片',
    '動画撮影',
    'Chụp video',
  ],
  option_upload_video: [
    '동영상 업로드',
    'Upload Video',
    's_profile.option_upload_video',
    '上传视频',
    '上傳影片',
    '動画アップロード',
    'Tải lên video',
  ],
  change_video: [
    '변경하기',
    'Change video',
    's_profile.change_video',
    '变更',
    '變更',
    '変更する',
    'Đổi video',
  ],
  uploading: [
    '영상을 업로드 중입니다...',
    'Uploading...',
    's_profile.uploading',
    '正在上传视频…',
    '正在上傳影片…',
    '動画をアップロード中です。',
    'Đang tải lên...',
  ],
  loading: [
    '영상을 불러오는 중입니다...',
    'Loading...',
    's_profile.loading',
    '正在读取视频…',
    '正在讀取影片…',
    '動画を読み込んでいます。',
    'Loading...',
  ],
  profile_setting: [
    '프로필 설정',
    'Edit Profile',
    's_profile.profile_setting',
    '简介设定',
    '簡介設定',
    'プロフィール設定',
    'Chỉnh sửa hồ sơ',
  ],
  profile_preview: [
    '프로필 미리보기',
    'Preview Profile',
    's_profile.profile_preview',
    '预览简介',
    '預覽簡介',
    'プロフィールプレビュー',
    'Xem trước hồ sơ',
  ],
  profile_photo: [
    '프로필 사진',
    'Profile Photo',
    's_profile.profile_photo',
    '大头照',
    '大頭照',
    'プロフィール写真',
    'Ảnh đại diện',
  ],
  num_of_char: [
    '입력된 단어 수',
    'Num of words entered',
    's_profile.num_of_char',
    '输入的单词数',
    '輸入的單字數',
    '入力した単語数',
    'Số từ đã nhập',
  ],
  change_photo: [
    '사진 변경하기',
    'Change photo',
    's_profile.change_photo',
    '变更照片',
    '變更照片',
    '写真を変更する',
    'Đổi hình ảnh',
  ],
  upload_photo: [
    '사진 업로드하기',
    'Upload photo',
    's_profile.upload_photo',
    '上传照片',
    '上傳照片',
    '写真をアップロードする',
    'Tải hình lên',
  ],
};
export const s_edit_profile = {
  secondary_email: [
    '추가 이메일',
    'Secondary email',
    's_edit_profile.secondary_email',
    '其他电子邮箱',
    '其他電子信箱',
    '追加メールアドレス',
    'Email phụ',
  ],
  not_entered: [
    '미입력',
    'Not entered',
    's_edit_profile.not_entered',
    '未输入',
    '未輸入',
    '未入力',
    'Chưa nhập vào',
  ],
  change_number: [
    '변경',
    'Change',
    's_edit_profile.change_number',
    '变更',
    '變更',
    '変更',
    'Đổi',
  ],
  enter_4_digit_numbers: [
    '제한시간 내에 전송된 4자리 번호를 입력하고 밑에 제출 버튼을 눌러주세요',
    'Enter the 4-digit code you received and submit.',
    's_edit_profile.enter_4_digit_numbers',
    '请在限制时间内输入发送的4位数字，并点击下方的提交按钮。',
    '請於限制時間內輸入傳送的4位數字，並點擊下方的提交按鈕。',
    '制限時間内に送信された4桁の番号を入力して、下の送信ボタンを押してください。',
    'Nhập mã 4 chữ số bạn đã nhận và gửi lên.',
  ],
  company_code_note: [
    '기업 맞춤 코드는 1회에 한하여, 입력이 가능합니다.\n기업 맞춤 코드 변경을 원하신다면 고객센터/문의하기를 통해 연락해주세요.',
    'You can only enter one B2B Partner code.\nIf you need to change your code, please contact us via chat below.',
    's_edit_profile.company_code_note',
    '企业专用代码仅限输入1次。 \n如想变更企业专用代码，请通过客服中心／咨询联系我们。',
    '企業專用代碼僅限輸入1次。\n如欲變更企業專用代碼，請透過客服中心／諮詢聯絡我們。',
    '企業専用コードは1回に限り入力が可能です。\n企業専用コードの変更をご希望の場合、カスタマーセンター/お問い合わせよりご連絡ください。',
    'Bạn chỉ có thể nhập một mã đối tác B2B. \nNếu bạn cần đổi mã, vui lòng chat với chúng tôi.',
  ],
  intro_1: [
    '나를 소개해주세요',
    'About me',
    's_edit_profile.intro_1',
    '请进行自我介绍',
    '請自我介紹',
    '自己紹介してください。',
    'Giới thiệu về tôi',
  ],
  intro_2: [
    '경력 및 커리어 목표를 알려주세요',
    'Enter your career & goals in English.',
    's_edit_profile.intro_2',
    '请告诉您的经历与职业目标',
    '請告知經歷與職涯目標',
    'キャリア目標を教えてください。',
    'Nhập nghề nghiệp & mục tiêu của bạn bằng tiếng Anh.',
  ],
  intro_3: [
    '취미 및 관심사를 알려주세요',
    'Enter your hobbies & interests in English.',
    's_edit_profile.intro_3',
    '请告诉兴趣与关注领域',
    '請告知興趣與感興趣的領域',
    '趣味および関心事を教えてください。',
    'Nhập sở thích của bạn bằng tiếng Anh.',
  ],
  phone_header: [
    '휴대폰 번호 변경',
    'Update phone number',
    's_edit_profile.phone_header',
    '变更手机号码',
    '變更手機號碼',
    '携帯電話番号変更',
    'Cập nhật số điện thoại',
  ],
  enter_phone_number: [
    '번호 입력',
    'Enter phone number',
    's_edit_profile.enter_phone_number',
    '输入号码',
    '輸入號碼',
    '携帯電話番号入力',
    'Nhập số điện thoại',
  ],
};
export const s_coupon_box = {
  coupon_count: count => [
    <>
      쿠폰 <View primary>{count}</View>개
    </>,
    <>
      You have <View primary>{count}</View> coupons
    </>,
    's_coupon_box.coupon_count',
    <>
      优惠券<View primary>{count}</View>张
    </>,
    <>
      優惠券<View primary>{count}</View>張
    </>,
    <>
      クーポン<View primary>{count}</View>枚
    </>,
    <>
      Bạn có <View primary>{count}</View> coupon
    </>,
  ],
  redeem: [
    '사용하기',
    'Redeem',
    's_coupon_box.redeem',
    '使用',
    '使用',
    '使用',
    'Đổi',
  ],
  used: [
    '사용완료',
    'Used',
    's_coupon_box.used',
    '已使用',
    '已使用',
    '使用済み',
    'Đã sử dụng',
  ],
  code: [
    '입력코드:',
    'Code:',
    's_coupon_box.code',
    '输入代码：',
    '輸入代碼：',
    '入力コード:',
    'Mã:',
  ],
  expired: [
    '사용만료',
    'Expired',
    's_coupon_box.expired',
    '已到期',
    '已到期',
    '使用期間満了',
    'Hết hạn',
  ],
};
export const s_couponbook = {
  are_you_sure_you_want_to_use_this_coupon: [
    '쿠폰을 사용하시겠습니까?',
    'Are you sure you want to use this credit?',
    's_couponbook.are_you_sure_you_want_to_use_this_coupon',
    '确定要使用优惠券吗？',
    '確定要使用優惠券嗎？',
    'クーポンを使用しますか？',
    'Bạn có chắc bạn muốn sử dụng thẻ học này?',
  ],
  the_coupon_you_selected_has_been_used: [
    '쿠폰이 사용되었습니다',
    'The credit you selected has been used.',
    's_couponbook.the_coupon_you_selected_has_been_used',
    '优惠券使用完毕',
    '優惠券使用完畢',
    'クーポンが使用されました。',
    'Thẻ học bạn chọn đã được sử dụng.',
  ],
};
export const s_point = {
  invite: [
    '초대하기',
    'Invite',
    's_point.invite',
    '邀请',
    '邀請',
    '招待する',
    'Mời',
  ],
  my_friend_point: [
    '내 친구 초대 포인트',
    'Referral Points',
    's_point.my_friend_point',
    '我的邀请朋友积分数',
    '我的邀請朋友點數',
    'マイ友達招待ポイント',
    'Điểm giới thiệu',
  ],
  use_point: [
    '포인트 사용하기',
    'Use my points',
    's_point.use_point',
    '使用积分',
    '使用點數',
    'ポイントを使用する',
    'Dùng điểm của tôi',
  ],
  total_point_earned: [
    '누적 포인트 내역',
    'Total points earned',
    's_point.total_point_earned',
    '积累的积分明细',
    '累積點數明細',
    '合計獲得ポイント',
    'Tổng điểm nhận được',
  ],
  total_use: [
    '총 사용',
    'Total used',
    's_point.total_use',
    '共使用',
    '一共使用',
    '合計使用ポイント',
    'Tổng đã sử dụng',
  ],
  total_points_used: [
    '사용 포인트 내역',
    'Total points used',
    's_point.total_points_used',
    '使用积分明细',
    '使用點數明細',
    '使用ポイント履歴',
    'Tổng điểm đã sử dụng',
  ],
  total_points: [
    '총 누적',
    'Total points',
    's_point.total_points',
    '共累积',
    '一共累積',
    '累計',
    'Tổng điểm',
  ],
  invite_friend_for_secret_offer: [
    '시크릿 친구초대',
    'Secret Offer Referrals',
    's_point.invite_friend_for_secret_offer',
    '机密邀请朋友',
    '祕密邀請朋友',
    'シークレット友達招待',
    'Ưu đãi giới thiệu bí mật',
  ],
  invite_friend: [
    '일반 친구초대',
    'Regular Referrals',
    's_point.invite_friend',
    '一般邀请朋友',
    '一般邀請朋友',
    '正規友達紹介',
    'Giới thiệu thông thường',
  ],
  all_invite_history: [
    '전체 현황',
    'Status',
    's_point.all_invite_history',
    '整体现状',
    '整體現況',
    '招待履歴',
    'Trạng thái',
  ],
  exclude_event: [
    '이벤트 기간 제외 상시',
    'Applicable anytime other than event period',
    's_point.exclude_event',
    "除活动期间外的任何时间'，",
    '活動期間以外的期間',
    'イベント期間を除く',
    'Có thể áp dụng bất kỳ thời điểm nào ngoài thời điểm diễn ra sự kiện',
  ],
  invite_history: [
    '친구초대 현황',
    'Referral Status',
    's_point.invite_history',
    '邀请朋友现状',
    '邀請朋友現況',
    '友達招待ポイント',
    'Trạng thái giới thiệu',
  ],
  policy_note: [
    '링글 포인트 유의사항',
    'Terms',
    's_point.policy_note',
    'Ringle积分注意事项',
    'Ringle點數注意事項',
    'Ringleポイントの注意事項',
    'Điều khoản',
  ],
  list_1: [
    '링글 포인트는 1:1 영어회화, 수강기간 연장, 결제 시점에 사용할 수 있습니다.',
    'You can use Points to pay for lesson credits or to extend lesson credit expiration dates.',
    's_point.list_1',
    'Ringle积分可在1:1英语会话, 课程期限延长及付款时使用。',
    'Ringle點數可用於1:1英語會話、延長聽課期間或付款。',
    'Ringleポイントは1:1レッスン、受講期間延長、決済時に使用することができます。',
    <>
      Bạn có thể sử dụng điểm để đặt lịch học hoặc gia hạn thời gian
      <br />
      kết thúc.
    </>,
  ],
  list_2: [
    '포인트 유효기간은 적립일로부터 365일 입니다. (프로모션 포인트는 발급될 때마다 상이한 유효기간이 제공됩니다.)',
    'Points will expire in 365 days from the issue date. Points given during promotion period may vary in expiration dates.',
    's_point.list_2',
    '积分的有效期限为获得之日起365天。(促销活动的积分于发行时将规定不同的有效期限。)',
    '點數的有效期限自累積日起365天。（宣傳活動的點數於發送時各有不同的有效期限。）',
    'ポイントの有効期間は付与日から365日です。(プロモーションポイントは発行されるたびに有効期間が異なります。)',
    'Điểm sẽ hết hạn sau 365 ngày kể từ ngày phát hành. Điểm nhận được trong khoảng thời gian ưu đãi sẽ có ngày kết thúc khác nhau.',
  ],
  list_3: [
    '수업 포인트는 유료로 구매한 정규 수업 완료 7일 후 적립됩니다. (전체 적립액: 구매한 수업권 실결제 금액의 3%)',
    'Points will be awarded at 3% of the original purchased price per lesson in 7 days after completing each lesson.',
    's_point.list_3',
    '课程积分将于付费购买正规课程后7日起累计。 (全部累计数额: 购买课程时实际付款金额的3%)',
    '課程點數將於完成付費購買的正規課程7天後累積。（全部累積金額：購買課程券時實際付款金額的3%）',
    'レッスンポイントは、有料で購入した正規レッスン完了7日後に付与されます。(全体付与額:購入したレッスンチケットの実際の決済金額の3%)',
    'Điểm thưởng tương đương 3% giá trị thanh toán của mỗi buổi học, và sẽ được nhận trong 7 ngày sau khi hoàn thành buổi học.',
  ],
  list_4: [
    '무료 수업권 사용 또는 비정상적으로 종료된 수업이 복구되는 경우 수업 포인트는 적립되지 않습니다.',
    'Lessons taken with free credits, or lessons terminated in unusual circumstances will not be awarded Points.',
    's_point.list_4',
    '使用免费课程券或复原非正常情况结束的课程时, 课程积分将不予累计。',
    '使用免費課程券或復原異常結束的課程時，不累積課程點數。',
    '無料レッスンチケットの使用または非正常的に終了したレッスンが復旧される場合は、レッスンポイントは付与されません。',
    'Buổi học miễn phí hoặc buổi học bị ngừng vì những trường hợp bất thường sẽ không được thưởng điểm.',
  ],
  list_5: [
    '친구 추천 혜택으로 적립된 포인트는 상품권 등 선물로 교환할 수 있습니다.',
    'Only Points earned through referrals can be exchanged for gift cards.',
    's_point.list_5',
    '通过推荐朋友所获得的积分, 可进行商品券等礼品兑换。',
    '透過推薦朋友累積的點數可兌換商品券等禮物。',
    '友達紹介特典で付与されたポイントは、商品券などギフトに交換することができます。',
    'Chỉ có Điểm nhận được qua việc giới thiệu bạn bè mới được đổi thành thẻ quà tặng.',
  ],
  list_6: [
    '친구 추천 포인트로 변경한 선물은 매 월말 일괄 배송됩니다. (선물은 계정에 입력된 휴대폰 번호로 발송됩니다.)',
    'Gifts exchanged using Referral Points will be sent at the end of the month.',
    's_point.list_6',
    '使用推荐朋友所获得的积分兑换的礼物, 将于每月底统一发送。 (礼物将发送至账户验证的手机号码上。)',
    '使用推薦朋友點數兌換的禮物將於每月底一併發送。（禮物將發送至輸入於帳戶的手機號碼。）',
    '友達紹介ポイントで変更したギフトは、毎月末に一括送信されます。(ギフトはアカウントに入力された携帯電話番号に送信されます。)',
    'Thẻ quà tặng quy đổi từ Điểm Giới thiệu sẽ được gửi vào cuối tháng.',
  ],
};
export const s_mypage_noti = {
  lesson_reminder: [
    '1:1 수업 리마인더',
    'Lesson Reminder',
    's_mypage_noti.lesson_reminder',
    '1:1课程备忘录',
    '1:1課程備忘錄',
    '1:1レッスンリマインダー',
    'Nhắc buổi học',
  ],
  notification_preference_desc: [
    '알림을 수신할 이메일 및 휴대폰 번호를 설정합니다.',
    'Set email and mobile number to receive notifications',
    's_mypage_noti.notification_preference_desc',
    '设定接收通知的电子邮箱及手机号码。',
    '設定接收通知的電子信箱及手機號碼。',
    '通知を受信するメールアドレスと携帯電話番号を設定します。',
    'Cài đặt email và số điện thoại để nhận thông báo',
  ],
  notification_my_tutor: [
    '찜한 튜터의 수업 스케줄 업데이트',
    "Updates to Favorite Tutors' availability",
    's_mypage_noti.notification_my_tutor',
    '我收藏的任课教师上课日程更新',
    '我收藏的任課教師上課日程更新',
    'お気に入りチューターのレッスンスケジュールアップデート',
    'Cập nhật lịch trống của Gia sư Yêu thích',
  ],
  lesson_in_24_my_tutor: [
    '찜한 튜터의 수업만 받기',
    'Only notify me when favorite tutors have a new availability in 24 hours',
    's_mypage_noti.lesson_in_24_my_tutor',
    '仅接收我收藏的任课教师课程',
    '僅接收我收藏的任課教師課程',
    'お気に入りチューターのレッスンだけ受ける',
    'Chỉ thông báo tôi khi gia sư yêu thích có lịch trống trong 24 giờ',
  ],
  receive_email: [
    '이메일 수신',
    'Receive Email',
    's_mypage_noti.receive_email',
    '电子邮箱接收',
    '電子信箱接收',
    'メール受信',
    'Nhận email',
  ],
  select_notifications_you_want_to_delete: [
    '삭제할 알림을 선택해주세요',
    'Select notifications you want to delete.',
    's_mypage_noti.select_notifications_you_want_to_delete ',
    '请选择想删除的通知',
    '請選擇欲刪除的通知',
    '削除する通知を選択してください。',
    'Chọn thông báo bạn muốn xoá.',
  ],
  google_calendar_invites: [
    '캘린더 설정',
    'Calendar Invites',
    's_mypage_noti.google_calendar_invites',
    '日历设定',
    '日曆設定',
    'カレンダー設定',
    'Mời bằng Google Calendar',
  ],
  _1_1_lesson_schedule: [
    '신청한 1:1 수업의 일정',
    '1:1 Lesson schedule',
    's_mypage_noti._1_1_lesson_schedule',
    '申请的1:1课程日程',
    '申請的1:1課程日程',
    '予約した1:1レッスンの日程',
    'Thời khoá biểu buổi học 1:1',
  ],
  the_google_calendar_invite_will_be_sent_to_your_email_account: [
    '알림 수신 방법으로 선택한 이메일 계정으로 신청한 수업의 일정이 구글 캘린더 초대장으로 발송됩니다.',
    'Lessons will automatically be added to your Google Calendar.',
    's_mypage_noti.the_google_calendar_invite_will_be_sent_to_your_email_account',
    '申请的课程日程将以Google日历邀请函发送至设为通知接收方式的电子邮箱里。',
    '申請的課程日程將藉由Google日曆邀請發送至設為通知接收方式的電子信箱。',
    '通知受信方法で選択したメールアドレスに、予約したレッスンの日程がGoogleカレンダーの招待状として送信されます。',
    'Buổi học sẽ được tự động thêm vào Google Calendar của bạn.',
  ],
  time_left_until_lesson_starts: [
    '수업 리마인더 설정',
    'Lesson Reminder Settings',
    's_mypage_noti.time_left_until_lesson_starts',
    '课程备忘录设定',
    '課程備忘錄設定',
    'レッスンリマインダー設定',
    'Cài đặt nhắc buổi học',
  ],
  news_special_offers: [
    '링글 소식 & 혜택',
    'Ringle Newsletter',
    's_mypage_noti.news_special_offers',
    'Ringle消息 & 优惠',
    'Ringle消息 & 優惠',
    'Ringleニュース & 特典',
    'Ringle Newsletter',
  ],
  you_will_receive_newsletter_and_more: [
    '링글 할인혜택, 이벤트, 뉴스레터, 콘텐츠 업데이트 등을 받으실 수 있습니다.',
    "You will receive Ringle's exclusive promotions and latest news.",
    's_mypage_noti.you_will_receive_newsletter_and_more',
    '您可接收Ringle的折扣优惠、活动、电子报、内容更新等。',
    '您可接收Ringle的折扣優惠、活動、電子報、內容更新等。',
    'Ringleの割引特典、イベント、ニュースレター、コンテンツアップデートなどをお受け取りいただけます。',
    'Bạn sẽ nhận được các ưu đãi độc quyền và tin tức mới nhất từ Ringle.',
  ],
  you_will_receive_various_reminders: [
    '수업 준비를 잘 할 수 있도록 수업 시작 전 리마인더를 받으실 수 있습니다.',
    'You will receive various reminders to help you stay on top of your lessons.',
    's_mypage_noti.you_will_receive_various_reminders',
    '为了能顺利准备上课，您可在课程开始前接收备忘录。',
    '為了能順利準備上課，您可於課程開始前接收備忘錄。',
    'レッスンの準備がしっかりできるように、レッスン開始前にリマインダーをお受け取りいただけます。',
    'Bạn sẽ nhận được các thông báo nhắc khác nhau để đảm bảo sự chuyên cần.',
  ],
  lesson_schedule_update: [
    '1:1 수업 스케쥴 업데이트',
    'Lesson Availability',
    's_mypage_noti.lesson_schedule_update',
    '1:1上课日程更新',
    '1:1上課日程更新',
    '1:1レッスンスケジュールアップデート',
    'Buổi học trống lịch',
  ],
  you_will_be_notified: [
    '찜한 튜터의 수업 스케줄이 업데이트 되었을 때, 24시간 이내 시작하는 수업이 이용 가능할 때 알림을 받으실 수 있습니다.',
    'You will be notified when favorite tutors update their availabilities or a slot opens up.',
    's_mypage_noti.you_will_be_notified',
    '当您收藏的任课教师更新上课日程或有24小时内可上的课程时，您可收到通知。',
    '當收藏的任課教師更新上課日程或有24小時以內開始的課程時，您可接收通知。',
    'お気に入りチューターのレッスンスケジュールがアップデートされた時や、24時間以内に始まるレッスンの予約が可能な時にお知らせをお受け取りいただけます。',
    'Bạn sẽ nhận được thông báo khi gia sư yêu thích cập nhật lịch trống hoặc có ca trống được mở.',
  ],
  notification_preferences: [
    '알림 수신 정보',
    'Notification Settings',
    's_mypage_noti.notification_preferences',
    '通知接收信息',
    '通知接收資訊',
    '通知受信情報',
    'Cài đặt thông báo',
  ],
  are_you_sure_you_want_to_delete_the_secondary_email: [
    '추가한 이메일을 삭제하시겠습니까?',
    'Are you sure you want to delete the secondary email?',
    's_mypage_noti.are_you_sure_you_want_to_delete_the_secondary_email',
    '确定要删除新增的电子邮箱吗？',
    '確定要刪除新增的電子信箱嗎？',
    '追加したメールアドレスを削除しますか？',
    'Bạn có chắc muốn xoá email phụ?',
  ],
  add_secondary_email: [
    '알림 수신을 위한 다른 이메일 추가하기',
    'Add Secondary Email',
    's_mypage_noti.add_secondary_email',
    '添加接收通知的其他电子邮箱',
    '新增接收通知的其他電子信箱',
    '通知受信のための他のメールアドレスを追加する。',
    'Thêm email phụ',
  ],
  you_can_receive_google_calendar_invites: [
    '기본 이메일이 아닌 추가한 이메일에서 구글 캘린더 초대장 및 각종 소식을 받을 수 있습니다.',
    'You can receive Google calendar invites and newsletter to the secondary email instead of the primary one.',
    's_mypage_noti.you_can_receive_google_calendar_invites',
    '您可通过非基本电子邮箱的其他电子邮箱接收Google日历邀请函及各种消息。',
    '您可透過非基本電子信箱的其他電子信箱接收Google日曆邀請及各種消息。',
    '基本メールアドレスではなく、追加メールアドレスでGoogleカレンダーの招待状や、各種お知らせを受け取ることができます。',
    'Bạn sẽ nhận thông báo mời trên Google Calendar và newsletter đến email phụ thay vì email chính.',
  ],
  receive_text_message: [
    'SMS 수신',
    'Receive SMS (Text Message)',
    's_mypage_noti.receive_text_message',
    '简讯接收',
    '簡訊接收',
    'SMS受信',
    'Nhận tin nhắn điện thoại',
  ],
  get_news_special_offers: [
    '혜택 정보 알림',
    'Subscribe to Ringle Newsletter',
    's_mypage_noti.get_news_special_offers',
    '优惠信息通知',
    '優惠資訊通知',
    '特典情報のお知らせ',
    'Đăng ký Ringle Newsletter',
  ],
  receive_news_special_offers: [
    '마케팅 정보 알림 수신동의 안내',
    'Subscribe to Ringle Newsletter',
    's_mypage_noti.receive_news_special_offers',
    '营销信息通知接收同意说明',
    '行銷資訊通知接收同意說明',
    'マーケティング情報通知受信同意のご案内',
    'Đăng ký Ringle Newsletter',
  ],
  sender_ringle_english_education_service: [
    '• 전송자: 링글잉글리시에듀케이션 서비스',
    'Sender: Ringle English Education Service',
    's_mypage_noti.sender_ringle_english_education_service',
    '• 发送者：Ringle英语教育服务',
    '• 傳送者：Ringle英語教育服務',
    '• 送信者: Ringle, Inc.',
    'Người gửi: Dịch vụ giáo dục Ringle',
  ],
  notification_info: [
    '알림 수신 정보',
    'Notifications',
    's_mypage_noti.notification_info',
    '通知接收信息',
    '通知接收資訊',
    '通知受信情報',
    'Thông báo',
  ],
  email: [
    '이메일',
    'Email',
    's_mypage_noti.email',
    '电子邮箱',
    '電子信箱',
    'メールアドレス',
    'Email',
  ],
  modify: [
    '변경',
    'Update',
    's_mypage_noti.modify',
    '变更',
    '變更',
    '変更',
    'Cập nhật',
  ],
  phone: [
    '휴대폰 번호',
    'Phone number',
    's_mypage_noti.phone',
    '手机号码',
    '手機號碼',
    '携帯電話番号',
    'Số điện thoại',
  ],
  db_update: [
    'Daily Brief 업데이트',
    'Daily Brief',
    's_mypage_noti.db_update',
    'Daily Brief更新',
    'Daily Brief更新',
    'Daily Briefアップデート',
    'Daily Brief',
  ],
  db_update_desc: [
    '월~금 매일 업데이트 되는 Daily Brief 알림을 받으실 수 있습니다.',
    'You can receive Daily Briefs every weekday.',
    's_mypage_noti.db_update_desc',
    '您每周一至周五可接收每日更新的Daily Brief信息。',
    '您可接收週一～五每日更新的Daily Brief通知。',
    '月~金まで毎日アップデートされるDaily Briefのお知らせをお受け取りいただけます。',
    'Bạn có thể nhận Daily Brief trong tuần.',
  ],
  live_webinar_reminder: [
    'Live Webinar 리마인더',
    'Live Webinar',
    's_mypage_noti.live_webinar_reminder',
    'Ringle LIVE备忘录',
    'Ringle LIVE備忘錄',
    'Ringle LIVE リマインダー',
    'Ringle LIVE',
  ],
  live_webinar_reminder_desc: [
    '매 주말 진행되는 링글 Live Webinar 리마인더를 받으실 수 있습니다.',
    'You can receive weekly notifications about Live Webinars.',
    's_mypage_noti.live_webinar_reminder_desc',
    '您可接收每周末进行的Ringle Live Webinar备忘录。',
    '您可接收每週末進行的Ringle Live Webinar備忘錄。',
    '毎週末行われるRingle Live Webinarのリマインダーをお受け取りいただけます。',
    'Bạn có thể nhận thông báo hàng tuần về các webinar trực tuyến.',
  ],
  new_db_update: [
    '신규 Daily Brief 업데이트',
    'New Daily Brief update',
    's_mypage_noti.new_db_update',
    '全新Daily Brief更新',
    '全新Daily Brief更新',
    '新規Daily Briefアップデート',
    'Cập nhật Daily Brief mới',
  ],
  live_webinar_invitation: [
    '예약한 LIVE 웨비나의 일정',
    'RSVP-ed LIVE Webinars',
    's_mypage_noti.live_webinar_invitation',
    '已预约的网络研讨会直播日程',
    '已預約的LIVE網路研討會日程',
    '予約したLIVE Webinarの日程',
    'Đã xác nhận đăng ký Webinar trực tuyến',
  ],
  will_receive_invitation_through_calendar: [
    '링글에 등록하신 이메일 계정으로 신청한 LIVE 웨비나의 일정이 구글 캘린더 초대장으로 발송됩니다.',
    "You'll receive Google calendar invites for the LIVE Webinars you RSVP.",
    's_mypage_noti.will_receive_invitation_through_calendar',
    '申请的网络研讨会直播日程将以Google日历邀请函发送至登录于Ringle的电子邮箱里。',
    '申請的LIVE網路研討會日程將藉由Google日曆邀請發送至登錄於Ringle的電子信箱。',
    'Ringleに登録されたメールアドレスに、予約したLIVE Webinarの日程がGoogleカレンダーの招待状として送信されます。',
    'Bạn sẽ nhận được lời mời trên Google calendar cho Webinar trực tuyến đã đăng ký.',
  ],
  live_webinar_app_push: [
    '리마인더 수신 방법',
    'Delivery',
    's_mypage_noti.live_webinar_app_push',
    '备忘录接收方式',
    '備忘錄接收方式',
    'リマインダー受信方法',
    'Gửi thông báo',
  ],
  before_hour_and_two_min: [
    'LIVE 당일 1시간 전, 그리고 당일 시작 2분 후 제공됩니다.',
    'Will be sent 1 hour before and 2 minutes after the LIVE Webinar stars.',
    's_mypage_noti.before_hour_and_two_min',
    '于直播1小时前和开始2分钟后提供。',
    '於LIVE當天1小時前及當天開始2分鐘後提供。',
    'LIVE当日の1時間前と当日の開始2分後に提供されます。',
    'Sẽ được gửi trước 1 giờ và 2 phút trước khi Webinar trực tuyến bắt đầu.',
  ],
  app_push: [
    '앱 푸시',
    'Push notification',
    's_mypage_noti.app_push',
    'APP推送通知',
    'APP推播通知',
    'アプリプッシュ通知',
    'Thông báo điện thoại',
  ],
  db_update_time: [
    '업데이트 시간 설정',
    'App Push Schedule',
    's_mypage_noti.db_update_time',
    '更新时间设定',
    '更新時間設定',
    'アップデート時間設定',
    'Gửi thông báo',
  ],
  sms: [
    'SMS',
    'SMS (Text message)',
    's_mypage_noti.sms',
    'SMS',
    '簡訊',
    'SMS',
    'SMS (Text message)',
  ],
  app_push_noti: [
    '앱 푸시 알림',
    'Push notification',
    's_mypage_noti.app_push_noti',
    '软件推送通知',
    'APP推播通知',
    'アプリプッシュのお知らせ',
    'Thông báo điện thoại',
  ],
  app_push_status_on: [
    '사용 중',
    'In use',
    's_mypage_noti.app_push_status_on',
    '使用中',
    '使用中',
    '使用中',
    'Đang sử dụng',
  ],
  app_push_status_off: [
    '사용 중지',
    'Paused',
    's_mypage_noti.app_push_status_off',
    '停止使用',
    '停止使用',
    '使用中止',
    'Tạm dừng',
  ],
  app_push_status_off_guide: [
    '해당 기기에서 알림을 사용하려면 기기 설정으로 이동하세요.',
    'Go to device settings to get notifications on this device.',
    's_mypage_noti.app_push_status_off_guide',
    '如想收到通知，请在手机设置中设置通知。',
    '如想於該裝置接收通知，請前往裝置設定。',
    '該当機器からのお知らせを使用する場合、機械設定に移動してください。',
    'Vào phần cài đặt của điện thoại để điều chỉnh thông báo.',
  ],
  app_push_status_on_guide: [
    '앱 푸시 알림 설정은 기기 설정에서 변경할 수 있습니다.',
    'Go to device settings to enable push notifications.',
    's_mypage_noti.app_push_status_on_guide',
    '软件推送通知设置，可在手机设置中更改。',
    '可於裝置設定變更APP推播通知設定。',
    'アプリプッシュのお知らせ設定は機械設定から変更することができます。',
    'Vào phần cài đặt của điện thoại để mở thông báo từ Ringle.',
  ],
  alarmsetting: [
    '알림 설정',
    'Notifications',
    's_mypage_noti.alarmsetting',
    '通知提示',
    '通知設定',
    'お知らせ設定',
    'Notifications',
  ],
  status_on: ['ON', 'ON', 's_mypage_noti.status_on', 'ON', 'ON', 'ON', 'BẬT'],
  status_off: [
    'OFF',
    'OFF',
    's_mypage_noti.status_off',
    'OFF',
    'OFF',
    'OFF',
    'TẮT',
  ],
  sms_kakao: [
    'SMS·알림톡',
    'Text/KakaoTalk',
    's_mypage_noti.sms_kakao',
    'SMS·短信通知',
    '簡訊·訊息通知',
    'SNS・お知らせトーク',
    'Tin nhắn/KakaoTalk',
  ],
  googlecalendar_guide: [
    '구글 가입 계정에 한하여 예약한 수업 일정을 구글 캘린더 초대장으로 받을 수 있습니다.',
    'Get calendar invites for scheduled lessons (only for users signed up with Google)',
    's_mypage_noti.googlecalendar_guide',
    '限于谷歌账号，可通过谷歌日历邀请函收到预约的课程。',
    '僅限使用Google註冊的帳戶可藉由Google日曆邀請接收預約的課程日程。',
    'グーグル加入に限り、予約したレッスンの日程はGoogleカレンダーの招待状から受け取ることができます。',
    'Nhận thông báo trên lịch cho những buổi học đã đặt (chỉ áp dụng cho học viên đăng ký bằng tài khoản Google)',
  ],
  creditinfo: {
    credit_point_info: [
      '수업권·포인트',
      'Credits & points',
      's_mypage_noti.creditinfo.credit_point_info',
      '课程券，积分',
      '課程券·點數',
      'レッスン券・ポイント',
      'Thẻ học & điểm',
    ],
    credit_info: [
      '수업권',
      'Credits',
      's_mypage_noti.creditinfo.credit_info',
      '课程券',
      '課程券',
      'レッスン券',
      'Thẻ học',
    ],
    credit_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.creditinfo.credit_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    credit_guide: [
      '수업권의 수강기간 만료 알림을 받을 수 있습니다.',
      'Get alerts for expiring credits',
      's_mypage_noti.creditinfo.credit_guide',
      '可收到课程券的课程期间到期通知。',
      '可接收課程券的聽課期間到期通知。',
      'レッスン券の受講期間満了のお知らせを受け取ることができます。',
      'Nhận thông báo khi thẻ học sắp hết hạn',
    ],
    point_info: [
      '포인트',
      'Points',
      's_mypage_noti.creditinfo.point_info',
      '积分',
      '點數',
      'ポイント',
      'Điểm',
    ],
    point_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.creditinfo.point_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    point_guide: [
      '포인트 적립과 만료 알림을 받을 수 있습니다.',
      'Get alerts for earned or expiring points',
      's_mypage_noti.creditinfo.point_guide',
      '可收到积分累积和积分到期通知。',
      '可接收點數累積與到期通知。',
      'ポイント確認のお知らせを受け取ることができます。',
      'Nhận thông báo khi có điểm mới hoặc điểm hết hạn',
    ],
  },
  lesson: {
    title: [
      '링글 1:1 수업',
      'Lessons',
      's_mypage_noti.lesson.title',
      'Ringle1：1课程',
      'Ringle 1:1課程',
      'リングル1対1レッスン',
      'Buổi học',
    ],
    lesson_issue: [
      '수업 관련 중요 업데이트',
      'Updates',
      's_mypage_noti.lesson.lesson_issue',
      '课程相关重要信息更新',
      '課程相關重要更新',
      'レッスン関連の主要をアップデート',
      'Những cập nhật mới',
    ],
    lesson_issue_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.lesson.lesson_issue_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    lesson_issue_guide: [
      '수업 관련 중요하게 업데이트된 알림(튜터 매칭, 튜터 수업 취소, 수업 지각 등)을 받을 수 있습니다. 하나 이상의 알림 채널을 꼭 설정해 주셔야 합니다.',
      'Get alerts for key updates to your lessons (tutor matching, cancellation, tardiness, etc.). Choose at least one notification channel.',
      's_mypage_noti.lesson.lesson_issue_guide',
      '课程相关重要信息通知（任课教师配对，任课教师课程取消，课程迟到等）。需设定一个一项的信息通知频道。',
      '可接收課程相關重要更新通知（任課教師配對、任課教師取消課程、課程遲到等），必須設定一個以上的通知頻道。',
      'レッスン関連の重要事項がアップデートされたお知らせ（チューターマッチング、チューターレッスンの取り消し、レッスンの遅刻など）を受け取ることができます。一つ以上のお知らせチャンネルを必ず設定しなければなりません。',
      'Nhận thông báo liên quan đến buổi học (sắp xếp gia sư, hủy, trễ giờ,...). Chọn ít nhất   Get alerts for key updates to your lessons (tutor matching, cancellation, tardiness, etc.). Chọn ít nhất một kênh thông báo.',
    ],
    lesson_reminder: [
      '수업 리마인더',
      'Lesson reminders',
      's_mypage_noti.lesson.lesson_reminder',
      '课程通知',
      '課程備忘錄',
      'レッスンのリマインダー',
      'Nhắc buổi học',
    ],
    lesson_reminder_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.lesson.lesson_reminder_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    lesson_reminder_guide: [
      '예정된 수업 리마인더 알림을 받을 수 있습니다.',
      'Get reminders for scheduled lessons',
      's_mypage_noti.lesson.lesson_reminder_guide',
      '可收到已预约的课程通知。',
      '可接收預定的課程備忘錄通知。',
      '予定されたレッスンのリマインダーを受け取ることができます。',
      'Nhận nhắc lịch học',
    ],
    lessonalarm_time: [
      '알림 시간',
      'Reminder time',
      's_mypage_noti.lesson.lessonalarm_time',
      '通知时间',
      '通知時間',
      'お知らせ時間',
      'Thời gian nhắc lịch',
    ],
    selectedtime1: [
      '고객 설정값',
      '',
      's_mypage_noti.lesson.selectedtime1',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    selectedtime2: [
      '고객 설정값',
      '',
      's_mypage_noti.lesson.selectedtime2',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    lesson_help: [
      '학습 활동',
      'Activities',
      's_mypage_noti.lesson.lesson_help',
      '学习活动',
      '學習活動',
      '学習活動',
      'Hoạt động',
    ],
    lesson_help_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.lesson.lesson_help_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    lesson_help_guide: [
      '학습 활동에 도움을 주는 알림(수업 독려, 복습 등)을 푸시로 받을 수 있습니다.',
      'Get push notifications for continued learning (for lesson review, booking, etc.)',
      's_mypage_noti.lesson.lesson_help_guide',
      '通过软件推送可收到有助于学习活动的通知（鼓励课程，复习等）。',
      '可透過推播通知接收有助於學習的通知（督促上課、複習等）。',
      '学習活動に役に立つお知らせ（レッスンの督励、復習など）をプッシュで受け取ることができます。',
      'Nhận thông báo điện thoại để tiếp tục học (đánh giá buổi học, đặt lịch,...)',
    ],
    tutorschedule: [
      '수업 스케줄 업데이트',
      'New lesson slots',
      's_mypage_noti.lesson.tutorschedule',
      '课程日程更新',
      '上課日程更新',
      'レッスンのスケジュールをアップデート',
      'Lịch học trống mới',
    ],
    tutorschedule_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.lesson.tutorschedule_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    tutorschedule_guide: [
      '새로 업데이트된 수업 스케줄 알림을 앱 푸시로 받을 수 있습니다.',
      'Get push notifications for new lesson slots',
      's_mypage_noti.lesson.tutorschedule_guide',
      '通过软件推送可收到课程日程更新通知。',
      '可透過APP推播通知接收剛更新的上課日程通知。',
      '新しくアップデートされたレッスンスケジュールのお知らせをアプリプッシュで受け取ることができます。',
      'Nhận thông báo điện thoại khi có lịch học mới',
    ],
    tutorschedule1: [
      '찜한 튜터 스케줄 업데이트',
      'Favorite tutors',
      's_mypage_noti.lesson.tutorschedule1',
      '收藏的任课教师课程更新',
      '我收藏的任課教師日程更新',
      'お気に入りにしたチューターのスケジュールをアップデート',
      'Gia sư yêu thích',
    ],
    tutorschedule1_guide: [
      '찜한 튜터의 일반 수업 및 24시간 이내 수업 업데이트를 받을 수 있습니다.',
      "Get alerts for your favorite tutors' new slots",
      's_mypage_noti.lesson.tutorschedule1_guide',
      '可收到收藏任课教师的课程及24小时以内课程更新通知。',
      '可接收我收藏的任課教師一般課程及24小時以內的課程更新。',
      'お気に入りにしたチューターの一般レッスン及び24時間以内のレッスンアップデートを受け取ることができます。',
      'Nhận thông báo khi gia sư yêu thích có lịch trống',
    ],
    tutorschedule2: [
      '24시간 이내 수업 업데이트',
      'Makeup lessons',
      's_mypage_noti.lesson.tutorschedule2',
      '24小时以内课程更新',
      '24小時以內的課程更新',
      '24時間以内のレッスンをアップデート',
      'Buổi học bù',
    ],
    tutorschedule2_guide: [
      '모든 튜터의 24시간 이내 수업 업데이트를 받을 수 있습니다.',
      'Get alerts for bookable lessons starting within 24 hours',
      's_mypage_noti.lesson.tutorschedule2_guide',
      '可收到所有任课教师的24小时以内的课程更新通知。',
      '可接收所有任課教師24小時以內的課程更新。',
      '全てのチューターの24時間以内のレッスンのアップデートを受け取ることができます。',
      'Nhận thông báo cho những buổi học bắt đầu trong 24 giờ tới',
    ],
    modal1: {
      title: [
        '알림 필수 항목',
        'Notification required',
        's_mypage_noti.lesson.modal1.title',
        '通知必要项目',
        '通知必要項目',
        '通知必須項目',
        'Thông báo bắt buộc',
      ],
      guide: [
        '하나 이상의 알림 채널을 꼭 설정해 주셔야 합니다',
        'Choose at least one notification channel.',
        's_mypage_noti.lesson.modal1.guide',
        '请务必设定一个以上的通知频道。',
        '必須設定一個以上的通知頻道。',
        '一つ以上のお知らせチャンネルを必ず設定しなければなりません。',
        'Chọn ít nhất một kênh thông báo.',
      ],
      ok: [
        '확인',
        'Confirm',
        's_mypage_noti.lesson.modal1.ok',
        '确认',
        '確定',
        '確認',
        'Xác nhận',
      ],
    },
  },
  content: {
    title: [
      '링글 콘텐츠',
      'Ringle content',
      's_mypage_noti.content.title',
      'Ringle内容',
      'Ringle內容',
      'リングルコンテンツ',
      'Nội dung Ringle',
    ],
    contentweekly: [
      'Content Weekly',
      'Content Weekly',
      's_mypage_noti.content.contentweekly',
      'Content Weekly',
      'Content Weekly',
      'Content Weekly',
      'Nội dung tuần',
    ],
    contentweekly_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.content.contentweekly_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    contentweekly_guide: [
      '매주 목요일에 링글 추천 콘텐츠를 이메일로 받을 수 있습니다.',
      "Get Ringle's best content in your inbox every Thursday",
      's_mypage_noti.content.contentweekly_guide',
      '可在每周四收到Ringle推荐的内容邮件。',
      '每週四可透過電子信箱接收Ringle推薦內容。',
      '毎週木曜日にリングルのお勧めコンテンツをイーメールで受け取ることができます。',
      'Gửi nội dung mới của Ringle vào email thứ 5 mỗi tuần',
    ],
    dailybrief: [
      'Daily Brief 업데이트',
      'Daily Brief updates',
      's_mypage_noti.content.dailybrief',
      'Daily Brief 更新',
      'Daily Brief更新',
      'デイリービリーフをアップデート',
      'Cập nhật Daily Brief',
    ],
    dailybrief_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.content.dailybrief_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    dailybrief_guide: [
      '매주 월-금요일에 링글 신규 콘텐츠를 앱 푸시로 받을 수 있습니다.',
      'Get push notifications for new releases every weekday',
      's_mypage_noti.content.dailybrief_guide',
      '每周一至周五可通过软件信息推送收到新的内容。',
      '每週一～五可透過APP推播通知接收Ringle全新內容。',
      '毎週月曜日から金曜日にリングル新規コンテンツをアプリプッシュで受け取ることができます。',
      'Nhận thông báo điện thoại nội dung mới mỗi tuần',
    ],
    dbalarm_time: [
      '고객 설정값',
      '',
      's_mypage_noti.content.dbalarm_time',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    timezone: [
      '고객 설정값',
      '',
      's_mypage_noti.content.timezone',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    selecteddbtime: [
      '고객 설정값',
      '',
      's_mypage_noti.content.selecteddbtime',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    ringlelive: [
      '링글 LIVE 리마인더',
      'Ringle LIVE',
      's_mypage_noti.content.ringlelive',
      'Ringle直播',
      'Ringle LIVE備忘錄',
      'リングルライブのリマインダー',
      'Ringle LIVE',
    ],
    ringlelive_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.content.ringlelive_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    ringlelive_guide: [
      '매주 진행되는 링글 LIVE 알림을 받을 수 있습니다.',
      'Get reminders for the weekly Ringle LIVE',
      's_mypage_noti.content.ringlelive_guide',
      '可收到Ringle每周进行的直播通知。',
      '可接收每週進行的Ringle LIVE通知。',
      '毎週行われるリングルライブのお知らせを受け取ることができます。',
      'Nhận thông báo Ringle LIVE mỗi tuần',
    ],
    modal1: {
      title: [
        'Content Weekly 구독 취소 사유',
        'Unsubscribe from Content Weekly',
        's_mypage_noti.content.modal1.title',
        'Content Weekly 取消关注理由',
        'Content Weekly訂閱取消原因',
        'Content Weekly購読取り消しの理由',
        'Hủy theo dõi Nội dung tuần',
      ],
      guide: [
        `그동안 Content Weekly를 구독해 주셔서 감사합니다.
구독을 취소하는 이유를 알려주세요. (복수 선택 가능)`,
        'Before you go, would you be willing to tell us why you want to unsubscribe? (Choose one or more)',
        's_mypage_noti.content.modal1.guide',
        `感谢您一直以来关注Content Weekly。
 请选择取消关注的理由。 (可多选)`,
        `感謝您一直以來訂閱Content Weekly，
請告訴我們取消訂閱的理由。（可複選）`,
        `今までContent Weeklyを購読していただきありがとうございます。
購読を取り消しする理由を教えてください。（複数選択可）`,
        'Trước khi hủy theo dõi, bạn có thể cho Ringle biết lí do tại sao không? (Có thể chọn nhiều đáp án)',
      ],
      category1: [
        '영어 공부에 관심이 없어졌습니다.',
        "I'm not interested in learning English anymore.",
        's_mypage_noti.content.modal1.category1',
        '对英语没有兴趣了。',
        '對英語學習不感興趣了。',
        `r
英語の勉強に関心がなくなりました。`,
        'Tôi không hứng thú với việc học tiếng Anh.',
      ],
      category2: [
        '링글 콘텐츠가 영어 공부나 인사이트 개발에 도움이 되지 않습니다.',
        'Ringle content is not very effective for learning English or building insights.',
        's_mypage_noti.content.modal1.category2',
        'Ringle内容对英语学习或Insight开发没有帮助。',
        'Ringle內容對學習英語或開發見解沒有幫助。',
        'リングルのコンテンツが英語の勉強やインサイトの開発に発展しませんでした。',
        'Nội dung của Ringle không mang lại hiệu quả trong việc học tiếng Anhs.',
      ],
      category3: [
        '시간이나 비용을 들이고 싶지 않습니다.',
        "I don't want to invest any time or money into Ringle content.",
        's_mypage_noti.content.modal1.category3',
        '不想花时间和费用。',
        '不想花時間或費用。',
        '時間や費用をかけたくありませんでした。',
        'Tôi không muốn bỏ tiền để đọc những nội dung của Ringle.',
      ],
      category4: [
        '다른 좋은 콘텐츠를 찾았습니다.',
        'I have found better content somewhere else.',
        's_mypage_noti.content.modal1.category4',
        '找到了其他好的项目。',
        '已找到其他好內容。',
        '他に良いコンテンツを探しました。',
        'Tôi tìm được những nguồn nội dung tốt hơn.',
      ],
      category5: [
        '기타',
        'Others',
        's_mypage_noti.content.modal1.category5',
        '其他',
        '其他',
        'その他',
        'Lí do khác',
      ],
      placeholder: [
        '무엇인지 알려주세요!',
        'Please specify.',
        's_mypage_noti.content.modal1.placeholder',
        '请写下详细内容。',
        '請告訴我們原因！',
        '理由を教えてください、',
        'Vui lòng nêu rõ.',
      ],
      submit: [
        '제출하기',
        'Submit',
        's_mypage_noti.content.modal1.submit',
        '提交',
        '提交',
        '提出する',
        'Gửi',
      ],
      cancel: [
        '닫기',
        'Close',
        's_mypage_noti.content.modal1.cancel',
        '关闭',
        '關閉',
        '閉じる',
        'Đóng',
      ],
      toast1: [
        'Content Weekly 구독 완료',
        'You have successfully subscribed to Content Weekly',
        's_mypage_noti.content.modal1.toast1',
        'Content Weekly 关注完毕',
        'Content Weekly訂閱成功',
        'Content Weeklyの購読を完了',
        'Bạn đã đăng ký theo dõi Nội dung tuần',
      ],
      toast2: [
        'Content Weekly 구독 취소 사유 제출완료',
        'You have successfully unsubcribed from Content Weekly',
        's_mypage_noti.content.modal1.toast2',
        'Content Weekly 取消关注理由提交完毕',
        '已提交Content Weekly訂閱取消原因',
        'Content Weeklyの購読取り消し理由の提出完了',
        'Bạn đã hủy theo dõi Nội dung tuần',
      ],
    },
  },
  alarm_time: [
    '고객 설정값',
    '',
    's_mypage_noti.alarm_time',
    '',
    '',
    'お客様の設定価格',
    '',
  ],
  newsnbenfit: {
    title: [
      '링글 소식 & 혜택',
      'News & promotions',
      's_mypage_noti.newsnbenfit.title',
      'Ringle消息&优惠',
      'Ringle消息 & 優惠',
      'リングルのお知らせ＆特典',
      'Tin tức & ưu đãi',
    ],
    ringlenewsletter: [
      '링글 뉴스레터',
      'Newsletters',
      's_mypage_noti.newsnbenfit.ringlenewsletter',
      'Ringle新闻',
      'Ringle電子報',
      'リングルのニュースレター',
      'Newsletter',
    ],
    ringlenewsletter_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.newsnbenfit.ringlenewsletter_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    ringlenewsletter_guide: [
      '격주 금요일에 링글 팀, 튜터, 수강생의 소식을 이메일로 받을 수 있습니다.',
      'Get our latest news in your inbox every other Friday',
      's_mypage_noti.newsnbenfit.ringlenewsletter_guide',
      '可在隔周周五，通过电子邮箱收到Ringle团队，任课教师，学生的消息。',
      '隔週週五可透過電子信箱接收Ringle團隊、任課教師、學生的消息。',
      '隔週金曜日にリングルチーム、チューター、受講生のお知らせをイーメールで受け取ることができます。',
      'Những tin tức mới nhất về Ringle mỗi thứ 6',
    ],
    marketinginfo: [
      '이벤트·혜택 알림',
      'Events & offers',
      's_mypage_noti.newsnbenfit.marketinginfo',
      '活动·优惠通知',
      '活動·優惠通知',
      'イベント・特典のお知らせ',
      'Sự kiện & ưu đãi',
    ],
    marketinginfo_chanel: [
      '고객 설정값',
      '',
      's_mypage_noti.newsnbenfit.marketinginfo_chanel',
      '',
      '',
      'お客様の設定価格',
      '',
    ],
    marketinginfo_guide: [
      '다양한 이벤트·혜택 알림을 받을 수 있습니다.',
      'Get alerts for new events and offers',
      's_mypage_noti.newsnbenfit.marketinginfo_guide',
      '可收到各种活动·优惠通知。',
      '可接收各種活動·優惠通知。',
      '多様なイベント・特典のお知らせを受け取ることができます。',
      'Nhận thông báo sự kiện và ưu đãi mới',
    ],
  },
};
export const s_notification = {
  webinar: [
    '시작되었거나 지난 웨비나입니다.',
    'This webinar is in progress or has ended.',
    's_notification.webinar',
    '是已开始或结束的网络研讨会。',
    '已開始或結束的網路研討會。',
    '開始、または終了したウェビナーです。',
    'Webinar này đang diễn ra hoặc đã kết thúc.',
  ],
  lesson: [
    '종료된 수업입니다.',
    'This is an old lesson.',
    's_notification.lesson',
    '是已结束的课程。',
    '已結束的課程。',
    '終了したレッスンです。',
    'Đây là buổi học cũ.',
  ],
  lesson_canceled: [
    '더 이상 수업이 존재하지 않습니다.',
    'This lesson does not exist.',
    's_notification.lesson_canceled',
    '已无课程。',
    '已無課程。',
    '存在しないレッスンです。',
    'Buổi học này không tồn tại.',
  ],
  daily_brief: [
    '지난 Daily Brief 입니다.',
    'This is an old Daily Brief.',
    's_notification.daily_brief',
    '是过去的Daily Brief。',
    '之前的Daily Brief。',
    '過去のDaily Briefです。',
    'Đây là Daily Brief cũ.',
  ],
  no_noti: [
    '수신한 알림이 없습니다.',
    'All notifications are turned off.',
    's_notification.no_noti',
    '无接收到的通知。',
    '無接收到的通知。',
    '受信した通知はありません。',
    'Đã tắt tất cả thông báo.',
  ],
};
export const s_purchase = {
  header: [
    '결제하기',
    'Purchase',
    's_purchase.header',
    '付款',
    '付款',
    '決済する',
    'Thanh toán',
  ],
  auth: [
    '본인인증',
    'Verify',
    's_purchase.auth',
    '身份验证',
    '身分驗證',
    '本人認証',
    'Xác minh',
  ],
  auth_desc: [
    '* 타인 명의 도용, 중복 가입 방지를 위해 본인을 인증합니다. 기재된 이름이 영수증에 표기됩니다.',
    '* Please verify to prevent fraud. Entered name will be shown on receipt.',
    's_purchase.auth_desc',
    '* 为防止盗用他人名义或重复注册，将进行身份验证。验证的姓名将标记在您的收据上。',
    '* 為防止盜用他人名義或重複註冊，進行身分驗證。收據上將標示記載的姓名。',
    '他人名義の盗用、重複登録防止のため、本人認証を行います。記載された氏名が領収証に表記されます。',
    '* Vui lòng xác minh để ngăn chặn gian lận. Tên được nhập sẽ thể hiện trên biên nhận.',
  ],
  name_ko: [
    '한글 이름',
    'Name',
    's_purchase.name_ko',
    '中文姓名',
    '中文姓名',
    '氏名（日本語）',
    'Tên',
  ],
  auth_phone: [
    '휴대폰 번호',
    'Phone number',
    's_purchase.auth_phone',
    '手机号码',
    '手機號碼',
    '携帯電話番号',
    'Số điện thoại',
  ],
  auth_placeholder: [
    '휴대폰 번호 (숫자만 입력해주세요)',
    'Phone number (digits only)',
    's_purchase.auth_placeholder',
    '手机号码（仅输入数字）',
    '手機號碼（僅輸入數字）',
    '携帯電話番号 (数字のみ入力してください。)',
    'Số điện thoại (chỉ nhập số)',
  ],
  order: [
    '주문상품',
    'Your cart',
    's_purchase.order',
    '订购商品',
    '訂購商品',
    '注文商品',
    'Giỏ hàng',
  ],
  lesson_credit: [
    '수업권명',
    'Package',
    's_purchase.lesson_credit',
    '课程券名称',
    '課程券名稱',
    'レッスンチケット名',
    'Gói',
  ],
  lesson_length: [
    '수업길이',
    'Duration',
    's_purchase.lesson_length',
    '课时',
    '課程長度',
    'レッスン時間',
    'Thời lượng',
  ],
  time: [
    '시간대',
    'Times',
    's_purchase.time',
    '时间段',
    '時段',
    '時間帯',
    'Thời gian',
  ],
  time_desc: [
    '수업 시작 기준입니다.',
    'Lesson starting times',
    's_purchase.time_desc',
    '以课程开始时间为准。',
    '以課程開始時間為準。',
    'レッスン開始基準です。',
    'Thời gian bắt đầu học',
  ],
  exp_dates: [
    '수강기간',
    'Expiration dates',
    's_purchase.exp_dates',
    '课期期限',
    '聽課期間',
    '受講期間',
    'Ngày hết hạn',
  ],
  exp_dates_desc: [
    '첫 수업시작 전까지 수강기간은 미차감됩니다.',
    'Calculated from the date you complete your first lesson using the purchased package.',
    's_purchase.exp_dates_desc',
    '首次课程开始前课程期限不被扣除',
    '首次課程開始之前，不扣除聽課期間。',
    '初回レッスン完了後から受講期間が始まります。',
    'Được tính từ ngày hoàn thành buổi học đầu tiên trong gói học đã thanh toán.',
  ],
  challenge: [
    '도전기간',
    'Challenge period',
    's_purchase.challenge',
    '挑战期间',
    '挑戰期間',
    '挑戦期間',
    'Thời gian thử thách',
  ],
  date: day => [
    `${day}일`,
    `${day} days`,
    's_purchase.date',
    `${day}天`,
    `${day}天`,
    `${day}日`,
    `${day} ngày`,
  ],
  challenge_desc: (day, count) => [
    `첫 수업 후 ${day}일내 정규 수업권 소진 시, +${count}회가 지급됩니다.`,
    `Use all your credits in ${day} days and get +${count} bonus lessons.`,
    's_purchase.challenge_desc',
    `如在首次课程后，在${day}天内用完正规课程券，将会发送+${count}次课程。`,
    `首次課程結束後，於${day}天內將正規課程券全數使用時，將發送+${count}次。`,
    `初回レッスン後、${day}日以内に正規レッスンチケット消費時、+${count}回が支給されます。`,
    `Sử dụng tất cả thẻ học trong ${day} ngày và nhận +${count} buổi học tặng thêm.`,
  ],
  point: [
    '포인트',
    'Points',
    's_purchase.point',
    '积分',
    '點數',
    'ポイント',
    'Điểm',
  ],
  point_have: [
    '보유 포인트',
    'Your points',
    's_purchase.point_have',
    '持有积分',
    '持有點數',
    '保有ポイント',
    'Điểm của bạn',
  ],
  use_all: [
    '모두 사용',
    'Use all',
    's_purchase.use_all',
    '全部使用',
    '全部使用',
    'すべて使用',
    'Sử dụng hết',
  ],
  point_limit: [
    '해당 수업권은 포인트 사용이 제한된 수업권입니다.',
    'You cannot use points towards this purchase.',
    's_purchase.point_limit',
    '该课程券为限制使用积分的课程券。',
    '該課程券為限制使用點數的課程券。',
    'このレッスンチケットは、ポイント使用が制限されたレッスンチケットです。',
    'Bạn không thể sử dụng điểm cho thanh toán này.',
  ],
  price: [
    '결제금액',
    'Subtotal',
    's_purchase.price',
    '付款金额',
    '付款金額',
    '決済金額',
    'Tổng',
  ],
  normal_price: [
    '정가',
    'Regular price',
    's_purchase.normal_price',
    '定价',
    '定價',
    '定価',
    'Giá tiêu chuẩn',
  ],
  discount_price: [
    '총 할인 금액',
    'Total discount',
    's_purchase.discount_price',
    '总折扣金额',
    '總折扣金額',
    '合計割引金額',
    'Tổng giảm giá',
  ],
  won: price => [
    `${price}원`,
    `$${price}`,
    's_purchase.won',
    `$${price}元`,
    `$${price}`,
    `$${price}`,
    `$${price}`,
  ],
  total_price: [
    '최종 결제 금액',
    'Your total',
    's_purchase.total_price',
    '最终付款金额',
    '最終付款金額',
    '最終決済金額',
    'Tổng cộng',
  ],
  method: [
    '결제방식',
    'Payment method',
    's_purchase.method',
    '付款方式',
    '付款方式',
    '決済方法',
    'Phương thức thanh toán',
  ],
  domesticPayment: [
    '국내 결제 방식',
    '',
    's_purchase.domesticPayment',
    '韩国国内付款方式',
    '韓國國內付款方式',
    '国内決済方法',
    '',
  ],
  normalPayment: [
    '카드 일반 결제',
    'Pay with credit card',
    's_purchase.normalPayment',
    '信用卡一般付款',
    '信用卡一般付款',
    'カード一般決済',
    'Trả bằng thẻ tín dụng',
  ],
  directPayment: [
    '카드 직접 입력',
    'Enter card information',
    's_purchase.directPayment',
    '银行卡直接输入',
    '手動輸入信用卡',
    'カード直接入力',
    'Nhập thông tin thẻ',
  ],
  samsungPayment: [
    '삼성페이',
    'SamsungPay',
    's_purchase.samsungPayment',
    'Samsung Pay',
    'Samsung Pay',
    'Samsung Pay',
    'SamsungPay',
  ],
  virtual_account: [
    '무통장 입금',
    'Wire Transfer',
    's_purchase.virtual_account',
    '无存折付款',
    '無摺存款',
    '口座振込',
    'Chuyển khoản',
  ],
  bank_transfer: [
    '계좌이체 방식',
    'Account Transfer',
    's_purchase.bank_transfer',
    '转账方式',
    '轉帳方式',
    '口座振替方式',
    'Account Transfer',
  ],
  internationalPayment: [
    '해외 카드 결제',
    'Pay with credit card',
    's_purchase.internationalPayment',
    '海外信用卡付款',
    '海外信用卡付款',
    '海外カード決済',
    'Trả bằng thẻ tín dụng',
  ],
  dollarPayment: [
    '미국 달러로 결제',
    'Pay in USD',
    's_purchase.dollarPayment',
    '美金付款',
    '美元付款',
    'アメリカドルで決済',
    'Trả USD',
  ],
  paypal: [
    '* Paypal 사용',
    '* via Paypal',
    's_purchase.paypal',
    '* 使用Paypal',
    '* 使用PayPal',
    '* PayPal使用',
    '* qua Paypal',
  ],
  purchase_agreement: [
    <>
      결제 내역을 확인하였으며{' '}
      <View primary underline>
        전자상거래법 및 링글 정책
      </View>
      에 의거하여 환불이 진행되는 것에 동의합니다.
    </>,
    <>
      I confirm my purchase and agree to{' '}
      <View primary underline>
        Ringle's terms and conditions
      </View>
      .
    </>,
    's_purchase.purchase_agreement',
    <>
      已确认付款明细，同意依据{' '}
      <View primary underline>
        电子商务交易法及Ringle政策
      </View>
      进行退款。{' '}
    </>,
    <>
      已確認付款明細，同意依據{' '}
      <View primary underline>
        電子商務交易法及Ringle政策
      </View>
      進行退款。
    </>,
    <>
      決済履歴を確認し、{' '}
      <View primary underline>
        電子商取引法およびRingleポリシー
      </View>
      に基づいて返金が行われることに同意します。
    </>,
    <>
      Tôi xác nhận thanh toán của mình và đồng ý với{' '}
      <View primary underline>
        Điều khoản và điều kiện của Ringle
      </View>
      .
    </>,
  ],
  purchase: [
    '결제하기',
    'Submit',
    's_purchase.purchase',
    '付款',
    '付款',
    '決済する',
    'Gửi',
  ],
  auth_after: [
    '본인인증 완료',
    'Verified',
    's_purchase.auth_after',
    '身份验证成功',
    '身分驗證成功',
    '本人認証完了',
    'Đã xác minh',
  ],
  auth_desc_after: [
    '*이미 인증이 완료되었습니다. 기재된 이름이 영수증에 표기됩니다.',
    '*Verified. Entered name will be shown on receipt.',
    's_purchase.auth_desc_after',
    '*已验证成功，验证的姓名将标记在您的收据上。',
    '*已驗證成功，收據上將標示記載的姓名。',
    '*すでに認証が完了しています。記載された氏名が領収証に表記されます。',
    '*Xác minh. Tên đã nhập sẽ hiện trên biên nhận.',
  ],
  naver: [
    '네이버페이',
    'NaverPay',
    's_purchase.naver',
    'Naver Pay',
    'Naver Pay',
    'NaverPay',
    'NaverPay',
  ],
  kakao: [
    '카카오페이',
    'KakaoPay',
    's_purchase.kakao',
    'Kakao Pay',
    'Kakao Pay',
    'KakaoPay',
    'KakaoPay',
  ],
  payco: [
    '페이코',
    'PayCo',
    's_purchase.payco',
    'PAYCO',
    'PAYCO',
    'PAYCO',
    'PayCo',
  ],
  installations: [
    '분할 결제',
    '',
    's_purchase.installations',
    '分期付款',
    '分批付款',
    '分割払い',
    '',
  ],
  by_two: [
    '2개 카드 결제',
    '',
    's_purchase.by_two',
    '两卡付款',
    '2張信用卡付款',
    '2枚のカードで決済',
    '',
  ],
  only_domestic: [
    '국내 카드만 가능',
    '',
    's_purchase.only_domestic',
    '仅限韩国信用卡',
    '僅支援韓國國內信用卡',
    '国内カードのみ可能',
    '',
  ],
  minutes: minute => [
    `${minute}분`,
    `${minute} minutes`,
    's_purchase.minutes',
    `${minute}分钟`,
    `${minute}分鐘`,
    `${minute}分`,
    `${minute} phút`,
  ],
  count: count => [
    `${count}회 수업`,
    `${count} Lessons`,
    's_purchase.count',
    `${count}次课程`,
    `${count}次課程`,
    `${count}回レッスン`,
    `${count} Buổi học`,
  ],
  enter_your_name: [
    '이름을 입력해주세요.',
    'Please enter your name',
    's_purchase.enter_your_name',
    '请输入姓名',
    '請輸入姓名。',
    '氏名を入力してください。',
    'Nhập tên bạn',
  ],
  no_credits: [
    '해당되는 수업권이 없습니다.',
    'There are no valid credit(s).',
    's_purchase.no_credits',
    '无适用的课程券。',
    '無適用的課程券。',
    '該当するレッスンチケットがありません。',
    'Không có thẻ học hợp lệ.',
  ],
  use_point: [
    '포인트 사용',
    'Points applied',
    's_purchase.use_point',
    '使用积分',
    '使用點數',
    'ポイント使用',
    'Điểm áp dụng',
  ],
};
export const s_purchase_completed = {
  done: [
    '결제완료',
    'Complete',
    's_purchase_completed.done',
    '付款成功',
    '付款成功',
    '決済完了',
    'Hoàn thành',
  ],
  done_desc: name => [
    <>
      {name}님{'\n'}
      <View primary>결제 완료</View>되었습니다.{'\n'}
      이제 링글 수업을 시작해보세요!
    </>,
    <>
      Hi {name}
      {'\n'}
      <View primary>Congrats!</View> We received your payment.{'\n'}
      Book your lessons now!
    </>,
    's_purchase_completed.done_desc',
    <>
      {name}
      {'\n'}
      <View primary>付款成功</View>。 {'\n'}
      立即开始您的Ringle课程吧！
    </>,
    <>
      {name}
      {'\n'}
      <View primary>付款成功</View>。{'\n'}
      現在就開始Ringle課程吧！
    </>,
    <>
      {name}さん{'\n'}
      <View primary>決済が完了</View>しました。{'\n'}
      Ringleのレッスンを始めましょう！
    </>,
    <>
      Xin chào {name}
      {'\n'}
      <View primary>Chúc mừng!</View> Chúng tôi nhận được thanh toán của bạn.
      {'\n'}
      Đặt học ngay bây giờ!
    </>,
  ],
  purchase_info: [
    '결제 내역',
    'Purchase history',
    's_purchase_completed.purchase_info',
    '付款明细',
    '付款明細',
    '決済履歴',
    'Lịch sử thanh toán',
  ],
  point_use: [
    '포인트 사용 내역',
    'Points history',
    's_purchase_completed.point_use',
    '积分使用明细',
    '點數使用明細',
    'ポイント使用履歴',
    'Lịch sử điểm',
  ],
  total: [
    '최종 결제 금액',
    'Your total',
    's_purchase_completed.total',
    '最终付款金额',
    '最終付款金額',
    '最終決済金額',
    'Tổng cộng',
  ],
  order: [
    '주문상품',
    'Your cart',
    's_purchase_completed.order',
    '订购商品',
    '訂購商品',
    '注文商品',
    'Giỏ hàng của bạn',
  ],
  lesson_credit: [
    '수업권명',
    'Package',
    's_purchase_completed.lesson_credit',
    '课程券名称',
    '課程券名稱',
    'レッスンチケット名',
    'Gói học',
  ],
  lesson_length: [
    '수업길이',
    'Duration',
    's_purchase_completed.lesson_length',
    '课时',
    '課程長度',
    'レッスン時間',
    'Thời lượng',
  ],
  half: [
    '20분',
    '20분',
    's_purchase_completed.half',
    '20分钟',
    '20分鐘',
    '20分',
    '20 phút',
  ],
  full: [
    '40분',
    '40분',
    's_purchase_completed.full',
    '40分钟',
    '40分鐘',
    '40分',
    '40 phút',
  ],
  exp_dates: [
    '시간대',
    'Times',
    's_purchase_completed.exp_dates',
    '时间段',
    '時段',
    '時間帯',
    'Thời gian',
  ],
  exp_dates_desc: [
    '수업 시작 시간 기준입니다.',
    '수업 시작 시간 기준입니다.',
    's_purchase_completed.exp_dates_desc',
    '以课程开始时间为准。',
    '以課程開始時間為準。',
    'レッスン開始時間基準です。',
    'Thời gian bắt đầu học',
  ],
  duration: [
    '수강기간',
    'Expiration dates',
    's_purchase_completed.duration',
    '听课期间',
    '聽課期間',
    '受講期間',
    'Ngày hết hạn',
  ],
  duration_desc: [
    '첫 수업시작 전까지 수강기간은 미차감됩니다.',
    'Calculated from the date you complete your first lesson using the purchased package.',
    's_purchase_completed.duration_desc',
    '首次课程开始前课程期限不被扣除',
    '首次課程開始之前，不扣除聽課期間。',
    '初回レッスン完了後から受講期間が始まります。',
    'Được tính từ ngày hoàn thành buổi học đầu tiên trong gói học đã thanh toán.',
  ],
  challenge: [
    '도전기간',
    'Challenge period',
    's_purchase_completed.challenge',
    '挑战期间',
    '挑戰期間',
    '挑戦期間',
    'Thời gian thử thách',
  ],
  challenge_desc: (day, count) => [
    `첫수업 후 ${day}일내 정규 수업권 소진 시, +${count}회가 지급됩니다.`,
    `Use all your credits in ${day} days and get +${count} bonus lessons.`,
    's_purchase_completed.challenge_desc',
    `如在首次课程后，在${day}天内用完正规课程券，将会发送+${count}次课程。`,
    `首次課程結束後，於${day}天內將正規課程券全數使用時，將發送+${count}次。`,
    `初回レッスン後、${day}日以内に正規レッスンチケット消費時、+${count}回が支給されます。`,
    `Sử dụng hết thẻ học trong ${day} ngày và nhận +${count} buổi học tặng thêm.`,
  ],
  receipt_certificate: [
    '영수증/출석증은 PC에서 오른쪽 상단 프로필 > 수업권/증명서류 탭에서 PDF로 다운로드 가능합니다.',
    'You can download your lesson certificates & proof of attendance under Credits.',
    's_purchase_completed.receipt_certificate',
    '收据／出席证明可在电脑版右上方的简介 > 课程券／证明分页下载PDF文件。',
    '收據／出席證明可於電腦版右上方的簡介 > 課程券／證明分頁下載PDF檔。',
    '領収証/出席証はPCの右上のプロフィール > レッスンチケット/証明書類タブからPDFでダウンロード可能です。',
    'Bạn có thể tải chứng nhận buổi học & chứng nhận tham gia dưới mục Thẻ học.',
  ],
  new_to_ringle: [
    '링글 수업 전 꼭 확인해 주세요!',
    "Don't have a Ringle account?",
    's_purchase_completed.new_to_ringle',
    '您第一次使用Ringle吗？',
    '您第一次使用Ringle嗎？',
    'Ringleは初めてですか？',
    'Bạn không có tài khoản Ringle?',
  ],
  go_to_home: [
    '홈으로 가기',
    'Home',
    's_purchase_completed.go_to_home',
    '前往首页',
    '前往首頁',
    'ホームに移動',
    'Trang chủ',
  ],
  schedule: [
    '수업 예약하기',
    'Book Lessons',
    's_purchase_completed.schedule',
    '预约课程',
    '預約課程',
    'レッスンを予約する',
    'Đặt lịch học',
  ],
  minutes: minute => [
    `${minute}분`,
    `${minute} min`,
    's_purchase_completed.minutes',
    `${minute}分钟`,
    `${minute}分鐘`,
    `${minute}分`,
    `${minute} phút`,
  ],
  date: day => [
    `${day}일`,
    `${day} days`,
    's_purchase_completed.date',
    `${day}天`,
    `${day}天`,
    `${day}日`,
    `${day} ngày`,
  ],
  time_desc: [
    '수업 시작 기준입니다.',
    'Lesson starting times',
    's_purchase_completed.time_desc',
    '以课程开始时间为准。',
    '以課程開始時間為準。',
    'レッスン開始基準です。',
    'Thời gian bắt đầu học',
  ],
  existing_customer: [
    '링글 수업, 이렇게도 활용할 수 있어요!',
    '',
    's_purchase_completed.existing_customer',
    '',
    '',
    '',
    '',
  ],
  go_to_OT: [
    'OT 신청하기',
    '',
    's_purchase_completed.go_to_OT',
    '',
    '',
    '',
    '',
  ],
  go: [
    '바로가기',
    'Go',
    's_purchase_completed.go',
    '立即前往',
    '立即前往',
    '移動',
    'Go',
  ],
};
export const s_trial_completed = {
  header: [
    '20분 체험 수업 신청 완료',
    '20min Trial Lesson',
    's_trial_completed.header',
    '20分钟体验课程申请成功',
    '20分鐘體驗課程申請完成',
    '20分の体験レッスン予約完了',
    '20 phút học thử',
  ],
  completed: name => [
    <View>
      {`${name}`}님{'\n'}
      <View primary>체험 수업 신청 완료</View>되었습니다.
    </View>,
    <View>
      Congrats {`${name}`}!{'\n'}
      <View primary>You booked your trial lesson</View>.
    </View>,
    's_trial_completed.completed',
    <View>
      {`${name}`}的{'\n'}
      <View primary>体验课程申请成功</View>。{' '}
    </View>,
    <View>
      {`${name}`}的{'\n'}
      <View primary>體驗課程申請完成</View>。
    </View>,
    <View>
      {`${name}`}さん{'\n'}
      <View primary>体験レッスンの予約が完了</View>しました。
    </View>,
    <View>
      Chúc mừng {`${name}`}!{'\n'}
      <View primary>Bạn đã đặt buổi học thử</View>.
    </View>,
  ],
  check_guide: [
    '자세한 체험 수업 가이드를 확인하고 싶다면?',
    'How Ringle works',
    's_trial_completed.check_guide',
    '如想查看详细的体验课程指南？',
    '如果想確認詳細的體驗課程指南？',
    '詳しい体験レッスンガイドを確認したいなら？',
    'Cách Ringle hoạt động',
  ],
  time_completed: [
    '시간',
    'Date & Time',
    's_trial_completed.time_completed',
    '时间',
    '時間',
    '時間',
    'Ngày & Giờ',
  ],
  material_completed: [
    '교재',
    'Materials',
    's_trial_completed.material_completed',
    '教材',
    '教材',
    '教材',
    'Tài liệu',
  ],
  automaching: [
    '체험 수업 시 튜터는 자동으로 매칭됩니다.',
    "We'll match you to a tutor",
    's_trial_completed.automaching',
    '进行体验课程时，将自动匹配任课教师。',
    '進行體驗課程時，將自動配對任課教師。',
    '体験レッスン時、チューターは自動的にマッチングされます。',
    'Chúng tôi sẽ xếp cho bạn một gia sư',
  ],
  checking_three: [
    '링글 체험 수업 전 준비 사항 3가지',
    'Prep for your lesson in 3 steps',
    's_trial_completed.checking_three',
    '进行Ringle体验课程前的3大准备事项',
    '進行Ringle體驗課程前的3大準備事項',
    'Ringle体験レッスン前に準備すること3つ',
    'Chuẩn bị buổi học trong 3 bước',
  ],
  step_one: [
    'Step1. 교재 읽기 / 질문 선택',
    'Step1. Read Materials & Select Questions',
    's_trial_completed.step_one',
    'Step1. 阅读教材／选择问题',
    'Step1. 閱讀教材／選擇提問',
    'Step1. 教材を読む / 質問選択',
    'Bước 1. Đọc tài liệu & Chọn câu hỏi',
  ],
  step_two: [
    'Step2. 1:1 맞춤 수업 설정',
    'Step2. Set Lesson Styles',
    's_trial_completed.step_two',
    'Step2. 设定1:1专用课程',
    'Step2. 設定1:1客製化課程',
    'Step2. 1:1カスタマイズレッスン設定',
    'Bước 2. Chọn hình thức học',
  ],
  step_three: [
    'Step3. 카메라가 설치된 PC로 수업을 입장해주세요',
    'Step3. Enter Lesson with Camera On',
    's_trial_completed.step_three',
    'Step3. 请使用配备摄像头的电脑进入课程',
    'Step3. 使用附有相機的電腦進入課程',
    'Step3. カメラがあるPCでレッスンに入室してください。',
    'Bước 3. Bật camera và vào học',
  ],
  step_one_desc: [
    '교재를 미리 읽어보고, 수업에서 다룰 질문을 선택한 후 답변을 준비해보세요.',
    "Read your materials and choose which questions you'd like your tutor to ask you.",
    's_trial_completed.step_one_desc',
    '请提前阅读教材，选择课程上要讨论的问题，并准备好答案。',
    '請事先閱讀教材，選擇上課時要討論的提問後，準備回覆內容。',
    '教材を事前に読み、レッスンで扱う質問を選択して回答を準備しましょう。',
    'Đọc tài liệu của bạn và chọn câu hỏi mà bạn muốn gia sư hỏi.',
  ],
  step_two_desc: [
    '집중적으로 교정 받고 싶은 영역을 선택하여 나만의 수업을 만들어보세요.',
    'Customize your lesson by selecting your correction areas.',
    's_trial_completed.step_two_desc',
    '通过选择您想要关注的部分来创建属于自己的课程吧！',
    '選擇希望集中糾正的領域，打造專屬於自己的課程吧！',
    '集中的に校正してもらいたい分野を選択し、自分だけのレッスンを作りましょう。',
    'Tuỳ chỉnh buổi học bằng cách chọn phần bạn muốn tập trung sửa lỗi.',
  ],
  step_three_desc: [
    `홈페이지 로그인 후, 
[1:1 수업] - [예습 & 수업]을 통해 15분 전 수업 입장 가능합니다`,
    'Sign in to Ringle and go to 1:1 Lessons -> Prep & Lesson and enter up to 15 minutes before the lesson.',
    's_trial_completed.step_three_desc',
    `网页登录后，
 可在15分钟前通过[1:1课程] - [预习 & 课程]进入课程`,
    `網頁登入後，
可於15分鐘前透過[1:1課程] - [預習 & 課程]進入課程`,
    `ホームページにログイン後、
[1:1レッスン] - [予習 & レッスン]から15分前にレッスン入室可能です。`,
    'Đăng nhập vào Ringle và vào buổi học 1:1 -> Chuẩn bị & Buổi học và vào lớp 15 phút trước khi buổi học bắt đầu.',
  ],
  step_one_detail: [
    '교재 듣기 MP3, 핵심표현 등 다양한 자료를 수업 전 확인 가능합니다.',
    'Also check out key expressions and related videos & news!',
    's_trial_completed.step_one_detail',
    '可在课程开始前确认教材聆听MP3、核心用法等各种资料。',
    '可於課程開始前聆聽教材MP3，並確認核心用法等各種資料。',
    '教材のMP3ファイル、キーフレーズなど、さまざまな資料をレッスン前に確認可能です。',
    'Đừng quên kiểm tra những mẫu câu chính và video & tin tức liên quan!',
  ],
  step_two_detail: [
    `체험 수업은 각 질문에 대한 대화가 끝난 후 교정받는 방식으로 진행합니다.
정규 수업에서는 토론 중심 수업 설정 가능합니다.`,
    'Your trial lesson will be comprised of 15-minute discussion and 5-minute corrections.',
    's_trial_completed.step_two_detail',
    `体验课程将以对每个问题的对话结束后进行纠正的方式进行。
 进行正规课程时，可设定以讨论为中心的课程。`,
    `進行體驗課程時，在針對各提問結束對話後，以糾正方式進行。
進行正規課程時，可設定以討論為主的課程。`,
    `体験レッスンは各質問の会話が終わった後に校正してもらう方式で行われます。
正規レッスンでは、ディスカッション中心レッスンの設定が可能です。`,
    'Buổi học thử gồm 15 phút thảo luận và 5 phút sửa lỗi.',
  ],
  step_three_detail: [
    '교재/실시간 교정화면은 모바일 환경에서 제한적으로 보일 수 있습니다.',
    'You may not see real-time corrections if you join via mobile.',
    's_trial_completed.step_three_detail',
    '在手机环境中查看教材/实时纠正画面，可能会有所限制。',
    '使用手機觀看教材／即時糾正畫面時可能有所限制。',
    '教材/リアルタイム校正画面は、モバイル環境で制限的に表示されることがあります。',
    'Bạn có thể không thấy việc sửa lỗi trực tiếp nếu học bằng điện thoại.',
  ],
  before_lesson: [
    '수업 전 알아두세요',
    'Please note:',
    's_trial_completed.before_lesson',
    '课程开始前请知晓！',
    '課程開始前請注意！',
    'レッスン前にご確認ください。',
    'Vui lòng lưu ý:',
  ],
  before_one: [
    'PC로 수업 입장을 권장드리며, Zoom 프로그램 설치가 필요합니다.',
    'Please install Zoom prior to lesson and enter lesson via web browser.',
    's_trial_completed.before_one',
    '建议使用电脑进入课程，需安装Zoom软体。',
    '建議使用電腦進入課程，並需安裝Zoom軟體。',
    'PCでのレッスン入室を推奨しており、Zoomのインストールが必要です。',
    'Vui lòng cài đặt Zoom trước buổi học và vào lớp bằng trình duyệt web.',
  ],
  before_two: [
    '수업 후 제공되는 수업 녹음 파일 / 스크립트 / AI 분석 / 튜터 피드백으로 복습 가능합니다.',
    'You can review lesson using lesson recording, audio transcript, AI analysis and tutor feedback.',
    's_trial_completed.before_two',
    '可利用课程结束后提供的课程录音文件／脚本／AI分析／任课教师反馈进行复习。',
    '可利用課程結束後提供的課程錄音檔／腳本／AI分析／任課教師意見回饋進行複習。',
    'レッスン後に提供されるレッスン録音ファイル / スクリプト / AI分析 / チューターフィードバックで復習可能です。',
    'Bạn có thể xem lại buổi học bằng ghi âm buổi học, bản ghi thoại, phân tích AI và đánh giá gia sư.',
  ],
  before_three: [
    '교재/ 체험 수업 시간 변경 및 취소는 수업 시작 24시간 이전까지 가능합니다.',
    'You may reschedule or change materials up to 24 hours before the lesson.',
    's_trial_completed.before_three',
    '最晚可在课程开始24小时前修改或取消教材／体验课程时间。',
    '最晚可於課程開始24小時前變更或取消教材／體驗課程時間。',
    '教材/体験レッスンの時間変更およびキャンセルは、レッスン開始24時間前まで可能です。',
    'Bạn có thể dời lịch hoặc đổi tài liệu tối thiểu 24 giờ trước buổi học.',
  ],
  before_three_gray: [
    '*수업 시작 24시간 이내 변경 및 취소 희망 시 오른쪽 하단 채널톡을 통해 연락 바랍니다.',
    '*If you need to reschedule or change materials in less than 24 hours before the lesson, please contact us.',
    's_trial_completed.before_three_gray',
    '*在课程开始前24小时以内希望修改或取消时，请通过右下方的Channel Talk联系我们。',
    '*於課程開始前24小時以內希望變更或取消時，請透過右下方的聊天聯絡我們。',
    '*レッスン開始24時間以内の変更およびキャンセルをご希望の際は、右下のチャネルトークからご連絡ください。',
    '*Nếu bạn cần dời lịch hoặc đổi tài liệu trong 24 giờ trước buổi học, vui lòng liên hệ với chúng tôi.',
  ],
  web_recommended: [
    '(PC / 노트북 사용 권장)',
    'Please enter via web browser',
    's_trial_completed.web_recommended',
    '（建议使用台式电脑／笔记本电脑）',
    '（建議使用桌上型電腦／筆電）',
    '(PC / ノートパソコンの使用推奨)',
    'Vui lòng vào bằng trình duyệt web',
  ],
  go_home: [
    '홈으로 가기',
    'Home',
    's_trial_completed.go_home',
    '前往首页',
    '前往首頁',
    'ホームに移動',
    'Trang chủ',
  ],
  button: [
    '체험 수업 준비하기',
    'Lesson Prep',
    's_trial_completed.button',
    '准备体验课程',
    '準備體驗課程',
    '体験レッスンを準備する',
    'Chuẩn bị Buổi học',
  ],
};
export const s_portal_webinar = {
  lucky_draw_title: [
    'Live Lucky Draw Event',
    'Live Lucky Draw Event',
    's_portal_webinar.lucky_draw_title',
    'Live Lucky Draw Event',
    'Live Lucky Draw Event',
    'Live Lucky Draw Event',
    'Sự kiện rút thăm may mắn trực tiếp',
  ],
  lucky_draw_desc: [
    '라이브 웨비나에 참여하고 푸짐한 상품도 받아가세요! 활발히 답변, 샘플 기여해주신 분들께는 추첨을 통해 20분 수업권/ 스타벅스 커피 쿠폰/ 링글 포인트 5,000점 획득의 기회가 주어집니다.',
    "Don't miss out on our LIVE Webinar Lucky Draw Event! Just by participating and voila, you are in for a chance to win a 20 minutes 1:1 Lesson Credit, Starbucks Coffee Gift Card, and $4.31 Ringle Points!",
    's_portal_webinar.lucky_draw_desc',
    '参与网络研讨会直播，赢取丰厚奖品吧！积极回答，贡献样品者将有机会通过抽奖方式赢取20分钟课程券／Ringle$4.31积分。',
    '參與即時網路研討會，領取豐富的獎勵吧！透過抽獎，積極回覆的人將有機會獲得20分鐘課程券／Ringle點數$4.31P。',
    '',
    'Đừng bỏ lỡ sự kiện Rút thăm may mắn trên Ringle LIVE! Tham gia là có ngay cơ hội trúng thẻ học 20 phút 1:1, và $4.31 điểm Ringle!',
  ],
  lucky_draw_enroll: [
    '이벤트 참여',
    'Enter Event',
    's_portal_webinar.lucky_draw_enroll',
    '参与活动',
    '參與活動',
    'イベント参加',
    'Vào sự kiện',
  ],
  related_material: [
    '관련 교재',
    'Related Materials',
    's_portal_webinar.related_material',
    '相关教材',
    '相關教材',
    '関連教材',
    'Tài liệu liên quan',
  ],
  related_article: [
    '관련 기사',
    'Related News',
    's_portal_webinar.related_article',
    '相关新闻报道',
    '相關報導',
    '関連記事',
    'Tin tức liên quan',
  ],
  related_video: [
    '관련 영상',
    'Related Videos',
    's_portal_webinar.related_video',
    '相关视频',
    '相關影片',
    '関連動画',
    'Video liên quan',
  ],
  speed: [
    '재생 속도',
    'Playback Speed',
    's_portal_webinar.speed',
    '加载速度',
    '播放速度',
    '再生速度',
    'Tốc độ phát lại',
  ],
};
export const s_menu = {
  see_preparation: [
    '예습 페이지 보기',
    'Lesson Prep',
    's_menu.see_preparation',
    '查看预习页面',
    '查看預習頁面',
    '予習ページを見る',
    'Chuẩn bị Buổi học',
  ],
  sir: ['님', '님', 's_menu.sir', '先生／小姐', '先生／小姐', 'さん', ''],
  mypage: {
    timezone_language: [
      <>타임존 & 언어</>,
      <>Time zone & language</>,
      's_menu.mypage.timezone_language',
      <>时区 & 语言</>,
      <>時區 & 語言</>,
      <>タイムゾーン & 言語</>,
      <>Múi giờ & ngôn ngữ</>,
    ],
    change: [
      '변경',
      'Update',
      's_menu.mypage.change',
      '变更',
      '變更',
      '変更',
      'Cập nhật',
    ],
    account: [
      '계정',
      'Account',
      's_menu.mypage.account',
      '账户',
      '帳戶',
      'アカウント',
      'Tài khoản',
    ],
  },
};
export const s_portal_home = {
  unlike: [
    '찜하기 해제',
    'Remove from Favorites',
    's_portal_home.unlike',
    '取消收藏',
    '取消收藏',
    'お気に入り削除',
    'Bỏ khỏi Yêu thích',
  ],
  title_ot: [
    '오리엔테이션 신청하기',
    'Register Orientation',
    's_portal_home.title_ot',
    'Register Orientation',
    'Register Orientation',
    'Register Orientation',
    'Register Orientation',
  ],
  subtitle_ot: [
    '링글 수업 200% 활용법',
    'Make the best of Ringle',
    's_portal_home.subtitle_ot',
    'Make the best of Ringle',
    'Make the best of Ringle',
    'Make the best of Ringle',
    'Make the best of Ringle',
  ],
  purchase_welcome: [
    <>
      신규회원 <View secondary>웰컴쿠폰</View>
    </>,
    <View secondary>Welcome Coupon</View>,
    's_portal_home.purchase_welcome',
    '首次购买优惠',
    '首次購買折扣優惠',
    '初回購入割引特典',
    'Ưu đãi cho lần thanh toán đầu tiên',
  ],
  benefit_3: [
    '30,000원 추가 할인(20만원 이상 구매 시)',
    'Extra $25 Off(for packages $169 or more)',
    's_portal_home.benefit_3',
    '',
    '',
    '',
    '',
  ],
  gnb: {
    welcome_coupon: day => [
      <>
        신규회원 한정 3만원 웰컴쿠폰이 <View bold>{day}</View> 사라집니다
      </>,
      <>
        Last {day} for <View bold>$25 off welcome offers</View>
      </>,
      's_portal_home.gnb.welcome_coupon',
      '',
      '',
      '',
      '',
    ],
  },
  popup: {
    welcome_coupon: {
      title_1: [
        '신규회원 한정',
        'Welcome Gift',
        's_portal_home.popup.welcome_coupon.title_1',
        '',
        '',
        '',
        '',
      ],
    },
  },
};
export const s_evaluation = {
  help: [
    '지원 요청',
    'Help',
    's_evaluation.help',
    '要求支援',
    '要求支援',
    'サポートリクエスト',
    'Hỗ trợ',
  ],
  refer_btn_1: [
    '한 달간 보지 않기',
    'Remind me in a month',
    's_evaluation.refer_btn_1',
    'Remind me in a month',
    'Remind me in a month',
    'Remind me in a month',
    'Remind me in a month',
  ],
  refer_btn_2: [
    '링글 추천하기',
    'Refer Your Friend',
    's_evaluation.refer_btn_2',
    'Refer Your Friend',
    'Refer Your Friend',
    'Refer Your Friend',
    'Refer Your Friend',
  ],
};
export const s_my_tutor = {
  experienced_tutor: [
    '수업한 튜터',
    '수업한 튜터',
    's_my_tutor.experienced_tutor',
    '上过课的任课教师',
    '和我上過課的任課教師',
    'レッスンをしたチューター',
    'Gia sư từng học',
  ],
  save_tutor_like: [
    `같이 수업하고 싶은
튜터를 찜해보세요.`,
    'Favorite a tutor.',
    's_my_tutor.save_tutor_like',
    `请收藏想上课的
 任课教师。`,
    `請收藏想一起上課的
任課教師。`,
    `レッスンを受けたい
チューターをお気に入り登録してみましょう。`,
    'Chọn gia sư yêu thích.',
  ],
  check_exp_tutor: [
    `나와 수업한 튜터를
여기에서 확인할 수 있습니다.`,
    `나와 수업한 튜터를
여기에서 확인할 수 있습니다.`,
    's_my_tutor.check_exp_tutor',
    `可在此确认
 和我上过课的任课教师。`,
    `可以在這裡確認
和我上過課的任課教師。`,
    `あなたとレッスンしたチューターを
ここで確認することができます。`,
    'Xem những gia sư từng học.',
  ],
};
export const s_signup = {
  phone_veri: [
    '휴대폰 인증',
    'Verify phone number',
    's_signup.phone_veri',
    '手机认证',
    '手機驗證',
    'SMS認証',
    'Xác minh số điện thoại',
  ],
  basic_info: [
    '기본 정보',
    'Basic Info',
    's_signup.basic_info',
    '基本资料',
    '基本資料',
    '基本情報',
    'Thông tin cơ bản',
  ],
  veri_number: [
    '인증번호',
    'Verification code',
    's_signup.veri_number',
    '验证码',
    '驗證碼',
    '認証コード',
    'Mã xác minh',
  ],
  verified_success: [
    '인증됨',
    'Verified',
    's_signup.verified_success',
    '已验证',
    '已驗證',
    '認証済み',
    'Đã xác minh',
  ],
  input_completed: [
    '입력 완료',
    'Complete',
    's_signup.input_completed',
    '输入完毕',
    '輸入完畢',
    '入力完了',
    'Hoàn thành',
  ],
  plz_veri_phone: [
    '휴대폰을 인증해주세요',
    'Please verify your phone number',
    's_signup.plz_veri_phone',
    '请验证手机',
    '請驗證手機',
    '電話番号を認証してください。',
    'Vui lòng xác minh số điện thoại',
  ],
};
export const s_zoom = {
  new_guide_step_3: [
    <>
      3. 오디오 연결 방식을 선택 후<br />
      카메라, 스피커 및 마이크 테스트를 진행합니다.
    </>,
    <>
      3. Select audio option and <br />
      test camera, speaker and mic.
    </>,
    's_zoom.new_guide_step_3',
    <>
      3. 选择音频连接方式后，
      <br />
      继续测试摄像头、音响和麦克风。
    </>,
    <>
      3. 選擇音訊連接方式後，
      <br />
      進行相機、喇叭、麥克風測試。
    </>,
    <>
      3. オーディオ接続方式を選択後
      <br />
      カメラ、スピーカーおよびマイクテストを行います。
    </>,
    <>
      3. Chọn tuỳ chọn âm thanh và <br />
      kiểm tra camera, loa và mic.
    </>,
  ],
  new_guide_step_4: [
    <>
      4. 만약 카메라가 보이지 않으면,
      <br /> 하단 버튼을 클릭 후 카메라 설정을 변경해보세요.
    </>,
    <>
      4. If you're having video issues,
      <br /> please check your camera settings.
    </>,
    's_zoom.new_guide_step_4',
    <>
      4. 如摄像头画面不可见，
      <br />
      请点击下方按钮并更改摄像头设定。
    </>,
    <>
      4. 如果看不到相機畫面，
      <br />
      請點擊下方按鈕變更相機設定。
    </>,
    <>
      4. もしカメラが映らなければ、
      <br /> 下のボタンをクリックしてカメラ設定を変更してみてください。
    </>,
    <>
      4. Nếu bạn có vấn đề về video,
      <br /> vui lòng kiểm tra cài đặt camera của bạn.
    </>,
  ],
  new_guide_step_5: [
    <>
      5. 만약 벨소리가 들리지 않으면,
      <br /> 하단 버튼을 클릭 후 스피커 설정을 변경해보세요.
    </>,
    <>
      5. If you don't hear the ringtone,
      <br /> please check your speaker settings.
    </>,
    's_zoom.new_guide_step_5',
    <>
      5. 如听不到铃声，
      <br />
      请点击下方按钮更改音响设定。
    </>,
    <>
      5. 如果聽不到鈴聲，
      <br />
      請點擊下方按鈕變更喇叭設定。
    </>,
    <>
      5. もしベルの音が聞こえなければ、
      <br /> 下のボタンをクリックしてスピーカー設定を変更してみてください。
    </>,
    <>
      5. Nếu bạn không nghe được chuông,
      <br /> vui lòng kiểm tra cài đặt loa của bạn.
    </>,
  ],
  new_guide_step_6: [
    <>
      6. 만약 마이크가 작동하지 않으면,
      <br /> 하단 버튼을 클릭 후 마이크 설정을 변경해보세요.
    </>,
    <>
      6. If your mic doesn't work,
      <br /> please check your input.
    </>,
    's_zoom.new_guide_step_6',
    <>
      6. 如麦克风未启动，
      <br />
      请点击下方按钮更改麦克风设定。
    </>,
    <>
      6. 如果麥克風未啟動，
      <br />
      請點擊下方按鈕變更麥克風設定。
    </>,
    <>
      6. もしマイクが作動しなければ、
      <br /> 下のボタンをクリックしてマイク設定を変更してみてください。
    </>,
    <>
      6. Nếu mic của bạn không hoạt động,
      <br /> vui lòng kiểm tra đầu vào.
    </>,
  ],
  new_guide_step_7: [
    <>
      7. 다음과 동일한 화면이 나오면,
      <br /> 카메라,스피커와 마이크가 정상적으로 작동중입니다.
    </>,
    <>
      7. If you see below screen,
      <br /> you're all good to go.
    </>,
    's_zoom.new_guide_step_7',
    <>
      7. 如出现以下画面，
      <br />
      表示摄像头、音响、麦克风正在正常启动。
    </>,
    <>
      7. 如果出現以下畫面，
      <br />
      表示相機、喇叭、麥克風正常啟動中。
    </>,
    <>
      7. 次と同じ画面が出たら、
      <br /> カメラ、スピーカー、マイクが正常に作動中です。
    </>,
    <>
      7. Nếu bạn thấy màn hình phía dưới,
      <br /> mọi thứ đều ổn.
    </>,
  ],
  new_guide_step_8: [
    <>
      8. 수업 입장 시, “오디오 연결” 버튼을
      <br /> 클릭하여 오디오가 잘 연결되었는지 확인해보세요.
    </>,
    <>
      8. When you enter your lesson, <br />
      please "Join With Computer Audio".
    </>,
    's_zoom.new_guide_step_8',
    <>
      8. 进入课程时，请点击「连接音响」按钮，
      <br />
      确认音响是否连接成功。
    </>,
    <>
      8. 進入課程時，請點擊「加入音訊」，
      <br />
      確認音訊是否連接成功。
    </>,
    <>
      8. レッスン入室時「オーディオに接続」ボタンを
      <br /> クリックしてオーディオが正常に接続されているか確認してください。
    </>,
    <>
      8. Khi bạn vào học, <br />
      chọn "Join With Computer Audio".
    </>,
  ],
  new_guide_step_9: [
    '9. 수업 전 스피커와 비디오가 켜져 있는지 확인해보세요.',
    '9. Please double check that your audio & video is on.',
    's_zoom.new_guide_step_9',
    '9. 课程开始前请先确认音响与视频是否开启。',
    '9. 課程開始前請先確認喇叭與影像是否開啟。',
    '9. レッスン前にスピーカーとビデオがオンになっているか確認してください。',
    '9. Vui lòng kiểm tra kỹ âm thanh & video được bật.',
  ],
  step_1_zoom_download: [
    'Step 1. Zoom 다운로드',
    'Step 1. Download Zoom',
    's_zoom.step_1_zoom_download',
    'Step 1. 下载Zoom',
    'Step 1. 下載Zoom',
    'Step 1. Zoomをダウンロード',
    'Bước 1. Tải ứng dụng Zoom',
  ],
  plz_download_zoom: [
    '링글의 수업은 Zoom 으로 진행됩니다. 아래의 Zoom 파일을 다운로드 해주세요.',
    'All Ringle lessons run on zoom.',
    's_zoom.plz_download_zoom',
    'Ringle的课程将通过Zoom进行，请下载下方的Zoom文档。',
    'Ringle的課程透過Zoom進行，請下載下方的Zoom檔案。',
    'RingleのレッスンはZoomで行われます。下のZoomファイルをダウンロードしてください。',
    'Tất cả buổi học của Ringle diễn ra trên Zoom',
  ],
  zoom_download: [
    'Zoom 다운로드',
    'Download Zoom',
    's_zoom.zoom_download',
    '下载Zoom',
    '下載Zoom',
    'Zoomをダウンロード',
    'Tải ứng dụng Zoom',
  ],
  step_2_install: [
    'Step 2. 설치',
    'Step 2. Install Zoom',
    's_zoom.step_2_install',
    'Step 2. 安装',
    'Step 2. 安裝',
    'Step 2. インストール',
    'Bước 2. Cài đặt Zoom',
  ],
  run_file_install_in_computer: [
    '다운 받은 파일을 실행 후, 내 컴퓨터에 설치해주세요.',
    'After download, please install.',
    's_zoom.run_file_install_in_computer',
    '运行下载的文件并将其安装到您的电脑上。',
    '執行下載的檔案後，安裝至您的電腦。',
    'ダウンロードしたファイルを開き、自分のコンピューターにインストールしてください。',
    'Sau khi tải xuống, hãy cài đặt.',
  ],
  step3_class_access: [
    'Step 3. 수업접속',
    'Step 3. Enter Lesson',
    's_zoom.step3_class_access',
    'Step 3. 课程连线',
    'Step 3. 課程連線',
    'Step 3. レッスン接続',
    'Bước 3. Vào học',
  ],
  after_download_do_not_need_participation: [
    '다운로드 완료 후, ZOOM 회원가입/ 로그인/ 미팅 참여 하실 필요 없습니다.',
    "You don't need a Zoom account to enter Ringle lessons.",
    's_zoom.after_download_do_not_need_participation',
    '下载完成后, 无需进行Zoom会员注册/登录/参与会议。',
    '下載完畢後，不需註冊Zoom會員／登入／加入會議。',
    'ダウンロード完了後、Zoom会員登録/ログイン/ミーティングに参加する必要はありません。',
    'Bạn không cần tài khoản Zoom để vào học Ringle.',
  ],
  class_can_enter_with_button: [
    '수업 접속시, 링글 홈페이지 - 예정된 수업 - 수업입장 버튼을 통해 입장 가능합니다.',
    'Please sign in to Ringle and go to Upcoming Lessons > Enter Lesson to enter your lesson.',
    's_zoom.class_can_enter_with_button',
    '课程连线时，可通过Ringle网页 - 预定的课程 - 进入课程按钮来进入课程。',
    '進行課程連線時，可透過Ringle網頁 - 預定的課程 - 進入課程按鈕進場。',
    'レッスン接続時、Ringleホームページ - レッスン予定 - レッスン入室ボタンで入室可能です。',
    'Vui lòng đăng nhập vào Ringle và đến Buổi học sắp tới > Nhấn nút Vào học.',
  ],
  before_start_class_no_zoom_link: [
    '*수업 시작 전 별도 줌 링크가 제공되지 않습니다.',
    '*We do not provide zoom link prior to lessons.',
    's_zoom.before_start_class_no_zoom_link',
    '*课程开始前不另提供Zoom链接。',
    '*課程開始前不另外提供Zoom連結。',
    '*レッスン開始前に別途Zoomのリンクは提供されません。',
    '*Chúng tôi không cung cấp link zoom trước buổi học.',
  ],
  step4_zoom_test: [
    'Step 4. Zoom Test',
    'Step 4. Test Zoom',
    's_zoom.step4_zoom_test',
    'Step 4. Zoom Test',
    'Step 4. Zoom Test',
    'Step 4. Zoom Test',
    'Bước 4. Kiểm tra Zoom',
  ],
  after_install_push_below_link: [
    '설치 후, 아래 링크를 눌러서 테스트를 해주세요. (약 2분 소요)',
    'Please go to link below to test your audio & video on Zoom (takes 2 min).',
    's_zoom.after_install_push_below_link',
    '安装后，请点击以下链接进行测试。 （约需2分钟）',
    '安裝後請點擊以下連結測試。（約需2分鐘）',
    'インストール後、下のリンクを押してテストしてください。(約2分所要)',
    'Vui lòng vào link dưới đây để kiểm tra âm thanh & video trên Zoom (khoảng 2 phút).',
  ],
  before_class_check_audio_video: [
    '수업 전에 오디오와 비디오가 올바로 동작하시는지 확인하실 수 있습니다.',
    '',
    's_zoom.before_class_check_audio_video',
    '课程开始前，您可检查音响和摄像头是否正常启动。',
    '課程開始前可確認音訊與影像是否正常啟動。',
    'レッスン前にオーディオとビデオが正しく作動するか確認することができます。',
    '',
  ],
};
export const s_guide = {
  header: [
    '링글 사용법',
    'How Ringle works',
    's_guide.header',
    'Ringle使用方法',
    'Ringle使用方法',
    'Ringleの使用方法',
    'Cách Ringle hoạt động',
  ],
  icon: [
    '링글 사용법',
    'How Ringle\nworks',
    's_guide.icon',
    'Ringle使用方法',
    'Ringle使用方法',
    'Ringleの使用方法',
    'Cách Ringle\nhoạt động',
  ],
  img_header: [
    `언제 어디서나
원하는 수업을 자유롭게`,
    `Design your own lessons
anywhere and anytime`,
    's_guide.img_header',
    `随时随地
 自由进行您想学的课程`,
    `隨時隨地
自由進行想要的課程`,
    `いつでもどこでも
好きなレッスンを自由に`,
    `Thiết kế buổi học của bạn
bất cứ khi nào và ở đâu`,
  ],
  title: [
    '간단한 링글 사용법',
    'Ringle lesson in 7 steps',
    's_guide.title',
    '简单的Ringle使用方法',
    '簡單的Ringle使用方法',
    '簡単なRingleの使用方法',
    'Buổi học Ringle trong 7 bước',
  ],
  step_one_title: [
    'Step 1. 일정선택',
    'Step 1. Select Date & Time',
    's_guide.step_one_title',
    'Step 1. 选择日程',
    'Step 1. 選擇日程',
    'Step 1. 日程を選択',
    'Bước 1. Chọn Ngày & Giờ',
  ],
  step_one_desc: [
    <>
      365일 연중무휴 & 하루에도 여러 번{'\n'}
      <View primary>원하는 일정을 선택</View>할 수 있습니다
    </>,
    'Choose a time that best fits your schedule.',
    's_guide.step_one_desc',
    <>
      365日全年无休 & 一天可多次{'\n'}
      <View primary>选择希望的日程</View>
    </>,
    <>
      365日全年無休 & 一天可多次{'\n'}
      <View primary>選擇希望的日程</View>
    </>,
    <>
      365日年中無休 & 1日に数回{'\n'}
      <View primary>好きな日程を選択</View>することができます。
    </>,
    'Chọn thời gian phù hợp với lịch của bạn.',
  ],
  step_one_app: [
    '*링글 어플리케이션',
    '*Ringle App',
    's_guide.step_one_app',
    '*Ringle APP手机软件',
    '*Ringle APP',
    '*Ringleアプリケーション',
    '*Ứng dụng Ringle',
  ],
  step_one_web: [
    '*링글 PC',
    '*Ringle Web',
    's_guide.step_one_web',
    '*Ringle电脑',
    '*Ringle電腦',
    '*Ringle PC版',
    '*Ringle Web',
  ],
  step_one_platform: [
    'PC, 스마트폰으로\n예약 가능합니다',
    'Book on your laptop or on your phone.',
    's_guide.step_one_platform',
    '可使用电脑、智能手机\n预约',
    '可使用電腦、智慧型手機\n預約',
    'PC、スマートフォンで\n予約可能です。',
    'Đặt lịch trên laptop hoặc điện thoại của bạn.',
  ],
  step_two_title: [
    'Step 2. 튜터 선택',
    'Step 2. Select a tutor',
    's_guide.step_two_title',
    'Step 2. 选择任课教师',
    'Step 2. 選擇任課教師',
    'Step 2. チューター選択',
    'Bước 2. Chọn gia sư',
  ],
  step_two_desc: [
    <>
      <View primary>전공/학교/경력/발음</View> 등을 확인하고{'\n'}나에게 꼭 맞는
      튜터와 수업해보세요
    </>,
    'Choose a tutor whose expertise matches your interests.',
    's_guide.step_two_desc',
    <>
      确认<View primary>主修／学校／经历／发音</View>等，{'\n'}
      与适合自己的任课教师上课吧！{' '}
    </>,
    <>
      確認<View primary>主修／學校／經歷／發音</View>等，{'\n'}
      與適合自己的任課教師上課吧！
    </>,
    <>
      <View primary>専攻/学校/経歴/発音</View>などを確認して{'\n'}
      自分にぴったり合うチューターとレッスンしましょう。
    </>,
    'Lựa chọn gia sư với chuyên môn thuộc lĩnh vực bạn yêu thích.',
  ],
  step_three_title: [
    'Step 3. 교재 선택',
    'Step 3. Select materials',
    's_guide.step_three_title',
    'Step 3. 选择教材',
    'Step 3. 選擇教材',
    'Step 3. 教材選択',
    'Bước 3. Chọn Tài liệu',
  ],
  step_three_desc: [
    <>
      <View primary>원하는 교재</View>를 자유롭게 선택하세요.
    </>,
    'Pick out lesson materials on a topic of your interest.',
    's_guide.step_three_desc',
    <>
      请自由选择<View primary>想学的教材</View>。
    </>,
    <>
      請自由選擇<View primary>希望的教材</View>。
    </>,
    <>
      <View primary>好きな教材</View>を自由に選んでください。
    </>,
    'Chọn tài liệu liên quan đến chủ đề yêu thích',
  ],
  step_three_gray: [
    "자료를 직접 업로드할 수 있는\n'자유 주제' 수업도 가능합니다",
    'Or choose Free Topic or upload your own materials.',
    's_guide.step_three_gray',
    '还提供「自由主题」课程，\n您可直接上传想学的资料。',
    '也能選擇可親自上傳資料的\n「自由主題」',
    '資料を直接アップロードすることができる\n「自由テーマ」レッスンも可能です。',
    'Hoặc chọn Chủ đề Tự do hoặc đăng tải tài liệu của bạn',
  ],
  step_four_title: [
    'Step 4. 교재 읽고, 질문 선택',
    'Step 4. Read the materials and select questions',
    's_guide.step_four_title',
    'Step 4. 阅读教材、选择提问',
    'Step 4. 閱讀教材、選擇提問',
    'Step 4. 教材を読んで、質問を選択',
    'Bước 4. Đọc tài liệu và chọn các câu hỏ',
  ],
  step_four_desc: [
    <>
      <View primary>교재</View>를 예습하고, 수업에서 다룰{'\n'}
      <View primary>질문을 선택</View>해 답변을 준비해보세요
    </>,
    "Mark questions you'd like to focus on during the lesson.",
    's_guide.step_four_desc',
    <>
      请预习<View primary>教材</View>，选择课程上要讨论的{'\n'}
      <View primary>问题</View>，并准备好答案。
    </>,
    <>
      請預習<View primary>教材</View>，選擇上課時要討論的{'\n'}
      <View primary>提問</View>後，準備回覆內容。
    </>,
    <>
      <View primary>教材</View>を予習し、レッスンで扱う{'\n'}
      <View primary>質問を選択</View>して回答を準備してみましょう。
    </>,
    'Đánh dấu vào câu hỏi bạn muốn tập trung trong buổi học.',
  ],
  step_five_title: [
    'Step 5. 수업 방식 설정',
    'Step 5. Set Lesson Style',
    's_guide.step_five_title',
    'Step 5.设定课程方式',
    'Step 5. 設定上課方式',
    'Step 5. レッスン方式設定',
    'Bước 5. Chọn Hình thức học',
  ],
  step_five_desc: [
    <>
      토론중심/교정중심 등 {'\n'}
      <View primary>맞춤 수업 방식</View>을 설정하세요.
    </>,
    'Choose either correction or discussion-focused lesson and leave other requests.',
    's_guide.step_five_desc',
    <>
      请设定以讨论为主／以纠正为主的的{'\n'}
      <View primary>专用上课方式</View>。{' '}
    </>,
    <>
      請設定以討論為主／以糾正為主等的{'\n'}
      <View primary>客製化上課方式</View>。
    </>,
    <>
      ディスカッション中心/校正中心など、{'\n'}
      <View primary>カスタマイズレッスン方式</View>を設定してください。
    </>,
    'Lựa chọn tập trung sửa lỗi hoặc tập trung thảo luận và những yêu cầu khác',
  ],
  step_six_title: [
    'Step 6. 수업 입장',
    'Step 6. Join the lesson',
    's_guide.step_six_title',
    'Step 6. 进入课程',
    'Step 6. 進入課程',
    'Step 6. レッスン入室',
    'Bước 6. Tham gia buổi học',
  ],
  step_six_desc: [
    <>
      수업 입장은 <View primary>[수업 입장]</View> 버튼을 통해{'\n'}수업 시작
      15분 전부터 가능합니다.
    </>,
    'Sign in to Ringle and enter lesson on time.',
    's_guide.step_six_desc',
    <>
      透过<View primary>[进入课程]</View>按钮，{'\n'}
      可在课程开始15分钟前进入课程。{' '}
    </>,
    <>
      透過<View primary>[進入課程]</View>按鈕，{'\n'}
      可於課程開始15分鐘前進入課程。
    </>,
    <>
      レッスン入室は<View primary>[レッスン入室]</View>ボタンで{'\n'}
      レッスン開始15分前から可能です。
    </>,
    'Đăng nhập vào Ringle và vào học đúng giờ.',
  ],
  step_six_gray: [
    '한 화면으로 교재/튜터 화면/실시간 교정\n모두 확인 가능한 PC 사용을 권장드립니다.',
    'See your tutor, materials, and questions all on the same screen.',
    's_guide.step_six_gray',
    '建议使用可在一个屏幕上\n确认教材／任课教师画面\n进行实时纠正的电脑。',
    '建議使用電腦於同一個畫面\n確認教材／任課教師畫面／即時糾正。',
    '一つの画面で教材/チューター画面/リアルタイム校正を\nすべて確認可能なPCの使用を推奨します。',
    'Bạn sẽ thấy thông tin gia sư, tài liệu và các câu hỏi thảo luận trong cùng một trang',
  ],
  step_seven_title: [
    'Step 7. 바로 보이는 실시간 교정',
    'Step 7. Real-time corrections',
    's_guide.step_seven_title',
    'Step 7. 可立确认并实时纠正',
    'Step 7. 可立即確認的即時糾正',
    'Step 7. すぐに見えるリアルタイム校正',
    'Bước 7. Sửa lỗi theo thời gian thực',
  ],
  step_seven_desc: [
    <>
      수업 중 튜터가 교정해주는 내용을{'\n'}
      <View primary>실시간</View>으로 볼 수 있습니다.
    </>,
    "Follow along your tutor's corrections and comments real-time.",
    's_guide.step_seven_desc',
    <>
      可实时确认{'\n'}上课时
      <View primary />
      任课教师纠正的内容。{' '}
    </>,
    <>
      上課時可<View primary>即時</View>確認{'\n'}任課教師糾正的內容。
    </>,
    <>
      レッスン中にチューターが校正してくれる内容を{'\n'}
      <View primary>リアルタイム</View>で見ることができます。
    </>,
    'Theo dõi những lỗi được sửa và bình luận của gia sư theo thời gian thực',
  ],
  step_seven_gray: [
    '교정노트는 튜터와 나 모두 사용할 수 있습니다.',
    '',
    's_guide.step_seven_gray',
    '任课教师和我均可使用纠正笔记。',
    '任課教師與我均可使用糾正筆記。',
    '校正ノートはチューターと自分の両者が使用可能です。',
    '',
  ],
  after_lesson: [
    '수업이 끝나고 제공되는 것들',
    'What’s offered after the lesson',
    's_guide.after_lesson',
    '课程结束后提供的内容',
    '課程結束後提供的內容',
    'レッスン後に提供されるもの',
    'Bạn được cung cấp sau buổi học',
  ],
  after_lesson_one: [
    '1. 실시간 교정',
    '1. Correction notes from lesson',
    's_guide.after_lesson_one',
    '1. 实时纠正',
    '1. 即時糾正',
    '1. リアルタイム校正',
    '1. Ghi chú sửa lỗi của buổi học',
  ],
  after_lesson_one_desc: [
    '튜터와 대화하며 실시간 교정과 피드백을 확인합니다. 수업 후에도 언제든 다시 노트를 복습할 수 있습니다.',
    'You can review the tutor correction doc that you used during the lesson.',
    's_guide.after_lesson_one_desc',
    '与任课教师对话，确认实时纠正内容及意见回馈。课程结束后，随时可再次复习笔记。',
    '與任課教師對話，確認即時糾正與意見回饋。課程結束後，隨時可再次複習筆記。',
    'チューターと会話しながらリアルタイム校正とフィードバックを確認します。レッスン後にもいつでもまたノートで復習することができます。',
    'Bạn có thể xem lại bản sửa lỗi của gia sư trong buổi học',
  ],
  after_lesson_two: [
    '2. 대화 스크립트',
    '2. Recording & Transcript',
    's_guide.after_lesson_two',
    '2. 对话脚本',
    '2. 對話腳本',
    '2. 会話スクリプト',
    '2. Ghi âm & Bản ghi',
  ],
  after_lesson_two_desc: [
    'AI가 기록한 스크립트를 보고 들으며 복습할 수 있어요. 튜터와 나의 대화를 녹음 & 스크립트로 언제든 다시 확인하세요.',
    'You can revisit the lesson by listening to audio recording and reading conversation transcript',
    's_guide.after_lesson_two_desc',
    '可边听边看AI记录的脚本复习英语。随时可用录音 & 脚本再次确认任课教师与我的对话。',
    '可一邊聽看AI記錄的腳本一邊複習。隨時可利用錄音 & 腳本再次確認任課教師與我的對話。',
    'AIが記録したスクリプトを見聞きして復習することができます。チューターと自分の会話を録音ファイル & スクリプトでいつでも再確認しましょう。',
    'Bạn có thể xem lại buổi học bằng cách nghe ghi âm và đọc bản ghi cuộc hội thoại',
  ],
  after_lesson_three: [
    '3. AI 분석',
    '3. AI Analysis',
    's_guide.after_lesson_three',
    '3. AI 分析',
    '3. AI分析',
    '3. AI 分析',
    '3. Phân tích bằng AI',
  ],
  after_lesson_three_desc: [
    'AI가 분석한 영어회화 패턴을 확인하세요. 말하기 속도, 자주 쓰는 단어, Filler Word 등을 분석하고, 대체 가능한 표현도 확인 가능합니다.',
    'Ringle offers AI-generated analysis on suggestions on speech pace and vocabulary range.',
    's_guide.after_lesson_three_desc',
    '请确认AI分析的英语会话模式。也可分析语速、常用单词、填充词等，确认可取代的用法。',
    '請確認AI分析的英語會話模式。也可確認分析口說速度、常用單字、Filler Word等後可取代的用法。',
    'AIが分析した英会話パターンを確認しましょう。話すスピード、よく使う単語、Filler Wordなどを分析し、代替可能な表現も確認可能です。',
    'Ringle cung cấp phân tích thực hiện bởi AI với những gợi ý về tốc độ nói và từ vựng',
  ],
  after_lesson_four: [
    '4. 다각도 피드백',
    '4. Comprehensive Feedback',
    's_guide.after_lesson_four',
    '4. 多角度反馈',
    '4. 全方位意見回饋',
    '4. 多角度フィードバック',
    '4. Đánh giá toàn diện',
  ],
  after_lesson_four_desc: [
    '발음, 문법, 어휘 등 영역별로 분석된 튜터의 피드백을 받아볼 수 있습니다. 나만을 위한 피드백으로 영어 실력을 키워보세요.',
    'After each lesson, your tutor will leave a detailed feedback on vocabulary, fluency, grammar, and pronunciation.',
    's_guide.after_lesson_four_desc',
    '可收到任课教师为您分析发音、语法、词汇等各方面的反馈。通过专属自己的反馈来提升英语实力吧！',
    '可取得任課教師分析發音、文法、詞彙等各領域的意見回饋，藉由專屬於我的意見回饋提升英語實力吧！',
    '発音、文法、語彙など分野別に分析されたチューターのフィードバックを受け取ることができます。あなただけのためのフィードバックで英語力を伸ばしましょう。',
    'Sau mỗi buổi học, gia sư của bạn sẽ cung cấp phản hồi chi tiết về từ vựng, sự trôi chảy, ngữ pháp và phát âm.',
  ],
  lesson_video: [
    '실제 수업 영상',
    "Here's a recording of an actual Ringle lesson",
    's_guide.lesson_video',
    '实际课程视频',
    '實際課程影片',
    '実際のレッスン映像',
    'Đây là bản ghi âm một buổi học cùa Ringle',
  ],
  lesson_video_desc: [
    '실제 링글 수업을 수강 중인 모습입니다.\n질문 2-3개로 대화하다 보면 생각보다\n40분 수업이 금방 끝납니다.',
    '',
    's_guide.lesson_video_desc',
    '这是Ringle课程的实际听课情形。 \n利用2-3个问题进行对话，\n就会觉得40分钟不知不觉就过去了。',
    'Ringle實際聽課情形。\n利用2～3個提問對話，\n40分鐘課程比想像中更快結束。',
    '実際のRingleのレッスン受講中の様子です。\n質問2、3個で会話してみると、思ったより\n40分のレッスンはすぐに終わります。',
    '',
  ],
  ringle_guarantee: [
    '링글이 보장합니다',
    'We guarantee Ringle is worth your time',
    's_guide.ringle_guarantee',
    'Ringle向您承诺',
    'Ringle向您承諾',
    'Ringleが保証します。',
    'Chúng tôi đảm bảo Ringle xứng đáng với thời gian của bạn',
  ],
  quality_guarantee: [
    '100% 퀄리티 보장제도',
    '100% Money-back guarantee',
    's_guide.quality_guarantee',
    '100%品质保障制度',
    '100%品質保障制度',
    '100% クオリティ保証制度',
    'Đảm bảo hoàn tiền 100%',
  ],
  quality_guarantee_desc: [
    '경험하고 결정하세요. 수업권 구매 후,\n첫 수업에 만족하지 못하시면\n즉시 환불해드립니다.',
    "We promise a full refund if you're not 100% satisfied with your first paid lesson.",
    's_guide.quality_guarantee_desc',
    '请先体验后再决定。购买课程券后，\n如对首次课程不满意，\n将会立即为您进行退款。',
    '請先體驗再決定。購買課程券後，\n首次課程不滿意時，\n會立即退款給您。',
    '体験してから決めてください。レッスンチケット購入後、\n初回レッスンにご満足いただけなければ\nすぐに返金いたします。',
    'Chúng tôi đảm bảo hoàn tiền đầy đủ nếu bạn không hài lòng 100% với buổi học tính phí đầu tiên.',
  ],
  quality_guarantee_gray: [
    '* 체험 수업 포함 첫 수업 진행자 대상',
    '',
    's_guide.quality_guarantee_gray',
    '* 针对包含体验课程的首次课程学生',
    '* 針對包含體驗課程的首次課程學生',
    '* 体験レッスン含む初回レッスン受講者対象',
    '',
  ],
  date_guarantee: [
    '수강기간 보장제도',
    'Start Whenever',
    's_guide.date_guarantee',
    '课程期限保障制度',
    '聽課期間保障制度',
    '受講期間保証制度',
    'Bắt đầu bất cứ khi nào',
  ],
  date_guarantee_desc: [
    '원하는 일정에 맞춰 시작하세요.\n구매 후, 첫 수업 시작 전까지\n수강기간이 차감되지 않습니다.',
    'You can purchase lesson credits now and start later.',
    's_guide.date_guarantee_desc',
    '自己决定首次课程的开始时间。 \n购买后，在首次课程开始之前，将不扣除课程期限。',
    '請在您希望的日程開始。\n購買後，於首次課程開始之前，\n不扣除聽課期間。',
    'ご希望の日程に合わせてはじめましょう。\n購入後、初回レッスン完了後から\n受講期間が始まります。',
    'Bạn có thể mua gói học trước và bắt đầu sau.',
  ],
  completed_guarantee: [
    '수업 완강 보장제도',
    'Flexible Cancellation',
    's_guide.completed_guarantee',
    '听完课程保障制度',
    '聽完課程保障制度',
    '全レッスン終了保証制度',
    'Huỷ linh hoạt',
  ],
  completed_guarantee_desc: [
    '놓치지 말고 끝까지 수강하세요.\n수업 24시간 전까지\n일정을 자유롭게 변경할 수 있습니다.',
    'You can cancel or reschedule your lesson up to 24 hours before the lesson.',
    's_guide.completed_guarantee_desc',
    '不要错过，请听完所有课程吧！ \n最晚可在课程开始24小时前\n自由修改日程。',
    '請不要錯過，聽完所有課程吧！\n最晚可於課程開始24小時前\n自由變更日程。',
    '逃さず最後まで受講しましょう。\nレッスン24時間前まで\n日程を自由に変更することができます。',
    'Bạn có thể huỷ hoặc dời buổi học tối thiểu 24 giờ trước buổi học.',
  ],
  completed_guarantee_gray: [
    '*수업 24시간~2시간 이내 일정 변경 시,\n보충 수업권 무제한 제공',
    '',
    's_guide.completed_guarantee_gray',
    '*在课程开始前24小时～2小时以内修改日程时，\n将提供无限次补充课程券',
    '*於課程開始24小時～2小時前變更日程時，\n無限提供補充課程券。',
    '*レッスン24時間~2時間以内の日程変更時、\n補填レッスンチケットを無制限で提供',
    '',
  ],
  go_to_home: [
    '홈으로 가기',
    'Home',
    's_guide.go_to_home',
    '前往首页',
    '前往首頁',
    'ホームに移動',
    'Trang chủ',
  ],
  trial: [
    '체험 수업 예약하기',
    'Book trial lesson',
    's_guide.trial',
    '预约体验课程',
    '預約體驗課程',
    '体験レッスンを予約する',
    'Đặt lịch buổi học thử',
  ],
};
export const s_pricing = {
  header: [
    '수업권 구매',
    'Buy now',
    's_pricing.header',
    '购买课程券',
    '購買課程券',
    'レッスンチケット購入',
    'Mua ngay',
  ],
  recommend: [
    '추천 수업권',
    'Popular',
    's_pricing.recommend',
    '推荐的课程券',
    '推薦的課程券',
    'おすすめレッスンチケット',
    'Phổ biến',
  ],
  bonus: bonus => [
    `+${bonus}회 수업`,
    `+${bonus} Bonus Lessons`,
    's_pricing.bonus',
    `+${bonus}次课程`,
    `+${bonus}次課程`,
    `+${bonus}回レッスン`,
    `+${bonus} Buổi học tặng thêm`,
  ],
  if_finish_all: (date, credit) => [
    `${date}일 내 ${credit}회 완강 시`,
    `After ${credit} lessons in ${date} days`,
    's_pricing.if_finish_all',
    `${date}天内听完${credit}次时`,
    `${date}天內聽完${credit}次時`,
    `${date}日以内に${credit}回全レッスン終了時`,
    `Sau ${credit} buổi trong ${date} ngày`,
  ],
  free_subsidy: free => [
    `+${free}회 보충 수업`,
    `+${free} Makeup Lessons`,
    's_pricing.free_subsidy',
    `+${free}次补充课程`,
    `+${free}次補充課程`,
    `+${free}回補填レッスン`,
    `+${free} Buổi học bù`,
  ],
  provide_one: [
    '4회 수강 시 1회 제공',
    '1 every 4 lessons',
    's_pricing.provide_one',
    '听课4次后提供1次',
    '上課4次後提供1次',
    '4回受講時、1回提供',
    'Cho mỗi 4 buổi',
  ],
  count: credit => [
    `${credit}회`,
    `${credit} lessons`,
    's_pricing.count',
    `${credit}次`,
    `${credit}次`,
    `${credit}回`,
    `${credit} buổi học`,
  ],
  min: duration => [
    `${duration}분`,
    `${duration} min`,
    's_pricing.min',
    `${duration}分钟`,
    `${duration}分鐘`,
    `${duration}分`,
    `${duration} phút`,
  ],
  day: day => [
    `${day}일`,
    `${day} days`,
    's_pricing.day',
    `${day}天`,
    `${day}天`,
    `${day}日`,
    `${day} ngày`,
  ],
  by_one: [
    '/ 회',
    '/ Lesson',
    's_pricing.by_one',
    '/ 次',
    '／次',
    '/ 回',
    '/ Buổi học',
  ],
  normal_price: [
    '정가',
    'Regular price',
    's_pricing.normal_price',
    '定价',
    '定價',
    '定価',
    'Học phí tiêu chuẩn',
  ],
  expected_point: [
    '예상 적립 포인트',
    'Estimated points',
    's_pricing.expected_point',
    '预计累积积分',
    '預計累積點數',
    '予想獲得ポイント',
    'Điểm ước tính',
  ],
  won: price => [
    `${price}원`,
    `$${price}`,
    's_pricing.won',
    `$${price}`,
    `$${price}`,
    `$${price}`,
    `$${price}`,
  ],
  without_trial: [
    '첫 구매 혜택',
    'Benefits on first purchase',
    's_pricing.without_trial',
    '首次购买优惠',
    '首次購買折扣優惠',
    '初回購入割引特典',
    'Ưu đãi cho lần thanh toán đầu tiên',
  ],
  buy: [
    '구매하기',
    'Purchase',
    's_pricing.buy',
    '购买',
    '購買',
    '購入する',
    'Thanh toán',
  ],
  ringle_guarantee: [
    '링글이 보장합니다',
    'Ringle guarantees',
    's_pricing.ringle_guarantee',
    'Ringle向您承诺',
    'Ringle向您承諾',
    'Ringleが保証します。',
    'Ringle đảm bảo',
  ],
  refund_all: [
    <>
      첫 수업 불만족 시{'\n'}
      <View header3 bold black>
        100% 환불{' '}
      </View>
    </>,
    <View header3 bold black>
      100% Money-back{'\n'}guarantee
    </View>,
    's_pricing.refund_all',
    <>
      首次课程不满意时，{'\n'}
      <View header3 bold black>
        可全额退款
      </View>
    </>,
    <>
      首次課程不滿意時，{'\n'}
      <View header3 bold black>
        可全額退款
      </View>
    </>,
    <>
      初回レッスンにご満足いただけない場合{'\n'}
      <View header3 bold black>
        {' '}
        全額返金{' '}
      </View>
    </>,
    <View header3 bold black>
      {' '}
      Hoàn tiền{'\n'}100%{' '}
    </View>,
  ],
  including_trial: [
    '체험 수업도 첫 수업에 포함됨',
    'On your first lesson',
    's_pricing.including_trial',
    '体验课程也包含在首次课程中',
    '首次課程也包含體驗課程',
    '体験レッスンも初回レッスンに含む',
    'Trong buổi học đầu tiên',
  ],
  not_opened: [
    <>
      첫 수업 시작 전까지{'\n'}
      <View header3 bold black>
        수강기간 미차감
      </View>
    </>,
    <View header3 bold black>
      Start Whenever
    </View>,
    's_pricing.not_opened',
    <>
      首次课程开始前{'\n'}
      <View header3 bold black>
        课程期限不被扣除
      </View>
    </>,
    <>
      首次課程開始之前，{'\n'}
      <View header3 bold black>
        不扣除聽課期間
      </View>
    </>,
    <>
      初回レッスン完了後から{'\n'}
      <View header3 bold black>
        受講期間が始まります。
      </View>
    </>,
    <View header3 bold black>
      Bắt đầu bất{'\n'}cứ lúc nào
    </View>,
  ],
  additional_extend: [
    '수강기간 추가 연장 가능',
    'Buy now and start later',
    's_pricing.additional_extend',
    '可延长课程期限',
    '可額外延長聽課期間',
    '受講期間追加延長可能',
    'Mua ngay và học sau',
  ],
  change_before_day: [
    <>
      수업 하루 전까지{'\n'}
      <View header3 bold black>
        일정 변경 가능
      </View>
    </>,
    <View header3 bold black>
      Flexible cancellation
    </View>,
    's_pricing.change_before_day',
    <View header3 bold black>
      最晚可在课程开始24小时前修改日程
    </View>,
    <View header3 bold black>
      最晚可於課程開始24小時前變更日程
    </View>,
    <View header3 bold black>
      レッスン24時間前まで日程変更可能
    </View>,
    <View header3 bold black>
      Huỷ linh hoạt
    </View>,
  ],
  provide_makeup_lesson: [
    '수업 2시간 전까지 변경 시, 보충 수업권 제공',
    'Cancel up to 24 hours before the lesson',
    's_pricing.provide_makeup_lesson',
    '如在课程开始两个小时前修改课程时间，将提供补充课程券',
    '最晚於課程開始2小時前變更時，將提供補充課程券。',
    'レッスン2時間前までに変更する場合、補填レッスンチケット提供',
    'Huỷ tối thiểu 24 giờ trước buổi học',
  ],
  credit_info: [
    '수업권 선택 방법',
    'Credits Detail',
    's_pricing.credit_info',
    '课程券选择方法',
    '課程券選擇方法',
    'レッスンチケットの種類',
    'Chi tiết thẻ học',
  ],
  duration: [
    '수업 길이',
    'Lesson duration',
    's_pricing.duration',
    '课时长度',
    '課程長度',
    'レッスン時間',
    'Thời lượng buổi học',
  ],
  full_desc: [
    `하나의 주제에 대해 심도 있게!
최신 시사부터 비즈니스 영어까지
지적 대화를 레벨업하는 40분 수업`,
    'Best for advanced discussions',
    's_pricing.full_desc',
    `深度讨论一个主题！
 从最新时事到商业英语，
 知性对话提升实力的40分钟课程。`,
    `深度討論一個主題！
從最新時事至商務英語，
可自由自在地對話。`,
    `一つのテーマについて深く！
最新時事からビジネス英語まで
高レベルな会話を学びたい方向け。`,
    'Phù hợp cho các buổi thảo luận nâng cao',
  ],
  half_desc: [
    `바쁜 일상 속, 짧지만 확실하게!
부담스러운 예습 시간은 줄이고\n일상 대화 능력을 향상시키고 싶으신 분`,
    'Best for casual conversations',
    's_pricing.half_desc',
    `在忙碌的日常中简短却充实的对话! 
 可让您缩短繁重的预习时间，
 希望提升日常对话能力的人群。`,
    `在忙碌的日常中，簡單卻確實！
讓您可縮短感到負擔的預習時間，
提升知識性對話的40分鐘課程。`,
    `忙しい日常の中、短いけれど確実に！
なるべく短い予習時間で
会話力を上達したい方向け。`,
    'Phù hợp cho hội thoại thông thường',
  ],
  time_info: [
    '시간대',
    'Times',
    's_pricing.time_info',
    '时间段',
    '時段',
    '時間帯',
    'Thời gian',
  ],
  base: [
    '수업 시작 기준',
    'Lesson starting time',
    's_pricing.base',
    '以课程开始时间为准',
    '以課程開始時間為準（韓國標準時間）',
    'レッスン開始基準',
    'Thời gian bắt đầu học',
  ],
  all_time: [
    '정규',
    'Regular',
    's_pricing.all_time',
    '正规',
    '正規',
    '正規',
    'Tiêu chuẩn',
  ],
  early: [
    '새벽반',
    'Early Bird',
    's_pricing.early',
    '凌晨班',
    '早鳥班',
    '早朝クラス',
    'Sáng sớm',
  ],
  lunch: [
    '점심반',
    'Matinee',
    's_pricing.lunch',
    '午间班',
    '午間班',
    '昼間クラス',
    'Buổi trưa',
  ],
  night_owl: [
    '심야반',
    'Night Owl',
    's_pricing.night_owl',
    '深夜班',
    '深夜班',
    '深夜クラス',
    'Ban đêm',
  ],
  for_purpose: [
    '수강 목적에 꼭 맞는',
    'Select the right package for you',
    's_pricing.for_purpose',
    '请选择适合您的课程',
    '請選擇確實符合聽課目的的',
    '受講目的にぴったり合う',
    'Chọn gói học phù hợp với bạn',
  ],
  choose_your_credit: [
    '수업권을 선택해보세요',
    '',
    's_pricing.choose_your_credit',
    '课程券',
    '課程券',
    'レッスンチケットを選択してください。',
    '',
  ],
  pay_in_pieces: [
    '2개 카드 분할 결제 가능',
    '',
    's_pricing.pay_in_pieces',
    '可使用2张信用卡分期付款',
    '可使用2張信用卡分批付款',
    '2枚のカードで分割決済可能',
    '',
  ],
  interest_free: [
    '최대 무이자 8개월 혜택',
    '',
    's_pricing.interest_free',
    '最多8个月免息',
    '最多8期0利率',
    '無利子最長8か月特典',
    '',
  ],
  b2c: [
    '일반 수업권',
    'Individuals',
    's_pricing.b2c',
    '一般课程券',
    '一般課程券',
    '一般レッスンチケット',
    'Cá nhân',
  ],
  b2b: [
    '기업 맞춤 수업권',
    'B2B',
    's_pricing.b2b',
    '企业课程券',
    '企業專用課程券',
    '企業専用レッスンチケット',
    'B2B',
  ],
  time_limit: [
    '시간한정',
    'Limited Window',
    's_pricing.time_limit',
    '时间限定',
    '時間限定',
    '時間限定',
    'Giờ đặc biệt',
  ],
  credit_detail: [
    '수업권 상세',
    'Credits Detail',
    's_pricing.credit_detail',
    '课程券详情',
    '課程券詳情',
    'レッスンチケット詳細',
    'Chi tiết Thẻ học',
  ],
  all_discount: [
    '총 할인 금액',
    'Total discount',
    's_pricing.all_discount',
    '总折扣金额',
    '總折扣金額',
    '合計割引金額',
    'Tổng giảm giá',
  ],
  final_price: [
    '최종 결제 금액',
    'Your total',
    's_pricing.final_price',
    '最终付款金额',
    '最終付款金額',
    '最終決済金額',
    'Tổng cộng',
  ],
  final_price_per_lesson: [
    '최종 회당 단가',
    'Cost per lesson',
    's_pricing.final_price_per_lesson',
    '最终单价',
    '最終單次價格',
    '最終1回当たりの単価',
    'Chi phí mỗi buổi học',
  ],
  final_credit: [
    '최종 수업권 횟수',
    'Total lessons',
    's_pricing.final_credit',
    '最终课程券次数',
    '最終課程券次數',
    '最終レッスンチケット回数',
    'Tổng số buổi học',
  ],
  additional_lesson: [
    '추가 정규 수업',
    'Bonus lessons',
    's_pricing.additional_lesson',
    '额外的正规课程',
    '額外正規課程',
    '追加正規レッスン',
    'Buổi học tặng thêm',
  ],
  additional_benefit: (duration, name) => [
    `[${duration}분] ${name}회 수업권의 추가 혜택입니다.`,
    `Benefits for [${duration} min] ${name} Lessons Package`,
    's_pricing.additional_benefit',
    `[${duration}分钟] ${name}次课程券的额外优惠。`,
    `[${duration}分鐘] ${name}次課程券的額外優惠。`,
    `[${duration}分] ${name}回レッスンチケットの追加特典です。`,
    `Ưu đãi cho gói học [${duration} phút] ${name}`,
  ],
  provide_additional_lesson: (challenge_date, count, bonus, day) => [
    `${challenge_date}일 이내 ${count}회 수업을 모두 사용하면 추가 ${bonus}회 정규 수업권이 제공됩니다. [정상 수강기간: ${day}일]`,
    `If you complete ${count} lessons in ${challenge_date} days, you'll get ${bonus} bonus lessons. [Credits expire in ${day} days]`,
    's_pricing.provide_additional_lesson',
    `在${challenge_date}天内将${count}次课程全部使用时，将额外提供${bonus}次正规课程券。 [正常课程期限：${day}天]`,
    `於${challenge_date}天內將${count}次課程全數使用時，額外提供${bonus}次正規課程券。[正常聽課期間：${day}日]`,
    `${challenge_date}日内に ${count}回レッスンをすべて使用すると追加で ${bonus}回正規レッスンチケットが提供されます。 [通常受講期間: ${day}日]`,
    `Nếu bạn hoàn thành ${count} buổi học trong ${challenge_date} ngày, bạn sẽ nhận được ${bonus} buổi học tặng thêm. [Thẻ học hết hạn trong ${day} ngày]`,
  ],
  about_additional_lesson: [
    '정규 수업을 모두 사용한 시점에 수업권이 제공되며, 추가 수업권의 수강기간은 1년입니다.',
    'Issued bonus lessons are valid for 1 year.',
    's_pricing.about_additional_lesson',
    '将在所有正规课程全部使用完时提供课程券，额外提供的课程券课程期限为1年。',
    '將所有正規課程全數使用時提供課程券，額外課程券的聽課期間為1年。',
    '正規レッスンがすべて終了した時点でレッスンチケットが提供され、追加レッスンチケットの受講期間は1年です。',
    'Buổi học tặng thêm có thời hạn 1 năm.',
  ],
  considered_to_be_used: [
    '* 수강생의 수업 불참/2시간 이내 취소도 수업권 [사용]으로 인정됩니다.',
    '*Student no-show and cancellations in less than 2 hours also count as completing a lesson.',
    's_pricing.considered_to_be_used',
    '* 学生未出席／2小时以内取消的课程也视为[使用]的课程券。',
    '* 學生未出現／2小時以內取消也視同[使用]課程券。',
    '* 受講生のレッスン欠席/2時間以内のキャンセルもレッスンチケット[使用]と認定されます。',
    '*Học viên vắng mặt hoặc huỷ ít hơn 2 giờ sẽ coi như hoàn thành buổi học.',
  ],
  for_long: [
    '장기 수업권 혜택',
    'Package discount',
    's_pricing.for_long',
    '长期课程券优惠',
    '長期課程券優惠',
    '長期レッスンチケット特典',
    'Giảm giá',
  ],
  long_benefit_list_1: [
    '24시간 이내 보충 수업',
    'Makeup Lessons',
    's_pricing.long_benefit_list_1',
    '24小时以内补充课程',
    '24小時以內的補充課程',
    '24時間以内の補填レッスン',
    'Buổi học bù',
  ],
  about_lesson_in_a_day: [
    '수업 시작 24시간 이내 수업을 신청할 수 있는 수업권으로 타 수강생이 수업을 취소할 경우 형성됩니다. (정규 수업은 24시간 이전부터 수업 신청 가능)',
    'You can use Makeup Lesson Credits to book lessons that become available in 24 hours or less due to last-minute cancellations by other students.',
    's_pricing.about_lesson_in_a_day',
    '是在其他学生取消课程时形成的，可申请距离课程开始不到24小时的课程的课程券。（正规课程最晚可在24小时前申请）',
    '可申請距離課程開始不到24小時的課程，於其他學生取消課程時形成。（正規課程最晚可於24小時前申請）',
    'レッスン開始24時間以内にレッスンを予約することができるレッスンチケットで、他の受講生がレッスンをキャンセルすると現れます。 (正規レッスンは24時間前からレッスン予約可能)',
    'Bạn có thể dùng Thẻ học bù để đặt những buổi học được mở trong vòng 24 giờ vì học viên khác đã huỷ sát giờ.',
  ],
  long_benefit_list_2: [
    '튜터 우선 지정',
    'Tutor Preference',
    's_pricing.long_benefit_list_2',
    '优先指定任课教师',
    '優先指定任課教師',
    'チューター優先指定',
    'Gia sư ưu tiên',
  ],
  schedule_first_benefit: [
    '선호 튜터의 1주일 뒤 스케쥴을 24시간 동안 우선 예약할 수 있는 권한을 드립니다. (링글 앱 알림으로 확인 가능)',
    "You'll have 24-hour priority access to your favorite tutor's schedule on a weekly basis.",
    's_pricing.schedule_first_benefit',
    '我们将为您提供可在24小时内优先预约您喜欢的任课教师的下一周日程的权限。 （可通过Ringle APP手机软件确认通知）',
    '24小時期間提供您可優先預約喜歡的任課教師一週後日程的權限。（可透過Ringle APP通知確認）',
    '好きなチューターの1週間後のスケジュールを24時間優先予約できる権限を与えます。(Ringleアプリ通知で確認可能)',
    'Bạn được ưu tiên truy cập vào thời khoá biểu của gia sư yêu thích trước 24 giờ.',
  ],
  long_benefit_list_3: [
    '80단어 답변 첨삭',
    'Response proofreading',
    's_pricing.long_benefit_list_3',
    '80个单词的修改回复',
    '80個單字的增刪回覆',
    '80単語回答添削',
    'Hiệu đính câu trả lời',
  ],
  editing_service: [
    '튜터가 매 수업 80단어를 수업 전 첨삭해 드립니다. 수업 24시간 전까지 예습 페이지에서 신청 가능합니다. [예습] > [답변] > [첨삭 신청]',
    'Have your tutor proofread your response up to 80 words. You can submit requests up to 24 hours before the lesson at Lesson Prep.',
    's_pricing.editing_service',
    '任课教师在每堂课前将为您修改80个单词。最晚可在课程开始24小时前在预习页面申请。[预习] > [回复] > [申请修改]',
    '任課教師於每堂課於課程開始前為您增刪80個單字。最晚可於課程開始24小時前於預習頁面申請。[預習] > [回覆] > [申請增刪]',
    'チューターが毎レッスン80単語をレッスン前に添削します。 レッスン24時間前まで予習ページから申し込み可能です。[予習] > [回答] > [添削申し込み]',
    'Gia sư của bạn đã hiệu đính câu trả lời dưới 80 từ của bạn chưa? Bạn có thể gửi yêu cầu tối thiểu 24 giờ trước khi buổi học bắt đầu ở phần Chuẩn bị Buổi học.',
  ],
  input_company_code: [
    <>
      기업 맞춤 코드를 입력해보세요.{'\n'}
      재직사 할인 혜택 문의는{' '}
      <View Bold Purple>
        1:1 문의
      </View>
      로 남겨주세요!
    </>,
    <>
      Please enter B2B Partner code.{'\n'}
      Or{' '}
      <View Bold Purple>
        contact us
      </View>{' '}
      to see if you apply for one!
    </>,
    's_pricing.input_company_code',
    <>
      请输入企业特定代码{'\n'}
      有关企业职员优惠问题, 请进行
      <View Bold Purple>
        在线咨询
      </View>
      !
    </>,
    <>
      請輸入企業專用代碼。{'\n'}
      職員折扣優惠請透過
      <View Bold Purple>
        聊天
      </View>
      諮詢！
    </>,
    <>
      企業専用コードを入力してください。{'\n'}
      在職中の会社の割引特典のお問い合わせは{' '}
      <View Bold Purple>
        チャネルトーク
      </View>
      からお願いいたします！
    </>,
    <>
      Vui lòng nhập mã B2B.{'\n'}
      Hoặc{' '}
      <View Bold Purple>
        liên hệ chúng tôi
      </View>{' '}
      để xem bạn được áp dụng không!
    </>,
  ],
  company_code: [
    '기업 맞춤 코드',
    'B2B Partner Code',
    's_pricing.company_code',
    '企业专用代码',
    '企業專用代碼',
    '企業専用コード',
    'Mã code đối tác B2B',
  ],
  channel_talk: [
    '1:1 문의하기',
    'Contact Us',
    's_pricing.channel_talk',
    '在线咨询',
    '聊天諮詢',
    'チャネルトークでお問い合わせ',
    'Liên lạc với chúng tôi',
  ],
  certificates: [
    '증명서 발급',
    'Lesson Certificates & Receipts',
    's_pricing.certificates',
    '发行证明',
    '核發證明',
    '証明書発行',
    'Chứng nhận buổi học & Biên nhận',
  ],
  cert_example: [
    '증명서 예시 상세보기',
    'See sample',
    's_pricing.cert_example',
    '详细查看证明书举例',
    '詳細確認證明範例',
    '証明書の例の詳細を見る',
    'Xem mẫu',
  ],
  can_provide_cert: [
    '구매한 수업권 증명서 상시 발급 가능합니다.\n수강증, 출석증, 영수증 (국/영문)',
    'You can issue lesson certificates, proof of attendance, or receipts.',
    's_pricing.can_provide_cert',
    '购买的课程券可随时发行证明。\n上课证明、出席证明、收据（中／英文）',
    '購買的課程券可隨時核發證明。\n上課證明、出席證明、收據（英文）',
    '購入したレッスンチケット証明書は常時発行可能です。\n受講証、出席証、領収証 (日本語/英語)',
    'Bạn có thể lấy chứng nhận buổi học, chứng nhận tham gia hoặc biên nhận.',
  ],
  benefit: [
    '수강 혜택',
    'Benefits',
    's_pricing.benefit',
    '听课优惠',
    '聽課優惠',
    '受講特典',
    'Ưu đãi',
  ],
  benefit_detail: [
    <>
      350+종의 링글{' '}
      <View bold black>
        오리지널 콘텐츠
      </View>
      {'\n'}
      <View bold black>
        PDF 파일 / MP3 오디오북
      </View>{' '}
      다운로드 지원{'\n'}
      매주 진행되는{' '}
      <View bold black>
        튜터의 Live Class
      </View>
      {'\n'}
      커리어, 영어학습 등{' '}
      <View bold black>
        200+편 VOD
      </View>
      {'\n'}
      수업 24시간 전까지{' '}
      <View bold black>
        무제한 일정 변경
      </View>{' '}
      가능{'\n'}
      2시간 전 수업 취소 시,{' '}
      <View bold black>
        {' '}
        100% 보강 수업
      </View>{' '}
      제공{'\n'}
      모든{' '}
      <View bold black>
        수업 녹음파일 무제한
      </View>{' '}
      듣기{'\n'}
      <View bold black>
        개별 첨삭 수업노트
      </View>{' '}
      (Google docs) 별도 제공{'\n'}
      <View bold black>
        튜터의 1:1 피드백 리포트
      </View>{' '}
      매 수업 종료 후 제공{'\n'}
      <View bold black>
        AI 기반 대화 스크립트와 말하기 패턴 분석 자료
      </View>
      {'\n'}
      말하기, 듣기, 읽기, 쓰기{' '}
      <View bold black>
        영역별 학습 데이터
      </View>
    </>,
    <>
      350+ Ringle's{' '}
      <View bold black>
        Original Content
      </View>
      {'\n'}
      Download{' '}
      <View bold black>
        PDF/MP3 Audiobook
      </View>{' '}
      {'\n'}
      Weekly top tutor{' '}
      <View bold black>
        LIVE Webinar
      </View>
      {'\n'}
      200+{' '}
      <View bold black>
        Video Courses
      </View>
      {'\n'}
      <View bold black>
        Flexible cancellations
      </View>{' '}
      up to 24hrs before the lesson{'\n'}
      <View bold black>
        Makeup lessons
      </View>{' '}
      for late cancellations{'\n'}
      <View bold black>
        Audio replay & transcript
      </View>{' '}
      for all lessons{'\n'}
      <View bold black>
        Lesson Notes
      </View>{' '}
      after class{'\n'}
      <View bold black>
        Tutor's Feedback
      </View>{' '}
      report{'\n'}
      <View bold black>
        AI Analysis
      </View>{' '}
      on speech patterns{'\n'}
      <View bold black>
        Activities log
      </View>{' '}
      on your Ringling{'\n'}
    </>,
    's_pricing.benefit_detail',
    <>
      350多种Ringle的{' '}
      <View bold black>
        原创内容
      </View>
      {'\n'}
      <View bold black>
        PDF文件／MP3有声书
      </View>{' '}
      支持下载{'\n'}
      每周进行的{' '}
      <View bold black>
        任课教师Live Class
      </View>
      {'\n'}
      资历、英语学习等{' '}
      <View bold black>
        200多部VOD
      </View>
      {'\n'}
      最晚可在课程开始24小时前{' '}
      <View bold black>
        无限修改日程
      </View>{' '}
      {'\n'}
      2小时前取消课程时，{' '}
      <View bold black>
        100%提供补充课程
      </View>{' '}
      {'\n'}
      所有{' '}
      <View bold black>
        课程录音档可无限
      </View>{' '}
      聆听{'\n'}
      额外提供
      <View bold black>
        个别修改课堂笔记
      </View>{' '}
      （Google docs）{'\n'}
      <View bold black>
        任课教师的1:1反馈
      </View>{' '}
      会在每堂课结束后提供{'\n'}
      <View bold black>
        结合AI技术的对话脚本及口语模式分析资料
      </View>
      {'\n'}
      口语、听力、阅读、写作{' '}
      <View bold black>
        各领域学习数据
      </View>
    </>,
    <>
      350多種Ringle的{' '}
      <View bold black>
        原創內容
      </View>
      {'\n'}
      <View bold black>
        PDF檔／MP3有聲書
      </View>{' '}
      下載支援{'\n'}
      每週進行的{' '}
      <View bold black>
        任課教師Live Class
      </View>
      {'\n'}
      職涯、英語學習等{' '}
      <View bold black>
        200多集VOD
      </View>
      {'\n'}
      最晚可於課程開始24小時前{' '}
      <View bold black>
        無限變更日程
      </View>{' '}
      {'\n'}
      2小時前取消課程時，{' '}
      <View bold black>
        100%提供補課
      </View>{' '}
      {'\n'}
      所有{' '}
      <View bold black>
        課程錄音檔無限
      </View>{' '}
      聆聽{'\n'}
      額外提供
      <View bold black>
        個別增刪課堂筆記
      </View>{' '}
      （Google docs）{'\n'}
      <View bold black>
        任課教師的1:1意見回饋報告書
      </View>{' '}
      於每堂課結束後提供{'\n'}
      <View bold black>
        結合AI技術的對話腳本及口說模式分析資料
      </View>
      {'\n'}
      口說、聽力、閱讀、寫作{' '}
      <View bold black>
        各領域學習數據
      </View>
    </>,
    <>
      350+種類のRingle{' '}
      <View bold black>
        オリジナルコンテンツ
      </View>
      {'\n'}
      <View bold black>
        PDFファイル / MP3 オーディオブック
      </View>{' '}
      ダウンロードサポート{'\n'}
      毎週行われる{' '}
      <View bold black>
        チューターのLive Class
      </View>
      {'\n'}
      キャリアや英語学習など{' '}
      <View bold black>
        200+本のVOD
      </View>
      {'\n'}
      レッスン24時間前まで{' '}
      <View bold black>
        無制限で日程変更
      </View>{' '}
      可能{'\n'}
      2時間前にレッスンキャンセル時、{' '}
      <View bold black>
        {' '}
        100%補填レッスン
      </View>{' '}
      提供{'\n'}
      すべての{' '}
      <View bold black>
        レッスン録音ファイルを無制限で
      </View>{' '}
      聞く{'\n'}
      <View bold black>
        個別添削レッスンノート
      </View>{' '}
      (Google docs) 別途提供{'\n'}
      <View bold black>
        チューターの1:1Feedback Report
      </View>{' '}
      毎レッスン終了後に提供{'\n'}
      <View bold black>
        AI基盤の会話スクリプトとスピーキングパターン分析資料
      </View>
      {'\n'}
      スピーキング、リスニング、リーディング、ライティング{' '}
      <View bold black>
        分野別学習データ
      </View>
    </>,
    <>
      350+ Ringle{' '}
      <View bold black>
        Nội dung độc quyền
      </View>
      {'\n'}
      Tải{' '}
      <View bold black>
        PDF/MP3 của Sách nói
      </View>{' '}
      {'\n'}
      Gia sư hàng đầu mỗi tuần{' '}
      <View bold black>
        Webinar trực tuyến
      </View>
      {'\n'}
      200+{' '}
      <View bold black>
        Video buổi học
      </View>
      {'\n'}
      <View bold black>
        Huỷ linh hoạt
      </View>{' '}
      tối thiểu 24 giờ trước buổi học{'\n'}
      <View bold black>
        Buổi học bù
      </View>{' '}
      vì huỷ sát giờ{'\n'}
      <View bold black>
        Phát lại ghi âm & bản ghi thoại
      </View>{' '}
      cho tất cả buổi học{'\n'}
      <View bold black>
        Ghi chú buổi học
      </View>{' '}
      sau khi kết thúc{'\n'}
      <View bold black>
        Báo cáo đánh giá
      </View>{' '}
      của gia sư {'\n'}
      <View bold black>
        Phân tích AI
      </View>{' '}
      dựa trên đặc điểm nói{'\n'}
      <View bold black>
        Nhật ký hoạt động
      </View>{' '}
      trong buổi học{'\n'}
    </>,
  ],
  notice: [
    '유의사항',
    'Terms',
    's_pricing.notice',
    '注意事项',
    '注意事項',
    '注意事項',
    'Điều khoản',
  ],
  use_credit: [
    '수업권 사용 안내',
    'Credits policy',
    's_pricing.use_credit',
    '课程券使用说明',
    '課程券使用說明',
    'レッスンチケット使用のご案内',
    'Chính sách thẻ học',
  ],
  free_to_use: [
    '수업권은 수강기간 내 자유롭게 이용할 수 있습니다. (일 별 수업 예약 횟수에 제한이 없습니다.)',
    'You can book lessons during business hours, on any date before the credits expire. (You can freely book the lesson at any date and time.)',
    's_pricing.free_to_use',
    '课程券按购买次数, 可于课程期限内自由使用。',
    '可於聽課期間內自由使用課程券。（每日課程預約次數不限。）',
    '購入したレッスンチケットは有効期限内に自由に使うことができます。',
    'Bạn có thể sử dụng thẻ học trước khi hết hạn.',
  ],
  free_to_use_ex: [
    '(예: 수강기간 내, 하루 3회 연속 수업 신청도 가능합니다.)',
    '',
    's_pricing.free_to_use_ex',
    '（例：在课程期限内一天可连续申请3次课程。）',
    '（例：可於聽課期間內一天申請3次課程。）',
    '(例: 受講期間内、1日3回連続レッスン予約も可能です。)',
    '',
  ],
  twenty_four_seven: [
    '수업 시간은 연중무휴로 한국 시간 기준 오전 5시 ~ 오후 2시, 저녁 7시 ~ 새벽 3시까지 입니다.',
    'Lessons are available 5AM - 2PM / 7PM - 3AM (KST) every day.',
    's_pricing.twenty_four_seven',
    '可在Ringle的课程时间内自由使用正规课程券。凌晨5点～下午2点（韩国标准时间，以开始时间为准）， 晚上7点～凌晨3点（韩国标准时间，以开始时间为准）',
    '課程時間為全年無休，可於韓國時間凌晨5點～下午2點、晚上7點～凌晨3點上課。',
    '正規レッスンチケットは、Ringleのレッスン時間内で自由に利用可能です。 午前5時 ~ 午後2時 (KST, 開始時間基準)、 午後7時 ~ 午前3時 (KST, 開始時間基準)',
    'Bạn có thể sử dụng Thẻ học tiêu chuẩn bất cứ khi nào trong giờ hành chính: 05:00-14:00 (Giờ Hàn Quốc, tính từ giờ bắt đầu học), 19:00-03:00 (Giờ Hàn Quốc, tính từ giờ bắt đầu học)',
  ],
  start_after_first_lesson: [
    '구매 후 1년까지는 첫 수업 완료 시점을 기준으로 수강기간이 차감됩니다.',
    'Expiration dates start counting down from the date you complete the first lesson up to a year after the purchase date.',
    's_pricing.start_after_first_lesson',
    '请注意课程券的次数购买日开始扣除，而是从完成首次课程时扣除听课期间。',
    '於完成首次課程時扣除聽課期間。',
    '受講期間が始まる時点は購入日ではなく、初回レッスンを完了した時点からであることをご了承ください。',
    'Ngày hết hạn được tính bắt đầu từ ngày bạn hoàn thành buổi học đầu tiên trong gói học đã thanh toán.',
  ],
  start_after_first_lesson_ex: [
    '구매 후 1년이 되는 시점부터는 사용 이력이 없어도 수강기간이 차감 됩니다',
    "Unused credits' expiration dates will start counting down a year after the purchase date.",
    's_pricing.start_after_first_lesson_ex',
    '课程期限从第一次上课开始计算.',
    '購買後一年期間，於完成首次課程時扣除聽課期間。',
    'レッスンチケットの有効期限は初回レッスンを完了した日から起算されます。',
    'Thời hạn kết thúc của thẻ học chưa được dùng sẽ là một năm kể từ ngày bạn thanh toán.',
  ],
  extend_by_payment: [
    '포인트 사용 혹은 소액 결제를 통해 수강기간을 연장할 수 있습니다.',
    'You can extend credit expiration dates with your points or by paying a small fee.',
    's_pricing.extend_by_payment',
    '课程期限可通过使用积分/小额付款的方式进行延长。',
    '聽課期間可透過使用點數／小額付款延長。',
    '有効期限はポイント又は少額手数料で延長することができます。',
    'Bạn có thể gia hạn bằng cách sử dụng điểm hoặc trả một khoản phí nhỏ.',
  ],
  or_buy_new_package: [
    '20만원 이상 수업권 추가 구매 시, 1:1 문의를 통해 과거 수업권의 수강기간을 최초 상태로 복구 가능합니다.',
    "If you purchase a new package for over $169, your existing credits' expiration dates can be restored via 1:1 inquiry.",
    's_pricing.or_buy_new_package',
    '购买实际付款金额达$169以上的套餐后告诉Ringle团队，将为您回复之前付款购买的套餐原本的听课期间1次。',
    '額外購買$169以上的課程券後，透過1:1諮詢告知Ringle團隊，可將先前課程券的聽課期間復原至最初狀態。',
    '実際の決済金額が$169以上のパッケージをご購入後、Ringleチームにご連絡いただくと、以前有料でご購入いただいたパッケージを1回、従来の受講期間に復元いたします。',
    'Liên hệ với chúng tôi để thực hiện thanh toán khoác trên $169 để gia hạn cho thẻ học cũ có ngày hết hạn cùng với thẻ học mới.',
  ],
  refund_policy: [
    '수업권 환불 정책',
    'Refund policy',
    's_pricing.refund_policy',
    '课程券退款政策',
    '課程券退款政策',
    'レッスンチケット返金ポリシー',
    'Chính sách hoàn tiền',
  ],
  refund_all_before_open: [
    '구매 후 1년 이내 사용하지 않은 수업권은 100% 환불 가능합니다.',
    'Credits that have not been used within a year after purchase are eligible for a full refund.',
    's_pricing.refund_all_before_open',
    '购买后, 未使用的课程券将享受全额退款。',
    '購買後，可全額退還未使用的課程券。',
    '未使用のレッスンチケットは全額返金可能です。',
    'Các Thẻ học chưa sử dụng có thể được hoàn lại.',
  ],
  refund_after_trial: [
    '첫 수업 불만족 시, 전액 환불 가능합니다. (첫 수업에 체험 수업 포함)',
    'We offer a 100% money-back guarantee for your first lesson (including trial lessons).',
    's_pricing.refund_after_trial',
    '包含体验课程在内的首次课程结束后,  不满意可全额进行退款。',
    '首次課程不滿意時，可全額退款。（首次課程包含體驗課程）',
    '体験レッスン含む初回レッスンをご利用いただき、ご満足いただけなかった場合は全額返金いたします。',
    'Chúng tôi đảm bảo hoàn tiền 100% cho buổi học đầu tiên.',
  ],
  check_policy: [
    '수강기간이 절반 이하 남거나, 수업 횟수가 절반 이하 남은 수업권은 환불이 불가능합니다.',
    'No refund is offered for lesson credits starting halfway through the expiration dates or for packages that are half-used or more.',
    's_pricing.check_policy',
    '剩余课程期限不足一半或课程次数剩余不足一半时，无法退费.',
    '聽課期間少於一半或課程次數少於一半的課程券恕不退款。',
    '有効期限が半分以下のレッスンチケットおよび残りの回数が半分以下のレッスンパックは払戻できません。',
    'Hoàn tiền không áp dụng cho thẻ học có ngày hết hạn được một nửa, hoặc thẻ học đã được dùng hơn một nửa.',
  ],
  no_credits: [
    '해당되는 수업권이 없습니다.',
    'There are no valid credit(s).',
    's_pricing.no_credits',
    '无适用的课程券。',
    '無適用的課程券。',
    '該当するレッスンチケットがありません。',
    'Không có thẻ học hợp lệ.',
  ],
  first_purchase: [
    '첫 구매',
    'First purchase',
    's_pricing.first_purchase',
    '首次购买',
    '首次購買',
    '初回購入',
    'Thanh toán lần đầu',
  ],
  additional_discount: [
    '추가할인',
    'Bonus discount',
    's_pricing.additional_discount',
    '额外折扣',
    '額外折扣',
    '追加割引',
    'Chiết khấu thêm',
  ],
  certi: [
    '증명서류',
    'Certificate',
    's_pricing.certi',
    '证明材料',
    '證明',
    '証明書類',
    'Chứng nhận',
  ],
  certi_example_desc: [
    '링글 증명서류 예시입니다. 1개월 이상 수강권의 경우 매월 분할 발급이 가능합니다.',
    'Sample certificate. Can be issued monthly.',
    's_pricing.certi_example_desc',
    '这是Ringle的证明资料举例。 1个月以上的听课券可每月分批发行。',
    'Ringle的證明範例。1個月以上的聽課券可按月核發。',
    'Ringleの証明書類の例です。1か月以上の受講チケットの場合、毎月分割発行が可能です。',
    'Mẫu chứng nhận. Có thể phát hành mỗi tháng.',
  ],
  attendance_ex: [
    '- 출석증 증명서류 예시 -',
    '- Sample Proof of Attendance -',
    's_pricing.attendance_ex',
    '- 出席证明资料举例 -',
    '- 出席證明範例 -',
    '- 出席証の証明書類の例 -',
    '- Mẫu chứng nhận tham gia -',
  ],
  lesson_certi_ex: [
    '- 수강증 증명서류 예시 -',
    '- Sample Lesson Certificate -',
    's_pricing.lesson_certi_ex',
    '- 上课证明资料举例 -',
    '- 上課證明範例 -',
    '- 受講証の証明書類の例 -',
    '- Mẫu chứng nhận buổi học -',
  ],
  addtional_40: [
    '1회 실질 회당 단가',
    'Price per lesson',
    's_pricing.addtional_40',
    '1次实际单价',
    '1次實際單次單價',
    '実質1回当たりの単価',
    'Học phí mỗi buổi',
  ],
  per_four_lessons: [
    '1회 실질 회당 단가는 정규 수업권에 [보충 수업권]을 모두 포함한 수업 횟수를 전체 금액으로 나눈 금액입니다.',
    'Price per lesson divided by total cost by the number of lessons, including regular lessons credits and makeup lesson credits',
    's_pricing.per_four_lessons',
    '1次实际单价为全部金额除以包含[补充课程券]的正规课程券所有课程次数的金额。',
    '1次實際單次單價為全部金額除以包含[補充課程券]的正規課程券所有課程次數得到的金額。',
    '実質1回当たりの単価は正規レッスンチケットに [補填レッスンチケット]をすべて含めたレッスン回数を全金額で割った金額です。',
    'Học phí cho một buổi học được tính bằng tổng chi phí chia cho tổng số buổi học, bao gồm cả buổi học tiêu chuẩn và buổi học bù.',
  ],
  addtional_ex: [
    '*보충 수업권은 구매한 수업권을 4번 소진할 때마다, 1회씩 100% 제공됩니다.',
    '*For every 4 regular lessons you complete, you will get a makeup lesson credit that you can use to book lessons in 24 hours.',
    's_pricing.addtional_ex',
    '*每当用完4次课程券时，100%提供1次补充课程券。',
    '*每當耗盡4次課程券時，100%提供1次補充課程券。',
    '*補填レッスンチケットは購入したレッスンチケットを4回消費するたびに、1回ずつ100%提供されます。',
    '*Cứ 4 buổi học bạn hoàn thành, bạn sẽ nhận được một thẻ học bù và có thể sử dụng trong vòng 24 giờ.',
  ],
  what_is_additional_lesson: [
    '수업권 소진이란?',
    'What counts as using the lesson credit?',
    's_pricing.what_is_additional_lesson',
    '耗尽课程券是指？',
    '耗盡課程券意指？',
    'レッスンチケット消費とは？',
    'Những buổi nào được tính là Thẻ học đã sử dụng?',
  ],
  additional_lesson_desc: [
    `구매한 정규 수업권이 사용됨을 의미합니다.
1) 수업 정상 진행  2) 수업 노쇼  3) 수업 2시간 이내 취소 
등이 모두 포함됩니다.`,
    'Completed lessons, canceled lessons, and no-show lessons all count as using lesson credits.',
    's_pricing.additional_lesson_desc',
    `是指将购买的正规课程券全数使用完。
 包含1) 正常进行课程 2) 课程未出席 3) 在课程开始前2小时以内取消 等。`,
    `意指將購買的正規課程券全數使用。
1) 正常進行課程  2) 上課未出現  3) 於課程開始前2小時以內取消 
等全部包含。`,
    `購入した正規レッスンチケットが使用されることを意味します。
1) レッスン正常実施  2) レッスン無断欠席  3) レッスン2時間前以内のキャンセル 
などがすべて含まれます。`,
    'Buổi học đã hoàn thành, buổi học huỷ, và vắng mặt được coi như đã sử dụng thẻ học.',
  ],
  applied_price: [
    '첫구매 혜택이 반영된 가격입니다.',
    'First purchase benefits applied',
    's_pricing.applied_price',
    '适用第一次购买优惠',
    '適用第一次購買優惠',
    '初購入の特典が反映された価格です。',
    'Lợi ích mua hàng đầu tiên được áp dụng',
  ],
  intensive: [
    '(속성)',
    '(intensive)',
    's_pricing.intensive',
    '（速成）',
    '（速成）',
    '(速成)',
    '(chuyên sâu)',
  ],
  about_makeup_lessons: [
    '보충 수업이란?',
    "What's a Makeup Lesson?",
    's_pricing.about_makeup_lessons',
    '补充课程是指？',
    '補充課程意指？',
    '補填レッスンとは？',
    'Buổi Học bù là gì?',
  ],
  per_lesson_full: [
    '1회 6만원 X',
    '$51.73 per lesson X',
    's_pricing.per_lesson_full',
    '1次$51.73 X',
    '1次$51.73 X',
    '1回$51.73 X',
    '$51.73 mỗi buổi học X',
  ],
  per_lesson_half: [
    '1회 3.6만원 X',
    '$32.04 per lesson X',
    's_pricing.per_lesson_half',
    '1次$32.04 X',
    '1次$32.04 X',
    '1回$32.04 X',
    '$32.04 mỗi buổi học X',
  ],
  lessons: [
    '정규 수업',
    'Regular Lessons',
    's_pricing.lessons',
    '正规课程',
    '正規課程',
    '正規レッスン',
    'Buổi học tiêu chuẩn',
  ],
  without_trial_lessons: [
    '첫 구매 혜택',
    'First Purchase',
    's_pricing.without_trial_lessons',
    '首次购买优惠',
    '首次購買折扣優惠',
    '初回購入割引特典',
    'Giảm giá cho học viên mới',
  ],
  no_pay_in_pieces: [
    '* 앱 내 분할결제는 준비 중으로, 웹에서만 이용 가능합니다.',
    '* 앱 내 분할결제는 준비 중으로, 웹에서만 이용 가능합니다.',
    's_pricing.no_pay_in_pieces',
    '* APP正在准备分期付款功能，仅可在网页进行。',
    '* APP正在準備分批付款功能，僅可於網頁進行。',
    '* アプリ内の分割決済は準備中のため、ウェブでのみご利用可能です。',
    '*Chỉ có trên website',
  ],
  point: [
    '실제 결제한 수업권 금액의 3%를 추가로 적립해 드립니다. 적립된 수업 포인트는 결제 및 수강기간 연장에 사용할 수 있습니다.',
    'Additional points 3% of the purchased price can be awarded. Accumulated points can be used on purchasing lessons and extra validity period.',
    's_pricing.point',
    '按课程券实际付款金额的3%累积积分， 积累的课程积分可用于付款及课时延长。',
    '額外為您累積實際付款課程券金額的3%，累積的點數可用於付款及延長聽課期間。',
    '実際に決済したレッスンチケット金額の3%が追加で付与されます。付与されたレッスンポイントは、決済および受講期間の延長に使用することができます。',
    'Điểm thưởng tương đương 3% giá trị thanh toán của mỗi buổi học. Điểm tích luỹ có thể được sử dụng để mua buổi học hoặc gia hạn ngày hết hạn.',
  ],
  point_desc: [
    '(수업 포인트는 매 수업이 끝나고 7일 뒤 자동 적립됩니다.)',
    '(Lesson points are awarded 7 days after taking the lesson)',
    's_pricing.point_desc',
    '（课程积分将在每次课程结束7天后自动累积。）',
    '（課程點數於每次課程結束7天後自動累積。）',
    '(レッスンポイントは毎レッスンが終わって7日後に自動的に付与されます。)',
    '(Điểm được thưởng 7 ngày sau buổi học)',
  ],
  validity_period: [
    '*보충 수업권의 수강 기간은 발급일로부터 1년입니다.',
    '*The validity period of a make-up lesson credit is one year.',
    's_pricing.validity_period',
    '*补充课程券的课程期限是自发行日起1年。',
    '*補充課程券的聽課期間自核發日起1年。',
    '*補填レッスンチケットの受講期間は発行日から1年です。',
    '*Thời gian hiệu lực của thẻ học bù là một năm.',
  ],
  without_trial_additional_lessons: count => [
    `${count}회 수업 추가`,
    `${count} Free lesson(s)`,
    's_pricing.without_trial_additional_lessons',
    `${count}次额外课程`,
    `${count}次額外課程`,
    `${count}回レッスン追加`,
    `${count} Buổi miễn phí`,
  ],
  without_trial_additional_discount: discount => [
    <>
      <View primary medium>
        {discount}
      </View>
      만원 할인
    </>,
    <>
      <View primary medium>
        {discount}
      </View>{' '}
      Off
    </>,
    's_pricing.without_trial_additional_discount',
    `+ $${discount}折扣`,
    `+ $${discount}折扣`,
    `+ $${discount}割引`,
    `+ $${discount} giảm`,
  ],
  challenge_credit: [
    '도전기간 내 완강 시 추가 수업',
    'Challenge Complete Credits',
    's_pricing.challenge_credit',
    '在挑战期间内听完，将赠送额外课程',
    '挑戰期間內聽完時贈送額外課程',
    '挑戦期間内に全レッスン終了時、追加レッスン',
    'Thử thách hoàn thành thẻ học',
  ],
  price_per_lesson: [
    '실질 회당 단가',
    'Final Price per Lesson',
    's_pricing.price_per_lesson',
    '实际付款单价',
    '實際付款單價',
    '実質決済単価',
    'Giá cuối cho một buổi học',
  ],
  refund_warning: [
    '환불시 은행, 카드사, Paypal 등의 결제 수단에 대한 수수료는 차감하고 환불될 수 있습니다.',
    'In the case of refunds, any transaction fees incurred will be deducted from the refund amount.',
    's_pricing.refund_warning',
    '退款时，可能会扣除退还银行、信用卡公司、Paypal等支付方式的手续费。',
    '退款時，可能會扣除退還銀行，信用卡公司，Paypal等支付方式的手續費.',
    '返金時は銀行やカード会社、Paypalなどの手数料を差し引かれた額が返金されます。',
    'Với trường hợp hoàn tiền, phí giao dịch sẽ bị trừ vào khoản tiền được hoàn trả.',
  ],
  refund_policy_1: [
    '수강 이력이 있는 수업권은 이용약관(13조, 15조)에 의거하여 처리합니다.',
    'For refunds on used credits, please refer to articles 13 and 15 of your terms of service.',
    's_pricing.refund_policy_1',
    '已有课程使用记录的课程券, 退款时将按照使用条款中的(13条, 15条)进行处理!',
    '曾使用過的課程券將依據使用條款（第13條、第15條）進行退款。',
    '受講履歴のあるレッスンチケットの返金は、利用規約13条および15条に基づいて処理されます。',
    'Về việc hoàn tiền những Thẻ học đã sử dụng, vui lòng xem điều 13 và 15 trong điều khoản dịch vụ.',
  ],
  credit_info_description: [
    '수업 진행 방식과 콘텐츠는 동일합니다',
    'Lesson format and available materials are the same',
    's_pricing.credit_info_description',
    '课程进行方式和使用的教材相同',
    '課程進行方式和使用的教材相同',
    'レッスンの進行方式と教材は同じ',
    'Hình thức học và tài liệu đều giống nhau',
  ],
  benefit_list_1: {
    title1: [
      '오리지널 콘텐츠',
      'Original Content',
      's_pricing.benefit_list_1.title1',
      '独家原创教材',
      '獨家原創教材',
      '',
      '',
    ],
    desc1: [
      '950+종의 링글',
      "950+ Ringle's",
      's_pricing.benefit_list_1.desc1',
      '950多篇学习材料',
      '950多篇學習材料',
      '',
      '',
    ],
    title2: [
      '튜터의 Live Class',
      'LIVE Webinar',
      's_pricing.benefit_list_1.title2',
      '教师直播研讨会',
      '教師直播研討會',
      '',
      '',
    ],
    desc2: [
      '매주 진행되는',
      'Weekly top tutor',
      's_pricing.benefit_list_1.desc2',
      '每周进行的',
      '每周進行的',
      '',
      '',
    ],
    title3: [
      '380+편 VOD',
      '380+ Video Courses',
      's_pricing.benefit_list_1.title3',
      '380多部教学视频',
      '380多部教學視頻',
      '',
      '',
    ],
    desc3: [
      '커리어, 영어학습 등',
      'Career & other topical',
      's_pricing.benefit_list_1.desc3',
      '职场，英语学习等',
      '職場，英語學習等',
      '',
      '',
    ],
    caption1: [
      'PDF 파일 / MP3 오디오북 다운로드 지원',
      '',
      's_pricing.benefit_list_1.caption1',
      '',
      '',
      '',
      '',
    ],
    title: [
      '매일 업데이트 되는 최신 콘텐츠',
      'New learning content updated daily',
      's_pricing.benefit_list_1.title',
      '每日更新的最新内容',
      '每日更新的最新内容',
      '毎日更新される最新のコンテンツ',
      'Tài liệu học cập nhật mới mỗi ngày',
    ],
  },
  benefit_list_2: {
    title1: [
      '말하기 패턴 분석 자료',
      'Speech pattern analysis',
      's_pricing.benefit_list_2.title1',
      '口语分析材料',
      '口語分析材料',
      '',
      '',
    ],
    desc1: [
      'AI 기반 분석 시스템',
      "AI Review system's",
      's_pricing.benefit_list_2.desc1',
      '人工智能分析系统',
      '人工智能分析系統',
      '',
      '',
    ],
    title2: [
      '개별 첨삭 수업노트',
      'Real-time lesson notes',
      's_pricing.benefit_list_2.title2',
      '课堂修改笔记',
      '課堂修改筆記',
      '',
      '',
    ],
    desc2: [
      '별도 제공',
      'See after lesson',
      's_pricing.benefit_list_2.desc2',
      '附加提供',
      '附加提供',
      '',
      '',
    ],
    title3: [
      '튜터의 1:1 피드백 리포트',
      "Tutor's Feedback report",
      's_pricing.benefit_list_2.title3',
      '1:1教师反馈报告',
      '1:1教師反饋報告',
      '',
      '',
    ],
    desc3: [
      '매 수업 종료 후 제공',
      'Thorough and personalized',
      's_pricing.benefit_list_2.desc3',
      '课程结束后提供',
      '課程結束后提供',
      '',
      '',
    ],
    caption1: [
      '모든 수업 녹음파일 무제한 듣기',
      '',
      's_pricing.benefit_list_2.caption1',
      '',
      '',
      '',
      '',
    ],
    caption2: [
      '말하기, 듣기, 읽기, 쓰기 영역별 학습 데이터',
      '',
      's_pricing.benefit_list_2.caption2',
      '',
      '',
      '',
      '',
    ],
    title: [
      'AI가 기록하는 복습 시스템',
      'AI-supported review system',
      's_pricing.benefit_list_2.title',
      '人工智能复习系统',
      '人工智能復習系統',
      'AIが記録する復習システム',
      'Hệ thống đánh giá bằng AI',
    ],
  },
  btn: {
    detail: ['상세보기', '', 's_pricing.btn.detail', '', '', '', ''],
  },
  additional_lessons: count => [
    <>{count ? `${count}회 수업 추가` : ''}</>,
    <>{count ? `${count} Free lesson(s)` : ''}</>,
    's_pricing.additional_lessons',
    <>{count ? `${count}次追加课程` : ''}</>,
    <>{count ? `${count}次額外課程` : ''}</>,
    <>{count ? `${count}回レッスン追加` : ''}</>,
    <>{count ? `${count} Buổi học miễn phí(s)` : ''}</>,
  ],
  additional_discounts: discount => [
    <>
      <View primary medium>
        {discount}만원
      </View>{' '}
      할인
    </>,
    <>
      <View primary medium>
        {discount}
      </View>{' '}
      Off
    </>,
    's_pricing.additional_discounts',
    <>
      <View primary medium>
        {discount}
      </View>
      优惠
    </>,
    <>
      <View primary medium>
        {discount}
      </View>
      折扣
    </>,
    <>
      <View primary medium>
        {discount}
      </View>
      割引
    </>,
    <>
      <View primary medium>
        {discount}
      </View>{' '}
      Off
    </>,
  ],
  long_package: {
    benefit1: count => [
      <>{count ? `${count}회 수업 추가` : ''}</>,
      <>{count ? `${count} Free lesson(s)` : ''}</>,
      's_pricing.long_package.benefit1',
      <>{count ? `${count}次追加课程` : ''}</>,
      <>{count ? `${count}次額外課程` : ''}</>,
      <>{count ? `${count}回レッスン追加` : ''}</>,
      <>{count ? `${count} Buổi học miễn phí(s)` : ''}</>,
    ],
    benefit2: discount => [
      <>{discount ? `${discount}만원 할인` : ''}</>,
      <>{discount ? `${discount} Off` : ''}</>,
      's_pricing.long_package.benefit2',
      <>{discount ? `${discount}优惠` : ''}</>,
      <>{discount ? `${discount}折扣` : ''}</>,
      <>{discount ? `${discount}割引` : ''}</>,
      <>{discount ? `${discount} Off` : ''}</>,
    ],
    free_subsidy: free => [
      <>
        <View primary medium>
          {free}회
        </View>{' '}
        보충 수업
      </>,
      <>
        <View primary medium>
          {free}
        </View>{' '}
        Makeup Lessons
      </>,
      's_pricing.long_package.free_subsidy',
      <>
        <View primary medium>
          {free}
        </View>
        次补充课程
      </>,
      <>
        <View primary medium>
          {free}
        </View>
        次補充課程
      </>,
      <>
        <View primary medium>
          {free}
        </View>
        回分の補填レッスン
      </>,
      <>
        <View primary medium>
          {free}
        </View>{' '}
        Buổi học bù
      </>,
    ],
  },
  actual_payment_unit_price_desc: [
    '최종 결제 금액을 제공되는 총 수업 횟수로 나눈 단가입니다.(24시간 이내 보충 수업 포함)',
    'Final price divided by total credits (includes Makeup credit(s))',
    's_pricing.actual_payment_unit_price_desc',
    '最终购买价格除以全部课程次数后的单价。（包含24小时内的补充课程）',
    '最終購買價格除以全部課程次數後的單價。（包含24小時内的補充課程）',
    '',
    '',
  ],
  expected_point_desc: [
    '실제 결제한 전체 수업권 금액의 3%를 적립해 드립니다. (매 수업 종료 7일 후 적립)',
    '3% of paid amount will be awarded as points (within 7 days of purchase)',
    's_pricing.expected_point_desc',
    '累计积分为最终购买价格的3%。（每次课程结束7天后累计）',
    '纍計點數為最終購買價格的3%。（每次課程結束7天后纍計）',
    '',
    '',
  ],
  tab: {
    guarantee_and_benefit: [
      '보장제도 & 혜택',
      'Guarantee Policy',
      's_pricing.tab.guarantee_and_benefit',
      '保障制度&优惠',
      '保障制度&優惠',
      '',
      '',
    ],
  },
  switch_to_won: [
    '원화로 바꾸기',
    'Change to Korean Currency',
    's_pricing.switch_to_won',
    '转换为韩元',
    '轉換為韓元',
    '韓国のウォン貨に通貨変更する',
    'Chuyển qua tiền Hàn Quốc',
  ],
  switch_to_other: [
    '현지 통화로 바꾸기',
    'Change to Local Currency',
    's_pricing.switch_to_other',
    '转换为当地货币',
    '轉換為當地貨幣',
    '現地の通貨に変更する',
    'Chuyển qua tiền địa phương',
  ],
  benefit_short: [
    '혜택',
    'Benefits',
    's_pricing.benefit_short',
    '听课优惠',
    '聽課優惠',
    '受講特典',
    'Ưu đãi',
  ],
  free_subsidy_description_1: [
    <>
      <View medium black>
        보충 수업이란?{'\n'}
      </View>{' '}
      - 실시간으로 24시간 이내 시작하는 수업{'\n'} - Free Talking 교재만 선택
      가능{'\n'} - 정규 수업 4회 소진 시, 1회 발급 (장기권 혜택){'\n'} -
      수강기간은 발급일로부터 1년{'\n\n'}
      <View medium black>
        정규 수업 소진이란?{'\n'}
      </View>{' '}
      - 수업 정상 진행 - 수업 노쇼 - 수업 24시간 이내 취소{'\n\n'}
      <View medium black>
        가격표의 회당 단가는 '정규 수업'과 '보충 수업'을 합산하여 구매 금액으로
        나눈 값입니다.{'\n'}
      </View>
      *보충 수업은 정규 수업 소진 시 100%로 제공되므로 회당 단가에 포함됩니다.{' '}
    </>,
    <>
      {' '}
      <View medium black>
        {' '}
        Makeup Lesson Credits{'\n'}{' '}
      </View>{' '}
      - Lessons starting within 24 hours in real-time{'\n'} - Available only for
      Free Talking - Speaking Focused topic.{'\n'} - For every four completed
      lessons, one makeup lesson credit will be given.{'\n'} - The validity
      period is one year. {'\n\n'}{' '}
      <View medium black>
        {' '}
        What counts as used lesson credits?{'\n'}{' '}
      </View>{' '}
      - Completed lessons - Canceled lessons - no-show lessons all count as
      using lesson credits{'\n\n'}{' '}
      <View medium black>
        {' '}
        Price per lesson is the divided cost by the number of lessons, including
        regular and makeup lesson credits.{'\n'}
      </View>{' '}
      *As makeup lesson credits are 100% assured, are therefore included in the
      calculation.
    </>,
    's_pricing.free_subsidy_description_1',
    <>
      {' '}
      <View medium black>
        {' '}
        何为补充课程?{'\n'}{' '}
      </View>{' '}
      - 当前于24小时以内开始的课程{'\n'} - 仅限选择Free Talking教材{'\n'} -
      完成正规课程4次, 提供1次(长期券优惠){'\n'} - 课程期限为发行之日起1年
      {'\n\n'}{' '}
      <View medium black>
        {' '}
        何为正规课程的完成?{'\n'}{' '}
      </View>{' '}
      - 课程正常进行 - 课程旷课 - 课程开始前24小时以内取消{'\n\n'}{' '}
      <View medium black>
        价格表显示的课程单价是将‘正规课程’及‘补充课程’合算后,
        除以实际购买金额的平均价。{'\n'}
      </View>{' '}
      *补充课程因在正规课程使用后100%予以提供, 所以被包含进课程单价之中。
    </>,
    <>
      {' '}
      <View medium black>
        {' '}
        補充課程意指？{'\n'}{' '}
      </View>{' '}
      - 目前於24小時以內開始的課程{'\n'} - 只可選擇Free Talking教材{'\n'} -
      耗盡4次正規課程時，將發送1次（長期券優惠）{'\n'} - 聽課期間自發送日起1年
      {'\n\n'}{' '}
      <View medium black>
        {' '}
        耗盡正規課程意指？{'\n'}{' '}
      </View>{' '}
      - 正常進行課程 - 上課未出現 - 於課程開始前24小時以內取消 {'\n\n'}{' '}
      <View medium black>
        價格表的單次單價為合計「正規課程」及「補充課程」後，除以購買金額得到的值。
        {'\n'}
      </View>{' '}
      *補充課程於耗盡正規課程後100%提供，故包含於單次單價。
    </>,
    <>
      {' '}
      <View medium black>
        {' '}
        補填レッスンとは？{'\n'}{' '}
      </View>{' '}
      - リアルタイムで24時間以内に受講できるレッスン{'\n'} - Free
      Talking教材のみ選択可能{'\n'} -
      レギュラーレッスンチケット4回使用で補填レッスン1回分付与。(長期受講チケット特典)
      {'\n'} - 有効期間は発行日から1年間{'\n\n'}{' '}
      <View medium black>
        {' '}
        レッスンチケットの使用カウント例{'\n'}{' '}
      </View>{' '}
      - レッスンが問題なく実施された場合 - レッスンを無断欠席した場合 -
      レッスン開始24時間以内にキャンセルした場合{'\n\n'}{' '}
      <View medium black>
        価格表の1回当たりの単価は「レギュラーレッスン」と「補填レッスン」を合算して購入金額で割った金額です。
        {'\n'}
      </View>{' '}
      *補填レッスンはレギュラーレッスンチケットを使用した際に自動付与されるため、上記1回当たりの単価に含むこととします。
    </>,
    <>
      {' '}
      <View medium black>
        {' '}
        Thẻ Học bù{'\n'}{' '}
      </View>{' '}
      - Buổi học sẽ bắt đầu trong vòng 24 giờ.{'\n'} - Chỉ có lựa chọn Buổi trò
      chuyện Tự do - Tập trung vào nói.{'\n'} - Cứ mỗi sáu buổi học bạn hoàn
      thành, một Thẻ học bù sẽ được tặng cho bạn.{'\n'} - Thời hạn hiệu lực là
      một năm. {'\n\n'}{' '}
      <View medium black>
        {' '}
        Những buổi nào được tính là Thẻ học đã sử dụng?{'\n'}{' '}
      </View>{' '}
      - Buổi học đã hoàn thành - Buổi học đã huỷ - Buổi học vắng mặt cũng được
      coi là đã sử dụng thẻ học{'\n\n'}{' '}
      <View medium black>
        {' '}
        Học phí cho một buổi học được tính bằng tổng chi phí chia cho tổng số
        buổi học, bao gồm cả buổi học tiêu chuẩn và buổi học bù.{'\n'}
      </View>{' '}
      *Vì thẻ học bù 100% sẽ được cấp, thế nên được tính vào học phí.{' '}
    </>,
  ],
  b2b_bonus_lesson_title: [
    'B2B 특별 추가 수업',
    'B2B Credits',
    's_pricing.b2b_bonus_lesson_title',
    'B2B特别追加课程',
    'B2B特別額外課程',
    'B2B特別追加レッスン',
    'Thẻ học bổ sung B2B',
  ],
  no_split_payment: [
    '1년 수업권 결제',
    'No split payments',
    's_pricing.no_split_payment',
    '1年课程券结算',
    '1年課程券結算',
    '一年のレッスン券決済',
    'Không chia nhỏ phần thanh toán',
  ],
  no_split_payment_desc: [
    '카드 일반 결제만 지원되고 있습니다. 분할 결제 또한 가능하지 않습니다.',
    'Only full credit/debit card payments are accepted for year-long packages',
    's_pricing.no_split_payment_desc',
    '只支持一次性结算，无法分期付款',
    '只支持1次性結算，無法分期付款',
    '一般決済のみ支援しております。分割払い決済は適応されません。',
    'Với gói học một năm, bạn phải thanh toán một lần',
  ],
  welcome_coupon: {
    label: [
      '3만원 웰컴쿠폰이 적용되어 있습니다',
      '$25 OFF WELCOME COUPON applied',
      's_pricing.welcome_coupon.label',
      '',
      '',
      '',
      '',
    ],
  },
};
export const s_webview = {
  floating: {
    title: [
      '1년에 단 2번 있는 최대 할인 혜택',
      'Biggest discount happening just twice a year',
      's_webview.floating.title',
      '1年仅有2次的最大折扣优惠',
      '1年僅2次的最高折扣優惠',
      '1年にたった2回の最大割引特典',
      'Ưu đãi lớn nhất chỉ diễn ra hai lẫn mỗi năm.',
    ],
    button: [
      '곧 사라지는 혜택 받기',
      'Promotion ending soon',
      's_webview.floating.button',
      '领取即将消失的优惠',
      '領取即將消失的優惠',
      'まもなく消える特典を受け取る',
      'Ưu đãi sắp kết thúc',
    ],
  },
};
export const s_content = {
  my_material: [
    '내 교재',
    'My Materials',
    's_content.my_material',
    '我的教材',
    '我的教材',
    'マイ教材',
    'Tài liệu của tôi',
  ],
  prev: [
    '수업한 교재',
    'Prev. Materials',
    's_content.prev',
    '使用的教材',
    '使用的教材',
    'レッスンに使用した教材',
    'Tài liệu trước',
  ],
  prev_empty: [
    `내가 수업한 교재를
여기서 확인할 수 있습니다.`,
    'You can check the materials you used in your previous lessons.',
    's_content.prev_empty',
    `可在这里确认
 我使用的教材。`,
    `可在這裡確認
我使用的教材。`,
    `あなたがレッスンで使用した教材を
ここで確認することができます。`,
    'Bạn có thể kiểm tra tài liệu đã dùng trong buổi học trước.',
  ],
};
export const s_content_my_materials = {
  teens_removed_from_saved_packets: [
    '[교재 > 내 교재] 찜한 교재에서 삭제되었습니다.',
    'Removed from [Materials > My Materials] Favorites.',
    's_content_my_materials.teens_removed_from_saved_packets',
    '我收藏的教材，已在[教材 > 我的教材]中删除。',
    '已從[教材 > 我的教材]我收藏的教材刪除。',
    '[教材 > マイ教材] お気に入り教材から削除されました。',
    'Bỏ khỏi [Tài liệu > Tài liệu của tôi] Yêu thích.',
  ],
  teens_added_to_saved_packets: [
    '[교재 > 내 교재] 찜한 교재에 추가되었습니다.',
    'Added to [Materials > My Materials] Favorites.',
    's_content_my_materials.teens_added_to_saved_packets',
    '我收藏的教材，已添加在[教材 > 我的教材]中。',
    '已新增於[教材 > 我的教材]我收藏的教材。',
    '[教材 > マイ教材] お気に入り教材に追加されました。',
    'Thêm vào [Tài liệu > Tài liệu của tôi] Yêu thích.',
  ],
  teens_delete_my_materials: [
    '[교재 > 내 교재] 찜한 교재에서 삭제하시겠습니까?',
    'Are you sure you want to remove from [Materials > My Material] Favorites?',
    's_content_my_materials.teens_delete_my_materials',
    '确定要在[教材 > 我的教材]中删除我收藏的教材吗？',
    '確定要從[教材 > 我的教材]我收藏的教材刪除嗎？',
    '[教材 > マイ教材] お気に入り教材から削除しますか？',
    'Bạn có chắc muốn bỏ khỏi [Tài liệu > Tài liệu của tôi] Yêu thích?',
  ],
};
export const s_dashboard = {
  header: [
    '대시보드',
    'Dashboard',
    's_dashboard.header',
    '表格',
    '資訊主頁',
    'ダッシュボード',
    'Dashboard',
  ],
};
export const s_lessons_homework = {
  title: [
    '숙제',
    'Homework',
    's_lessons_homework.title',
    '作业',
    '作業',
    '宿題',
    'Bài tập',
  ],
};
export const s_lessons_review = {
  evaluation: {
    worst: [
      '최악이었어요!',
      'Worst',
      's_lessons_review.evaluation.worst',
      '非常糟糕！',
      '超級糟糕！',
      '最悪でした！',
      'Rất tệ',
    ],
    bad: [
      '그냥 별로였어요',
      'Bad',
      's_lessons_review.evaluation.bad',
      '不怎么样',
      '普通',
      'イマイチでした。',
      'Tệ',
    ],
    dissatisfied: [
      '전반적으로 아쉬웠어요',
      'Dissatisfied',
      's_lessons_review.evaluation.dissatisfied',
      '整体上很可惜',
      '整體上很可惜',
      '全体的に残念でした。',
      'Không hài lòng',
    ],
    fine: [
      '좋았는데, 조금 아쉬웠어요',
      'Fine',
      's_lessons_review.evaluation.fine',
      '还不错，但有点可惜',
      '還不錯，但有點可惜',
      'よかったけど、少し残念でした。',
      'Ổn',
    ],
    great: [
      '좋았어요!',
      'Great',
      's_lessons_review.evaluation.great',
      '很不错！',
      '很不錯！',
      '良かったです！',
      'Tuyệt vời',
    ],
    what_did_you_have_problem: [
      '어떤 점이 불만이셨나요?',
      'What did you have problems with?',
      's_lessons_review.evaluation.what_did_you_have_problem',
      '什么部分让您不满意呢？',
      '什麼部分讓您不滿意呢？',
      'どの点が不満でしたか？',
      'Bạn gặp phải vấn đề gì?',
    ],
    what_small_improvements: [
      '어떤 점만 개선하면 좋을까요?',
      'What improvements would you suggest?',
      's_lessons_review.evaluation.what_small_improvements',
      '您希望改善哪一部分呢？',
      '您希望改善哪一部分呢？',
      'どの点を改善すればいいですか？',
      'Bạn đề xuất những điều gì cần cải thiện?',
    ],
    what_did_you_like_the_most: [
      '특히 어떤 점이 좋으셨나요?',
      'What did you like the most?',
      's_lessons_review.evaluation.what_did_you_like_the_most',
      '您特别喜欢哪一部分呢？',
      '您特別喜歡哪一部分呢？',
      '特にどの点がよかったですか？',
      'Điều gì bạn thích nhất?',
    ],
    placeholder_1: [
      '수업 이용에 불편을 드려 죄송합니다. 튜터와 진행한 수업에서 겪으셨던 불편 사항을 남겨주세요.',
      'We are sorry to hear that. Please note what you found to be unsatisfactory.',
      's_lessons_review.evaluation.placeholder_1',
      '对于您在进行课程中遇到的不便，我们深表歉意。请留下与任课教师进行课程时遇到的不便事项。',
      '抱歉造成您在進行課程上的不便，請留下與任課教師進行課程時遭遇的不便事項。',
      'レッスンのご利用にご不便をおかけして申し訳ございません。チューターと行ったレッスンで感じた不満点を入力してください。',
      'Chúng tôi rất tiếc. Xin ghi rõ điều bạn chưa hài lòng.',
    ],
    placeholder_2: [
      '기대하셨던 것과는 달리 진행된 수업에서 튜터의 부족했던 부분을 남겨주세요.',
      'Has your tutor missed your expectations at all? How so?',
      's_lessons_review.evaluation.placeholder_2',
      '请留下与您预期相反的在课程中任课教师的不足之处。',
      '請留下低於您所期待的課程中任課教師的不足之處。',
      '期待とは異なったレッスンでのチューターの足りない部分を入力してください。',
      'Có phải gia sư của bạn không đáp ứng được những kỳ vọng?',
    ],
    placeholder_3: [
      '만족도 높은 수업을 제공하지 못해 아쉽습니다. 튜터가 개선할 수 있는 부분을 남겨주세요.',
      'We are sorry to hear that. Please note where the tutor could improve',
      's_lessons_review.evaluation.placeholder_3',
      '很遗憾我们未能提供令您满意的课程。请留下任课教师可以改善的部分。',
      '抱歉未能提供滿意度高的課程，請留下任課教師可以改善的部分。',
      '満足度の高いレッスンを提供することができず、申し訳ございません。チューターが改善できる部分を入力してください。',
      'Chúng tôi rất tiếc. Mong bạn nêu rõ những điểm gia sư có thể cải thiện',
    ],
    placeholder_4: [
      `튜터에 대한 자세한 수업 평가는 튜터의 역량 개선 및 수업 퀄리티 증진에 큰 도움이 됩니다.
(네트워크, 교재 등 튜터와 관계없는 항목은 아래 선택사항을 통해 남겨주세요.)`,
      `Your detailed feedback on tutor helps improving our tutor’s ability and class quality.
(Leave network or lesson materials concerns through options below)`,
      's_lessons_review.evaluation.placeholder_4',
      `对于任课教师的详细课程评论有助于提高任课教师的能力和课程质量。
 （网路、教材等与任课教师无关的项目请通过以下选填事项留言。）`,
      `有關任課教師的詳細課程評論有助於任課教師改善能力與增進課程品質。
（網路、教材等與任課教師無關的項目請透過以下選填事項留言。）`,
      `チューターへの詳しいレッスン評価は、チューターの能力改善とレッスンクオリティの向上に大いに役立ちます。
(ネットワークや教材など、チューターとは関係のない項目は以下の選択事項からお選びください。)`,
      `Đánh giá chi tiết của bạn dành cho gia sư sẽ giúp chúng tôi cải thiện khả năng của gia sư và chất lượng lớp học.
(Nhận xét về đường truyền hoặc tài liệu buổi học ở phía dưới)`,
    ],
    submit: [
      '제출하기',
      'Submit',
      's_lessons_review.evaluation.submit',
      '提交',
      '提交',
      '送信する',
      'Gửi',
    ],
    shareRingleTeam: [
      '링글팀과 튜터에게만 공유하기',
      'Visible only to Ringle Team and Tutor.',
      's_lessons_review.evaluation.shareRingleTeam',
      '仅分享给Ringle团队与任课教师',
      '僅分享給Ringle團隊與任課教師',
      'Ringleチームとチューターにのみ共有する',
      'Chỉ hiển thị cho đội ngũ Ringle và Gia sư.',
    ],
    ringleTeamComment: [
      '링글팀에게 남길 의견이 있으신가요?',
      'Do you have any feedback for the Ringle Team?',
      's_lessons_review.evaluation.ringleTeamComment',
      '您有什么意见要留给Ringle团队吗？',
      '您有意見要和Ringle團隊分享嗎？',
      'Ringleチームへのご意見はありますか？',
      'Bạn có đánh giá nào cho đội ngũ Ringle?',
    ],
    submit_late: [
      '나중에 하기',
      'Skip for now',
      's_lessons_review.evaluation.submit_late',
      '下次再说',
      '下次再說',
      '今はしない',
      'Tạm thời bỏ qua',
    ],
    required_field: [
      '필수로 입력해야하는 항목을 입력해주세요',
      'Please enter the required fields',
      's_lessons_review.evaluation.required_field',
      '请输入必填项目',
      '請輸入必填項目',
      '必須項目を入力してください。',
      'Vui lòng nhập vào ô bắt buộc',
    ],
    preparation: [
      '수업 준비도',
      'Preparation',
      's_lessons_review.evaluation.preparation',
      '课程准备度',
      '課程準備度',
      'レッスン準備度',
      'Sự chuẩn bị',
    ],
    tech_environment: [
      '수업 환경',
      'Teaching Environment',
      's_lessons_review.evaluation.tech_environment',
      '上课环境',
      '上課環境',
      'レッスン環境',
      'Môi trường giảng dạy',
    ],
    tech_quality: [
      '비디오/마이크 상태',
      'Audio/Video Quality',
      's_lessons_review.evaluation.tech_quality',
      '视频／麦克风状态',
      '影像／麥克風狀態',
      'ビデオ/マイクの状態',
      'Chất lượng âm thanh/video',
    ],
    punctuality: [
      '지각/조기종료',
      'Punctuality',
      's_lessons_review.evaluation.punctuality',
      '迟到／提早结束',
      '遲到／提早結束',
      '遅刻/早期終了',
      'Đúng giờ',
    ],
    correction_quality: [
      '교정 능력',
      'Correction Quality',
      's_lessons_review.evaluation.correction_quality',
      '纠正能力',
      '糾正能力',
      '校正能力',
      'Chất lượng phần sửa lỗi',
    ],
    tailoring: [
      '수업 설정 미반영',
      'Tailoring to Lesson Requests',
      's_lessons_review.evaluation.tailoring',
      '未反映课程设定',
      '未反映課程設定',
      'レッスン設定未反映',
      'Xây dựng buổi học theo yêu cầu',
    ],
    lesson_direction: [
      '수업 진행 능력',
      'Lesson Direction',
      's_lessons_review.evaluation.lesson_direction',
      '课程进行能力',
      '課程進行能力',
      'レッスン進行能力',
      'Định hướng của buổi học',
    ],
    attitude: [
      '수업 태도',
      'Attitude and Tone',
      's_lessons_review.evaluation.attitude',
      '授课态度',
      '授課態度',
      'レッスン態度',
      'Thái độ và tông giọng',
    ],
    punctualityRight: [
      '수업시간 엄수',
      'Punctuality',
      's_lessons_review.evaluation.punctualityRight',
      '严守课程时间',
      '嚴守課程時間',
      'レッスン時間厳守',
      'Đúng giờ',
    ],
    tailoringRight: [
      '수업 설정 숙지',
      'Tailoring to Lesson Requests',
      's_lessons_review.evaluation.tailoringRight',
      '清楚课程设定',
      '清楚課程設定',
      'レッスン設定熟知',
      'Xây dựng buổi học theo yêu cầu',
    ],
    writeThisPlace: [
      '소중한 의견을 작성해주세요. 더 나은 서비스를 위해 노력하겠습니다.',
      'Please leave a comment.',
      's_lessons_review.evaluation.writeThisPlace',
      '请写下您的宝贵意见。我们将努力提供更好的服务。',
      '請撰寫寶貴的意見，我們將努力提供更好的服務。',
      '大切なご意見をお願いいたします。より良いサービスのために努力いたします。',
      'Vui lòng để lại bình luận.',
    ],
    material: [
      '교재',
      'Materials',
      's_lessons_review.evaluation.material',
      '教材',
      '教材',
      '教材',
      'Tài liệu',
    ],
    network: [
      '네트워크',
      'Network',
      's_lessons_review.evaluation.network',
      '网络',
      '網路',
      'ネットワーク',
      'Mạng lưới',
    ],
    overall: [
      '총평',
      'Overall',
      's_lessons_review.evaluation.overall',
      '总评',
      '總評',
      '総評',
      'Đánh giá chung',
    ],
    doNotWantToMeetAgain: [
      '이 튜터와 다시 만나지 않기',
      'I do not want to meet this tutor again',
      's_lessons_review.evaluation.doNotWantToMeetAgain',
      '不想再见这个任课教师',
      '不再見到這個任課教師',
      'このチューターと二度と会わない',
      'Tôi không muốn gặp lại gia sư này',
    ],
    howWasYourLessonWith: tutor => [
      <>
        {tutor} 튜터와의 수업은{'\n'}어떠셨나요?
      </>,
      <>How was your lesson with {tutor}?</>,
      's_lessons_review.evaluation.howWasYourLessonWith',
      <>
        您与{tutor}任课教师的课程{'\n'}进行得如何？{' '}
      </>,
      <>
        您與{tutor}任課教師的課程{'\n'}進行得如何呢？
      </>,
      <>
        {tutor} チューターとのレッスンは{'\n'}いかがでしたか？
      </>,
      <>Buổi học của bạn với {tutor} như thế nào?</>,
    ],
    leaveTutorComment: [
      '튜터에게 수업에 대한 평가를 남겨주세요.',
      'Please leave a comment about this tutor.',
      's_lessons_review.evaluation.leaveTutorComment',
      '请对任课教师留下课程评价。',
      '請對任課教師留下課程評論。',
      'チューターへのレッスンの評価を作成してください。',
      'Vui lòng để lại nhận xét về gia sư này.',
    ],
    lessonOverall: [
      '전반적인 수업 만족도는 어떠셨나요?',
      'What did you think about the lesson overall?',
      's_lessons_review.evaluation.lessonOverall',
      '整体的课程满意度如何？',
      '整體的課程滿意度如何呢？',
      '全般的なレッスンの満足度はいかがでしたか？',
      'Bạn nghĩ sao về buổi học?',
    ],
    optional: [
      '선택사항',
      'Optional',
      's_lessons_review.evaluation.optional',
      '选填事项',
      '選填事項',
      '選択事項',
      'Không bắt buộc',
    ],
    thank_you: [
      '평가가 완료되었습니다. 감사합니다.',
      'Your evaluation has been completed. Thank you.',
      's_lessons_review.evaluation.thank_you',
      '已完成评价，谢谢。',
      '已完成評論，謝謝。',
      '評価が完了しました。ありがとうございました。',
      'Bạn đã hoàn thành đánh giá. Cảm ơn.',
    ],
  },
  feedback: {
    you_ve_done_checking: [
      '튜터 피드백 확인하기 완료',
      'Done checking feedback',
      's_lessons_review.feedback.you_ve_done_checking',
      '已确认任课教师的反馈',
      '已確認任課教師的意見回饋',
      'チューターフィードバック確認完了',
      'Đã xem xong đánh giá',
    ],
    done_checking_feedback: [
      '튜터 피드백 확인하기를 완료하셨습니다.',
      'You’ve done checking feedback.',
      's_lessons_review.feedback.done_checking_feedback',
      '您已确认任课教师的反馈。',
      '您已確認任課教師的意見回饋。',
      'チューターフィードバック確認を完了しました。',
      'Bạn đã xem xong đánh giá.',
    ],
  },
};
export const s_lessons_prep_lesson = {
  lesson_setting: {
    style: [
      '수업 스타일',
      'Lesson Style',
      's_lessons_prep_lesson.lesson_setting.style',
      '课程风格',
      '課程風格',
      'レッスン形式',
      'Hình thức học',
    ],
    noti_1: [
      <>
        학생과 튜터 보호를 위해 모든{' '}
        <View bold black>
          수업 영상은 녹화되고 영업일 기준 24시간 동안 저장
        </View>
        합니다. 24시간이 지나면 자동 삭제됩니다.
      </>,
      <>
        학생과 튜터 보호를 위해 모든{' '}
        <View bold>수업 영상은 녹화되고 영업일 기준 24시간 동안 저장</View>
        합니다. 24시간이 지나면 자동 삭제됩니다.
      </>,
      's_lessons_prep_lesson.lesson_setting.noti_1',
      <>
        为保护学生与任课教师，所有{' '}
        <View bold black>
          课程视频均在工作日进行24小时录制和存储
        </View>
        。 24小时后将自动删除。{' '}
      </>,
      <>
        為保護學生與任課教師，所有{' '}
        <View bold black>
          課程影片將會錄影，並儲存一個工作天共24小時
        </View>
        。24小時後將自動刪除。
      </>,
      <>
        受講生とチューターを保護するため、すべての{' '}
        <View bold black>
          レッスン動画は録画され、営業日基準で24時間保存
        </View>
        されます。24時間が過ぎると自動的に削除されます。
      </>,
      <>
        학생과 튜터 보호를 위해 모든{' '}
        <View bold>수업 영상은 녹화되고 영업일 기준 24시간 동안 저장</View>
        합니다. 24시간이 지나면 자동 삭제됩니다.
      </>,
    ],
    noti_2: [
      '단, 수업 분석 확인과 수업 다시 듣기를 위해 수업 녹음 파일은 삭제되지 않습니다. (파일 제작은 최대 24시간이 소요됩니다.)',
      '단, 수업 분석 확인과 수업 다시 듣기를 위해 수업 녹음 파일은 삭제되지 않습니다. (파일 제작은 최대 24시간이 소요됩니다.)',
      's_lessons_prep_lesson.lesson_setting.noti_2',
      '但为了确认课程分析与重新聆听课程，课程录音文件将不被删除。（制作文件最多可能需要24小时。）',
      '但為了確認課程分析與重新聆聽課程，將不會刪除課程錄音檔。（製作檔案最長需要24小時。）',
      'ただし、レッスン分析確認とレッスンをもう一度聴くことができるように、レッスン録音ファイルは削除されません。(ファイル制作は最長24時間所要します。)',
      '단, 수업 분석 확인과 수업 다시 듣기를 위해 수업 녹음 파일은 삭제되지 않습니다. (파일 제작은 최대 24시간이 소요됩니다.)',
    ],
    teaching_style: [
      '티칭 스타일',
      '티칭 스타일',
      's_lessons_prep_lesson.lesson_setting.teaching_style',
      '授课风格',
      '授課風格',
      'ティーチングスタイル',
      '티칭 스타일',
    ],
    up_to_2: [
      '(2개까지 선택 가능)',
      '(2개까지 선택 가능)',
      's_lessons_prep_lesson.lesson_setting.up_to_2',
      '（最多可选择2个）',
      '（最多可選擇2個）',
      '(2つまで選択可能)',
      '(2개까지 선택 가능)',
    ],
    only_for_parents: [
      '자녀에게는 비공개됩니다.',
      '자녀에게는 비공개됩니다.',
      's_lessons_prep_lesson.lesson_setting.only_for_parents',
      '不对子女公开。',
      '不對子女公開。',
      '子供には非公開となります。',
      '자녀에게는 비공개됩니다.',
    ],
  },
  lesson_style: {
    teens_noti: [
      '수업 시작 시, "Recording In Progress" 안내멘트가 나오고 [● Recording]가 표기됩니다.',
      'You\'ll hear "Recording In Progress" and see [● Recording] sign.',
      's_lessons_prep_lesson.lesson_style.teens_noti',
      `课程开始时，将会出现「Recording In Progress」指示音并显示[● Recording]。
 （不录制上课画面。）`,
      '課程開始時，出現「Recording In Progress」指示聲，並標示[● Recording]。',
      'レッスン開始時「Recording In Progress」という案内メッセージが出て[● Recording]と表示されます。',
      'Bạn sẽ nghe thấy "Recording In Progress" và dấu hiêu [● Recording].',
    ],
  },
  tutor_another_time: [
    '튜터의 다른 시간을\n선택해 주세요.',
    'Reschedule with this tutor',
    's_lessons_prep_lesson.tutor_another_time',
    '请选择任课教师的\n其他时间。',
    '請選擇任課教師的\n其他時間。',
    'チューターの他の時間を\n選択してください。',
    'Xếp lịch lại với gia sư',
  ],
  choose_question: {
    done: count => [
      `수업 질문 ${count}개 선택하기를 완료했습니다.`,
      `You selected ${count} discussion questions.`,
      's_lessons_prep_lesson.choose_question.done',
      `已选择${count}个课程提问。`,
      `已選擇${count}個課程提問。`,
      `レッスンの質問を ${count}つ選択するを完了しました。`,
      `Bạn đã chọn ${count} câu hỏi thảo luận.`,
    ],
  },
  cancel: [
    '튜터 취소',
    'Tutor cancelled',
    's_lessons_prep_lesson.cancel',
    '任课教师取消',
    '任課教師已取消',
    'チューターキャンセル',
    'Gia sư đã huỷ',
  ],
  confirm: [
    '튜터 확정',
    'Tutor confirmed',
    's_lessons_prep_lesson.confirm',
    '任课教师确定',
    '任課教師已確定',
    'チューター確定',
    'Gia sư đã xác nhận',
  ],
  after_edit_material: [
    '변경 후',
    'New Lesson Material',
    's_lessons_prep_lesson.after_edit_material',
    '变更后',
    '變更後',
    '変更後',
    'Tài liệu học mới',
  ],
  after_edit_lesson_time: [
    '변경 후',
    'New Lesson Time',
    's_lessons_prep_lesson.after_edit_lesson_time',
    '变更后',
    '變更後',
    '変更後',
    'Giờ học mới',
  ],
  edit_lesson_time: [
    '변경할 시간을 선택해주세요',
    'Please select new lesson time',
    's_lessons_prep_lesson.edit_lesson_time',
    '请选择想变更的时间',
    '請選擇欲變更的時間',
    '変更する時間を選択してください。',
    'Vui lòng chọn giờ học mới',
  ],
  edit_material: [
    '변경할 교재를 선택해주세요',
    'Please select new material',
    's_lessons_prep_lesson.edit_material',
    '请选择想变更的教材',
    '請選擇欲變更的教材',
    '変更する教材を選択してください。',
    'Vui lòng chọn tài liệu mới',
  ],
  matching_options: [
    '선택한 튜터와 매칭되지 않을 경우, 수업 처리 방식을 선택해주세요',
    "Please select how you'd like to resolve when you don't match with the tutor you selected.",
    's_lessons_prep_lesson.matching_options',
    '与选择的任课教师匹配失败时，请选择课程处理方式',
    '與選擇的任課教師配對失敗時，請選擇課程處理方式。',
    '選択したチューターとマッチングしない場合、レッスン処理方式を選択してください。',
    'Vui lòng lựa chọn cách giải quyết vấn đề nếu gia sư bạn chọn không phù hợp với bạn.',
  ],
};
export const s_lessons_schedule = {
  teens_not_provide_24_hours: [
    '아쉽게도 현재 버전에서는 ‘24시간 이내 선택’이\n제공되지 않아요. 불편을 드려 죄송합니다.',
    '아쉽게도 현재 버전에서는 ‘24시간 이내 선택’이\n제공되지 않아요. 불편을 드려 죄송합니다.',
    's_lessons_schedule.teens_not_provide_24_hours',
    '目前版本未提供「24小时以内的课程」，\n给您带来不便，我们深表歉意。',
    '目前版本未提供「24小時以內的課程」，\n抱歉造成您的不便。',
    '残念ながら現在のバージョンでは「24時間以内のレッスンを選択」が\n提供されません。ご不便をおかけして申し訳ございません。',
    '아쉽게도 현재 버전에서는 ‘24시간 이내 선택’이\n제공되지 않아요. 불편을 드려 죄송합니다.',
  ],
  teens_not_provide_time_select: [
    '아쉽게도 현재 버전에서는 ‘시간 먼저 선택’이\n제공되지 않아요. 불편을 드려 죄송합니다.',
    '아쉽게도 현재 버전에서는 ‘시간 먼저 선택’이\n제공되지 않아요. 불편을 드려 죄송합니다.',
    's_lessons_schedule.teens_not_provide_time_select',
    '目前版本未提供「先选择时间」，\n给您带来不便，我们深表歉意。',
    '目前版本未提供「先選擇時間」，\n抱歉造成您的不便。',
    '残念ながら現在のバージョンでは 「時間を先に選択」が\n提供されません。ご不便をおかけして申し訳ございません。',
    '아쉽게도 현재 버전에서는 ‘시간 먼저 선택’이\n제공되지 않아요. 불편을 드려 죄송합니다.',
  ],
  material_select: {
    choose_material_or_not: [
      '교재 선택 완료',
      'Materials selected',
      's_lessons_schedule.material_select.choose_material_or_not',
      '教材选择完毕',
      '教材選擇完畢',
      '教材選択完了',
      'Tài liệu đã chọn',
    ],
  },
  cancel_process_desc: [
    '현재까지 예약 신청한 내역이 삭제됩니다.\n진행 중인 수업 예약을 취소하시겠습니까?',
    'Want to continue booking the lesson?',
    's_lessons_schedule.cancel_process_desc',
    '目前申请预约的明细将会删除，\n确定要取消正在进行的课程预约吗？',
    '目前申請預約的明細將會刪除，\n確定要取消正在進行的課程預約嗎？',
    '現在までの予約確定前の内容が削除されます。\n予約確定前のレッスン予約を取消しますか？',
    'Các lựa chọn sẽ bị xoá.\nBạn có muốn tiếp tục?',
  ],
  booking_cancelation: [
    '수업 예약 취소',
    'Cancel reservation',
    's_lessons_schedule.booking_cancelation',
    '取消课程预约',
    '取消課程預約',
    'レッスン予約キャンセル',
    'Hủy đặt học',
  ],
  continue_booking: [
    '예약 계속하기',
    'Continue scheduling',
    's_lessons_schedule.continue_booking',
    '继续预约',
    '繼續預約',
    '予約を続ける',
    'Tiếp tục đặt lịch',
  ],
  selected_lesson_cancelation: [
    '예약 신청한 수업 취소',
    'Remove from Selected Lessons',
    's_lessons_schedule.selected_lesson_cancelation',
    '取消预约申请的课程',
    '取消預約申請的課程',
    '予約確定前のレッスンキャンセル',
    'Bỏ Buổi học được chọn',
  ],
  remove_selected_lesson_message: [
    '수업의 예약 신청을 취소하시겠습니까?',
    'Do you want to remove this lesson from Selected Lessons?',
    's_lessons_schedule.remove_selected_lesson_message',
    '确定要取消预约申请吗？',
    '確定要取消預約申請嗎？',
    'レッスンの予約をキャンセルしますか？',
    'Bạn có muốn bỏ buổi học này khỏi Buổi học được chọn?',
  ],
  selected_lesson_cancel: [
    '예약 신청 취소',
    'Selected Lesson Cancelation',
    's_lessons_schedule.selected_lesson_cancel',
    '取消预约申请',
    '取消預約申請',
    '予約キャンセル',
    'Bỏ buổi học đã chọn',
  ],
  will_added: [
    '예약 가능한 튜터가 추가될 예정입니다.',
    'Additional available tutors will be opened soon.',
    's_lessons_schedule.will_added',
    '预计新增可预约的任课教师。',
    '預計新增可預約的任課教師。',
    '予約可能なチューターが追加される予定です。',
    'Các gia sư trống lịch sẽ hiển thị sớm.',
  ],
  rules: {
    check_rules: [
      '수업 에티켓을 확인해 주세요!',
      'Check Our Rules of Conduct',
      's_lessons_schedule.rules.check_rules',
      '请确认上课礼仪！',
      '請確認上課禮儀！',
      'レッスンエチケットをご確認ください！',
      'Kiểm tra Quy tắc Ứng xử',
    ],
    set_up: [
      '알맞은 수업 환경 준비하기',
      'Set up an Environment for Learning',
      's_lessons_schedule.rules.set_up',
      '准备合适的上课环境',
      '準備合適的上課環境',
      '適切なレッスン環境を整える',
      'Thiết lập môi trường học tập',
    ],
    do_not_drive: [
      '운전 중 / 이동 중 수업은 삼가 주세요.',
      'Don’t Zoom and drive.',
      's_lessons_schedule.rules.do_not_drive',
      '请避免在开车／移动中上课。',
      '請避免於開車／移動中上課。',
      '運転中 / 移動中のレッスンはおやめください。',
      'Không dùng Zoom trong khi lái xe.',
    ],
    no_drinking: [
      '음주 후 수업은 자제해 주세요.',
      'No drinking during lessons.',
      's_lessons_schedule.rules.no_drinking',
      '请避免在饮酒后上课。',
      '請避免於飲酒後上課。',
      '酒気を帯びた状態でのレッスンはご遠慮ください。',
      'Không sử dụng đồ uống có cồn trong buổi học.',
    ],
    punctual: [
      '약속된 시간 지키기',
      'Be Punctual',
      's_lessons_schedule.rules.punctual',
      '遵守约定的时间',
      '遵守約定的時間',
      '約束の時間を守る',
      'Đúng giờ',
    ],
    keep_schdules: [
      '정해진 수업 시간을 지켜주세요.',
      'Keep track of your lesson schedules.',
      's_lessons_schedule.rules.keep_schdules',
      '请遵守指定上课时间。',
      '請遵守指定上課時間。',
      '決められたレッスン時間にご入室ください。',
      'Theo dõi thời khoá biểu của bạn',
    ],
    no_external_request: [
      '수업 종료 이후 요청은 자제해 주세요.',
      'Tutors aren’t responsible for\nany external lesson requests.',
      's_lessons_schedule.rules.no_external_request',
      '课程结束后，请勿提出要求。',
      '課程結束後，請勿提出要求。',
      'レッスン終了以降のリクエストは対応いたしかねます。',
      'Gia sư không chịu tránh nhiệm cho\nbất kỳ yêu cầu nào ngoài buổi học.',
    ],
    no_external_request_: [
      '수업 종료 이후 요청은 자제해 주세요.',
      'Tutors aren’t responsible for any external lesson requests.',
      's_lessons_schedule.rules.no_external_request_',
      '课程结束后，请勿提出要求。',
      '課程結束後，請勿提出要求。',
      'レッスン終了以降のリクエストは対応いたしかねます。',
      'Gia sư không chịu tránh nhiệm cho bất kỳ yêu cầu nào ngoài buổi học.',
    ],
    no_photos_: [
      '수업 중 사적인 질문, 사진 촬영 등은 삼가 주세요.',
      'Refrain from asking sensitive questions or taking photographs.',
      's_lessons_schedule.rules.no_photos_',
      '上课时请勿提出私人问题或拍照。',
      '上課時請勿提出私人問題或拍照。',
      'レッスン中の私的な質問や写真撮影などはお控えください。',
      'Không hỏi những câu hỏi nhạy cảm hoặc chụp hình.',
    ],
    with_respect: [
      '튜터 존중하기',
      'Treat Your Tutor with Respect',
      's_lessons_schedule.rules.with_respect',
      '尊重任课教师',
      '尊重任課教師',
      'チューターを尊重する',
      'Tôn trọng gia sư của bạn',
    ],
    no_photos: [
      '수업 중 사적인 질문, 사진 촬영 등은 삼가 주세요.',
      'Refrain from asking\nsensitive questions or taking photographs.',
      's_lessons_schedule.rules.no_photos',
      '上课时请勿提出私人问题或拍照。',
      '上課時請勿提出私人問題或拍照。',
      'レッスン中の私的な質問や写真撮影などはお控えください。',
      'Không hỏi những câu hỏi\nnhạy cảm hoặc chụp hình.',
    ],
    no_discriminatory_remarks: [
      '의도하지 않은 혐오 발언을 주의해 주세요.',
      'Do not make discriminatory remarks.',
      's_lessons_schedule.rules.no_discriminatory_remarks',
      '请注意不当言论。',
      '請避免無意中發表厭惡言論。',
      '意図しない嫌悪発言等にご注意ください。',
      'Không đưa ra những nhận xét phân biệt đối xử.',
    ],
    focus_on_learning: [
      '영어 학습 목적에 충실하기',
      'Focus on Learning English',
      's_lessons_schedule.rules.focus_on_learning',
      '忠于英语学习目的',
      '忠於英語學習目的',
      '英語学習の目的に忠実に',
      'Tập trung vào việc học tiếng Anh',
    ],
    avoid_unrelated: [
      '튜터에게 수업과 관련 없는 요청은 삼가 주세요.',
      'Avoid making requests unrelated to the lesson.',
      's_lessons_schedule.rules.avoid_unrelated',
      '请避免向任课教师提出与课程无关的要求。',
      '請避免向任課教師提出與課程無關的要求。',
      'チューターへのレッスンに無関係のリクエストはお控えください。',
      'Tránh đưa ra những yêu cầu không liên quan đến buổi học.',
    ],
    turn_on_video: [
      '학습 효과를 위해 카메라는 꼭 켜주세요.',
      'Turn on video for effective communication.',
      's_lessons_schedule.rules.turn_on_video',
      '为了学习效果，请务必开启摄像头。',
      '為了學習效果，請務必開啟相機。',
      '学習効果のためにカメラは必ずオンにしてください。',
      'Bật video để giao tiếp hiệu quả hơn.',
    ],
    follow_guidelines: [
      '수업 에티켓을 지키지 않으면,\n링글 수업이 제한될 수 있습니다.',
      'If the rules of conduct are not followed,\nfuture lessons may be limited.',
      's_lessons_schedule.rules.follow_guidelines',
      '如不遵守上课礼仪，\nRingle的课程可能会受限。',
      '未遵守上課禮儀時，\nRingle的課程可能受限。',
      'レッスンエチケットをお守りいただけない場合、\nRingle受講が制限されることがあります。',
      'Nếu các hướng dẫn dưới đây không được tuân thủ,\ncác buổi học trong tương lai sẽ bị hạn chế.',
    ],
    check: [
      '잠깐! 수업 에티켓',
      'Check Our Rules of Conduct!',
      's_lessons_schedule.rules.check',
      '等一下！上课礼仪',
      '等一下！上課禮儀',
      'ちょっと待って！レッスンエチケット',
      'Kiểm tra Quy tắc Ứng xử',
    ],
  },
  cancel: {
    lesson_cancellation_results: [
      '수업 취소 결과',
      'Lesson Cancellation Results',
      's_lessons_schedule.cancel.lesson_cancellation_results',
      '课程取消结果',
      '課程取消結果',
      'レッスンキャンセル結果',
      'Kết quả buổi học huỷ',
    ],
    credit_restore: [
      '수업 취소 결과, 수업 예약에 사용한 수업권이 복구되었습니다.',
      '',
      's_lessons_schedule.cancel.credit_restore',
      '课程取消结果，已恢复用在预约课程的课程券。',
      '課程取消結果，已復原用於預約課程的課程券。',
      'レッスンキャンセルの結果、レッスン予約に使用したレッスンチケットが復元されました。',
      'Buổi học đã huỷ. Thẻ học của bạn đã được khôi phục.',
    ],
    makeup_lesson_credit: [
      '수업 취소 결과, 수업 예약에 사용한 수업권은 복구되지 않았으나 보충수업권 1회가 발급되었습니다. 보충수업권은 24시간 이내 수업 예약에 사용하실 수 있습니다.',
      "As a result, your credit used to book this lesson hasn't been restored but one makeup lesson credit has been given. Makeup lesson credits are used for lessons starting within 24 hours in real-time.",
      's_lessons_schedule.cancel.makeup_lesson_credit',
      '课程取消结果，虽然未恢复用在预约课程的课程券，但已发送1次可用在预约24小时以内课程的补充课程券。',
      '課程取消結果，雖然未復原用於預約課程的課程券，但已核發1次補充課程券。補充課程券可用於預約24小時以內的課程。',
      'レッスンキャンセルの結果、レッスン予約に使用したレッスンチケットは 復元されませんでしたが、補填レッスンチケット1枚が発行されました。 補填レッスンチケットは24時間以内のレッスン予約に使用することができます。',
      'Buổi học đã huỷ. Thẻ học của bạn sẽ được thay thể bằng Thẻ học bù. Thẻ học bù được sử dụng để đặt buổi học trong 24 giờ tới vì các học viên khác huỷ sát giờ hoặc những buổi học trống lịch chưa có ai đặt.',
    ],
    makeup_lesson_credit_btn: [
      '보충수업 예약',
      'Book makeup lessons',
      's_lessons_schedule.cancel.makeup_lesson_credit_btn',
      '预约补充课程',
      '預約補充課程',
      '補填レッスン予約',
      'Đặt buổi học bù',
    ],
    has_not_been_restored: [
      '수업 취소 결과, 수업 예약에 사용한 수업권이 복구되지 않고 그대로 사용되었습니다.',
      "As a result, your credit used to book this lesson hasn't been restored.",
      's_lessons_schedule.cancel.has_not_been_restored',
      '课程取消结果，未恢复用在预约课程的课程券，课程券已使用完。',
      '課程取消結果，未復原用於預約課程的課程券，已使用完畢。',
      'レッスンキャンセルの結果、レッスン予約に使用したレッスンチケットは復元されず、そのまま使用されました。',
      'Buổi học đã huỷ. Thẻ học sử dụng để đặt buổi học này đã hết hạn.',
    ],
  },
};
export const t_mypage = {
  notification_settings: {
    teens_newsletter: {
      title: [
        '틴즈 소식 & 혜택',
        '틴즈 소식 & 혜택',
        't_mypage.notification_settings.teens_newsletter.title',
        '',
        '',
        '',
        '',
      ],
      desc: [
        '틴즈 할인혜택, 이벤트, 뉴스레터, 콘텐츠 업데이트 등을 받으실 수 있습니다.',
        "You will receive Ringle Teens' exclusive promotions and latest news.",
        't_mypage.notification_settings.teens_newsletter.desc',
        '',
        '',
        '',
        '',
      ],
    },
  },
  children: ['자녀', '자녀', 't_mypage.children', '', '', '', ''],
  edit_profile: {
    noti: [
      '자녀 프로필은 맞춤 수업을 위해 수업이 확정된 튜터에게만 공개됩니다. 수업 종료 후에는 더 이상 확인이 불가능합니다.',
      '자녀 프로필은 맞춤 수업을 위해 수업이 확정된 튜터에게만 공개됩니다. 수업 종료 후에는 더 이상 확인이 불가능합니다.',
      't_mypage.edit_profile.noti',
      '',
      '',
      '',
      '',
    ],
  },
};
export const s_tutors_mytutor = {
  teens_delete_my_tutors: [
    '[튜터 > 내 튜터] 찜한 튜터에서 삭제하시겠습니까?',
    'Are you sure you want to remove from [Tutors > My Tutors] Favorites?',
    's_tutors_mytutor.teens_delete_my_tutors',
    '确定要在[任课教师 > 我的任课教师]中删除我收藏的任课教师吗？',
    '確定要從[任課教師 > 我的任課教師]我收藏的任課教師刪除嗎？',
    '[チューター > マイチューター] お気に入りチューターから削除しますか？',
    'Bạn có chắc muốn bỏ khỏi [Gia sư > Gia sư của tôi] Yêu thích?',
  ],
  tutor_favorites: [
    '찜한 튜터',
    'Favorite Tutors',
    's_tutors_mytutor.tutor_favorites',
    '收藏的任课教师',
    '我收藏的任課教師',
    'お気に入りチューター',
    'Gia sư yêu thích',
  ],
};
export const s_content_dailybrief = {
  title: [
    '데일리 브리프',
    'Daily Brief',
    's_content_dailybrief.title',
    'Daily Brief',
    'Daily Brief',
    'Daily Brief',
    'Daily Brief',
  ],
  favorites: [
    '찜한 데일리 브리프',
    'Favorite Daily Briefs',
    's_content_dailybrief.favorites',
    '我收藏的Daily Brief',
    '我收藏的Daily Brief',
    'お気に入り登録したDaily Brief',
    'Daily Brief Yêu thích',
  ],
  empty: [
    '다시 보고 싶은\n데일리 브리프를 찜해보세요.',
    'Add your favorite daily briefs!',
    's_content_dailybrief.empty',
    '请收藏想再次观看的\nDaily Brief。',
    '請收藏想再次觀看的\nDaily Brief。',
    'もう一度見たい\nDaily Briefをお気に入り登録しましょう。',
    'Thêm daily brief yêu thích của bạn!',
  ],
  removed: [
    '[콘텐츠 > 내 콘텐츠] 찜한 데일리 브리프에서 삭제되었습니다.',
    'Removed from [Content > My Content] Favorite Daily Briefs.',
    's_content_dailybrief.removed',
    '已在[内容 > 我的收藏]中删除我收藏的Daily Brief。',
    '已從[內容 > 我的收藏]我收藏的Daily Brief刪除。',
    '[コンテンツ > マイコンテンツ] お気に入りDaily Briefから削除されました。',
    'Bỏ khỏi [Nội dung > Nội dung của tôi] Daily Brief Yêu thích.',
  ],
  added: [
    '[콘텐츠 > 내 콘텐츠] 찜한 데일리 브리프에 추가되었습니다.',
    'Added to [Content > My Content] Favorite Daily Briefs.',
    's_content_dailybrief.added',
    '已在[内容 > 我的收藏]中添加的我收藏的Daily Brief。',
    '已新增於[內容 > 我的收藏]我收藏的Daily Brief。',
    '[コンテンツ > マイコンテンツ] お気に入りDaily Briefに追加されました。',
    'Thêm vào [Nội dung > Nội dung của tôi] Daily Brief Yêu thích.',
  ],
  sure_to_remove: [
    '[콘텐츠 > 내 콘텐츠]에서 삭제하시겠습니까?',
    'Are you sure you want to remove from [Content > My Content]?',
    's_content_dailybrief.sure_to_remove',
    '确定要在[内容 > 我的收藏]删除吗？',
    '確定要從[內容 > 我的收藏]刪除嗎？',
    '[コンテンツ > マイコンテンツ]から削除しますか？',
    'Bạn có chắc bạn muốn bỏ khỏi [Nội dung > Nội dung của tôi]?',
  ],
  invalid_content: [
    '게시 기간이 지난 Content Weekly 입니다',
    'This is an old issue of Content Weekly and is no longer available.',
    's_content_dailybrief.invalid_content',
    '阅览期已结束',
    '閲覽期已結束',
    '掲示期間が終了しました。',
    'Đây là vấn đề trước đó của Nội dung tuần và hiện đã giải quyết.',
  ],
};
export const s_subscribe = {
  message: {
    success: [
      '구독을 축하드립니다!',
      'Congratulations, you have successfully subscribed!',
      's_subscribe.message.success',
      '',
      '',
      '',
      '',
    ],
    already_subscribed: [
      '이미 구독하고 계신 이메일 입니다. 스팸함을 확인해주세요.',
      'You have already subscribed with this email. Please check your spam.',
      's_subscribe.message.already_subscribed',
      '',
      '',
      '',
      '',
    ],
    failure: [
      '구독중 문제가 발생하였습니다. 고객센터에 문의해주세요.',
      'There was a problem while subscribing to the newsletter. Please contact the administrator.',
      's_subscribe.message.failure',
      '',
      '',
      '',
      '',
    ],
    invalidName: [
      '이름을 적어주세요.',
      'Please input your name.',
      's_subscribe.message.invalidName',
      '',
      '',
      '',
      '',
    ],
    invalidEmail: [
      '잘못된 이메일 형식입니다.',
      'Not a valid email address',
      's_subscribe.message.invalidEmail',
      '',
      '',
      '',
      '',
    ],
  },
  body_header: {
    name_input: [
      '이름',
      'Name',
      's_subscribe.body_header.name_input',
      '',
      '',
      '',
      '',
    ],
    email_input: [
      '이메일',
      'Email',
      's_subscribe.body_header.email_input',
      '',
      '',
      '',
      '',
    ],
    header_button: [
      'Content Weekly 무료 구독하기',
      'Subscribe to Content Weekly',
      's_subscribe.body_header.header_button',
      '',
      '',
      '',
      '',
    ],
    title: [
      '매주 목요일, 금주의 가장 인기 있는 링글 콘텐츠를 받아보세요',
      "Subscribe to get Ringle's hottest contents every Thursday.",
      's_subscribe.body_header.title',
      '',
      '',
      '',
      '',
    ],
  },
  success_header: {
    title: [
      'Content Weekly 구독 완료되었습니다!',
      'You have successfully subscribed to the newsletter!',
      's_subscribe.success_header.title',
      '',
      '',
      '',
      '',
    ],
    subtitle: [
      '매주 목요일, 금주의 가장 인기 있는 링글 콘텐츠를 보내드릴게요.',
      "Every Thursday, you will get Ringle's hottest contents.",
      's_subscribe.success_header.subtitle',
      '',
      '',
      '',
      '',
    ],
    button: [
      '링글 콘텐츠 둘러보기',
      'Check out Ringle Contents',
      's_subscribe.success_header.button',
      '',
      '',
      '',
      '',
    ],
  },
  body: {
    example: [
      '이번주 Content Weekly 보기',
      "Check out this week's Content Weekly",
      's_subscribe.body.example',
      '',
      '',
      '',
      '',
    ],
  },
  subs_btn: [
    'Content Weekly 구독하기',
    'Subscribe to Content Weekly',
    's_subscribe.subs_btn',
    'Subscribe to Content Weekly',
    'Subscribe to Content Weekly',
    'Subscribe to Content Weekly',
    'Subscribe to Content Weekly',
  ],
};
export const s_unsubscribe = {
  message: {
    success: [
      '답변을 제출하셨습니다. 감사합니다.',
      'Your response has been submitted. Thank you.',
      's_unsubscribe.message.success',
      '',
      '',
      '',
      '',
    ],
    submit_failure: [
      '답변 제출중 문제가 발생하셨습니다.',
      'There was a problem while submitting your answers.',
      's_unsubscribe.message.submit_failure',
      '',
      '',
      '',
      '',
    ],
    failure: [
      '구독 취소중 문제가 발생하였습니다. 고객센터에 문의해주세요.',
      'There was a problem while unsubscribing to the newsletter. Please contact the administrator.',
      's_unsubscribe.message.failure',
      '',
      '',
      '',
      '',
    ],
  },
  body_header: {
    title: [
      '그동안 콘텐츠 뉴스레터를 구독해 주셔서 정말 감사합니다.',
      'Thank you for your time as our subscriber.',
      's_unsubscribe.body_header.title',
      '',
      '',
      '',
      '',
    ],
    subtitle: [
      '구독을 취소한 이유를 알려주세요. (복수 선택 가능)',
      'Please tell us why you decided to unsubscribe.',
      's_unsubscribe.body_header.subtitle',
      '',
      '',
      '',
      '',
    ],
  },
  reasons: {
    not_interested: [
      '영어 공부에 관심이 없어졌습니다.',
      'I lost interest in studying English.',
      's_unsubscribe.reasons.not_interested',
      '',
      '',
      '',
      '',
    ],
    contents_not_good: [
      '링글 콘텐츠가 영어 공부나 인사이트 개발에 도움이 되지 않습니다.',
      'Ringle Contents did not help me in learning English or getting insights on topics.',
      's_unsubscribe.reasons.contents_not_good',
      '',
      '',
      '',
      '',
    ],
    no_time: [
      '시간이나 비용을 들이고 싶지 않습니다.',
      'I do not have time for the newsletters.',
      's_unsubscribe.reasons.no_time',
      '',
      '',
      '',
      '',
    ],
    other_contents: [
      '다른 좋은 콘텐츠를 찾았습니다.',
      'Found other helpful contents.',
      's_unsubscribe.reasons.other_contents',
      '',
      '',
      '',
      '',
    ],
    other: ['기타', 'Other', 's_unsubscribe.reasons.other', '', '', '', ''],
    specify: [
      '좀 더 자세히 알려주세요!',
      'Please tell us what it is!',
      's_unsubscribe.reasons.specify',
      '',
      '',
      '',
      '',
    ],
    tell_us: [
      '무엇인지 알려주세요!',
      'Tell us what it is!',
      's_unsubscribe.reasons.tell_us',
      '',
      '',
      '',
      '',
    ],
    no_email: [
      '링크에 문제가 있습니다. 이메일에 있는 링크를 사용해 주세요.',
      'This is a corrupted link. Please use the link in the email.',
      's_unsubscribe.reasons.no_email',
      '',
      '',
      '',
      '',
    ],
  },
  button: ['제출하기', 'Submit', 's_unsubscribe.button', '', '', '', ''],
  disabled_button: [
    '제출 완료',
    'Submitted',
    's_unsubscribe.disabled_button',
    '',
    '',
    '',
    '',
  ],
  resubscribe: [
    '다시 구독하기',
    'Subscribe again',
    's_unsubscribe.resubscribe',
    '',
    '',
    '',
    '',
  ],
};
export const t_point = {
  total: ['보유 포인트', 'Your Points', 't_point.total', '', '', '', ''],
  total_expire: [
    '30일 이내 만료 예정 포인트',
    'Points expires in 30 days',
    't_point.total_expire',
    '',
    '',
    '',
    '',
  ],
  terms: {
    title: ['유의사항', 'Terms', 't_point.terms.title', '', '', '', ''],
    desc1: [
      '포인트는 링글 틴즈 정기결제 시 사용하실 수 있으며, 유효기간은 적립일로부터 365일입니다.',
      'You can use Points to pay for lesson credits. Points will expire in 365 days from the issue date.',
      't_point.terms.desc1',
      '',
      '',
      '',
      '',
    ],
    desc2: [
      '수업 포인트는 수업 완료후 7일 뒤에 적립됩니다. 해당 수업의 문제가 발생하여 포인트가 제공되었거나 해당 수업의 수업권이 복구된 경우에는 수업 포인트가 적립되지 않습니다.',
      'Points will be awarded at 3% of the original purchase price per lesson in 7 days after completing each lesson. Lessons taken with free credits, or lessons terminated in unusual circumstances will not be awarded Points.',
      't_point.terms.desc2',
      '',
      '',
      '',
      '',
    ],
  },
  option1: ['전체', 'All', 't_point.option1', '', '', '', ''],
  option2: ['적립', 'Earned', 't_point.option2', '', '', '', ''],
  option3: ['사용/만료', 'Used/Expored', 't_point.option3', '', '', '', ''],
  message: [
    '적립 또는 사용한 내역이 없습니다.',
    'History not found.',
    't_point.message',
    '',
    '',
    '',
    '',
  ],
  btn1: ['더보기', 'See More', 't_point.btn1', '', '', '', ''],
};
