import Image from "next/image";

export default function Home() {
  return (
    <>
 
      <div className="m-auto max-w-3xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 font-sans">
          {/* Avatar */}
          <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-full overflow-hidden border-2 border-gray-300">
            <Image
              src="/avatar.jpg"
              className="object-cover"
              alt="Picture of the author"
              fill
            />
          </div>
          {/* Thông tin */}
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-bold">Nguyễn Văn Đức</h1>
            <p className="text-sm md:text-lg text-gray-600">Mobile App Developer</p>
          </div>
        </div>

        {/* Giới thiệu */}
        <div className="mt-6 text-gray-800 font-sans">
          <p className="text-base md:text-lg">
            Xin chào! Tôi là <strong>Đức</strong>, lập trình viên Flutter chuyên về phát triển ứng dụng di động trên cả <strong>Android</strong> và <strong>iOS</strong>. Tôi có đam mê tạo ra các sản phẩm đẹp, mượt mà và tối ưu trải nghiệm người dùng.
          </p>

          <p className="mt-4 text-base md:text-lg">Một số dự án tiêu biểu tôi đã thực hiện:</p>
          <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700">
            <li><strong>PicTrim</strong> - Ứng dụng chỉnh sửa ảnh với các tính năng làm tròn góc, thêm viền trắng, đổ bóng.</li>
            <li><strong>CyberSafe</strong> - Trình quản lý mật khẩu an toàn và bảo mật.</li>
            <li><strong>Samon</strong> - Ứng dụng quản lý chi tiêu.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
