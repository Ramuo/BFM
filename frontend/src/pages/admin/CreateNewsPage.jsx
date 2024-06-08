import { useState, useEffect} from 'react';
import TextEditorQuill from "../../components/TextEditorQuill";
import AdminContainer from '../../components/AdminContainer';
import Sidebar from '../../components/header/Sidebar';
import AdminHeader from '../../components/header/AdminHeader';
import {toast} from "react-toastify";

import axios from "axios";


const CreateNewsPage = () => {

    const [title, setTitle] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [types, setTypes] = useState([]);
    const [NewsCategory, setNewsCategory] = useState([]);
    const [selectedNewsCategory, setSelectedNewsCategory] = useState("");
    const [NewsSubCategory, setNewsSubCategory] = useState([]);
    const [selectedNewsSubCategory, setSelectedNewsSubCategory] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [editorText, setEditorText] = useState("");
    const [newsTag, setNewsTag] = useState("");
    //ERROR State
    const [error, setError] = useState(null);
    //IMAGE 
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [fileType, setFileType] = useState(null);
    //Live & LiveUpdate
    const [isLiveUpdateType, setIsLiveUpdateType] = useState(false);
    const [liveUpdateTypes, setLiveUpdateTypes] = useState([]);
    const [selectedLiveUpdateType, setSelectedLiveUpdateType] = useState("");
    const [liveUpdateHeadline, setLiveUpdatetHeadline] = useState([]);
    //Headline
    const [showHeadLine, setShowHeadLine] = useState("");


    const handleNewsTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    //IMAGE FILE HANDLER
    const handleFileChange = (e) => {
        const maxFileSizeinBytes = 50 * 1024 * 1024;
        const allowedFileTypes = [
            "image/jpeg",
            "image/png",
            "image/jpg",
            "image/gif",
            "video/mp4",
            "video/webm",
            "image/webp",
            "video/ogg",
        ];

        const file = e.target.files[0];
        if(file){
            if(file.size > maxFileSizeinBytes){
                setError("La taille du fichier dépasse la taille maximale autorisée");
                return;
            }
        }
        //check de file type
        const fileType = file.type.split("/")[0];
        setSelectedFile(file);
        setFileType(fileType);
        setError(null);

       if(allowedFileTypes.includes(file.type)){
            if(fileType === "image"){
                const reader = new FileReader();
                reader.onloadend = () => {
                    const fileDataUrl = reader.result;
                    setPreviewUrl(fileDataUrl)
                }
                reader.readAsDataURL(file)
            }else if(fileType === "video"){
                setPreviewUrl(URL.createObjectURL(file));
            }
       }
    };

    //NEWS CATEGORY HANDLER
    const handleNewsCategoryChange = (e) => {
        setSelectedNewsCategory(e.target.value)
    };

    //NEWS SUBCATEGORY HANDLER
    const handleNewsSubCategoryChange = (e) => {
        setSelectedNewsSubCategory(e.target.value)
    };

    //EDITOR HANDLER
    const handleEditorChange = (content) => {
        setEditorText(content);  
    };
    

    // handleLiveUpdateTypeChange
    const handleLiveUpdateTypeChange = (e) => {
        setSelectedLiveUpdateType(e.target.value); 
    };

    

    ////////////////////////////////////
    const backEndBaseUrl = "http://localhost:5000";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const typeResponse = await axios.get(`${backEndBaseUrl}/api/types`);
                setTypes(typeResponse.data);

                const categoryResponse = await axios.get(`${backEndBaseUrl}/api/categories`);
                setNewsCategory(categoryResponse.data);

                if(selectedType === "LiveUpdate"){
                    setIsLiveUpdateType(true);
                    const liveUpdateResponse = await axios.get(`${backEndBaseUrl}/api/news/getLastFiveLiveUpdateNewsType`);
                    setLiveUpdateTypes(liveUpdateResponse.data);
                }else{
                    setIsLiveUpdateType(false);
                }
                if(selectedLiveUpdateType){
                    setSelectedLiveUpdateType(true);
                    const selectedLiveUpdateTypeResponse = await axios.get(`${backEndBaseUrl}/api/news/getLastFiveLiveUpdateNewsType/${selectedLiveUpdateType}`);
                    setLiveUpdatetHeadline(selectedLiveUpdateTypeResponse.data);
                }

            } catch (error) {
                console.log(error);  
            }
        }
        fetchData();
    }, [selectedType, selectedLiveUpdateType]);

    useEffect(() => {
        const fetchSubcategories = async () => {
          try {
            if (selectedNewsCategory) {
              const subcategoryResponse = await axios.get(
                `${backEndBaseUrl}/api/categories/getsubcategories/${selectedNewsCategory}`
              );
              setNewsSubCategory(subcategoryResponse.data);
            }
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchSubcategories();
    }, [selectedNewsCategory]);

    ///////////////////////////////////////

    //SUBMIT FORM HANDLER
    const submitHandler = async (e) => {
        e.preventDefault();

        const newsData = new FormData();

        newsData.append("title", title);
        newsData.append("type", selectedType);
        newsData.append("isLiveUpdate", isLiveUpdateType);
        newsData.append("liveUpdateType", selectedLiveUpdateType);
        newsData.append("liveUpdateHeadlinie", liveUpdateHeadline);
        newsData.append("file", selectedFile);
        newsData.append("newsCategory", selectedNewsCategory);
        newsData.append("subCategory", selectedNewsSubCategory);
        newsData.append("tag", newsTag);
        newsData.append("editorText", editorText);
        newsData.append("authorName", authorName);
       
        try {
            const response = await axios.post(
              `${backEndBaseUrl}/api/news/createnews`,
                newsData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            // socket.emit("liveUpdate", true);
            // alert(response.data);
            toast.success(response.data)
      
            window.location.reload();
          } catch (error) {
            console.error("Error sending data", error);
          }
    };


    return (
        <AdminContainer >
            <AdminHeader/>
            <main className="flex bg-blue-50">
                <Sidebar/>
                <div className="mt-28 px-16">   
                    <div className="mx-auto bg-white drop-shadow-md w-full rounded px-44">
                        <h3 className="p-6 font-bold mb-8 text-black border-b">
                            {" "}
                            Rédiger un article de presse
                        </h3>
                        <div className="container p-5 w-full">
                            <form onSubmit={submitHandler}>
                                <div className="mb-10">
                                    <label htmlFor="title" className="block text-sm  text-gray-600 ">
                                        Titre
                                    </label>
                                    <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="mb-10">
                                    <label htmlFor="newsType" className="block text-sm text-gray-600">
                                        Type d'info
                                    </label>
                                    <select
                                    id="NewsType"
                                    name="NewsType"
                                    className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                                    value={selectedType}
                                    onChange={handleNewsTypeChange} //This select need to be chnaged 
                                    >
                                        <option value="" disabled>Choisir...</option>
                                        {
                                            types.map((type) => (
                                                <option value={type.name} key={type._id}>
                                                    {type.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                {selectedType === "LiveUpdate" && (
                                    <>
                                        {liveUpdateTypes.length !== 0 ? ( 
                                            <div className=" bg-blue-50 px-4 mb-10 rounded">
                                                <div className="flex justify-between py-5">
                                                    <div className=" w-full">
                                                        <label
                                                        htmlFor="title"
                                                        className="block text-sm font-medium text-gray-600">
                                                            Live Update News Type
                                                        </label>
                                                        <input
                                                        type="text"
                                                        id="LiveUpdateType"
                                                        name="LiveUpdateType"
                                                        placeholder="eg: ukraine-russia-war"
                                                        className="mt-2 p-3 mr-2 bg-gray-200 focus:outline-none w-full border rounded-md"
                                                        required
                                                        onChange={handleLiveUpdateTypeChange}
                                                        />
                                                    </div>
                                                    <p className=" font-medium text-xs flex items-center mb-2 ml-2 text-gray-600">
                                                        OR
                                                    </p>
                                                    <div className=" w-full">
                                                        <label
                                                        htmlFor="LiveUpdateType"
                                                        className="block text-sm font-medium  ml-2.5 text-gray-600">
                                                            Live Update News Type
                                                        </label>
                                                        <select
                                                        id="LiveUpdateType"
                                                        name="LiveUpdateType"
                                                        className="mt-2 p-[0.95rem] ml-2 bg-gray-200 focus:outline-none w-full border rounded-md"
                                                        value={selectedLiveUpdateType}
                                                        onChange={handleLiveUpdateTypeChange}
                                                        >
                                                        {liveUpdateTypes.map((type) => (
                                                            <option key={type} value={type}>
                                                            {type}
                                                            </option>
                                                        ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="pb-5">
                                                <label
                                                    htmlFor="title"
                                                    className="block text-sm font-medium text-gray-600">
                                                        Live Update Main Headline
                                                </label>
                                                <input
                                                    type="text"
                                                    id="LiveUpdateType"
                                                    name="LiveUpdateType"
                                                    placeholder="Live Update Main Headline"
                                                    className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                                                    required
                                                    value={liveUpdateHeadline}
                                                    onChange={(e) => {
                                                    setLiveUpdatetHeadline(e.target.value);
                                                    }}
                                                />
                                                </div>
                                            </div>
                                        ) : (  
                                            <div className=" bg-blue-50 px-4 mb-10 rounded">
                                                <div className="py-5">
                                                    <label
                                                    htmlFor="title"
                                                    className="block text-sm font-medium text-gray-600">
                                                        Live Update News Type
                                                    </label>
                                                    <input
                                                    type="text"
                                                    id="LiveUpdateType"
                                                    name="LiveUpdateType"
                                                    placeholder="eg: ukraine-russia-war"
                                                    className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                                                    required
                                                    onChange={handleLiveUpdateTypeChange}
                                                    />
                                                </div>
                                                <div className="pb-5">
                                                    <label
                                                    htmlFor="title"
                                                    className="block text-sm font-medium text-gray-600">
                                                    Live Update Main Headline
                                                    </label>
                                                    <input
                                                    type="text"
                                                    id="LiveUpdateType"
                                                    name="LiveUpdateType"
                                                    placeholder="Live Update Main Headline"
                                                    className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                                                    required
                                                    value={liveUpdateHeadline}
                                                    onChange={(e) => {
                                                      setLiveUpdatetHeadline(e.target.value);
                                                    }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    
                                    </>
                                )}
                                    
                                <div className="mb-10">
                                    <label className="block text-sm text-gray-600">Télécharger un Fichier</label>
                                    <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    className="sr-only"
                                    accept="image/*,video/*"
                                    onChange={handleFileChange}
                                    />
                                    <label
                                    htmlFor="file"
                                    className="mt-1 p-2 w-full cursor-pointer border border-gray-300 rounded-md flex items-center  justify-center bg-slate-800 text-white hover:bg-gray-900">
                                        Chisissez image ou Video
                                    </label>
                                    {error && <p className='text-red-500'>{error}</p>}
                                    {previewUrl && (
                                        <div className="mt-2">
                                            {fileType === "image" &&(
                                                <img 
                                                src={previewUrl} 
                                                alt="image" 
                                                className='max-w-full h-96'
                                                />
                                            )}
                                            {fileType === "video" &&(
                                                <video 
                                                src={previewUrl} 
                                                alt="image" 
                                                className='w-100 object-cover'
                                                >
                                                    <source src={previewUrl} type={selectedFile.type}/>
                                                    Votre navigateur ne supporte pas ce type de vidéo
                                                </video>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <TextEditorQuill
                                    placeholder="Écrire ici..."
                                    onChange={handleEditorChange}
                                    initialText={""}
                                />
                                <div className="mb-10"></div>
                                <div className="mb-10">
                                    <label htmlFor="newsType" className="block text-sm text-gray-600">
                                        Catégorie d'info
                                    </label>
                                    <select
                                    id="NewsCategory"
                                    name="NewsCategory"
                                    className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                                    value={selectedNewsCategory}
                                    onChange={handleNewsCategoryChange}
                                    >
                                        <option value="" disabled>Choisir...</option>
                                        {NewsCategory.map((category) => (
                                            <option value={category.title} key={category._id}>
                                                {category.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-10">
                                    <label htmlFor="newsType" className="block text-sm text-gray-600">
                                        Sous catégorie
                                    </label>
                                    <select
                                    id="NewsSubCategory"
                                    name="NewsSubCategory"
                                    className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                                    value={selectedNewsSubCategory}
                                    onChange={handleNewsSubCategoryChange}
                                    >
                                        <option value="" disabled>Choisir...</option>
                                        {NewsSubCategory.map((subcategory) => (
                                            <option value={subcategory.name} key={subcategory._id}>
                                                {subcategory.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-10">
                                    <label htmlFor="newsType" className="block text-sm text-gray-600">
                                        News Tag
                                    </label>
                                    <select
                                    id="NewsTag"
                                    name="NewsTag"
                                    className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                                    value={newsTag}
                                    onChange={(e) => setNewsTag(e.target.value)}
                                    >
                                        <option value='uncategorized'>Choisir...</option>
                                        <option value='Analysis'>Analysis</option>
                                        <option value='Opinion'>Opinion</option>
                                        <option value='Watch'>Watch</option>
                                    </select>
                                </div>
                                <div className="mb-10">
                                    <label htmlFor="author" className="block text-sm  text-gray-600">
                                        Auteur
                                    </label>
                                    <input
                                    type="text"
                                    id="author"
                                    name="author"
                                    className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                                    value={authorName}
                                    onChange={(e) => setAuthorName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-10 mt-4">
                                    <button
                                    type="submit"
                                    onClick={submitHandler}
                                    className="bg-gray-900 w-full text-white p-2  rounded-md hover:bg-slate-800">
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </AdminContainer>
    );
  }
export default CreateNewsPage;