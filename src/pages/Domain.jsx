export default function Domain() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-primary mb-4">🌍 Nama Domain</h1>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">Definisi</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Nama domain adalah alamat unik di internet yang digunakan untuk mengakses website, seperti <strong>www.google.com</strong>. Domain memudahkan pengguna mengingat alamat website tanpa harus mengetahui alamat IP server.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">Cara Kerja</h2>
      <p className="text-gray-700 leading-relaxed">
        1 Ketika pengguna mengetik nama domain di browser, permintaan dikirim ke <strong>DNS</strong> untuk mencari tahu alamat IP server.  <br />
        2 DNS menerjemahkan nama domain menjadi IP numerik seperti <code>142.250.190.14</code>.  <br />
        3 Browser kemudian menggunakan IP tersebut untuk menghubungi server hosting dan mengambil data situs web.  <br />
        4 Semua proses ini terjadi dalam hitungan milidetik. <br />
      </p>

      <div className="mt-6 bg-blue-50 p-4 rounded-md">
        <h3 className="font-semibold text-blue-700 mb-2">Referensi:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>ICANN - What is a Domain Name?</li>
          <li>HowStuffWorks - How Domain Names Work</li>
        </ul>
      </div>
    </div>
  );
}
