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
    id: "space",
    source: "./videos/Solar.mp4",
    left: true,
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
];

const GEO_VIDEOS: VideoRecord[] = [
  {
    id: "heat",
    source: "./videos/HeatIsland.mp4",
    left: false,
    category: "Thermal",
    title: "Urban Heat Islands",
    url: "https://www.drt-software.com/HeatIsland/",
    text1: `Large cities often experience localised warming patterns around the streets and buildings, creating the phonomena of heat islands.`,
    text2: `The visualiation combines Landsat 9 thermal imaging data and OpenStreetMap building footprints to reveal the spatial relationship. A 3D environment is ideal for a better understanding of why areas are hotter.`,
    text3: undefined,
  },
  {
    id: "lightning",
    source: "./videos/Lightning.mp4",
    left: true,
    category: "Lightning",
    title: "Global Lightning Strikes",
    url: "https://www.drt-software.com/LightningViz/",
    text1: `There are millions of lightning strikes happening around the globe on any given day. Mapping these events can help plan for risk assessments.`,
    text2: `This visualiation reveals the monthly global lightning strike patterns for a whole year. It utilises NASA Earth Observatory lightning strike data.`,
    text3: undefined,
  },
  {
    id: "pollution",
    source: "./videos/AirPollution.mp4",
    left: false,
    category: "Pollution",
    title: "City Air Pollution",
    url: "https://www.drt-software.com/AirPollution/",
    text1: `Air pollution is becoming a major issue in many of the world's largest cities, and in particular places such as Delhi.`,
    text2: `The interactive 3D visualisation allows the pollution levels on any given day to be selected, over a monthly period. It combines PM2.5 sensor data and converts this to a measure of air quality.`,
    text3: undefined,
  },
  {
    id: "pointcloud",
    source: "./videos/PointCloud.mp4",
    left: true,
    category: "Pointcloud",
    title: "City Point Cloud",
    url: "https://www.drt-software.com/PointCloud/",
    text1: `Many think the web is not capable of rendering thousands (if not millions) of points to visualise large datasets interactively.`,
    text2: `Here we have approx. one million data points showing various landmarks in a city centre. Visualisations such as this are ideal for sectors such flood risk planning and mapping transportation systems.`,
    text3: undefined,
  },
];

const VIDEO_IDS = {
  medical: 0,
};

export { VIDEOS, VIDEO_IDS, GEO_VIDEOS };
