import React, { useEffect, useState } from 'react';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
    const [article, setArticle] = useState({
        url: '',
        summary: '',
    });
    const [allArticles, setAllArticles] = useState([]);
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    useEffect(() => {
        const articleFromLocalStorage = JSON.parse(localStorage.getItem('articles'));
        if (articleFromLocalStorage) {
            setAllArticles(articleFromLocalStorage);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await getSummary({ articleUrl: article.url });

        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];
            setAllArticles(updatedAllArticles);

            setArticle(newArticle);
            localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
            console.log(newArticle);
        }
    };

    return (
        <section className='mt-16 w-full max-w-xl rtl'>
            <div className='flex flex-col w-full gap-2'>
                <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
                    <img
                        src='/assets/link.svg'
                        alt="link icon"
                        className='absolute right-0 my-2 mr-3 w-5'
                    />

                    <input
                        type='url'
                        placeholder='ادخل الرابط'
                        value={article.url}
                        onChange={(e) =>
                            setArticle({
                                ...article,
                                url: e.target.value,
                            })}
                        required
                        className='url_input peer text-black'
                    />
                    <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
                        ↵
                    </button>
                </form>
                <div className='history-section flex flex-col gap-1 max-h-60 overflow-y-auto'>
                    {allArticles.map((item, index) => (
                        <div key={`link-${index}`}
                            onClick={() => setArticle(item)}
                            className='link_card text-blue-600'
                        >
                            <div className='copy_tbn'>
                                <img
                                    src='/assets/copy.svg'
                                    alt="copy_icon"
                                    className='  w-[100%] h-[1000%] object-contain'
                                />
                            </div>
                            <p className='flex-1 font-plex-sans-arabic text-blue-600 font-medium text-sm truncate'>
                                {item.url}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='my-10 max-w-full flex justify-center items-center'>
                {isFetching ? (
                    <img src='/assets/loader.svg' alt='loader' className='w-20' />
                ) : error ? (
                    <p className=' text-red-300'>
                        حدث خطأ: فشل استخراج نص من الصفحة. تأكد من أنك تحاول تلخيص مقالة إخبارية أو صفحة أخرى تحتوي على كتل نصية محددة بوضوح.
                    </p>
                ) : (article.summary && (
                    <div>
                        <h2>article</h2>
                        <div className='summary_box'>
                            <p>{article.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Demo;
