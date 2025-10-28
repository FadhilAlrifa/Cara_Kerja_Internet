export default function Home() {
  return (
    <div className="bg-secondary rounded-2xl p-8 shadow-md">
      <h1 className="text-3xl font-bold text-primary mb-4">🌍 Cara Kerja Internet</h1>
      <p className="text-gray-700 leading-relaxed mb-3">
        Internet adalah jaringan global yang menghubungkan jutaan perangkat di seluruh dunia menggunakan protokol komunikasi seperti <strong>TCP/IP</strong>. Dengan sistem ini, komputer, smartphone, dan server bisa bertukar informasi dalam waktu singkat.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Cara Kerja Internet Secara Umum:</h2>
      <p className="text-gray-700 leading-relaxed">
        Saat kamu mengetik alamat situs seperti <em>www.google.com</em> di browser:
      </p>
      <ol className="list-decimal ml-6 mt-2 text-gray-700 space-y-1">
        <li>Browser menghubungi <strong>DNS</strong> untuk mencari alamat IP server tujuan.</li> 
        <li>Setelah mendapat IP, browser mengirim <strong>permintaan (request)</strong> ke server melalui protokol <strong>HTTP atau HTTPS</strong>.</li> 
        <li>Server memproses permintaan dan mengirim <strong>balasan (response)</strong> berisi halaman web.</li>
        <li>Browser kemudian <strong>merender</strong> halaman web agar bisa kamu lihat dan interaksi terjadi secara real time.</li> 
      </ol>

      <div className="bg-blue-50 p-4 rounded-md mt-6">
        <h3 className="font-semibold text-blue-700 mb-2">Referensi:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>HowStuffWorks - How the Internet Works</li>
          <li>Cloudflare Learning Center - What is the Internet?</li>
        </ul>
      </div>
    </div>
  );
}
