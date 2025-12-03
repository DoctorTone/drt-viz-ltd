export type VideoRecord = {
  id: string;
  source: string;
  left: boolean;
  category: string;
  title: string;
  url: string;
  text1: string;
  text2: string | undefined;
  text3: string | undefined;
};

const VIDEOS: VideoRecord[] = [
  {
    id: "lightning",
    source: "./videos/Lightning.mp4",
    left: false,
    category: "Geospatial",
    title: "Lightning",
    url: "https://drt-software.com/LightningViz/",
    text1: `There are lots of infographics around events like Halloween, but these are usually 
		static and often lacking a sense of atmosphere.`,
    text2: ` This demo takes the infographic theme a bit further, adding ambient effects and animation
		to tell the story, but still showing interesting facts and data.`,
    text3: undefined,
  },
  {
    id: "hallowen",
    source: "./videos/Halloween.mp4",
    left: true,
    category: "Seasonal",
    title: "Halloween",
    url: "https://drt-software.com/Halloween/",
    text1: `There are lots of infographics around events like Halloween, but these are usually 
		static and often lacking a sense of atmosphere.`,
    text2: ` This demo takes the infographic theme a bit further, adding ambient effects and animation
		to tell the story, but still showing interesting facts and data.`,
    text3: undefined,
  },
  {
    id: "medical",
    source: "./videos/Medical.mp4",
    left: false,
    category: "Medical",
    title: "Tumour Detection",
    url: "https://www.drt-software.com/MedicalViz/",
    text1: `Medical imaging software is typically very complex and expensive. We wanted to create an application that
                could be used to measure and monitor tumour lesions that was
                simple to use and gave accurate results.`,
    text2: `             In conjunction with a neurosurgeon, I built an application that
                took a collection of 2D medical images and created a 3D volume.
                This could then be used to visualise and identify anatomic structures.`,
    text3: undefined,
  },
  {
    id: "music",
    source: "./videos/Drums.mp4",
    left: true,
    category: "Music",
    title: "Interactive Tuition",
    url: "https://www.drt-software.com/DrumViz/",
    text1: `Learning to play the drums can be difficult, but what if you coud see exactly what 
		to play? This app puts a 3D drumkit in front of you, showing which drum to hit and when. You
		can slow down or speed the piece up, making practice easier.`,
    text2: `This is a fresh, innovative use of 3D showing how powerful visualisation can be in
		a learning environment.`,
    text3: undefined,
  },
  {
    id: "sleep",
    source: "./videos/Sleep.mp4",
    left: false,
    category: "Multi Dimensional",
    title: "Sleep Analysis",
    url: "https://www.drt-software.com/SleepViz/",
    text1: `This visualisation explores a subject's sleep patterns over several months,
		showing multiple attributes and trends. The interactive design allows you to select specific
		metrics, adjust scaling and highlight patterns.`,
    text2: `By utilising the 3D space, the app creates a clearer, more effective view of the complex
		data.`,
    text3: undefined,
  },
  {
    id: "points",
    source: "./videos/Points.mp4",
    left: true,
    category: "Sport",
    title: "Results Analysis",
    url: "https://www.drt-software.com/PointsViz/",
    text1: `Here you can see a football team's cumulative points across multiple seasons, 
		brought to life by 3D. Layering the data in space, it becomes easier to spot patterns,
		trends and difference in performance.`,
    text2: `It's an alternative to traditinal 2D charts, showing how 3D can be more interactive 
		and reveal new insights in your data.`,
    text3: undefined,
  },
  {
    id: "exhibit",
    source: "./videos/Exhibit.mp4",
    left: false,
    category: "Exhibition",
    title: "Natural History",
    url: "https://www.drt-software.com/Exhibit/",
    text1: `We can make a display or exhibition space more engaging by adding interesting facts directly into the visualisation.`,
    text2: `This example shows how even animated scenes can use information points to draw attention to key details that visitors can select.`,
    text3: undefined,
  },
  {
    id: "cloud",
    source: "./videos/PointCloud.mp4",
    left: true,
    category: "Point cloud",
    title: "City Landmarks",
    url: "https://drt-software.com/PointCloud/",
    text1: `If you think the web cannot handle massive amounts of data in real-time, then watch
		this demo. Here, a point cloud of over one million points recreates a city centre in 3D.`,
    text2: `Imagine all the possibilities, from live traffic updates to real-time local insights.`,
    text3: undefined,
  },
  {
    id: "space",
    source: "./videos/Solar.mp4",
    left: false,
    category: "Space",
    title: "Solar System",
    url: "https://www.drt-software.com/Solar/",
    text1: `This interactive 3D simulation was created for schools to bring the solar system to
		life. It helps students grasp the immense distances and scales between the planets, 
		especially in comparison to the Earth.`,
    text2: `This is a really powerful way that 3D can help educate, making the subject feel real
		and memorable.`,
    text3: undefined,
  },
  {
    id: "covid",
    source: "./videos/Pandemic.mp4",
    left: true,
    category: "Multi Dimensional",
    title: "Pandemic",
    url: "https://www.drt-software.com/Covid/",
    text1: `During the pandemic, data visualisation was vital for understanding the spread 
		of the virus. This 3D app breaks down the UK data into clear strands, allowing patterns and
		comparisons to be made more easily.`,
    text2: `This highlights how 3D visualisations can help scientists and governments make 
		sense of complex information to better inform the public.`,
    text3: undefined,
  },
  {
    id: "horror",
    source: "./videos/Horror.mp4",
    left: false,
    category: "Real-Time",
    title: "Brain Activity",
    url: "https://www.drt-software.com/Horror/",
    text1: `The web is an ideal platform for real-time data visualisation. At the Mayhem 
		Horror Festival, we captured and visualised the EEG brain activity of film fans as they 
		experienced the scares, live and as they all happened.`,
    text2: `Built in collaboration with Thrill Laboratory and the Mixed Reality Lab, it's a 
		great example of turning raw data into an immersive experience, both for cinema-goers and
		an online audience.`,
    text3: undefined,
  },
  {
    id: "ftse",
    source: "./videos/FTSE.mp4",
    left: true,
    category: "Finance",
    title: "FTSE Tracking",
    url: "https://www.drt-software.com/FTSEViz/",
    text1: `This application visualises the FTSE-100 over an entire year, revealing daily, 
		weekly, and monthly share price trends. The 3D bars also give an indcation of pricing
		fluctuations across time.`,
    text2: `This amplifies how a novel 3D visualisation can present multiple layers in a single,
		powerful view.`,
    text3: undefined,
  },
];

const VIDEO_IDS = {
  medical: 0,
};

export { VIDEOS, VIDEO_IDS };
