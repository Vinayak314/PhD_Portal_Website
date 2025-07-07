import samplePDF from '../../assets/Unit 3 Magnetic Sensors.pdf';


const PDFViewer = () => {

  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen bg-gray-50">
      <div className="col-span-12 lg:col-span-8 space-y-2">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg font-semibold mb-2">Module 1.1</h2>
          </div>
          <div className="p-4 max-h-screen overflow-y-auto">
            <object class="pdf" 
            data={samplePDF}
            width="900"
            height="700">
            </object>
          </div>
        </div>
      </div>

        <div className=" col-span-4 max-h-[20vh] bg-white rounded-lg shadow p-4">
          <div className="flex flex-col items-start">
            <h2 className="text-lg text-muted-foreground font-semibold">Uploaded On: </h2>
            <h2 className="text-lg text-muted-foreground font-semibold">28/05/2025</h2>
            <h2 className="text-lg text-muted-foreground font-semibold mb-2"> 6:10 pm</h2>
            <h1 className="text-xl text-muted-foreground">Mr. Swapnil Pawar</h1>
          </div>
        </div>
    </div>
  );
};

export default PDFViewer;
