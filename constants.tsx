
import { FingerName, HandSide, LifeItem, Principle, School, FingerMap } from './types';
import { 
  Wind, Droplets, Flame, Mountain, Heart, User, Briefcase, Users, Baby, Compass, Smile,
  XCircle, Lock, UserX, Scale, EyeOff, ShieldAlert, MessageSquareOff,
  Trophy, HeartHandshake, Crown, Zap, Building2, Shield, Palette, Rocket, Mic, Sun
} from 'lucide-react';

export const OBJECTIVES_LIST = [
  {
    id: 'SELF',
    title: "Thấu Hiểu Bản Thân",
    content: "Khám phá chiều sâu nội tâm, điểm mạnh, điểm yếu và tiếng nói chân thật bên trong bạn.",
    icon: User,
    color: "text-amber-400"
  },
  {
    id: 'LOVE',
    title: "Thấu Hiểu Người Yêu",
    content: "Nhận diện ngôn ngữ tình yêu và cách xây dựng mối quan hệ bền vững, thấu cảm.",
    icon: Heart,
    color: "text-red-400"
  },
  {
    id: 'COUPLE',
    title: "Thấu Hiểu Vợ Chồng",
    content: "Hóa giải mâu thuẫn, tìm tiếng nói chung và đồng hành cùng nhau trong sứ mệnh cuộc đời.",
    icon: Users,
    color: "text-pink-400"
  },
  {
    id: 'KID',
    title: "Thấu Hiểu Con Cái",
    content: "Nhận biết tâm hồn bẩm sinh của con để có phương pháp giáo dục và định hướng phù hợp.",
    icon: Baby,
    color: "text-green-400"
  },
  {
    id: 'CAREER',
    title: "Định Hướng Công Việc",
    content: "Tìm kiếm sự nghiệp phù hợp với năng lực cốt lõi, nơi bạn được tỏa sáng và cống hiến.",
    icon: Briefcase,
    color: "text-blue-400"
  },
  {
    id: 'FULFILL',
    title: "Trở Thành Người Hướng Dẫn",
    content: "Bạn có thể trở thành người tư vấn, giúp đỡ mọi người khám phá mục đích sống và đạt được sự viên mãn.",
    icon: Smile, 
    color: "text-orange-400"
  }
];

export const CORE_ELEMENTS = [
  {
    id: 'THIEN',
    title: "TÂM HỒN",
    subtitle: "Tự nhiên",
    content: "Những giá trị bẩm sinh, cốt lõi (thuộc về tự nhiên, không phụ thuộc vào suy nghĩ của bạn và không tự nhiên thay đổi).",
    icon: Heart,
    gradient: "from-orange-400 to-red-600",
    shadow: "shadow-orange-500/40"
  },
  {
    id: 'NHAN',
    title: "NHÂN CÁCH",
    subtitle: "Kết quả",
    content: "Là sự kết hợp giữa Tâm hồn và Hiện thực thể hiện ra con người hiện tại của bạn (Nó đòi hỏi sự hòa hợp).",
    icon: User,
    gradient: "from-blue-400 to-indigo-600",
    shadow: "shadow-indigo-500/40"
  },
  {
    id: 'DIA',
    title: "HIỆN THỰC",
    subtitle: "Môi trường",
    content: "Những giá trị không thuộc Tâm hồn, bạn tiếp nhận, tin tưởng, rèn luyện (nó ngẫu nhiên và đến từ bên ngoài).",
    icon: Briefcase,
    gradient: "from-amber-400 to-yellow-600",
    shadow: "shadow-amber-500/40"
  }
];

export const PRINCIPLES_DATA: Principle[] = [
  {
    id: 1,
    title: "Trường học, Lớp học, Bài học",
    content: "Có thể ví cuộc đời của mỗi người là trải qua Trường học, Lớp học và tại đó có sẵn những Bài học (thách thức) tương ứng. Khi một người vượt qua Bài học của mình thì Mục đích sống sẽ xuất hiện."
  },
  {
    id: 2,
    title: "Mục đích sống Cân bằng",
    content: "Hạnh phúc viên mãn chỉ đạt được khi bạn sống ở trạng thái cân bằng, tránh xa hai thái cực 'quá nhiều' (phục dịch, bùng nổ...) và 'quá ít' (thờ ơ, kìm nén...)."
  },
  {
    id: 3,
    title: "Mục đích sống Đối nghịch",
    content: "Tâm hồn càng chọn một mục đích cao cả, cuộc sống càng đưa bạn vào những trải nghiệm đối lập sâu sắc nhất để bạn học cách vượt qua."
  },
  {
    id: 4,
    title: "Mật mã dấu vân tay",
    content: "Dấu vân tay là độc nhất và bất biến. Tác giả của một quyển sách nổi tiếng đã dựa vào dấu vân tay để xác định được 'Bài học' và 'Mục đích sống' của mỗi người."
  }
];

export const SCHOOLS_DATA: School[] = [
  {
    id: 'AIR',
    name: 'Trường Khí',
    class: 'Lớp học: Giúp đỡ',
    icon: Wind,
    color: 'text-white bg-slate-500/10 border-slate-400/30',
    description: 'Tập trung vào sự phục vụ và hỗ trợ người khác.',
    lessons: {
      tooMuch: 'Phục dịch (Làm thay, bỏ quên bản thân)',
      tooLittle: 'Thờ ơ (Ích kỷ, lãnh đạm)',
      balanced: 'Giúp đỡ vui vẻ & Cân bằng'
    },
    modalTheme: {
      border: "border-green-500",
      bg: "bg-green-50",
      titleColor: "text-green-800",
      iconColor: "text-green-600"
    },
    classProcess: {
      title: "Quy Trình Lớp Học: Giúp Đỡ",
      steps: [
        {
          step: "Bước 1. Thiết lập",
          description: "Cuộc sống tạo ra tình huống và bạn phải làm điều gì cho ai đó.",
          example: "Minh là một nhân viên mới gia nhập đội ngũ dự án. Với bản tính sẵn lòng giúp đỡ, cô muốn hỗ trợ các đồng nghiệp để dự án thành công."
        },
        {
          step: "Bước 2. Rắc rối nảy sinh (Phục dịch)",
          description: "Bạn làm mọi thứ để giúp đỡ người khác, gánh nặng đè lên bạn, kết quả bạn không được công nhận.",
          example: "Minh luôn nhận lời mọi yêu cầu. Cô thức khuya để hoàn thành công việc của người khác và bị kiệt sức."
        },
        {
          step: "Bước 3. Sự leo thang (Quá nhiều -> Quá ít)",
          description: "Bạn phản ứng dữ dội với sự phục dịch và không còn làm gì cho ai trừ bản thân mình.",
          example: "Minh bùng nổ, từ chối thẳng thừng và trở nên ích kỷ, lạnh lùng để bảo vệ bản thân."
        },
        {
          step: "Bước 4. Đột phá (Cân bằng)",
          description: "Bạn tìm được cách giúp đỡ người khác mà vẫn quan tâm đến bản thân.",
          example: "Minh học cách đặt ra ranh giới, giúp đỡ khi thực sự muốn và có khả năng."
        }
      ]
    }
  },
  {
    id: 'WATER',
    name: 'Trường Nước',
    class: 'Lớp học: Tình yêu',
    icon: Droplets,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    description: 'Tập trung vào cảm xúc, sự kết nối và các mối quan hệ.',
    lessons: {
      tooMuch: 'Cảm xúc bùng nổ (Mất kiểm soát)',
      tooLittle: 'Kìm hãm cảm xúc (Xa cách, che giấu)',
      balanced: 'Tình yêu & Sự gần gũi chân thành'
    },
    modalTheme: {
      border: "border-red-400",
      bg: "bg-red-50",
      titleColor: "text-red-800",
      iconColor: "text-red-500"
    },
    classProcess: {
      title: "Quy Trình Lớp Học: Tình Yêu",
      steps: [
        {
          step: "Bước 1. Thiết lập",
          description: "Cuộc sống tạo ra tình huống và dẫn đến cảm xúc của bạn xuất hiện.",
          example: "An mong muốn xây dựng mối quan hệ tốt đẹp và gắn kết với mọi người trong dự án mới."
        },
        {
          step: "Bước 2. Rắc rối nảy sinh",
          description: "Bạn đối mặt với quá nhiều tình huống kích thích cảm xúc và không làm chủ được chúng.",
          example: "An bối rối trước những bất đồng, cảm xúc bực bội tuôn trào khó kiểm soát."
        },
        {
          step: "Bước 3. Sự leo thang",
          description: "Cảm xúc bùng nổ đỉnh điểm dẫn đến xu hướng né tránh hoặc kìm nén.",
          example: "Sau khi chỉ trích đồng nghiệp, An sợ hãi và chuyển sang im lặng, giả vờ ổn."
        },
        {
          step: "Bước 4. Đột phá",
          description: "Bạn học cách cảm nhận, điều chỉnh và thể hiện cảm xúc chân thật, phù hợp.",
          example: "An đối diện với tình huống bằng sự chân thành, chia sẻ lo lắng một cách chuyên nghiệp."
        }
      ]
    }
  },
  {
    id: 'FIRE',
    name: 'Trường Lửa',
    class: 'Lớp học: Thông thái',
    icon: Flame,
    color: 'text-red-500 bg-red-500/10 border-red-500/30',
    description: 'Tập trung vào trí tuệ, sự sáng tạo và hành động.',
    lessons: {
      tooMuch: 'Mắc kẹt (Suy nghĩ quá nhiều, không hành động)',
      tooLittle: 'Hời hợt (Thiếu cam kết, thiếu chiều sâu)',
      balanced: 'Cam kết thực sự & Hành động thông thái'
    },
    modalTheme: {
      border: "border-purple-500",
      bg: "bg-purple-50",
      titleColor: "text-purple-800",
      iconColor: "text-purple-600"
    },
    classProcess: {
      title: "Quy Trình Lớp Học: Thông Thái",
      steps: [
        {
          step: "Bước 1. Thiết lập",
          description: "Cuộc sống đặt bạn vào tình huống phải lựa chọn và đưa ra cam kết bằng hành động.",
          example: "Bạn quyết định theo đuổi một ngành học khó, đòi hỏi sự dấn thân bền bỉ."
        },
        {
          step: "Bước 2. Rắc rối nảy sinh",
          description: "Bạn chưa thực sự cam kết, bắt đầu trì hoãn hoặc tự lý giải để trốn tránh.",
          example: "Bạn viện lý do bận rộn để không tập trung học khi thấy chương trình quá nặng."
        },
        {
          step: "Bước 3. Sự leo thang",
          description: "Bạn sống 'ngoài vỏ bọc' của cam kết, bề ngoài ổn nhưng bên trong bất an.",
          example: "Bạn vẫn đi học nhưng chỉ đối phó, không dám dấn thân thực sự vì sợ thất bại."
        },
        {
          step: "Bước 4. Đột phá",
          description: "Bạn nhận ra sự đối phó không mang lại hạnh phúc và dũng cảm thực hiện cam kết.",
          example: "Bạn đối mặt nỗi sợ, nỗ lực hết mình và tìm thấy ý nghĩa thực sự của việc học."
        }
      ]
    }
  },
  {
    id: 'EARTH',
    name: 'Trường Đất',
    class: 'Lớp học: Bình yên',
    icon: Mountain,
    color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    description: 'Tập trung vào sự ổn định, hiện tại và nội tâm.',
    lessons: {
      tooMuch: 'Quá để tâm (Nghiện bận rộn, lo âu)',
      tooLittle: 'Quá lãnh cảm (Thiếu động lực, hững hờ)',
      balanced: 'Bình yên nội tại & Sống tận hưởng'
    },
    modalTheme: {
      border: "border-blue-400",
      bg: "bg-blue-50",
      titleColor: "text-blue-800",
      iconColor: "text-blue-600"
    },
    classProcess: {
      title: "Quy Trình Lớp Học: Bình Yên",
      steps: [
        {
          step: "Bước 1. Thiết lập (Quá ít)",
          description: "Bạn sống trầm tĩnh thái quá và lãnh cảm, tin rằng mọi thứ đều không quan trọng.",
          example: "Bình làm việc hững hờ, coi công việc là nhàm chán và không có gì đáng tâm tâm."
        },
        {
          step: "Bước 2. Rắc rối nảy sinh",
          description: "Sự lãnh cảm tạo ra cảm giác trống rỗng, bạn tìm kiếm thử thách cực hạn để thấy 'sống'.",
          example: "Để thoát khỏi sự nhàm chán, Bình nhảy vào một dự án đầy rủi ro và áp lực lớn."
        },
        {
          step: "Bước 3. Sự leo thang (Quá nhiều)",
          description: "Bạn nghiện cảm giác bận rộn, liên tục xử lý khủng hoảng và mất kết nối nội tâm.",
          example: "Bình làm việc ngày đêm, trở nên kiệt sức vì chuỗi sự kiện khẩn cấp bất tận."
        },
        {
          step: "Bước 4. Đột phá",
          description: "Bạn học cách sống chậm lại, cân bằng giữa hành động và tĩnh lặng.",
          example: "Bình dành thời gian thiền định, lắng nghe bản thân và tận hưởng hiện tại."
        }
      ]
    }
  }
];

export const LESSONS_LIST: LifeItem[] = [
  { 
    id: 9, 
    name: "Thất bại", 
    description: "Vấn đề Thất bại: Thất bại trong việc cân bằng nỗ lực, dẫn đến kiệt sức hoặc buông xuôi.", 
    challenge: "Đối mặt với sự vô ích của nỗ lực sai lầm và nỗi sợ kết quả không hoàn hảo.", 
    icon: XCircle,
    details: {
      symptoms: ["Sợ bắt đầu vì sợ kết quả không hoàn hảo.", "Cố gắng quá sức nhưng kết quả không tương xứng.", "Dễ dàng bỏ cuộc khi gặp trở ngại.", "Đổ lỗi cho hoàn cảnh."],
      advice: "Hãy định nghĩa lại 'thất bại' là thông tin phản hồi. Tách biệt giá trị bản thân khỏi kết quả công việc.",
      gift: "Sự kiên cường và khả năng biến mọi trải nghiệm thành tài sản trí tuệ."
    }
  },
  { 
    id: 10, 
    name: "Gia đình / Cộng đồng", 
    description: "Vấn đề Gia đình / Cộng đồng: Mâu thuẫn giữa nhu cầu cá nhân và áp lực tập thể.", 
    challenge: "Tìm tiếng nói chung và thiết lập ranh giới lành mạnh.", 
    icon: Users,
    details: {
      symptoms: ["Cảm thấy ngột ngạt vì sự quan tâm thái quá.", "Hy sinh nhu cầu cá nhân (người tốt).", "Cảm thấy lạc lõng, cô lập.", "Gánh vác vấn đề của người khác."],
      advice: "Học cách thiết lập ranh giới. Yêu thương không có nghĩa là gánh vác thay cuộc đời người khác.",
      gift: "Khả năng kết nối sâu sắc và tạo ra cộng đồng hỗ trợ đích thực."
    }
  },
  { 
    id: 11, 
    name: "Bất lực", 
    description: "Vấn đề Bất lực: Cảm giác không thể kiểm soát hoặc dùng quyền lực sai cách.", 
    challenge: "Học cách trao quyền và chấp nhận những giới hạn của bản thân.", 
    icon: Lock,
    details: {
      symptoms: ["Muốn kiểm soát mọi thứ vì sợ rủi ro.", "Dùng sự giận dữ để che giấu yếu đuối.", "Cảm thấy mình là nạn nhân.", "Phủ nhận sức mạnh bản thân."],
      advice: "Buông bỏ nhu cầu kiểm soát những thứ ngoài tầm tay. Làm chủ phản ứng của chính mình.",
      gift: "Sự lãnh đạo tự nhiên và khả năng nâng đỡ người khác."
    }
  },
  { 
    id: 12, 
    name: "Đam mê bị cản trở", 
    description: "Vấn đề Đam mê bị cản trở: Làm điều mình muốn nhưng không thỏa mãn, hoặc không biết mình muốn gì.", 
    challenge: "Tìm lại ngọn lửa nhiệt huyết thực sự từ những giá trị cốt lõi.", 
    icon: Flame,
    details: {
      symptoms: ["Cảm thấy cuộc sống nhàm chán.", "Làm việc như máy, không cảm xúc.", "Ghen tị với người khác.", "Sợ theo đuổi sở thích thật sự."],
      advice: "Bắt đầu từ những niềm vui nhỏ bé. Cho phép bản thân thử nghiệm và sai lầm.",
      gift: "Một cuộc sống rực rỡ, tràn đầy năng lượng và truyền cảm hứng."
    }
  },
  { 
    id: 13, 
    name: "Vô trách nhiệm", 
    description: "Vấn đề Vô trách nhiệm: Trốn tránh trách nhiệm với chính cuộc đời mình.", 
    challenge: "Sống đúng với cam kết và chịu trách nhiệm 100% cho các quyết định.", 
    icon: UserX,
    details: {
      symptoms: ["Thường xuyên thất hứa.", "Đổ lỗi cho người khác.", "Ôm đồm việc ảo để trốn tránh việc thật.", "Trì hoãn quyết định quan trọng."],
      advice: "Trách nhiệm là khả năng phản hồi. Bắt đầu bằng việc giữ những lời hứa nhỏ với bản thân.",
      gift: "Sự tự do đích thực và uy tín vững chắc."
    }
  },
  { 
    id: 14, 
    name: "Tội lỗi", 
    description: "Vấn đề Tội lỗi: Cảm thấy không xứng đáng hoặc dùng tội lỗi để thao túng.", 
    challenge: "Tha thứ cho bản thân và chịu trách nhiệm một cách đúng mực.", 
    icon: Scale,
    details: {
      symptoms: ["Luôn xin lỗi vô cớ.", "Cảm thấy không xứng đáng hạnh phúc.", "Dùng cảm giác tội lỗi để thao túng.", "Khắt khe quá mức về đạo đức."],
      advice: "Phân biệt tội lỗi thật và giả. Học cách tha thứ cho những sai sót con người.",
      gift: "Sự bình an nội tâm và khả năng thấu hiểu không phán xét."
    }
  },
  { 
    id: 15, 
    name: "Ẩn náu", 
    description: "Vấn đề Ẩn náu / Trốn tránh: Che giấu con người thật sau vỏ bọc mạnh mẽ.", 
    challenge: "Dũng cảm thể hiện bản thân chân thật và bước ra ánh sáng.", 
    icon: EyeOff,
    details: {
      symptoms: ["Sợ bị nhìn thấu suy nghĩ.", "Tạo vỏ bọc hoàn hảo giả tạo.", "Ngại xuất hiện trước đám đông.", "Cảm thấy an toàn khi vô hình."],
      advice: "Thế giới cần màu sắc riêng của bạn. Hãy chấp nhận sự không hoàn hảo của mình.",
      gift: "Sự tỏa sáng tự nhiên và thu hút những kết nối chân thành."
    }
  },
  { 
    id: 16, 
    name: "Sợ bị từ chối", 
    description: "Vấn đề Sợ bị từ chối: Từ bỏ bản thân để được chấp nhận hoặc né tránh kết nối.", 
    challenge: "Xây dựng sự tự tin nội tại và chấp nhận rủi ro trong tình cảm.", 
    icon: ShieldAlert,
    details: {
      symptoms: ["Không dám nói 'Không'.", "Luôn dò xét thái độ người khác.", "Chủ động từ chối trước để bảo vệ mình.", "Nhạy cảm với phê bình."],
      advice: "Sự từ chối chỉ là sự không phù hợp. Hãy xây dựng giá trị tự thân vững vàng.",
      gift: "Sự tự tin vững vàng và những mối quan hệ chân thật."
    }
  },
  { 
    id: 17, 
    name: "Im lặng", 
    description: "Vấn đề Im lặng / Không nói ra: Nói rỗng tuếch hoặc không dám lên tiếng bảo vệ mình.", 
    challenge: "Giao tiếp chân thực, quyết đoán và lắng nghe sâu sắc.", 
    icon: MessageSquareOff,
    details: {
      symptoms: ["Giữ uất ức trong lòng.", "Nói nhiều để né tránh vấn đề chính.", "Không biết diễn đạt cảm xúc.", "Sợ xung đột."],
      advice: "Lời nói có sức mạnh. Hãy học cách nói ra sự thật của mình một cách tôn trọng.",
      gift: "Khả năng truyền cảm hứng và kết nối sâu sắc qua ngôn từ."
    }
  },
  { 
    id: 18, 
    name: "Sự thân mật", 
    description: "Vấn đề Sự thân mật: Né tránh gần gũi vì sợ tổn thương hoặc dùng giúp đỡ để thao túng.", 
    challenge: "Xây dựng niềm tin và sự kết nối không điều kiện.", 
    icon: Heart,
    details: {
      symptoms: ["Sợ sự gần gũi tinh thần.", "Chỉ an toàn khi giữ khoảng cách.", "Dùng vật chất thay thế kết nối cảm xúc.", "Nghi ngờ lòng tốt."],
      advice: "Cho phép mình dễ bị tổn thương là cách duy nhất để chạm đến trái tim người khác.",
      gift: "Một trái tim rộng mở, biết yêu và được yêu trọn vẹn."
    }
  },
];

export const PURPOSES_LIST: LifeItem[] = [
  { 
    id: 19, 
    name: "Thành công", 
    description: "Thành công / Người thực thi: Hiện thực hóa ý tưởng và tạo kết quả đo lường được.", 
    fulfillment: "Đắm chìm trong các dự án ý nghĩa và tận hưởng thành quả thực tế.", 
    icon: Trophy,
    details: {
      symptoms: ["Biến ý tưởng thành hiện thực.", "Tập trung hiệu quả và kết quả.", "Tích lũy thành tựu.", "Là chỗ dựa giải pháp."],
      advice: "Định nghĩa thành công bằng sự hài lòng nội tại, không chỉ là vật chất.",
      gift: "Sự thịnh vượng và những công trình thực tế giúp ích cho đời."
    }
  },
  { 
    id: 20, 
    name: "Cộng đồng", 
    description: "Gia đình / Cộng đồng: Tạo ra môi trường an toàn, hỗ trợ lẫn nhau.", 
    fulfillment: "Sự đồng thuận, gắn kết và hạnh phúc của tập thể.", 
    icon: HeartHandshake,
    details: {
      symptoms: ["Yêu thích sự tụ họp.", "Hòa giải và kết nối mọi người.", "Hạnh phúc khi thấy người khác hòa thuận.", "Hy sinh vì lợi ích chung."],
      advice: "Đừng đánh mất bản sắc riêng trong tập thể. Tôn trọng sự khác biệt.",
      gift: "Môi trường sống đầy ắp tình thương và sự hỗ trợ chân thành."
    }
  },
  { 
    id: 21, 
    name: "Quyền lực", 
    description: "Quyền lực / Lãnh đạo: Dẫn dắt, gây ảnh hưởng và xây dựng lãnh thổ mới.", 
    fulfillment: "Đạt được mục tiêu cao cả cho tập thể và được tôn trọng.", 
    icon: Crown,
    details: {
      symptoms: ["Tầm nhìn xa và khả năng thuyết phục.", "Dám chịu trách nhiệm quyết định khó.", "Mong muốn thay đổi trật tự cũ.", "Tự tin dẫn dắt."],
      advice: "Dùng quyền lực để nâng đỡ người khác. Lãnh đạo bằng sự phục vụ.",
      gift: "Sự dẫn dắt giúp tập thể vượt qua sóng gió đến tầm cao mới."
    }
  },
  { 
    id: 22, 
    name: "Đam mê", 
    description: "Đam mê: Sống với cảm xúc mãnh liệt, độc lập và theo đuổi nhiệt huyết.", 
    fulfillment: "Tự do thể hiện cá tính, sự sáng tạo và nhiệt huyết sống.", 
    icon: Zap,
    details: {
      symptoms: ["Sống hết mình với cảm xúc.", "Ghét sự gò bó quy tắc.", "Luôn tìm kiếm trải nghiệm mới.", "Truyền năng lượng cho người khác."],
      advice: "Cân bằng giữa đam mê cá nhân và trách nhiệm với cộng đồng.",
      gift: "Nguồn cảm hứng bất tận và can đảm sống thật với chính mình."
    }
  },
  { 
    id: 23, 
    name: "Trách nhiệm", 
    description: "Trách nhiệm / Doanh nhân: Thiết lập cơ cấu, xử lý tài chính và hoàn thành cam kết.", 
    fulfillment: "Sự ổn định, tin cậy tuyệt đối và thịnh vượng bền vững.", 
    icon: Building2,
    details: {
      symptoms: ["Đáng tin cậy, nói là làm.", "Quản lý tài nguyên hiệu quả.", "Suy nghĩ bền vững dài hạn.", "Tạo sự an tâm cho xung quanh."],
      advice: "Học cách chia sẻ và tin tưởng người khác. Linh hoạt để thích nghi.",
      gift: "Nền tảng vững chắc cho sự phát triển của mọi hệ thống."
    }
  },
  { 
    id: 24, 
    name: "Liêm chính", 
    description: "Liêm chính / Người cố vấn: Sống đúng nguyên tắc và là tấm gương đạo đức.", 
    fulfillment: "Sự tin tưởng tuyệt đối từ mọi người và bình an nội tâm.", 
    icon: Shield,
    details: {
      symptoms: ["Trung thực nhất quán.", "Bộ quy tắc đạo đức kiên định.", "Là người cố vấn tin cậy.", "Coi trọng danh dự hơn lợi ích."],
      advice: "Thực hành sự liêm chính với lòng trắc ẩn và sự thấu hiểu.",
      gift: "Sự khôn ngoan và niềm tin tuyệt đối từ cộng đồng."
    }
  },
  { 
    id: 25, 
    name: "Sáng tạo", 
    description: "Sáng tạo / Nghệ sĩ: Thể hiện sự độc đáo, phá cách và thẩm mỹ.", 
    fulfillment: "Sự công nhận và thăng hoa trong các hoạt động nghệ thuật/sáng tạo.", 
    icon: Palette,
    details: {
      symptoms: ["Lăng kính nhìn đời khác biệt.", "Nhu cầu bức thiết phải thể hiện bản thân.", "Không chấp nhận lối mòn.", "Mang màu sắc cho cuộc sống."],
      advice: "Sáng tạo cần kỷ luật để thành hình. Đừng sợ sự phán xét.",
      gift: "Những tác phẩm làm giàu đẹp cho tâm hồn nhân loại."
    }
  },
  { 
    id: 26, 
    name: "Quyết đoán", 
    description: "Quyết đoán / Tư duy đổi mới: Thách thức cái cũ, chấp nhận rủi ro đột phá.", 
    fulfillment: "Vượt qua sự phản đối để tạo ra sự đổi mới thực sự.", 
    icon: Rocket,
    details: {
      symptoms: ["Không ngại va chạm.", "Tư duy phản biện sắc bén.", "Dám đi con đường mới.", "Phá vỡ các rào cản cũ."],
      advice: "Lắng nghe trước khi ra quyết định. Mềm mỏng đôi khi mạnh hơn cứng rắn.",
      gift: "Những bước tiến đột phá và thay đổi tích cực cho xã hội."
    }
  },
  { 
    id: 27, 
    name: "Giao tiếp", 
    description: "Giao tiếp / Tác giả: Truyền tải thông điệp và kết nối qua ngôn ngữ.", 
    fulfillment: "Được lắng nghe, thấu hiểu và lan tỏa tri thức.", 
    icon: Mic,
    details: {
      symptoms: ["Sử dụng ngôn từ linh hoạt.", "Thích chia sẻ kiến thức.", "Biết lắng nghe sâu sắc.", "Là cầu nối thông tin."],
      advice: "Giao tiếp bằng sự chân thành và tử tế để kiến tạo các giá trị.",
      gift: "Sự thấu hiểu và lan tỏa tri thức đến những tâm hồn đồng điệu."
    }
  },
  { 
    id: 28, 
    name: "Chữa lành", 
    description: "Thấu hiểu / Người chữa lành: Giúp đỡ người khác vượt qua nỗi đau tinh thần.", 
    fulfillment: "Sự chuyển hóa tích cực và bình yên cho những tâm hồn tổn thương.", 
    icon: Sun,
    details: {
      symptoms: ["Trực giác nhạy bén cảm xúc.", "Là nơi bình yên để tìm về.", "Xoa dịu nỗi đau thầm lặng.", "Mong muốn mọi người hạnh phúc."],
      advice: "Chăm sóc bản thân trước khi lo cho người khác. Đừng gánh hết nỗi đau thế gian.",
      gift: "Sự hồi sinh và bình an cho những tâm hồn đang lạc lối."
    }
  },
];

export const FINGER_MAP: FingerMap[] = [
  // Left Hand
  { side: HandSide.LEFT, finger: FingerName.LITTLE, lesson: "Vấn đề Sự thân mật", purpose: "Thấu hiểu / Người chữa lành" },
  { side: HandSide.LEFT, finger: FingerName.RING, lesson: "Vấn đề Sợ bị từ chối", purpose: "Quyết đoán / Tư duy đổi mới" },
  { side: HandSide.LEFT, finger: FingerName.MIDDLE, lesson: "Vấn đề Tội lỗi", purpose: "Liêm chính / Người cố vấn" },
  { side: HandSide.LEFT, finger: FingerName.INDEX, lesson: "Vấn đề Đam mê bị cản trở", purpose: "Đam mê" },
  { side: HandSide.LEFT, finger: FingerName.THUMB, lesson: "Vấn đề Gia đình / Cộng đồng", purpose: "Gia đình / Cộng đồng" },
  
  // Right Hand
  { side: HandSide.RIGHT, finger: FingerName.THUMB, lesson: "Vấn đề Thất bại", purpose: "Thành công / Người thực thi" },
  { side: HandSide.RIGHT, finger: FingerName.INDEX, lesson: "Vấn đề Bất lực", purpose: "Quyền lực / Lãnh đạo" },
  { side: HandSide.RIGHT, finger: FingerName.MIDDLE, lesson: "Vấn đề Vô trách nhiệm", purpose: "Trách nhiệm / Doanh nhân" },
  { side: HandSide.RIGHT, finger: FingerName.RING, lesson: "Vấn đề Ẩn náu / Trốn tránh", purpose: "Sáng tạo / Nghệ sĩ" },
  { side: HandSide.RIGHT, finger: FingerName.LITTLE, lesson: "Vấn đề Im lặng / Không nói ra", purpose: "Giao tiếp / Tác giả" },
];
