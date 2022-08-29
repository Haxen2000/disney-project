// import axios from 'axios';

// import { DISNEY_API } from "./constants";

export async function getDisneyData() {
  /*return await axios.get(DISNEY_API)
    .then(res => {
      console.log('getDisneyData', res.data.data);
      return res.data.data;
    });*/
    return {
      "StandardCollection": {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "0830390a-b0f3-4420-8a7f-2e541798f9e8",
      "contentClass": "home",
      "key": "home",
      "slugs": [
      {
      "language": "en",
      "value": "home"
      }
      ]
      },
      "collectionId": "2242707f-81e7-495d-bb6c-3604d023c064",
      "containers": [
      {
      "set": {
      "contentClass": "editorial",
      "items": [
      {
      "contentId": "5ce23061-3c4a-40d8-9d08-179001be5a4f",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "4wCkPyO0JUux",
      "image": {
      "tile": {
      "2.29": {
      "series": {
      "default": {
      "masterId": "9F9C4A480357CD8D21E2C675B146D40782B92F570660B028AC7FA149E21B88D2",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F9C4A480357CD8D21E2C675B146D40782B92F570660B028AC7FA149E21B88D2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "3C33485A3043C22B8C89E131693E8B5B9306DAA4E48612A655560752977728A6",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3C33485A3043C22B8C89E131693E8B5B9306DAA4E48612A655560752977728A6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "77F330A7632751B58C45350F260F042927009949392B10C5620CD13A55EF20AA",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77F330A7632751B58C45350F260F042927009949392B10C5620CD13A55EF20AA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "5C324021D77E50FB9993F40BF1E9E83DBE5D2ABD397130F66E4230C12E3A243B",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C324021D77E50FB9993F40BF1E9E83DBE5D2ABD397130F66E4230C12E3A243B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "series": {
      "default": {
      "masterId": "00971BF089090B8BA61F543DE379A36CA590650DDBBABABE2E721FE5AC6536AB",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/00971BF089090B8BA61F543DE379A36CA590650DDBBABABE2E721FE5AC6536AB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "C5793DE80B8A3701B0FF495ECE0CBBC2D97511723142E59440C3EC7F0143F41A",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5793DE80B8A3701B0FF495ECE0CBBC2D97511723142E59440C3EC7F0143F41A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "95F4EECCB79C28B8053A8FDBE5F57094B676E1D46B7EDFA12270FA540B5D9BCE",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/95F4EECCB79C28B8053A8FDBE5F57094B676E1D46B7EDFA12270FA540B5D9BCE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "916F85C9B4DC3DD765D710300FE7F8393E9EAC567A962FD831B2C78E67555707",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/916F85C9B4DC3DD765D710300FE7F8393E9EAC567A962FD831B2C78E67555707/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "8B890539889105DA5714373C7C06F0555FBEAA59E9227E02ACF1F649DAD5EC15",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B890539889105DA5714373C7C06F0555FBEAA59E9227E02ACF1F649DAD5EC15/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "3BCFD2448B819EF8983CBC3F93382E76EE89835C62259B51F4A4191A2F6B050A",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3BCFD2448B819EF8983CBC3F93382E76EE89835C62259B51F4A4191A2F6B050A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "2.89": {
      "series": {
      "default": {
      "masterId": "4638F8EA49BCC02BE6888052EFC15A965A9FF60DA4B8813E8E607759D20B0CBD",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4638F8EA49BCC02BE6888052EFC15A965A9FF60DA4B8813E8E607759D20B0CBD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "3C202CE4006B6573AE4111DC6B2CF092CCEC5B55D1AB09372766A5925F6B4E73",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3C202CE4006B6573AE4111DC6B2CF092CCEC5B55D1AB09372766A5925F6B4E73/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "56DDB8146A8874CEC0DC37AC697F97D5EC9987CBF5515A171A64A08765F1B801",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56DDB8146A8874CEC0DC37AC697F97D5EC9987CBF5515A171A64A08765F1B801/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "C75D45969E9DBD112A1A60DA54A7E74980B0FA1D387EB8F03CEC49D9A80BC357",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C75D45969E9DBD112A1A60DA54A7E74980B0FA1D387EB8F03CEC49D9A80BC357/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "471269DBA563B0CFB0E88B8E68F5390CDBAD3018EB8E2347C06D7538C2ED6195",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/471269DBA563B0CFB0E88B8E68F5390CDBAD3018EB8E2347C06D7538C2ED6195/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "CECFB9E14CB377A7A947D549D6B9FBBEDD2D86D43CB177FBED7714EC21A1D864",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CECFB9E14CB377A7A947D549D6B9FBBEDD2D86D43CB177FBED7714EC21A1D864/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "FACEA0D36F7E2871FA2ED72452F3C6737B046E3124D380D38FA98F60813AEEDA",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FACEA0D36F7E2871FA2ED72452F3C6737B046E3124D380D38FA98F60813AEEDA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "0AB2C956E141BEC9D990DCDECBFDB1540119C0FE7CC0B269E4B89C63B40174F9",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0AB2C956E141BEC9D990DCDECBFDB1540119C0FE7CC0B269E4B89C63B40174F9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "5ce23061-3c4a-40d8-9d08-179001be5a4f",
      "text": {
      "title": {
      "slug": {
      "series": {
      "default": {
      "content": "the-right-stuff",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "full": {
      "series": {
      "default": {
      "content": "The Right Stuff",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "8869ca07-aba0-4671-9b03-3f3ed6fbfa79",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-14"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-10-09",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/08/07/1596826960-287438.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "cda8e42d-0cc4-484f-bb5b-b8dd3b8dd496",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "3jLIGMDYINqD",
      "image": {
      "background_details": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "1B1FFBE7BF2A34BF770BBAF3B551B452FDC02C0A0EC78A0C5521E1720234B5951",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1B1FFBE7BF2A34BF770BBAF3B551B452FDC02C0A0EC78A0C5521E1720234B5951/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "7D608E6263DE25CBA24FF65F0A3FB8CA30EC613EF5B768A5C346B17B1F92BA8D1",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7D608E6263DE25CBA24FF65F0A3FB8CA30EC613EF5B768A5C346B17B1F92BA8D1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "2.29": {
      "series": {
      "default": {
      "masterId": "F605C6D358045B00102C3B88AF65330CA75699A8BBAF12AB0953605774EE63B41",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F605C6D358045B00102C3B88AF65330CA75699A8BBAF12AB0953605774EE63B41/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "872D8A633D95323E9C29B41A44BB83E50685A7EC5CEA7B8829D8C808700A329C1",
      "masterWidth": 2160,
      "masterHeight": 2880,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/872D8A633D95323E9C29B41A44BB83E50685A7EC5CEA7B8829D8C808700A329C1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "series": {
      "default": {
      "masterId": "A9A0B0D52BCE368769CEC976AE2C66267813F740E7507B9A805CCA413FF174821",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A9A0B0D52BCE368769CEC976AE2C66267813F740E7507B9A805CCA413FF174821/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "E7BFFF8CD4E7BA85BFB3439CDF90698213E8134E4CC729A9AFA17A2E1FC665D31",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7BFFF8CD4E7BA85BFB3439CDF90698213E8134E4CC729A9AFA17A2E1FC665D31/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "DF771B6DEC0F235A9ABBDB13E74402BCA9A7A48FD69496DF47CBB11FA30FF75E1",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DF771B6DEC0F235A9ABBDB13E74402BCA9A7A48FD69496DF47CBB11FA30FF75E1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "0949FAE5BA46113137DB95845B9CF30DF325053E3DA04A4C42C5B266E5DF528B1",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0949FAE5BA46113137DB95845B9CF30DF325053E3DA04A4C42C5B266E5DF528B1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "51C4EC380D1807434159D56EF8E0186F91F9FEAFDE37AFC0F367133516BAE0201",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/51C4EC380D1807434159D56EF8E0186F91F9FEAFDE37AFC0F367133516BAE0201/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "4FCFAFA5379DE6526FD0B138408222F251D647A6ACE7B2FE792ADD8741995EAE1",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4FCFAFA5379DE6526FD0B138408222F251D647A6ACE7B2FE792ADD8741995EAE1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "6518FD37F85392EEB6333BDA9D2A3B6D2A9297971C9150201AB36DB7B29B6B261",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6518FD37F85392EEB6333BDA9D2A3B6D2A9297971C9150201AB36DB7B29B6B261/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "F86C01EFD87299BF057537A906F9DE6CB1EAB855368A5B2A46BAA222CE1F0DCD1",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F86C01EFD87299BF057537A906F9DE6CB1EAB855368A5B2A46BAA222CE1F0DCD1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.89": {
      "series": {
      "default": {
      "masterId": "939B52078679E5BBA620C04CBDD75D3F29C1F209EE19E676D0D40C03C41A753B1",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/939B52078679E5BBA620C04CBDD75D3F29C1F209EE19E676D0D40C03C41A753B1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "series": {
      "default": {
      "masterId": "65FBA730A025A9FCF7631E4F6E09794065B337F60FCF11D74E6CE552AC18A8F21",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/65FBA730A025A9FCF7631E4F6E09794065B337F60FCF11D74E6CE552AC18A8F21/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "0CB07E3F048B743928CF7652AAA9CE286A1C4524DD84329DAEAEA7B2DB4EF3531",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0CB07E3F048B743928CF7652AAA9CE286A1C4524DD84329DAEAEA7B2DB4EF3531/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "0BAE5767D92FF277DE63B4459E199C041C23DCFC5545B08BC3974D8CEC1582841",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0BAE5767D92FF277DE63B4459E199C041C23DCFC5545B08BC3974D8CEC1582841/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "5469C67684F41AC51DE0F4404FF6299514FCF688518576C9C98FADF02354A7851",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5469C67684F41AC51DE0F4404FF6299514FCF688518576C9C98FADF02354A7851/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "8B1A3B5B4D49BC226975B0DCC40774C9C9845F21726B12703274BB8B75B38B821",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B1A3B5B4D49BC226975B0DCC40774C9C9845F21726B12703274BB8B75B38B821/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "48323729493FC9B6154BB4A5C42BC2E080BD5577FC330988235EED101983E9921",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/48323729493FC9B6154BB4A5C42BC2E080BD5577FC330988235EED101983E9921/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "cda8e42d-0cc4-484f-bb5b-b8dd3b8dd496",
      "text": {
      "title": {
      "slug": {
      "series": {
      "default": {
      "content": "the-mandalorian",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "full": {
      "series": {
      "default": {
      "content": "The Mandalorian",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "92100898-fca2-4ac2-be20-28ba9db67297",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-14"
      }
      ],
      "releases": [
      {
      "releaseDate": "2019-11-12",
      "releaseType": "original",
      "releaseYear": 2019,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/09/15/1600129307-182860.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "977b0c75-8db0-45de-b4d3-15a9ee987dc1",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": null
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "5pJs6YeJNPJc",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTE2MDAz",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "506fb7fa-1c8f-4fef-be4b-783b441b419e",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Prep & Landing - movie - 977b0c75-8db0-45de-b4d3-15a9ee987dc1",
      "image": {
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "ACA07AC4CADEEE358AE924DCB34F56264DA534359FF575D7B196323FF79EF1B9",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ACA07AC4CADEEE358AE924DCB34F56264DA534359FF575D7B196323FF79EF1B9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "8DC1B6CD2D2514B1FEFCDD603D8731461B79E34C246F3923B4C5B3E12BE6260D",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8DC1B6CD2D2514B1FEFCDD603D8731461B79E34C246F3923B4C5B3E12BE6260D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "2579A7EE1ED2C5E3D5BC0972298B2F0890EABC3DC0AB77FE67F8CA737C51C049",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2579A7EE1ED2C5E3D5BC0972298B2F0890EABC3DC0AB77FE67F8CA737C51C049/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "8B7BD21C79C886BEB161F584466509726F8D979B33E3D6E584A7C804AC7790F9",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B7BD21C79C886BEB161F584466509726F8D979B33E3D6E584A7C804AC7790F9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "325307D0A9A6120DCCB4B10A00C0E9BCC67D678106EA9C45349D4511476129B8",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/325307D0A9A6120DCCB4B10A00C0E9BCC67D678106EA9C45349D4511476129B8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "D9E15BEBF02DF90BD15B68EE79BDBD1385CDEBE7C7B0F7F2D8EB55AF1C247918",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D9E15BEBF02DF90BD15B68EE79BDBD1385CDEBE7C7B0F7F2D8EB55AF1C247918/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "A50B9DAB19711373BE88EA9D40DFB3F4F329D2AE8F95E30A8177611B5C11DE9E",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A50B9DAB19711373BE88EA9D40DFB3F4F329D2AE8F95E30A8177611B5C11DE9E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "21CECCFD0A4FCD97D7FD3B44D75A2662B4A8534F17EAEDB527079D241FB5F0EF",
      "masterWidth": 917,
      "masterHeight": 1292,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/21CECCFD0A4FCD97D7FD3B44D75A2662B4A8534F17EAEDB527079D241FB5F0EF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "0429F01B7E0C303A82433FE564797DC5FF8B926848E814069AA0316F2E83D1A0",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0429F01B7E0C303A82433FE564797DC5FF8B926848E814069AA0316F2E83D1A0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "CFD834FA2FF244A87D5D787FB66C778668E8A57086F4A933FC226A865CE4493A",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CFD834FA2FF244A87D5D787FB66C778668E8A57086F4A933FC226A865CE4493A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "1CC7E829E4812DF10671E27D6C104F1FFE82273FD95333ED21D02ABA54C4C6BD",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1CC7E829E4812DF10671E27D6C104F1FFE82273FD95333ED21D02ABA54C4C6BD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "D4A14B6C13E46A8EE0C6412EB89C0E062DF0E716CECCCB690779B46879AAF7D0",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D4A14B6C13E46A8EE0C6412EB89C0E062DF0E716CECCCB690779B46879AAF7D0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "7E4CA911F3A4E679D4530AB6BF22C10A3FF84DAFFF9D77D715A292BCB561FDD9",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7E4CA911F3A4E679D4530AB6BF22C10A3FF84DAFFF9D77D715A292BCB561FDD9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "C8BD62F95D6BF21DBACBCEB85D8C449851B3EE6FB91DD4AE7D3E509DDDA977D0",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8BD62F95D6BF21DBACBCEB85D8C449851B3EE6FB91DD4AE7D3E509DDDA977D0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "9F682DAE2AD81675D582C700D903A6051478A7399B24752BFE7BCEF1488423F9",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F682DAE2AD81675D582C700D903A6051478A7399B24752BFE7BCEF1488423F9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "021FE97B7B3DB9CB4D1EF0E50CE9BD7BBFA25DBA72695F5864C54EBBA58E9B47",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/021FE97B7B3DB9CB4D1EF0E50CE9BD7BBFA25DBA72695F5864C54EBBA58E9B47/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "a21c0428-8a71-45bb-938c-65df948879c8",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/a21c0428-8a71-45bb-938c-65df948879c8/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 1351000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "506fb7fa-1c8f-4fef-be4b-783b441b419e",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Prep & Landing",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "prep-landing",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "16F2-A795-BDAE-2466-E973-U"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-G"
      }
      ],
      "releases": [
      {
      "releaseDate": "2009-12-08",
      "releaseType": "original",
      "releaseYear": 2009,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "4afaca8b-3da5-4f25-9575-c2616af17839"
      },
      {
      "contentId": "594b30b0-5065-48a4-9e5f-8ac3222e8e6e",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "4fkNq5DfRSr2",
      "image": {
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "BC0FC8A0E66457DC34A80EB428F5C91997F2F9BEEAB4AE6A4A6B43BEE4A2726D",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC0FC8A0E66457DC34A80EB428F5C91997F2F9BEEAB4AE6A4A6B43BEE4A2726D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "9590BD842CDF8C5D4EEC8A797D863A0DCB43D6899B032D8E36245CCE774C1C8E",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9590BD842CDF8C5D4EEC8A797D863A0DCB43D6899B032D8E36245CCE774C1C8E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "EDEB57346AD51806FF50D6A7901B19996EB4F197A9DE4D9FF29319F919C0C1E0",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EDEB57346AD51806FF50D6A7901B19996EB4F197A9DE4D9FF29319F919C0C1E0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "B386FF8B44F085BE6C751714693C4F7228792558FD8862844982AD4B1F6C8950",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B386FF8B44F085BE6C751714693C4F7228792558FD8862844982AD4B1F6C8950/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "0E30CB70613286CE87C90DA662EB4D4AD4BFD4B1FAAE461FB628D2F0E3A2B6E3",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0E30CB70613286CE87C90DA662EB4D4AD4BFD4B1FAAE461FB628D2F0E3A2B6E3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "04BB37B3EAC7506F30854D015E16031D1C40B13FCEE11F154736235AA20D831F",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/04BB37B3EAC7506F30854D015E16031D1C40B13FCEE11F154736235AA20D831F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "45D8D724071A68083FC1F7A8A1F6E5DEB62ECA207033676B8814B04BD89C53A7",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/45D8D724071A68083FC1F7A8A1F6E5DEB62ECA207033676B8814B04BD89C53A7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "139C49B0B606C43DE3DBB11416AE40D4484A5E770BBFE3876B96E767755A7C55",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/139C49B0B606C43DE3DBB11416AE40D4484A5E770BBFE3876B96E767755A7C55/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "C935D0FCE7EFED00E526F58BCBBFDEA38989ACC9B0B33F833F5C404D19598B9B",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C935D0FCE7EFED00E526F58BCBBFDEA38989ACC9B0B33F833F5C404D19598B9B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "614D53A4EF9072BBA0064E1CCB99464EBF9F3AA7310DA77A22150C165853F8D0",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/614D53A4EF9072BBA0064E1CCB99464EBF9F3AA7310DA77A22150C165853F8D0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "037298068CF066E7F6B7D8488AA29C72E027901487A4FEA61216EBCFCB0480D0",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/037298068CF066E7F6B7D8488AA29C72E027901487A4FEA61216EBCFCB0480D0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "6F0AA1D804E020F020EB8B979AE22B726B1CEBC7A547DE08FC43CE8880779446",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6F0AA1D804E020F020EB8B979AE22B726B1CEBC7A547DE08FC43CE8880779446/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "F9E22E5560C2134A9D143948568E17129A82DDD8FF3362AAEC5FECF593D9BB82",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F9E22E5560C2134A9D143948568E17129A82DDD8FF3362AAEC5FECF593D9BB82/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "A3EB2554EA3261B25A2FEC9FDA86116A519ADEAE5807FDF29A446F722FFA3720",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A3EB2554EA3261B25A2FEC9FDA86116A519ADEAE5807FDF29A446F722FFA3720/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "9F99C9A200D922337341C4C13233913025246FF495397AD9FB100F8E84599642",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F99C9A200D922337341C4C13233913025246FF495397AD9FB100F8E84599642/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "594b30b0-5065-48a4-9e5f-8ac3222e8e6e",
      "text": {
      "title": {
      "slug": {
      "series": {
      "default": {
      "content": "magic-of-disneys-animal-kingdom",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "full": {
      "series": {
      "default": {
      "content": "Magic of Disney's Animal Kingdom",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "1c5079c4-41ab-4545-9ad8-8df39789ca27",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-09-25",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/07/22/1595459571-193411.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "7438e5e3-bb1a-4196-8027-4a287f353594",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "7BGWoWi2mVpk",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MzA1MDky",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "b6e7ad77-6d8e-433a-8168-7caf0f8e418e",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Non-TWDC",
      "partnerGroupId": "401208",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Clouds - movie - 7438e5e3-bb1a-4196-8027-4a287f353594",
      "image": {
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "F47E8E48A9541AD7F4BBB19C2F3DBA404A84A6B424AC1188DA7075B50C1E8529",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F47E8E48A9541AD7F4BBB19C2F3DBA404A84A6B424AC1188DA7075B50C1E8529/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.00": {
      "program": {
      "default": {
      "masterId": "C4B95007E493BF3BBF276FB99AEB9BF7384F8E98D8403A25E1A897F886BA3C3E",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C4B95007E493BF3BBF276FB99AEB9BF7384F8E98D8403A25E1A897F886BA3C3E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "26231F86004EF2C1F6842354B7D7C6CBEAB5FB28612672F10882C7A9B925604F",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/26231F86004EF2C1F6842354B7D7C6CBEAB5FB28612672F10882C7A9B925604F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "6832A6C798892B78D465AA2BABFAB60A6D4BA4AB47869C20029BACFC583026D0",
      "masterWidth": 2160,
      "masterHeight": 2880,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6832A6C798892B78D465AA2BABFAB60A6D4BA4AB47869C20029BACFC583026D0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "2951B8CEF641A7F9B1D9BFE21D638DA9C27EEE180845D86A6C40B708E6980E0A",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2951B8CEF641A7F9B1D9BFE21D638DA9C27EEE180845D86A6C40B708E6980E0A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "B99FF9FE0DECB1CA859F1FC231C883F0B898BDD90D02CDD26AE2F81024438FCD",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B99FF9FE0DECB1CA859F1FC231C883F0B898BDD90D02CDD26AE2F81024438FCD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "5A350FA7560BC10971E4A143C0885F220E203B6FFD795426E64C4C2E42E4E929",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A350FA7560BC10971E4A143C0885F220E203B6FFD795426E64C4C2E42E4E929/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "program": {
      "default": {
      "masterId": "2F2A7C6915C627023D6F697EC21B3458FE89711875687EC1445B52228091750E",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2F2A7C6915C627023D6F697EC21B3458FE89711875687EC1445B52228091750E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "4DD202DB0495E2535FA2BFBE7C21B5D9AF1C9778E221429775599ED1E54F1217",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4DD202DB0495E2535FA2BFBE7C21B5D9AF1C9778E221429775599ED1E54F1217/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "A43332360ADD2C06CC0DCCE9571D2A3C27544B400C872270368B4BCD38DF9923",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A43332360ADD2C06CC0DCCE9571D2A3C27544B400C872270368B4BCD38DF9923/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "207900D781500EC83AB16FD02934173AAA5B39AB73293B724E6EF9A555A25BF6",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/207900D781500EC83AB16FD02934173AAA5B39AB73293B724E6EF9A555A25BF6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "2D7B1C33316DA5949AFD9F076B224977ABEAA1EE8A0F83D7D798CCE9082EC6D3",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D7B1C33316DA5949AFD9F076B224977ABEAA1EE8A0F83D7D798CCE9082EC6D3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "193A462D46814A12FA146BC14F21011E9D80875B0BC82AC07C9C363D74CE9440",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/193A462D46814A12FA146BC14F21011E9D80875B0BC82AC07C9C363D74CE9440/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "A799C966BCE19F3C1C61208B8F47C9BC3FFE600D3AF140A1DE3169919184F76D",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A799C966BCE19F3C1C61208B8F47C9BC3FFE600D3AF140A1DE3169919184F76D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "35496B244A9FFC4E91A76399AB01AFCD668B8662B0A5C15524BD94381815FA35",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/35496B244A9FFC4E91A76399AB01AFCD668B8662B0A5C15524BD94381815FA35/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "08ADDA608A6169A9A82015EE0630B35EF54E8F3404B15F408E432D6E092514FC",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/08ADDA608A6169A9A82015EE0630B35EF54E8F3404B15F408E432D6E092514FC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "769CBE4C564A43C4B59C22088A35BFDB3387EBF2DF76427ED86F04690C979463",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/769CBE4C564A43C4B59C22088A35BFDB3387EBF2DF76427ED86F04690C979463/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "EC834E020D7615655B3423E9F678D62384201C1EE314FDEA4AC9B40220D17D68",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EC834E020D7615655B3423E9F678D62384201C1EE314FDEA4AC9B40220D17D68/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "D99BF043FE0ADD2C11961218D507287D82E65A95355DDA129DEA4017D2D414EE",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D99BF043FE0ADD2C11961218D507287D82E65A95355DDA129DEA4017D2D414EE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.89": {
      "program": {
      "default": {
      "masterId": "9F1EF3647F92E62D2F70D0D10C5BF9B9B14FA721CC5279F0553FD150076693EB",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F1EF3647F92E62D2F70D0D10C5BF9B9B14FA721CC5279F0553FD150076693EB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "UHD",
      "mediaId": "0c6307a1-f510-4a29-9dd7-4875f47e3db2",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/0c6307a1-f510-4a29-9dd7-4875f47e3db2/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 7370000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "b6e7ad77-6d8e-433a-8168-7caf0f8e418e",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Clouds",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "clouds",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      },
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "35F2-A0BC-04AC-9FA9-65B6-4"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": "For brief strong language",
      "system": "MPAA",
      "value": "PG-13"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-10-16",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/08/19/1597862081-305092.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ],
      "videoId": "4a070a92-828d-4bd2-9a77-8beb392f4efe"
      },
      {
      "contentId": "865ac52d-39fc-4910-b523-ce04a113dd6c",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": null
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "2LHUwfygdoCg",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTIzNTk3",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "5f6eb516-acfa-4ebd-8c2f-36ce44bed30d",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Prep & Landing: Naughty vs. Nice - movie - 865ac52d-39fc-4910-b523-ce04a113dd6c",
      "image": {
      "tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "CC19113C1DD83A90981AE0B0D8462DD4F8520E204046C577C09E30159A581F24",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC19113C1DD83A90981AE0B0D8462DD4F8520E204046C577C09E30159A581F24/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "65F9FC1089D15E46ED07AC87F1E9B391F22FB141207A6C713DF340E14BC2A141",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/65F9FC1089D15E46ED07AC87F1E9B391F22FB141207A6C713DF340E14BC2A141/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "46BAA2E44165CFAE7195DF34C0A7E78D4187F49BB4802AAE6966957F90C99860",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/46BAA2E44165CFAE7195DF34C0A7E78D4187F49BB4802AAE6966957F90C99860/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "52477A219ECC1882541045E86B5544B34049F072A596C6918A60F9826615FE20",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52477A219ECC1882541045E86B5544B34049F072A596C6918A60F9826615FE20/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "A57B2C982C77880F9F651E93EB4C0DFFAE95CFA74998247779C6EF9A2C31785A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A57B2C982C77880F9F651E93EB4C0DFFAE95CFA74998247779C6EF9A2C31785A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "F9900AA453AD0C13AF9ABA813485A28612ADFFE38DE88E683B32D4D143EFEFE0",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F9900AA453AD0C13AF9ABA813485A28612ADFFE38DE88E683B32D4D143EFEFE0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "B1C93ECACBDFB9AEDC09D58318957115C1C378437C8603CB27FEB87797CED16A",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B1C93ECACBDFB9AEDC09D58318957115C1C378437C8603CB27FEB87797CED16A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "7628090093B9C90C3649226195F718AB2E5DD5C4AA3DA346BBB81938899176AB",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7628090093B9C90C3649226195F718AB2E5DD5C4AA3DA346BBB81938899176AB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "CDEC939D19F26F710896AC2343D7B4BBBC1258C7678171E083C04B1986B5A060",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CDEC939D19F26F710896AC2343D7B4BBBC1258C7678171E083C04B1986B5A060/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "84AD0B31717207D7D5C68170CF12F39D867811DA3A9D7A524073D00B6EDF55BE",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/84AD0B31717207D7D5C68170CF12F39D867811DA3A9D7A524073D00B6EDF55BE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "83BC9B05B86D50C2BB4ED1A6F7DFE38AD4EFFDE1F66AE969E86BF7340FEED6B0",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/83BC9B05B86D50C2BB4ED1A6F7DFE38AD4EFFDE1F66AE969E86BF7340FEED6B0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "FAE18E947557DEA63F6A1FDC8283F1BDA0E14B42D8EE98C671E6BAC47E79EEC1",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FAE18E947557DEA63F6A1FDC8283F1BDA0E14B42D8EE98C671E6BAC47E79EEC1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "B1DDE7E6C7EACE6595A6455F34BD1708812E4C922CAA156E54583B76286DDFE4",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B1DDE7E6C7EACE6595A6455F34BD1708812E4C922CAA156E54583B76286DDFE4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "0DD85FBFA633E3F31EF80143D466C20EEE76A24FB43F313306AAD3153D9ADA35",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0DD85FBFA633E3F31EF80143D466C20EEE76A24FB43F313306AAD3153D9ADA35/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "799BF06E4091335F30F198012FFAA4CDB64B15F094C28B8983D5040A4940BC6C",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/799BF06E4091335F30F198012FFAA4CDB64B15F094C28B8983D5040A4940BC6C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "716f1202-0562-495a-92d2-31f58440378e",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/716f1202-0562-495a-92d2-31f58440378e/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 1364000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "5f6eb516-acfa-4ebd-8c2f-36ce44bed30d",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "prep-landing-naughty-vs-nice",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Prep & Landing: Naughty vs. Nice",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      },
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "33D7-8973-106F-BC12-3537-R"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-G"
      }
      ],
      "releases": [
      {
      "releaseDate": "2011-12-05",
      "releaseType": "original",
      "releaseYear": 2011,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "63c1f60d-1016-4643-9df2-3adba715557d"
      },
      {
      "contentId": "e971b5cd-de6a-4c58-8a64-5efcaaa29ca1",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "2bnZcZyBeEfx",
      "image": {
      "tile": {
      "0.71": {
      "series": {
      "default": {
      "masterId": "DE890BDDB9A241DE09E52CA0044DE696A67EA7BDFABF21FB99288BAB5CA30222",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DE890BDDB9A241DE09E52CA0044DE696A67EA7BDFABF21FB99288BAB5CA30222/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "series": {
      "default": {
      "masterId": "865892FE4F1392A553F54EB8FFCF795FF9CECD77487F71F344DA47335DE939E5",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/865892FE4F1392A553F54EB8FFCF795FF9CECD77487F71F344DA47335DE939E5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "3F07134B0065C4422FF242D9E05B4F928C2AF095B80258EFE2385C855E3201E0",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3F07134B0065C4422FF242D9E05B4F928C2AF095B80258EFE2385C855E3201E0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "779FBFBCDAB354B03C6C093A7D422D6FE397AD34B097BC6979AEB852E5985A65",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/779FBFBCDAB354B03C6C093A7D422D6FE397AD34B097BC6979AEB852E5985A65/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "67E28FE67EA2F1823017BC1386C6CE39EECDF1CAF5C1B141E2D96D241E1C119F",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/67E28FE67EA2F1823017BC1386C6CE39EECDF1CAF5C1B141E2D96D241E1C119F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "2E8400F666AEA1F81AA7F280C4174925A759EB0A36C2AD76221C62B5E1ECB142",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2E8400F666AEA1F81AA7F280C4174925A759EB0A36C2AD76221C62B5E1ECB142/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "A5709D10F375B0A9D7C538D5278AAF3F5C4EA1EF1A6D9B7A8BF23974F6F73895",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A5709D10F375B0A9D7C538D5278AAF3F5C4EA1EF1A6D9B7A8BF23974F6F73895/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "E1D7F2D1EDEA4B94E925DAE688F1ADF983564E6586C1ED35121B30C636EFE070",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E1D7F2D1EDEA4B94E925DAE688F1ADF983564E6586C1ED35121B30C636EFE070/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "B53129B4DA95518E88A4C53187F4DA711CE3316209E2EF55473A9D25FFE9EA9B",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B53129B4DA95518E88A4C53187F4DA711CE3316209E2EF55473A9D25FFE9EA9B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "DE2C2304310EA21C12EEB9E8A34910286E36B36456BCAE46ACAB5710C6EDC04A",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DE2C2304310EA21C12EEB9E8A34910286E36B36456BCAE46ACAB5710C6EDC04A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "C77BAFAB0F74EF9C3AED8E18A31A968E9D8A51217382C9BAE3978F112FA7B021",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C77BAFAB0F74EF9C3AED8E18A31A968E9D8A51217382C9BAE3978F112FA7B021/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "8947A93AB60736F2B9D212FAA81078D3A84B1F4D7A2441FBCED4F036873AEBB3",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8947A93AB60736F2B9D212FAA81078D3A84B1F4D7A2441FBCED4F036873AEBB3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "AC45EA6E591B064658E883F6FA9B689BBBA5C825539D71DABEAB5137DAC93F68",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AC45EA6E591B064658E883F6FA9B689BBBA5C825539D71DABEAB5137DAC93F68/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "B5A5BFA1F6B17BE0C3AF29B286B8E5A84DB5CE33E96AB304700008FD4DAE64ED",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B5A5BFA1F6B17BE0C3AF29B286B8E5A84DB5CE33E96AB304700008FD4DAE64ED/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "AB308DC562AB074C42B2C417325262412E7088C3BF54CC807433545F70AC1D8E",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AB308DC562AB074C42B2C417325262412E7088C3BF54CC807433545F70AC1D8E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "188F1A3CA0BE31A1484392C3CF287960078D52BF1B7085E1DEF354221455D965",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/188F1A3CA0BE31A1484392C3CF287960078D52BF1B7085E1DEF354221455D965/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "8CB75F8E492F9C30A2DD690A457D51D9FD67C5AF0CB2402F194CFE8D6D042967",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8CB75F8E492F9C30A2DD690A457D51D9FD67C5AF0CB2402F194CFE8D6D042967/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "e971b5cd-de6a-4c58-8a64-5efcaaa29ca1",
      "text": {
      "title": {
      "full": {
      "series": {
      "default": {
      "content": "The Big Fib",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "slug": {
      "series": {
      "default": {
      "content": "the-big-fib",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "3ce60374-32cb-4769-8c58-c9af3ad46964",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-05-22",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/04/20/1587403695-191978.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "8b072d8d-444a-497a-9d85-f119911829e9",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "1pmGRTbT3qjz",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTAyMDM0",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "11a96c47-00a7-48b0-a998-0dd53f1d1a1e",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "The Sorcerer's Apprentice - movie - 8b072d8d-444a-497a-9d85-f119911829e9",
      "image": {
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "2B884534715FA1579511A5D4AAAB67753BD8040E091E82E75A10861BCF20A5A0",
      "masterWidth": 1344,
      "masterHeight": 756,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2B884534715FA1579511A5D4AAAB67753BD8040E091E82E75A10861BCF20A5A0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "03491BA2A0C57940F0AD18DD0367B0BFAAF01A01F872DC7F8901D65A0BC6D014",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/03491BA2A0C57940F0AD18DD0367B0BFAAF01A01F872DC7F8901D65A0BC6D014/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "0CF29C3570C1F5B96A2B68DC210C8CF51A7F2088F8BA9A87F1E35A7FA20F4C90",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0CF29C3570C1F5B96A2B68DC210C8CF51A7F2088F8BA9A87F1E35A7FA20F4C90/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "8C9365A68AD44A485195B378E95587E71ADEB28C66B6C983DDC917136412E950",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8C9365A68AD44A485195B378E95587E71ADEB28C66B6C983DDC917136412E950/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "BE7D79CBCC633A506B1DC3BCCE5778CD073A8279490AFAD1719BDF5AB2120DB3",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BE7D79CBCC633A506B1DC3BCCE5778CD073A8279490AFAD1719BDF5AB2120DB3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "program": {
      "default": {
      "masterId": "6DBED6E1463D0393E8F635E9AB478E14316A197484DC95EE72A3B8172576379B",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6DBED6E1463D0393E8F635E9AB478E14316A197484DC95EE72A3B8172576379B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "2D795327B3F57AD1BEDBCD8DAC3EBDD09D24AACA2CDC59D853051288ADC2AC41",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D795327B3F57AD1BEDBCD8DAC3EBDD09D24AACA2CDC59D853051288ADC2AC41/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "2997FE0CEF50F13BE20F6DFDDFBC33B3115E6218C8601C879E1A1697F922DEFE",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2997FE0CEF50F13BE20F6DFDDFBC33B3115E6218C8601C879E1A1697F922DEFE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "96E1BD76F9E53F369DC6321D14D98932709EAFBB8AD4DD7462EE8B19EF15A021",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/96E1BD76F9E53F369DC6321D14D98932709EAFBB8AD4DD7462EE8B19EF15A021/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "0B0747061F54064E463AEAB4AEE32D982690557E35BEF411B05DE7647D34BDD8",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B0747061F54064E463AEAB4AEE32D982690557E35BEF411B05DE7647D34BDD8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "F7A021373DBEE4E8DD07171096D7E9324DF2C0C3397624ECCD8E6BD3D4457E34",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F7A021373DBEE4E8DD07171096D7E9324DF2C0C3397624ECCD8E6BD3D4457E34/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "E45152AD91E003C408AFAF820A5AC4603973997ACDD2C581FC16A4B1C7F5A629",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E45152AD91E003C408AFAF820A5AC4603973997ACDD2C581FC16A4B1C7F5A629/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "CFACA7979784B34185A32338035F512BE23C1846AC598A10230659F6DDB552C0",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CFACA7979784B34185A32338035F512BE23C1846AC598A10230659F6DDB552C0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "B7B3211A19E0F4F3185B349C2CCAA2D6D62D51E3D8A05AED6C4B0F2623983AFA",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B7B3211A19E0F4F3185B349C2CCAA2D6D62D51E3D8A05AED6C4B0F2623983AFA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "FA8FCE01E95B0CB90577CB076A5455F7A7FE61C0D9895C38656F9CCF7E12415C",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA8FCE01E95B0CB90577CB076A5455F7A7FE61C0D9895C38656F9CCF7E12415C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "589D89BE368DCFF7635590D5CEB5E0E07D6745D5C8B895DC0DDA79B4B0502672",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/589D89BE368DCFF7635590D5CEB5E0E07D6745D5C8B895DC0DDA79B4B0502672/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "d762af7b-c4ef-454e-a323-1162d8463a4d",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/d762af7b-c4ef-454e-a323-1162d8463a4d/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 6642000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "11a96c47-00a7-48b0-a998-0dd53f1d1a1e",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "The Sorcerer's Apprentice",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "the-sorcerers-apprentice",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "74C4-85C3-AB82-3812-1DCB-J"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2010-07-14",
      "releaseType": "original",
      "releaseYear": 2010,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "b8074471-e775-4405-828f-49f282bc9456"
      },
      {
      "contentId": "59ac5d79-ca6e-4c3d-9c3e-47a97708140a",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "QnakzyiFzOeP",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTAyMDMz",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "3f1d416c-87f0-4452-8af5-dab06e6912f3",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Disney's A Christmas Carol - movie - 59ac5d79-ca6e-4c3d-9c3e-47a97708140a",
      "image": {
      "tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "7C07BD09B722805D8B9B5E8310107758FED69DB57DB83E16FF41B166A2C2B408",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7C07BD09B722805D8B9B5E8310107758FED69DB57DB83E16FF41B166A2C2B408/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "8DEC750E364043619160C0277FE6DC4C770726E7F6F5D5A0569D652D76E9A288",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8DEC750E364043619160C0277FE6DC4C770726E7F6F5D5A0569D652D76E9A288/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "7D1673319FF752360F9585BBF9CAA500C1F93469A2412296DF7FEB6411B7DCFA",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7D1673319FF752360F9585BBF9CAA500C1F93469A2412296DF7FEB6411B7DCFA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "603A76E39ECCD3BD5E0FF91D1905FB9AD63B7EBF12BE707416EAFAF631E7F4DE",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/603A76E39ECCD3BD5E0FF91D1905FB9AD63B7EBF12BE707416EAFAF631E7F4DE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "228956CC39D7EABD75C27243B18F35564D01AEFEBCF39C2CD1045B3210978C5C",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/228956CC39D7EABD75C27243B18F35564D01AEFEBCF39C2CD1045B3210978C5C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "24F2D2676429C843F8E1E3B65B52B8223EFE2DB4A4C2AABEEA4AB7B2B1B9E24D",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/24F2D2676429C843F8E1E3B65B52B8223EFE2DB4A4C2AABEEA4AB7B2B1B9E24D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "CD7CFF187F4D38EA55FCCFB52C81D7B3F644D3F6A946D6906EC4A20EBAA46392",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CD7CFF187F4D38EA55FCCFB52C81D7B3F644D3F6A946D6906EC4A20EBAA46392/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "674292D40662C703D0A4CFD5ED4ABD036BBBC5A4A1A886227F51519A70E3920C",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/674292D40662C703D0A4CFD5ED4ABD036BBBC5A4A1A886227F51519A70E3920C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "C35A19D6A97A4DF0287F22647F524E89CAC564B230A5F20359BFF128969E1F82",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C35A19D6A97A4DF0287F22647F524E89CAC564B230A5F20359BFF128969E1F82/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "5B2DC1642A3D749CED03C1E708A491D150D47937CE8B21CD497DE9E9CEF3CBD7",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5B2DC1642A3D749CED03C1E708A491D150D47937CE8B21CD497DE9E9CEF3CBD7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "604F6249125DC65FD9847F3AB66EC95DA1EBF04D6EEA331F3C8BCCBC340BC29B",
      "masterWidth": 1344,
      "masterHeight": 756,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/604F6249125DC65FD9847F3AB66EC95DA1EBF04D6EEA331F3C8BCCBC340BC29B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "B5FA33B7DA84A2C1B74363713977D16CCB43A4FD9251419C2B13736BC02CC715",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B5FA33B7DA84A2C1B74363713977D16CCB43A4FD9251419C2B13736BC02CC715/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "694A558B6F2B5CE4EC8B9347110824488456AC7980C625002CE715815ED67A4A",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/694A558B6F2B5CE4EC8B9347110824488456AC7980C625002CE715815ED67A4A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "A38261C6258B0107D9E150B7C7633B5001E65E1B35C90FF5A194F1CA6176E227",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A38261C6258B0107D9E150B7C7633B5001E65E1B35C90FF5A194F1CA6176E227/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "FFEE68556B56C57657FF54793F21E119126AC0699B34A8DDE1A381A75CE954D9",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFEE68556B56C57657FF54793F21E119126AC0699B34A8DDE1A381A75CE954D9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "96D17D94BFB643DE5FEB3E1394B3232B85BAF9CF89313E774F8EDB9FD3B30D9E",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/96D17D94BFB643DE5FEB3E1394B3232B85BAF9CF89313E774F8EDB9FD3B30D9E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "356f275f-b3c5-4601-bc18-322f116f0e67",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/356f275f-b3c5-4601-bc18-322f116f0e67/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 5823000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "3f1d416c-87f0-4452-8af5-dab06e6912f3",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "disneys-a-christmas-carol",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Disney's A Christmas Carol",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "1D50-01DF-87D9-2D8B-A2FC-T"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2009-11-06",
      "releaseType": "original",
      "releaseYear": 2009,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "da0539da-5e0e-4c70-b775-c31378aed685"
      },
      {
      "contentId": "6fffa028-8c70-43f1-9e7a-364e8c4562c4",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "3ZoBZ52QHb4x",
      "image": {
      "title_treatment_layer": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "B481567F97714E99C91EEA9C245D33D34A0D32E06E0D14969E2321394A909D89",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B481567F97714E99C91EEA9C245D33D34A0D32E06E0D14969E2321394A909D89/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "855428541F1F3F96C86DDDF6D49AB6B474BE97F2C6D49B3021A74201247A6932",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/855428541F1F3F96C86DDDF6D49AB6B474BE97F2C6D49B3021A74201247A6932/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "671B90A5CF54A68A167536A5A75EA45E5B53DA6DF9CBA2DBCE4210113DE489FF",
      "masterWidth": 3420,
      "masterHeight": 874,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/671B90A5CF54A68A167536A5A75EA45E5B53DA6DF9CBA2DBCE4210113DE489FF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "series": {
      "default": {
      "masterId": "8B17ED55A282C3C534FF93C42404174915D5A91E203B899D22370D8C7B042E13",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B17ED55A282C3C534FF93C42404174915D5A91E203B899D22370D8C7B042E13/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "series": {
      "default": {
      "masterId": "25C13CA9CE785201DE26970A37E5AF76CBF1DD091958039B17E99CA08D4E4BD8",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/25C13CA9CE785201DE26970A37E5AF76CBF1DD091958039B17E99CA08D4E4BD8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "145EFCC519139D1BBF90E2B8B1D6D117F01D3A3B1E374CF33B97A389BC66E14F",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/145EFCC519139D1BBF90E2B8B1D6D117F01D3A3B1E374CF33B97A389BC66E14F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "341D4CB5A450D060A8D99759DA665D16CEEB1ED585F1BB3F2DA500928C7139D3",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341D4CB5A450D060A8D99759DA665D16CEEB1ED585F1BB3F2DA500928C7139D3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "D2AC0279D497F13BF7F0B89EC616875B236D6A47B65BEDE8DC63633DA0051468",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D2AC0279D497F13BF7F0B89EC616875B236D6A47B65BEDE8DC63633DA0051468/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "series": {
      "default": {
      "masterId": "A2EBBCD1F138C3847147B56C3A17F2E97F4ADD25A6D06E540B44B327DB579A05",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A2EBBCD1F138C3847147B56C3A17F2E97F4ADD25A6D06E540B44B327DB579A05/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "series": {
      "default": {
      "masterId": "0A9ABA4D36CEDF49052535C075C6D05D089CAC7B7C497D5FEC6E53E015506484",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0A9ABA4D36CEDF49052535C075C6D05D089CAC7B7C497D5FEC6E53E015506484/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "E69592E32390FD3CA23C4AC427DB30FDD84976D1227D62C96CA3521A2F034AEC",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E69592E32390FD3CA23C4AC427DB30FDD84976D1227D62C96CA3521A2F034AEC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "590E66A3D6A52E07C825E6F02A06F80BBAA7F42601F86EE741F36F092F937151",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/590E66A3D6A52E07C825E6F02A06F80BBAA7F42601F86EE741F36F092F937151/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "760019C53386DCA2AABF37239241E5559297315278B2BF2EDF24755BC77F44E7",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/760019C53386DCA2AABF37239241E5559297315278B2BF2EDF24755BC77F44E7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "980172B56C4C8BE5186510B7B4E8FA30DB76AABD3DD795708A0BE26CBD3E3E93",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/980172B56C4C8BE5186510B7B4E8FA30DB76AABD3DD795708A0BE26CBD3E3E93/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "5E985BCDC150C3B562945A8D299B08C5F17F8C1F788FE633EF01BA1E0DDFA783",
      "masterWidth": 3420,
      "masterHeight": 874,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5E985BCDC150C3B562945A8D299B08C5F17F8C1F788FE633EF01BA1E0DDFA783/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "EA8A04F93EFECFA101630413A41B74CB695CC0FB8308CA1B93CB364BAAE9F40B",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EA8A04F93EFECFA101630413A41B74CB695CC0FB8308CA1B93CB364BAAE9F40B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "691DE8D585E8622BBA8F3E155D45E16C2917922031956E15DC3F5F619A3B670C",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/691DE8D585E8622BBA8F3E155D45E16C2917922031956E15DC3F5F619A3B670C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.89": {
      "series": {
      "default": {
      "masterId": "8B2D6D48D036C6DBFFEE75A57DECBF7A559264F51BFCAEC18CD161580F0B6CD5",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B2D6D48D036C6DBFFEE75A57DECBF7A559264F51BFCAEC18CD161580F0B6CD5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "881F6D52851806499C74C39706584D54ADBAC1F7BA662FBB543C7981194F3C72",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/881F6D52851806499C74C39706584D54ADBAC1F7BA662FBB543C7981194F3C72/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "6fffa028-8c70-43f1-9e7a-364e8c4562c4",
      "text": {
      "title": {
      "full": {
      "series": {
      "default": {
      "content": "The Simpsons",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "slug": {
      "series": {
      "default": {
      "content": "the-simpsons",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "0f87f14e-4a76-43f2-b850-133478fb1561",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-14"
      }
      ],
      "releases": [
      {
      "releaseDate": "1989-12-17",
      "releaseType": "original",
      "releaseYear": 1989,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": []
      },
      {
      "contentId": "61f6d4ab-009b-4371-b57a-4f2cd93c9165",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "1RpnaUIUTfj4",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MjM3ODI",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "628a247f-32d9-4c6a-8444-629518c6cded",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Mr. Magoo - movie - 61f6d4ab-009b-4371-b57a-4f2cd93c9165",
      "image": {
      "tile": {
      "0.67": {
      "program": {
      "default": {
      "masterId": "D8154D642204629D905A4C84A31391A5BDC918534F9AA0E4C0827104EBE7D4D9",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D8154D642204629D905A4C84A31391A5BDC918534F9AA0E4C0827104EBE7D4D9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "8B2BCF4069BB19AC562660B33CD392FE1D3F12977FFC5D17BDE2522A75BE0D7E",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B2BCF4069BB19AC562660B33CD392FE1D3F12977FFC5D17BDE2522A75BE0D7E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "FED089093202E2AF976562D9A208BBE1DD8AA0CDB70A2C981CB0271B326AECCA",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FED089093202E2AF976562D9A208BBE1DD8AA0CDB70A2C981CB0271B326AECCA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "FE5663037ECD6471CB1C3F9D394009396BBEAB4010D89273058AEEFB7C9709B8",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FE5663037ECD6471CB1C3F9D394009396BBEAB4010D89273058AEEFB7C9709B8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "7622E935BF380F7A154B823C4BC7A986344AE9CF13F77822C9D54B405106AFF8",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7622E935BF380F7A154B823C4BC7A986344AE9CF13F77822C9D54B405106AFF8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "9A90A5CB18CDE2AACD0420608A1B3BB26F503794296A0D68FBA5CB097CD79D81",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9A90A5CB18CDE2AACD0420608A1B3BB26F503794296A0D68FBA5CB097CD79D81/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "0E3F986C66C19A775F76799B774175E20B8E58C9859059ACF8BF8CAE7006DCB1",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0E3F986C66C19A775F76799B774175E20B8E58C9859059ACF8BF8CAE7006DCB1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "C07FBF5150EA7843C2DD048BC79CC188DA609FE90A21A2036C10D503F6F54F1B",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C07FBF5150EA7843C2DD048BC79CC188DA609FE90A21A2036C10D503F6F54F1B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "93E3C6D3F2F5F1947E8CFC801B03A0B72AB21EED6CDD355027FD8B81C41D50CB",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/93E3C6D3F2F5F1947E8CFC801B03A0B72AB21EED6CDD355027FD8B81C41D50CB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "1A8E4CDEC13E4B436E75B4D37DE33D205FD3F363D72C82177984FC01F7C7F41B",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1A8E4CDEC13E4B436E75B4D37DE33D205FD3F363D72C82177984FC01F7C7F41B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "9B8ACD81CD8E3EBF3D570876D778B174D1F780E64CB09FF458E8F516FB8B18B6",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9B8ACD81CD8E3EBF3D570876D778B174D1F780E64CB09FF458E8F516FB8B18B6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "9E4FE73161B54A1B44032CDBB97E8386D072B84E44D30A9D211C15150BA14FDD",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9E4FE73161B54A1B44032CDBB97E8386D072B84E44D30A9D211C15150BA14FDD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "894AFEF6B2D9A98A2961B2F7AB557137DDEF29A3C01F85A5D552330F0A6F4172",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/894AFEF6B2D9A98A2961B2F7AB557137DDEF29A3C01F85A5D552330F0A6F4172/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "A8D8F851191F321D29D238D8C7274B59C9B16799BE0B326D245E692513327E1A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A8D8F851191F321D29D238D8C7274B59C9B16799BE0B326D245E692513327E1A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "E01BCB2A4397CA5A2D150243428D7A7DB2DBEEBAD302210AF8796611AC5B0339",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E01BCB2A4397CA5A2D150243428D7A7DB2DBEEBAD302210AF8796611AC5B0339/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "66A8F27FF92A64E559178A849D35FE9593740AD949FD125FA0F662F806075101",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/66A8F27FF92A64E559178A849D35FE9593740AD949FD125FA0F662F806075101/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "c9e923d2-2504-4725-a6fc-332e66a80c7e",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/c9e923d2-2504-4725-a6fc-332e66a80c7e/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 5269000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "628a247f-32d9-4c6a-8444-629518c6cded",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "mr-magoo",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Mr. Magoo",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "40DB-002F-AA40-C6F1-E93C-M"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": "for mild language and action sequences",
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "1997-12-25",
      "releaseType": "original",
      "releaseYear": 1997,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "25f25fed-f3fd-4276-b004-10afa135aed6"
      },
      {
      "contentId": "02b50426-a351-4d90-b99b-d898ba4d6ca2",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": null
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "2tBSdZv6bB4L",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MjY1MTA1",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "83088deb-dc37-46ad-9592-552f71a938d2",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Frozen",
      "partnerGroupId": "478414",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Once Upon a Snowman - short-form - 02b50426-a351-4d90-b99b-d898ba4d6ca2",
      "image": {
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "11A45865D4CB53612EC3C26C26C5865149C83E87555FA1C260CF90A479C543F2",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/11A45865D4CB53612EC3C26C26C5865149C83E87555FA1C260CF90A479C543F2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "E1C55D723DF34A5A821691368F49F3C904214391BF859F008B2F003C957619C5",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E1C55D723DF34A5A821691368F49F3C904214391BF859F008B2F003C957619C5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "7DBE038416A89D42656825A885B5A85E33D7F87A5BCF058A8C273770E1FD488D",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7DBE038416A89D42656825A885B5A85E33D7F87A5BCF058A8C273770E1FD488D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "2C8AB57E794E2A6499CC7290D4AEEF35EB65370F631FA1B6661D99F67246E862",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2C8AB57E794E2A6499CC7290D4AEEF35EB65370F631FA1B6661D99F67246E862/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "2338DEF0E3F1831B5A3D4E66764318BB5E395AB859C64E757CAE0C79781DA02F",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2338DEF0E3F1831B5A3D4E66764318BB5E395AB859C64E757CAE0C79781DA02F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "program": {
      "default": {
      "masterId": "1F696F2CE8BEFB4E2E5B67C4685A3D972A9D77C38357F3FA0D9572C510E1F92B",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1F696F2CE8BEFB4E2E5B67C4685A3D972A9D77C38357F3FA0D9572C510E1F92B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "program": {
      "default": {
      "masterId": "A40A612DBAD9A0A8B2F9DA3D89DFFF17063C5A64C89CE662480D04744AB8B6D4",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A40A612DBAD9A0A8B2F9DA3D89DFFF17063C5A64C89CE662480D04744AB8B6D4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "E37FB7287186EBC235D698EF9F71AEF5FA5BD2FF48048E8E0D54FBB79F3241E8",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E37FB7287186EBC235D698EF9F71AEF5FA5BD2FF48048E8E0D54FBB79F3241E8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "A166E54BC1971EE8A6885CB99C0713398F3F310245D8C6F2DD6642D1FE6BFBBA",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A166E54BC1971EE8A6885CB99C0713398F3F310245D8C6F2DD6642D1FE6BFBBA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "F6F3D2517527A29E991F793F0AD8377F397519941F939D7C3F7C65A577E55F8A",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6F3D2517527A29E991F793F0AD8377F397519941F939D7C3F7C65A577E55F8A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "99E037C2433C006A74022B456A491D502F37DB6FBE742D93581FDF4C379E7FB1",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/99E037C2433C006A74022B456A491D502F37DB6FBE742D93581FDF4C379E7FB1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "2.89": {
      "program": {
      "default": {
      "masterId": "F771CF190C5D272BDB1DDBAED3F5B5C057E8E08A189014080313B1D239950A8F",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F771CF190C5D272BDB1DDBAED3F5B5C057E8E08A189014080313B1D239950A8F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "FD30DF7453381C0C2D52EB58C8F070C9D2C0A9D63BFC2D204DE7D53756B50CDC",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FD30DF7453381C0C2D52EB58C8F070C9D2C0A9D63BFC2D204DE7D53756B50CDC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "57C9E923BC9A0A7E677FA56968F23037856A06D540C3D63C08269B1BA625583A",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/57C9E923BC9A0A7E677FA56968F23037856A06D540C3D63C08269B1BA625583A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "557749D1110B30D48B8612D407C2AA83BD0456621D5285B90EE0163FBAF5BD13",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/557749D1110B30D48B8612D407C2AA83BD0456621D5285B90EE0163FBAF5BD13/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "C674E7941BD376B1B84815BEBD29327FC120891D2D45675FA36D9924A4BC2F77",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C674E7941BD376B1B84815BEBD29327FC120891D2D45675FA36D9924A4BC2F77/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "0E95B079DFF254A2FA5C3AA5552AB4DE718E358D69B400C283CADE4ED2B96E92",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0E95B079DFF254A2FA5C3AA5552AB4DE718E358D69B400C283CADE4ED2B96E92/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "ECF99DEE0F79491FEE8F1D5FCC715491688FCFFE64325550D35A68BCFA9DFACA",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ECF99DEE0F79491FEE8F1D5FCC715491688FCFFE64325550D35A68BCFA9DFACA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "FFAE42E7DAD8F98120D2E783E43DE7780C87A4A72DAD6A6BD733BA8DE716CFA5",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFAE42E7DAD8F98120D2E783E43DE7780C87A4A72DAD6A6BD733BA8DE716CFA5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "UHD",
      "mediaId": "133a3616-93ca-4671-b3d2-c562ce464edd",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/133a3616-93ca-4671-b3d2-c562ce464edd/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 730000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "83088deb-dc37-46ad-9592-552f71a938d2",
      "programType": "short-form",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "once-upon-a-snowman",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Once Upon a Snowman",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "0C63-DCE0-8746-965D-D2C9-B"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-10-23",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/10/16/1602880329-265105.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ],
      "videoId": "11195b1b-1f1c-4a96-9f7c-5c36f390f441"
      },
      {
      "contentId": "ca36ca06-ba32-426b-9670-5fceb1250b07",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "672px5MyjFwU",
      "image": {
      "tile": {
      "0.67": {
      "series": {
      "default": {
      "masterId": "EF09F2B890598EC7E34BCE2834C219F91BF86888B1AB78DB9EE18ACDC6BDAEA4",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF09F2B890598EC7E34BCE2834C219F91BF86888B1AB78DB9EE18ACDC6BDAEA4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "851DB738A1A11BE37EAEE9F64E61ACEDAF6FB04DFA9B6B96B29ED5501A06C229",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/851DB738A1A11BE37EAEE9F64E61ACEDAF6FB04DFA9B6B96B29ED5501A06C229/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "series": {
      "default": {
      "masterId": "51FEE7B1CA2C645B08845CF0391A25D349B016DEC9D0A59617A1B6A13254B3E5",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/51FEE7B1CA2C645B08845CF0391A25D349B016DEC9D0A59617A1B6A13254B3E5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "0E5C725BBA3EA99D88A9CFE3F153FFF46A497CE5E2004661B472AFDF2AE84026",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0E5C725BBA3EA99D88A9CFE3F153FFF46A497CE5E2004661B472AFDF2AE84026/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "61FB40F81DCC8BBCBB24F53E003555EDC511EE1F605DEC52167586357B50736B",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/61FB40F81DCC8BBCBB24F53E003555EDC511EE1F605DEC52167586357B50736B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "1D8CFFB53B272C38D2EE44B63C05EE5EDDC71E1919D39C40481B3C16F981DDBA",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1D8CFFB53B272C38D2EE44B63C05EE5EDDC71E1919D39C40481B3C16F981DDBA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "442BE7F8535B74FFE93EC828F13272B7D281181449E5FDF2D50BC75E84B39E89",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/442BE7F8535B74FFE93EC828F13272B7D281181449E5FDF2D50BC75E84B39E89/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "776062CC19070792AFB4073F9D5C32F0682901D8D3A559E97B7A25E2AB0BC1FD",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/776062CC19070792AFB4073F9D5C32F0682901D8D3A559E97B7A25E2AB0BC1FD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "1215C75698C7FE01CE83C2EA2E6B58BBFE64A03302CB409D6FB8F1E52DBE8E45",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1215C75698C7FE01CE83C2EA2E6B58BBFE64A03302CB409D6FB8F1E52DBE8E45/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "75F2D4EBE65AFCD84843786AB1ED8B79327597E75DC769498BAA4CDC5C646CA1",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/75F2D4EBE65AFCD84843786AB1ED8B79327597E75DC769498BAA4CDC5C646CA1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "CDD02B6E0243538568EC4902BD3E53BA5C4EE70A6CF6D0183ED90BB9B2ADAAC6",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CDD02B6E0243538568EC4902BD3E53BA5C4EE70A6CF6D0183ED90BB9B2ADAAC6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "68065619064B1A73D808D6F5CA4AD3F809E608FD2E6EBD0002FE48C8CC535209",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/68065619064B1A73D808D6F5CA4AD3F809E608FD2E6EBD0002FE48C8CC535209/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "7FB00BA43C4BE2723DDBCD9D3D8C7B429F94A63A3455D3A50551CC5665213380",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7FB00BA43C4BE2723DDBCD9D3D8C7B429F94A63A3455D3A50551CC5665213380/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "990EF474B92211C24BFACD6423D421BFD7698AC82EF59852C211433926300E37",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/990EF474B92211C24BFACD6423D421BFD7698AC82EF59852C211433926300E37/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "4D2FCD4C24B0BFE45AC67A6E001DB4B6CFAF3CB0ED58F1EA4399F921FCBA13FC",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D2FCD4C24B0BFE45AC67A6E001DB4B6CFAF3CB0ED58F1EA4399F921FCBA13FC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "22C2380C52AD6C5B29415AD428238891B01052AD64CF01C95C48ABBBA924D8DB",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/22C2380C52AD6C5B29415AD428238891B01052AD64CF01C95C48ABBBA924D8DB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "ca36ca06-ba32-426b-9670-5fceb1250b07",
      "text": {
      "title": {
      "slug": {
      "series": {
      "default": {
      "content": "gathering-storm",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "full": {
      "series": {
      "default": {
      "content": "Gathering Storm",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "de2ef670-9a4c-4e58-ba4d-fbd372a44329",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": null,
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": []
      },
      {
      "contentId": "f05d4021-bb21-4cf3-98ff-33eec71a8051",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "5c8oxYnLMh9l",
      "image": {
      "tile": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "1AC59DDB2B2F1CDE22C159B067153E6074B0BF0EAECE847E484B3ADDDD0F0C9C",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1AC59DDB2B2F1CDE22C159B067153E6074B0BF0EAECE847E484B3ADDDD0F0C9C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "EDD13EA15FED00C2AF76AD5E65EBD472ECD5F04B019879CCBDD8F3EB6B6378F6",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EDD13EA15FED00C2AF76AD5E65EBD472ECD5F04B019879CCBDD8F3EB6B6378F6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "series": {
      "default": {
      "masterId": "906A9D0A0676FEB31D8E73D34A03EA1154B587EC5C46E1F609BCC697235E2466",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/906A9D0A0676FEB31D8E73D34A03EA1154B587EC5C46E1F609BCC697235E2466/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "404F124A67789EAB7B2F51F6DEE2F20854F7312ADA763A0332ED206A375F162F",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/404F124A67789EAB7B2F51F6DEE2F20854F7312ADA763A0332ED206A375F162F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "6B9BEC8F814A1980642A76E781AA00D5011326B0101D1C65CB8380730DCCA8AF",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B9BEC8F814A1980642A76E781AA00D5011326B0101D1C65CB8380730DCCA8AF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "CB1CCA165D6475A4C046B0FD9245092144ABF715E2B26087E34BFD3EDE308911",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CB1CCA165D6475A4C046B0FD9245092144ABF715E2B26087E34BFD3EDE308911/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "1AABA365485AB7850014B404B86A23A790529B528BA6F38A776638E61287B64B",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1AABA365485AB7850014B404B86A23A790529B528BA6F38A776638E61287B64B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "6C9A8F9CEEF2883E7540359019E616FC7F5DFD86C58F30C720E959E1BB72852F",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6C9A8F9CEEF2883E7540359019E616FC7F5DFD86C58F30C720E959E1BB72852F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "6B5ACA6971020EFA4970CEC24E1B4E5EF0BD0D3455BCC932DF7D3E18374DAD4A",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B5ACA6971020EFA4970CEC24E1B4E5EF0BD0D3455BCC932DF7D3E18374DAD4A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "EC1247D786CE3553DCAACD40282B51EBA96176E97B98ADBDEBA3E3C40AFE8023",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EC1247D786CE3553DCAACD40282B51EBA96176E97B98ADBDEBA3E3C40AFE8023/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "104F5584FDA0B93F9DCA8BBCA8DDC7013CB48F137CA09AC26690F2441489B9E8",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/104F5584FDA0B93F9DCA8BBCA8DDC7013CB48F137CA09AC26690F2441489B9E8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "25F1B296A7AE2BC864295A8C65E4D598A710482D45295AB27CE65297DFBCE910",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/25F1B296A7AE2BC864295A8C65E4D598A710482D45295AB27CE65297DFBCE910/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "6F607C59BAFD44F17D7EFDA6276F1F1237728AEA24F025FB172021954E7E474A",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6F607C59BAFD44F17D7EFDA6276F1F1237728AEA24F025FB172021954E7E474A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "1E238F03AFDBFCAD5586238805E6F57EA3B5885C43BE3EB4D77A651B8407423A",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E238F03AFDBFCAD5586238805E6F57EA3B5885C43BE3EB4D77A651B8407423A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "17048964E866188EDCDA1717951ED5A4EC3FCC133948CCCCFAFFF822DAF6FC49",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/17048964E866188EDCDA1717951ED5A4EC3FCC133948CCCCFAFFF822DAF6FC49/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "F399A2CD9C02D3A2A8C51BB006D8812EC1036C058527E663FF3BB04B117700CF",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F399A2CD9C02D3A2A8C51BB006D8812EC1036C058527E663FF3BB04B117700CF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "F087AA83F376B38E9FE1FFC735D1953034019BF1036BC710A6B82E469B89E2B7",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F087AA83F376B38E9FE1FFC735D1953034019BF1036BC710A6B82E469B89E2B7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "f05d4021-bb21-4cf3-98ff-33eec71a8051",
      "text": {
      "title": {
      "slug": {
      "series": {
      "default": {
      "content": "one-day-at-disney-shorts",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "full": {
      "series": {
      "default": {
      "content": "One Day at Disney (Shorts)",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "8a658d11-835f-4422-9ce1-7e931f964a9b",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2019-12-06",
      "releaseType": "original",
      "releaseYear": 2019,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": []
      },
      {
      "contentId": "2b3dbde7-54be-45c9-86f1-63f7542c4daa",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": null
      },
      "encodedSeriesId": "1ccNSyCtvpP9",
      "image": {
      "tile": {
      "1.00": {
      "series": {
      "default": {
      "masterId": "F5AB58E2C5AE27153EDCC9B709407DA324B6C044052824423D50A062F17A4975",
      "masterWidth": 1080,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F5AB58E2C5AE27153EDCC9B709407DA324B6C044052824423D50A062F17A4975/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "series": {
      "default": {
      "masterId": "2222A3D42094BF7D63A5C2C54AC1FF7EA96B9B27BDC650BD23975528F84B1F19",
      "masterWidth": 724,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2222A3D42094BF7D63A5C2C54AC1FF7EA96B9B27BDC650BD23975528F84B1F19/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "093AD3369CE1E25E95BD9CD8069A771D4BB86EE84BC76A9C564886E9C861211A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/093AD3369CE1E25E95BD9CD8069A771D4BB86EE84BC76A9C564886E9C861211A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "153BFAB22A7C19234B8359EE8BE87A44325D91DAFCCFFEF864EC04C3DE12C212",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/153BFAB22A7C19234B8359EE8BE87A44325D91DAFCCFFEF864EC04C3DE12C212/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "EA987E5F00F702DF696D5E8D4A73FA9C6868697F011C2769EE0AA837D9CCC418",
      "masterWidth": 767,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EA987E5F00F702DF696D5E8D4A73FA9C6868697F011C2769EE0AA837D9CCC418/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "459A6574334518B5D4E909AF98A29BD1A965310F35B04D1129B5E190AE819A13",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/459A6574334518B5D4E909AF98A29BD1A965310F35B04D1129B5E190AE819A13/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "97821C5AF49384A0E0CBD24B4864C9761CA4E3A83DB1DF4ADC4CA0E399D25200",
      "masterWidth": 1344,
      "masterHeight": 756,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97821C5AF49384A0E0CBD24B4864C9761CA4E3A83DB1DF4ADC4CA0E399D25200/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "A60C95D12C5F2E4CAA18E5B6CC540EF2CA8770708BFA7295693128CC824ADFE4",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A60C95D12C5F2E4CAA18E5B6CC540EF2CA8770708BFA7295693128CC824ADFE4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "A69350A579B472AC914C8498B7DECB471F37A1BA9599267E5415598FA43470CE",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A69350A579B472AC914C8498B7DECB471F37A1BA9599267E5415598FA43470CE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "EC25A563CD47BAD0DB46A6F11D624F5A1F0831999B5272262296AC158FDC3F19",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EC25A563CD47BAD0DB46A6F11D624F5A1F0831999B5272262296AC158FDC3F19/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "8E7629DC0347FA2AF73A0B3F5BF031C0B562C9EEF69818F9C9B66EC280774AD3",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8E7629DC0347FA2AF73A0B3F5BF031C0B562C9EEF69818F9C9B66EC280774AD3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "3933BFD083B8127629EB26E4FC1D2B6AF38D372FF82A7DF7809BE68F49B58A8A",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3933BFD083B8127629EB26E4FC1D2B6AF38D372FF82A7DF7809BE68F49B58A8A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "2B97B4DE7C484B51BEFA39CB319153F90A20775127FBF7F54424B06CC5A78E47",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2B97B4DE7C484B51BEFA39CB319153F90A20775127FBF7F54424B06CC5A78E47/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "7099E42BB23B094FECA4935E55719601D5A516585B1FEF5A6D96FC6102A9F189",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7099E42BB23B094FECA4935E55719601D5A516585B1FEF5A6D96FC6102A9F189/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "DFAAF81E9333CF57F15BF414927EA79D88B9158A468653835204D0AFE867A3A8",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DFAAF81E9333CF57F15BF414927EA79D88B9158A468653835204D0AFE867A3A8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "C1C08AEA7EBBF96CD59AAD519A005F6729DAB62633A5A7FFF6DC484643935806",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C1C08AEA7EBBF96CD59AAD519A005F6729DAB62633A5A7FFF6DC484643935806/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "87A05928B51BE4AD2D0DB2EAB5ED5DCD4B6B16E9CA60A617580967E34C484C74",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87A05928B51BE4AD2D0DB2EAB5ED5DCD4B6B16E9CA60A617580967E34C484C74/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "2b3dbde7-54be-45c9-86f1-63f7542c4daa",
      "text": {
      "title": {
      "slug": {
      "series": {
      "default": {
      "content": "goldie-bear",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "full": {
      "series": {
      "default": {
      "content": "Goldie & Bear",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "384527f9-3baa-45cc-8bb2-73cf981c98bc",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-Y"
      }
      ],
      "releases": [
      {
      "releaseDate": "2015-11-16",
      "releaseType": "original",
      "releaseYear": 2015,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": []
      }
      ],
      "meta": {
      "hits": 24,
      "offset": 0,
      "page_size": 15
      },
      "setId": "d0c43e18-1348-4b1c-9b3f-58eaa22fa5a7",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "New to Disney+",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      },
      "type": "CuratedSet"
      },
      "type": "ShelfContainer",
      "style": "editorial"
      },
      {
      "set": {
      "contentClass": "editorial",
      "items": [
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "18ea556c-d219-4fae-ad4e-1cc6c9620593",
      "contentClass": "franchise",
      "key": "disney-channel",
      "slugs": [
      {
      "language": "en",
      "value": "disney-channel"
      }
      ]
      },
      "collectionId": "02701e72-d08d-4845-a9ac-df8d7b52c341",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "7A2FDA199E352C33B88723755E4C307386053B9038934666CAC7C5252830D4D9",
      "masterWidth": 750,
      "masterHeight": 1055,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7A2FDA199E352C33B88723755E4C307386053B9038934666CAC7C5252830D4D9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "73FE8AEF93AE19518421FDA85EE671B6EECE6C8DD02B1E7434D3DE719E97E72B",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/73FE8AEF93AE19518421FDA85EE671B6EECE6C8DD02B1E7434D3DE719E97E72B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "16B697C2071C9F4D48EC860BA59BE3F42F3F8651C068D78EAE20BBFFD8866D08",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/16B697C2071C9F4D48EC860BA59BE3F42F3F8651C068D78EAE20BBFFD8866D08/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "AE98E325D80D3F7A6DAA7B7ADFA7FE6FF255064F69C1B5DF4C8DF15F3DCBE129",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AE98E325D80D3F7A6DAA7B7ADFA7FE6FF255064F69C1B5DF4C8DF15F3DCBE129/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "731A6B3D6D0142670FAADD3D5E2F026F7DC9EFF41CFD1BA970A5639AD758E16C",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/731A6B3D6D0142670FAADD3D5E2F026F7DC9EFF41CFD1BA970A5639AD758E16C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "9D6886642F2FE58FFDD900775BDDFF0AF29BB4B3D294F2085E1174D57BE26B1A",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D6886642F2FE58FFDD900775BDDFF0AF29BB4B3D294F2085E1174D57BE26B1A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "A5FB76A32CDE6F4E16CC4E9B7C957A0FE6385EA0F55B63B3DAE01534431E9822",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A5FB76A32CDE6F4E16CC4E9B7C957A0FE6385EA0F55B63B3DAE01534431E9822/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "5E9749DD7624B8904B31E24103CEDF275D55D780F02B294C01293F2B3E4BDAF2",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5E9749DD7624B8904B31E24103CEDF275D55D780F02B294C01293F2B3E4BDAF2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "B73C6404031E8C51AB313E7D4E3EEF6EF6BF1BFEDAE1AD559ABE613161E0AD82",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B73C6404031E8C51AB313E7D4E3EEF6EF6BF1BFEDAE1AD559ABE613161E0AD82/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "4BCB15B38AC73C2D34C4DA9A464DCE21CB658E9CC406A8983E0ADB67A1D9DD83",
      "masterWidth": 768,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4BCB15B38AC73C2D34C4DA9A464DCE21CB658E9CC406A8983E0ADB67A1D9DD83/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "BA5D31B7889E04AE0499D1B83A6E563E95B031436225C68D69E4C4789E13F183",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BA5D31B7889E04AE0499D1B83A6E563E95B031436225C68D69E4C4789E13F183/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Disney Channel",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "b0c647f2-43c1-4b8b-9c30-ab7fe0078ab2",
      "contentClass": "franchise",
      "key": "disney-channel-original-movies",
      "slugs": [
      {
      "language": "en",
      "value": "disney-channel-original-movies"
      }
      ]
      },
      "collectionId": "199cf6fc-8d99-43c3-ae86-9951948f1ce3",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "B168E7D0C1E52EC54FDC29F43184A2FA62262328809534895A3780292FE61383",
      "masterWidth": 750,
      "masterHeight": 1055,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B168E7D0C1E52EC54FDC29F43184A2FA62262328809534895A3780292FE61383/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "8A4542E857C36483EEAC64306FA65E9D2008AB0F3046DAAEB47D0BEA923A0508",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8A4542E857C36483EEAC64306FA65E9D2008AB0F3046DAAEB47D0BEA923A0508/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "8E50DBB70F88EE0EB0C15389C1409FA38D053446E2E8CCCD6C1B6384266097BF",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8E50DBB70F88EE0EB0C15389C1409FA38D053446E2E8CCCD6C1B6384266097BF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "065340A53FC61F51BBBC6CC105950BA8FFE0787095D5B668E4D72852F18E56F2",
      "masterWidth": 768,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/065340A53FC61F51BBBC6CC105950BA8FFE0787095D5B668E4D72852F18E56F2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "B69A2187C9B3374ABB54D893E42632F2C29D5A3E812810652B89136B4486445A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B69A2187C9B3374ABB54D893E42632F2C29D5A3E812810652B89136B4486445A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Disney Channel Original Movies",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "8141dbb4-58de-4fb3-84e2-dba1527cd4eb",
      "contentClass": "franchise",
      "key": "the-muppets",
      "slugs": [
      {
      "language": "en",
      "value": "the-muppets"
      }
      ]
      },
      "collectionId": "f2d6fe6b-db8c-4744-935e-b77c196cad41",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "55439374BC6A03301D9C83A73814BDBEF608CD4ADC78705E851CAF32B6D41D8C",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/55439374BC6A03301D9C83A73814BDBEF608CD4ADC78705E851CAF32B6D41D8C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "5C6E08E89CE2E8930D6093C4AB851D4073AB4764BF483F30CF31ECFEB2A4E042",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C6E08E89CE2E8930D6093C4AB851D4073AB4764BF483F30CF31ECFEB2A4E042/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "5B98DE2C41BC512DB98804D41F17C7FF72F80597F095D6B4309522B2C0FF4E30",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5B98DE2C41BC512DB98804D41F17C7FF72F80597F095D6B4309522B2C0FF4E30/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "9D730C0B8E9B96CCFD8ED13048B0932698D3A50416E0CF6CDB9AEB130E99E932",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D730C0B8E9B96CCFD8ED13048B0932698D3A50416E0CF6CDB9AEB130E99E932/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "ED20744CFA09AC70150ABE3CC35827F759448297F96FD552D6CDA07A326979A5",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ED20744CFA09AC70150ABE3CC35827F759448297F96FD552D6CDA07A326979A5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "297A34A814CCC8BDA294748A7270E9926F8568378828D816C4D4661931C809C7",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/297A34A814CCC8BDA294748A7270E9926F8568378828D816C4D4661931C809C7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "40815AB1D8A088BA4CF840F408CB7943DE3FBF713885FC4DF186FCB1AAFCBC3B",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/40815AB1D8A088BA4CF840F408CB7943DE3FBF713885FC4DF186FCB1AAFCBC3B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "1AA93FE9C399D7FC43D47BE3593F75919D0F8ABEF2E0E7B6150E42F5B4EF351D",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1AA93FE9C399D7FC43D47BE3593F75919D0F8ABEF2E0E7B6150E42F5B4EF351D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "0387E69DC5C2DEB67CA2C53496B883CF4DF4AA5952B29C140DE714CC22981ACA",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0387E69DC5C2DEB67CA2C53496B883CF4DF4AA5952B29C140DE714CC22981ACA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "DAA26637C40E688529A51856BDC3368902C7C6877729605C7A8D1A32086D2087",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DAA26637C40E688529A51856BDC3368902C7C6877729605C7A8D1A32086D2087/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "39B7A61C0F24788347D6B65658B7DCC163836C90D34A390FEBEE0B5DCCEA975B",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/39B7A61C0F24788347D6B65658B7DCC163836C90D34A390FEBEE0B5DCCEA975B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "The Muppets",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "6bb5b23b-0cba-4fe8-915f-8b09d5586181",
      "contentClass": "character",
      "key": "donald-duck",
      "slugs": [
      {
      "language": "en",
      "value": "donald-duck"
      }
      ]
      },
      "collectionId": "e821ea9b-a326-4e1b-ade7-095634453e33",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "47938F2F8B1718C3C610CF2F22AAB9849C4FB752B68D81394356452127F9B800",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47938F2F8B1718C3C610CF2F22AAB9849C4FB752B68D81394356452127F9B800/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "4437D5EA7354320D14CC794F43A0AC7E9DA78104027446F272D317A363F9F0D1",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4437D5EA7354320D14CC794F43A0AC7E9DA78104027446F272D317A363F9F0D1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "D29D2D570DCE9314C6A6F2D75AC9ABAEC4EC1DC3605C154027111FCF9FEFED57",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D29D2D570DCE9314C6A6F2D75AC9ABAEC4EC1DC3605C154027111FCF9FEFED57/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "F1E62D629B3EE6A9F9BA0E273C6BA2281BDF9D06FB68A9B3A501806662CACEC4",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F1E62D629B3EE6A9F9BA0E273C6BA2281BDF9D06FB68A9B3A501806662CACEC4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "663F51FD5A38415B10A7AA6FCBDCB3C4EDF54F90F56F18FC217A57416F037041",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/663F51FD5A38415B10A7AA6FCBDCB3C4EDF54F90F56F18FC217A57416F037041/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "5BB02E0E962ACF75A8DD56AC0354DEC5FDE4A6908F8D1072153ACB95E3BD7713",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB02E0E962ACF75A8DD56AC0354DEC5FDE4A6908F8D1072153ACB95E3BD7713/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "44CEEE3EE3E2C1B6341C3E0CCB51D423C4CDF12A446410C9CD87BDCED86FCBCA",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/44CEEE3EE3E2C1B6341C3E0CCB51D423C4CDF12A446410C9CD87BDCED86FCBCA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "24C6120FC9FC5CC48906B52EF0787E3686B03F913F14F476DE8D7BB8B2434E5E",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/24C6120FC9FC5CC48906B52EF0787E3686B03F913F14F476DE8D7BB8B2434E5E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "CF0CE6E9CDDC1624E570C46C8FC21B7165E916DE418856468AFD6401AE9EDF14",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF0CE6E9CDDC1624E570C46C8FC21B7165E916DE418856468AFD6401AE9EDF14/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "C64322B50AD887E309A1BAC76B680A78C6552EADE33F062B2D5E4145DA5295B2",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C64322B50AD887E309A1BAC76B680A78C6552EADE33F062B2D5E4145DA5295B2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "992C518AD77C922AF2C3D8C72D34FD960CF62836108CDFE5556E7B436BC876CD",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/992C518AD77C922AF2C3D8C72D34FD960CF62836108CDFE5556E7B436BC876CD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Donald Duck",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "7c0d346a-8fb4-4bff-98ed-79935a1bcb01",
      "contentClass": "editorial",
      "key": "editorial-celebrate-black-stories",
      "slugs": [
      {
      "language": "en",
      "value": "celebrate-black-stories"
      }
      ]
      },
      "collectionId": "92a36433-58aa-4b36-b7ee-287002a6ee5d",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "BC11E7CE8FBA22E5DB165EFDDFFAC61F2AD33F8C80130B793992B26E2850535C",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC11E7CE8FBA22E5DB165EFDDFFAC61F2AD33F8C80130B793992B26E2850535C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "D6939C6BA1AB5C068B91949CF2F4B2E0A0DF713880C1A697CBDBB4A7DD8810F1",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D6939C6BA1AB5C068B91949CF2F4B2E0A0DF713880C1A697CBDBB4A7DD8810F1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "715CFE1E9EC17251191F2297B4FE713A0D1A8702C4F0C703DEAF74BE07220B04",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/715CFE1E9EC17251191F2297B4FE713A0D1A8702C4F0C703DEAF74BE07220B04/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "C6F4450C96116084434C7C85743A14652595227740F7810D3838E7991DD337CF",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C6F4450C96116084434C7C85743A14652595227740F7810D3838E7991DD337CF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "D7B128F67FDE484815D0252CDEF36D4B0A6E1F428D76280FB6387FED692C6328",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7B128F67FDE484815D0252CDEF36D4B0A6E1F428D76280FB6387FED692C6328/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "2E9A0F7E8DA328D1874A717986C9CB0BC21C0CA259AC7DC793F67CE9B034BC81",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2E9A0F7E8DA328D1874A717986C9CB0BC21C0CA259AC7DC793F67CE9B034BC81/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "CFA3A0981CF1FFF91357E45B8C9E6C696AA86EF23FBA45D036141A8443CC9C01",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CFA3A0981CF1FFF91357E45B8C9E6C696AA86EF23FBA45D036141A8443CC9C01/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "D24D449ED52F49D7E130A64385AD1706A6E46ED8D7513CCB982A1CE66D9B2212",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D24D449ED52F49D7E130A64385AD1706A6E46ED8D7513CCB982A1CE66D9B2212/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "7472EDD7029AE9E83EC0C7C75DE762E5A1E8D224AAD3887542090797BCDD3413",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7472EDD7029AE9E83EC0C7C75DE762E5A1E8D224AAD3887542090797BCDD3413/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "916F2BF94C7D24BF62272D34885058828FD26682C37B7FDF73AB50ED37A19E27",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/916F2BF94C7D24BF62272D34885058828FD26682C37B7FDF73AB50ED37A19E27/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "CCF463F4B6BA5B572E2F71FE562CFB2A5FEE201D4B52C39F41260A0F7345A27C",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CCF463F4B6BA5B572E2F71FE562CFB2A5FEE201D4B52C39F41260A0F7345A27C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Celebrate Black Stories",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "792519f5-f060-4bb0-a028-e958a074fe17",
      "contentClass": "franchise",
      "key": "the-simpsons",
      "slugs": [
      {
      "language": "en",
      "value": "the-simpsons"
      }
      ]
      },
      "collectionId": "decd95f5-3f7c-4964-93fb-863e840f27a4",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "9B43F1106841D3FD3C3D0BDCFF9F6723A6B4A5970A14B2645462C53E4B3433D2",
      "masterWidth": 750,
      "masterHeight": 1055,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9B43F1106841D3FD3C3D0BDCFF9F6723A6B4A5970A14B2645462C53E4B3433D2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "11E1ECE75BB1330A7A10C1363F9FCBEFCA631C1B69092BBE820C7FD1F9CB333F",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/11E1ECE75BB1330A7A10C1363F9FCBEFCA631C1B69092BBE820C7FD1F9CB333F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "65425977320AD7D0F2482CA4C8B6BF0518432ADE4CB779F4F259F744738ED224",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/65425977320AD7D0F2482CA4C8B6BF0518432ADE4CB779F4F259F744738ED224/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "7652DF603E43E07038831D4FA3F561CD99428C588B64679E0E39A1EFCB789923",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7652DF603E43E07038831D4FA3F561CD99428C588B64679E0E39A1EFCB789923/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "5F957BF3E186690590BDFE315A9AB5A59AD8BD0C1E66FAAF0E354EEF311F1EF2",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5F957BF3E186690590BDFE315A9AB5A59AD8BD0C1E66FAAF0E354EEF311F1EF2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "A1508CA45A26F01BD277060CF151F60BDD0A5741D10BB8D84C7AB0C6B3AB18B9",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A1508CA45A26F01BD277060CF151F60BDD0A5741D10BB8D84C7AB0C6B3AB18B9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "E4FC38F1F1209197A7465FC307CAF170CECAD1F68343046FD85522B74E19F5F9",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E4FC38F1F1209197A7465FC307CAF170CECAD1F68343046FD85522B74E19F5F9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "1E4CE164AA06ACD3EEDE44805C72A59E257065F720C029CD71E888D951FAB66B",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E4CE164AA06ACD3EEDE44805C72A59E257065F720C029CD71E888D951FAB66B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "The Simpsons",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "443d1531-9fc0-4b22-94c2-23d1b6f88207",
      "contentClass": "franchise",
      "key": "the-lion-king",
      "slugs": [
      {
      "language": "en",
      "value": "the-lion-king"
      }
      ]
      },
      "collectionId": "2539cc85-e300-4794-85b8-c9a9ac7581f3",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "AD9A7AF5B110A6F96B653092E702A7AC2769B195ECE847833EE5BDF005F41034",
      "masterWidth": 768,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AD9A7AF5B110A6F96B653092E702A7AC2769B195ECE847833EE5BDF005F41034/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "4030F82B4B611A3925BDA755B34456A68DFE36189E2350BA8C38C1AE22EE1BAA",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4030F82B4B611A3925BDA755B34456A68DFE36189E2350BA8C38C1AE22EE1BAA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "943857C8940866C5A74B14730D40120A5942EF9D0B5DFE5B2E24B77A76EF7926",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/943857C8940866C5A74B14730D40120A5942EF9D0B5DFE5B2E24B77A76EF7926/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "AD6489017D9E9783E533086A7429B874F3C38E91EF7A1F6445FCF27250669121",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AD6489017D9E9783E533086A7429B874F3C38E91EF7A1F6445FCF27250669121/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "510831AB2850DBE8B3C947208AA362470D3CFEBE65FA547581A06671EE478EA1",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/510831AB2850DBE8B3C947208AA362470D3CFEBE65FA547581A06671EE478EA1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "D8C03147DC789B481D4B4BADBAA4AC9653171EDB9914E90728CE92728F30B3EC",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D8C03147DC789B481D4B4BADBAA4AC9653171EDB9914E90728CE92728F30B3EC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "E6799DDF3E1A2F25141D9EAB28C5D51E6E8152E239CB27685AD6516A906BD2FF",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E6799DDF3E1A2F25141D9EAB28C5D51E6E8152E239CB27685AD6516A906BD2FF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "EAFEB1D3423BA3782137C709BDECDC2C7F8F7255EC9FD63208A6F12AAD85A67F",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EAFEB1D3423BA3782137C709BDECDC2C7F8F7255EC9FD63208A6F12AAD85A67F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "BF854097909A228A17364D0B870012E9AB61C48A8C12F47016290555F413A67C",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BF854097909A228A17364D0B870012E9AB61C48A8C12F47016290555F413A67C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "5FE51F89910DAC51CF783371826087D42645426FCA4562ACD0F29562303093DD",
      "masterWidth": 768,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5FE51F89910DAC51CF783371826087D42645426FCA4562ACD0F29562303093DD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "0A1173A2C296A3A5E7A2307DA0AA3E58DB3A23611B67FB38132FBEF886E61DBB",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0A1173A2C296A3A5E7A2307DA0AA3E58DB3A23611B67FB38132FBEF886E61DBB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "E6799DDF3E1A2F25141D9EAB28C5D51E6E8152E239CB27685AD6516A906BD2FF",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E6799DDF3E1A2F25141D9EAB28C5D51E6E8152E239CB27685AD6516A906BD2FF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "EAFEB1D3423BA3782137C709BDECDC2C7F8F7255EC9FD63208A6F12AAD85A67F",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EAFEB1D3423BA3782137C709BDECDC2C7F8F7255EC9FD63208A6F12AAD85A67F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "BF854097909A228A17364D0B870012E9AB61C48A8C12F47016290555F413A67C",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BF854097909A228A17364D0B870012E9AB61C48A8C12F47016290555F413A67C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "The Lion King",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "e309211d-f3ab-46e1-89e1-3c39baddb855",
      "contentClass": "franchise",
      "key": "mickey-and-friends",
      "slugs": [
      {
      "language": "en",
      "value": "mickey-and-friends"
      }
      ]
      },
      "collectionId": "67829d47-1317-4dec-a7f8-061740c1b2f7",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "BF8130A85926515BC799D1C9F6C663F6992B5C0200746C51F5B03E1386C7EACD",
      "masterWidth": 750,
      "masterHeight": 1055,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BF8130A85926515BC799D1C9F6C663F6992B5C0200746C51F5B03E1386C7EACD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "1958C70FDC00410A481299FC1753D061CCC0420850DAB7EB01235D9F38A55462",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1958C70FDC00410A481299FC1753D061CCC0420850DAB7EB01235D9F38A55462/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "D0F42357BB1D9D7F3205FC3FACD8FE4EDFC02C7AD897BE2707522FBE3009D542",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D0F42357BB1D9D7F3205FC3FACD8FE4EDFC02C7AD897BE2707522FBE3009D542/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "1E93D9A88DD96CC1BD20662EC4A77CDFC7B8000F92A32A47065251EBD0F24FA5",
      "masterWidth": 768,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E93D9A88DD96CC1BD20662EC4A77CDFC7B8000F92A32A47065251EBD0F24FA5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.20": {
      "default": {
      "default": {
      "masterId": "A9B6C8D098793A80AE62B0A84A544E82B4571BA4BD210188E29081B73D78E1E3",
      "masterWidth": 792,
      "masterHeight": 660,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A9B6C8D098793A80AE62B0A84A544E82B4571BA4BD210188E29081B73D78E1E3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "1D18CE99DF53DF85EC45247C22DCD128F4E500A258B8802C3B05E749B481742F",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1D18CE99DF53DF85EC45247C22DCD128F4E500A258B8802C3B05E749B481742F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Mickey and Friends",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "b060209e-71b1-4c58-9153-735ebd00e007",
      "contentClass": "editorial",
      "key": "editorial-musicals",
      "slugs": [
      {
      "language": "en",
      "value": "musicals"
      }
      ]
      },
      "collectionId": "c1278516-1bd0-40fc-b913-c26e15ab2a37",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "9C1859371ECB6BC5477D5140C35AFF8214689E68B4E9E377E6180845D89BB55D",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9C1859371ECB6BC5477D5140C35AFF8214689E68B4E9E377E6180845D89BB55D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "7BF6BFA94F999F0B9B85A4DE3B8B18D3A5A11D3E314EDB322DB011BF0A2280EB",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF6BFA94F999F0B9B85A4DE3B8B18D3A5A11D3E314EDB322DB011BF0A2280EB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "B750E29D9D1835551497010F12D2B7A2F1CFDF12B6FF0D836506A1B26BD5B733",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B750E29D9D1835551497010F12D2B7A2F1CFDF12B6FF0D836506A1B26BD5B733/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "9C3009B763F1E0306C85A7413878C52F1D348DEF8644BF2A3C1E7E8DE19EF47D",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9C3009B763F1E0306C85A7413878C52F1D348DEF8644BF2A3C1E7E8DE19EF47D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "C96ABBC9960CEC087D8547F0ED9E1EC6D0C2D6C0E25F9F1235CA2D5B7E491345",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C96ABBC9960CEC087D8547F0ED9E1EC6D0C2D6C0E25F9F1235CA2D5B7E491345/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "B7D0C1C6A5CE1D7CD94A334DC123C1F85B3992DF5B010757B878FF8B4F304620",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B7D0C1C6A5CE1D7CD94A334DC123C1F85B3992DF5B010757B878FF8B4F304620/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "943AA18B049507C3C905DF84EDFEEDB76F255955B7F1E151EA5F18F371F03456",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/943AA18B049507C3C905DF84EDFEEDB76F255955B7F1E151EA5F18F371F03456/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "E4BDDC66343688D172BDCA7C2F2E98ED5983B5572F891C42675CBC6C5626AF73",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E4BDDC66343688D172BDCA7C2F2E98ED5983B5572F891C42675CBC6C5626AF73/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "F59BA49AD17DD3968964A20D66F0819895F35DB054AEB2518541F595D546B321",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F59BA49AD17DD3968964A20D66F0819895F35DB054AEB2518541F595D546B321/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "AB0768D8FA604B28474D88B0BFB663D09206BAA551FCEBDAAF80C87274EA171F",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AB0768D8FA604B28474D88B0BFB663D09206BAA551FCEBDAAF80C87274EA171F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "D20847CAFE1F96B8ABE27CE546B23B7169EE40A32428E2E4DD4B70DA92F3C69C",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D20847CAFE1F96B8ABE27CE546B23B7169EE40A32428E2E4DD4B70DA92F3C69C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Musicals",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "696ac3bc-46b1-4ecc-a2e5-386dd8ffaa6e",
      "contentClass": "franchise",
      "key": "franchise-x-men",
      "slugs": [
      {
      "language": "en",
      "value": "x-men"
      }
      ]
      },
      "collectionId": "cef0f0b2-f44d-4620-9f4c-3e2957ae3cba",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "1D651031C16FD79BCDF888CF52185E66CE77F4A085799B82512ED6BF21A28AD8",
      "masterWidth": 750,
      "masterHeight": 1055,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1D651031C16FD79BCDF888CF52185E66CE77F4A085799B82512ED6BF21A28AD8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "D41FD1F80E88C295274046F5C694B0A71EA09E4F5E2D9124910C3064C06413D3",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D41FD1F80E88C295274046F5C694B0A71EA09E4F5E2D9124910C3064C06413D3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "1A855A3131836A54650EF047675558BE339891212496936BEC269BF403CA32D0",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1A855A3131836A54650EF047675558BE339891212496936BEC269BF403CA32D0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "AD00D55BCAF6A58648883A821FC07924CDD5AA79A01D6A320E5FF25F0228980A",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AD00D55BCAF6A58648883A821FC07924CDD5AA79A01D6A320E5FF25F0228980A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "DDF4ECC450C1F308A1E895F6E0771DA81362871F94A18125FCA552A3B8E55C59",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDF4ECC450C1F308A1E895F6E0771DA81362871F94A18125FCA552A3B8E55C59/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "F71A000C9252F111803BA3180C787F982C01732BFE223C5AE969979BB34F66AE",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F71A000C9252F111803BA3180C787F982C01732BFE223C5AE969979BB34F66AE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "42DCA88DD232645AE70532121EC5F1CF68988AB56590ED96C12959A67480214A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/42DCA88DD232645AE70532121EC5F1CF68988AB56590ED96C12959A67480214A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "182273F3E1F003AB8440D5D732B8C43F2C7A4BBD98C658C443EDA394E87ED090",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/182273F3E1F003AB8440D5D732B8C43F2C7A4BBD98C658C443EDA394E87ED090/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "89ECA89D439CE9B749238B1C9727583099E491DFF42E7A121531BF982F6158CC",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/89ECA89D439CE9B749238B1C9727583099E491DFF42E7A121531BF982F6158CC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "4A3FD34C81227D4A1C8322BDCE2CCA14AA44CAAFA1EBF4DE95FAC320BEB89442",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4A3FD34C81227D4A1C8322BDCE2CCA14AA44CAAFA1EBF4DE95FAC320BEB89442/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "1D91B05BE0C33789494D923CDAB0A9EDE846BE5D4D55252A50F874963CDEF236",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1D91B05BE0C33789494D923CDAB0A9EDE846BE5D4D55252A50F874963CDEF236/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "42DCA88DD232645AE70532121EC5F1CF68988AB56590ED96C12959A67480214A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/42DCA88DD232645AE70532121EC5F1CF68988AB56590ED96C12959A67480214A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "182273F3E1F003AB8440D5D732B8C43F2C7A4BBD98C658C443EDA394E87ED090",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/182273F3E1F003AB8440D5D732B8C43F2C7A4BBD98C658C443EDA394E87ED090/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "89ECA89D439CE9B749238B1C9727583099E491DFF42E7A121531BF982F6158CC",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/89ECA89D439CE9B749238B1C9727583099E491DFF42E7A121531BF982F6158CC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "X-Men",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "60bd8c74-2019-40f2-be88-81c9f564ec51",
      "contentClass": "editorial",
      "key": "editorial-disney-through-the-decades",
      "slugs": [
      {
      "language": "en",
      "value": "disney-through-the-decades"
      }
      ]
      },
      "collectionId": "8d34fc43-9134-4f33-ba1e-7d0fdb2df59b",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "4A2A2509CA2E293D847EBDDE029C79BAAB42677C004EC593CD887FCCDF86919F",
      "masterWidth": 750,
      "masterHeight": 1055,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4A2A2509CA2E293D847EBDDE029C79BAAB42677C004EC593CD887FCCDF86919F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "A59D5A88BB79F74C4185B9060A5CD8BDB56FF3BF10B9D66B419DA48D3027BC8F",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A59D5A88BB79F74C4185B9060A5CD8BDB56FF3BF10B9D66B419DA48D3027BC8F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "E7AC3D2AEAF427C61087400807DA342D77D9A642536B570EA59960A8F2732F90",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7AC3D2AEAF427C61087400807DA342D77D9A642536B570EA59960A8F2732F90/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "DDDA2CCD7BAA7B855CF1A3CBFE547C06DD9D05C8A0ED8F66643E18DB53BA9928",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDDA2CCD7BAA7B855CF1A3CBFE547C06DD9D05C8A0ED8F66643E18DB53BA9928/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "D1564708F1902662E98AE8C9FF87CBCDE51416A5C5EABF6A4ADBEE4B5879110A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D1564708F1902662E98AE8C9FF87CBCDE51416A5C5EABF6A4ADBEE4B5879110A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Disney Through the Decades",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "b6e3948e-43a6-4ce7-b3d5-0346b8478012",
      "contentClass": "editorial",
      "key": "editorial-shorts",
      "slugs": [
      {
      "language": "en",
      "value": "shorts"
      }
      ]
      },
      "collectionId": "7155845f-114f-410a-a069-d1074d6dcda3",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "BAA1D6E3CAFE4A03600390173964A2F87CA6D51B41EB92D909EA40A6E826AD90",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BAA1D6E3CAFE4A03600390173964A2F87CA6D51B41EB92D909EA40A6E826AD90/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "F8C4E2771126270CD2F0FB48F0DD7F897B054E62D085D391CB8981B91B459AD2",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8C4E2771126270CD2F0FB48F0DD7F897B054E62D085D391CB8981B91B459AD2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "DF57E0AEC1BBAB62EF2DAE1AEB63DE8904005B62CFB9B6EF1B4D189843B9DC25",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DF57E0AEC1BBAB62EF2DAE1AEB63DE8904005B62CFB9B6EF1B4D189843B9DC25/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "585FB6125E890FEE6B2086A73633AB44F262BC9EDFBC3CF37A7D61124D827B9A",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/585FB6125E890FEE6B2086A73633AB44F262BC9EDFBC3CF37A7D61124D827B9A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "7B2CA3AB40EE2A52CD482E84A1858F5ECF1089CB2458BC572C96AACC505BE6A1",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B2CA3AB40EE2A52CD482E84A1858F5ECF1089CB2458BC572C96AACC505BE6A1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "508B1CB63B1D0678A400C0A2C600695EBDAF28A55E81F911F862898BBD747740",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/508B1CB63B1D0678A400C0A2C600695EBDAF28A55E81F911F862898BBD747740/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "06B1C6ED98C4595C30EC7318C528DFE9B04662F466832598B8F6EE7FCEC6A93C",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/06B1C6ED98C4595C30EC7318C528DFE9B04662F466832598B8F6EE7FCEC6A93C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "2372C689C3340EA7F1EADD046FA153EC19B1996C80756F822F67E5C5DAF6E5D3",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2372C689C3340EA7F1EADD046FA153EC19B1996C80756F822F67E5C5DAF6E5D3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "1C99F29BF86E7B63636D55074E46DDCB486D3FDB49C1E6762E0D3DBF9BA53DFA",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C99F29BF86E7B63636D55074E46DDCB486D3FDB49C1E6762E0D3DBF9BA53DFA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "A483A48784F3585FFAF79B98DBA18ED78E53232F42E7A8CE1E01D63D71DDF088",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A483A48784F3585FFAF79B98DBA18ED78E53232F42E7A8CE1E01D63D71DDF088/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "AA73E93292B33DAD6E972F06F3530172C41D7E676ED05DE23CCB34370683B197",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AA73E93292B33DAD6E972F06F3530172C41D7E676ED05DE23CCB34370683B197/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Shorts",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "19ba9dd7-2bf8-4c91-8d02-b440b19ef506",
      "contentClass": "franchise",
      "key": "hannah-montana",
      "slugs": [
      {
      "language": "en",
      "value": "hannah-montana"
      }
      ]
      },
      "collectionId": "3c639802-550e-4060-a23f-f718bdeccd79",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "C8F093EA1F95CEBA6EAEC486CA19A33EBA9041AC58CDD934E4310A410F20E805",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8F093EA1F95CEBA6EAEC486CA19A33EBA9041AC58CDD934E4310A410F20E805/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "AB3BFB9CE1DF1A13ED967F1C4B3FB42D81DCF55B9568824EC0AA7228AD100207",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AB3BFB9CE1DF1A13ED967F1C4B3FB42D81DCF55B9568824EC0AA7228AD100207/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "21994ACD5F389442EAE78D4D4961120389FCE54F3DE946116A2AE4B824C53353",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/21994ACD5F389442EAE78D4D4961120389FCE54F3DE946116A2AE4B824C53353/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "F730FC33EF694FAC61877A5D7E42C6DA462217350954744A304697A19B0BAD31",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F730FC33EF694FAC61877A5D7E42C6DA462217350954744A304697A19B0BAD31/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "DC1265A1D62382D1BC1E7ACED4A5B7CBBB25B547917A327C19FC4C32D8D225B4",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DC1265A1D62382D1BC1E7ACED4A5B7CBBB25B547917A327C19FC4C32D8D225B4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "D1E5DC2D894BDBFE35A22BBBC4A263206EC30F935A6150191E514A54F6D1821F",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D1E5DC2D894BDBFE35A22BBBC4A263206EC30F935A6150191E514A54F6D1821F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "123091116C45C14FBE6F284786E95F320FE82B2C58F1175FC0A942CD27E258BF",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/123091116C45C14FBE6F284786E95F320FE82B2C58F1175FC0A942CD27E258BF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "FC6DFD79ADC16345CFA3F966E03FF70B0E4D8F2DAF66CCF5F5C05032EA2FCAAB",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FC6DFD79ADC16345CFA3F966E03FF70B0E4D8F2DAF66CCF5F5C05032EA2FCAAB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "F3855B478B886E7274DB9729A2454122EB9F722B398302EF973501C70F8487BC",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F3855B478B886E7274DB9729A2454122EB9F722B398302EF973501C70F8487BC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "C03A7D2977551AF6016CC2C356258FE804B99AC28DDA5C7C4AA6099E24A86EA4",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C03A7D2977551AF6016CC2C356258FE804B99AC28DDA5C7C4AA6099E24A86EA4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "AA115E09DD6FCD687F136BCDAACED2050BA5C768832F18FA802AE839ACA05F03",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AA115E09DD6FCD687F136BCDAACED2050BA5C768832F18FA802AE839ACA05F03/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Featured",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "e9efabe0-ce1f-4f66-94d1-1376772061c5",
      "contentClass": "franchise",
      "key": "franchise-forky-asks-a-question",
      "slugs": [
      {
      "language": "en",
      "value": "forky-asks-a-question"
      }
      ]
      },
      "collectionId": "4a203148-12fa-45f8-9cab-fe52eb54f7a9",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "DD70DBA7A102FDB1D82F6B47113CE58118E0547DE2541956F8781718FDF1867D",
      "masterWidth": 750,
      "masterHeight": 1055,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD70DBA7A102FDB1D82F6B47113CE58118E0547DE2541956F8781718FDF1867D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "038124EE13AE73E9E1ABBF622633096D0428B8CC3670418380EB4F6E97C52D8A",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/038124EE13AE73E9E1ABBF622633096D0428B8CC3670418380EB4F6E97C52D8A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "D43A8C2976448071DA42FE037A018AD1F9F4D25CA177308F99F1854E1FC2698D",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D43A8C2976448071DA42FE037A018AD1F9F4D25CA177308F99F1854E1FC2698D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "CF3D3C4BB778031E2E5656552E36B96B078895FECEC01A996B2F96921A84BF35",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF3D3C4BB778031E2E5656552E36B96B078895FECEC01A996B2F96921A84BF35/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "D6396608C1314E6282EC19A8266AE1F9AA1DBEC78CC865294F9A7991E0215ADB",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D6396608C1314E6282EC19A8266AE1F9AA1DBEC78CC865294F9A7991E0215ADB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "968BC5D0EF66B324D5846D763473209FCCC187DA5222C53AA616BE7F628664DF",
      "masterWidth": 1600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/968BC5D0EF66B324D5846D763473209FCCC187DA5222C53AA616BE7F628664DF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo_layer": {
      "1.78": {
      "default": {
      "default": {
      "masterId": "C8DD09E348D07265974D65986A2D2F8E3BAE39A852E35E426A224B7AD72D2410",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8DD09E348D07265974D65986A2D2F8E3BAE39A852E35E426A224B7AD72D2410/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "default": {
      "default": {
      "masterId": "C836034308B88BCDF2AF33204AC937C9D5D28B23A1B13EE34DE95D74603EA36D",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C836034308B88BCDF2AF33204AC937C9D5D28B23A1B13EE34DE95D74603EA36D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "default": {
      "default": {
      "masterId": "535A6DF1D36DEB06BEEF953DD62F92FB2F9336CF7B485C23AFBDA3836C2A34CD",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/535A6DF1D36DEB06BEEF953DD62F92FB2F9336CF7B485C23AFBDA3836C2A34CD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "2C4DC0B820889895AD552ED534033D8CB4874D6AE41608D7133AC3261FC86C38",
      "masterWidth": 768,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2C4DC0B820889895AD552ED534033D8CB4874D6AE41608D7133AC3261FC86C38/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "444A8C1BD9AF2625E97E5EA83DF2E8971CA81E878CC496138919014F4DD3566C",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/444A8C1BD9AF2625E97E5EA83DF2E8971CA81E878CC496138919014F4DD3566C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Forky Asks A Question",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      },
      {
      "callToAction": null,
      "collectionGroup": {
      "collectionGroupId": "b2f6f22b-6035-4981-9a2f-210ff20333dd",
      "contentClass": "character",
      "key": "darth-vader",
      "slugs": [
      {
      "language": "en",
      "value": "darth-vader"
      }
      ]
      },
      "collectionId": "6d2e43fe-47a8-403c-acaf-76d1873cb6e5",
      "image": {
      "hero_collection": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "644EF3AF48324906559A11BED2B0BB10B0D093798719421C822BB5B95E42E004",
      "masterWidth": 768,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/644EF3AF48324906559A11BED2B0BB10B0D093798719421C822BB5B95E42E004/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "B0BDA09845AA575291C38D21E462571A6E07AC34899505FA6F6D615137B15EDF",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B0BDA09845AA575291C38D21E462571A6E07AC34899505FA6F6D615137B15EDF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "logo": {
      "2.00": {
      "default": {
      "default": {
      "masterId": "394411CFB376B82611BF4EBFDF23CDF7FF8D3CEE4887807445ED68BA28FCED65",
      "masterWidth": 2160,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/394411CFB376B82611BF4EBFDF23CDF7FF8D3CEE4887807445ED68BA28FCED65/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "default": {
      "default": {
      "masterId": "CDFBF7A7EB526C710EB04C5A2AE6B9A31E75BA11042A4C444619E6D732C22F5C",
      "masterWidth": 768,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CDFBF7A7EB526C710EB04C5A2AE6B9A31E75BA11042A4C444619E6D732C22F5C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "default": {
      "default": {
      "masterId": "FB124590FC5C68BF80966DBACB3AAF945C68212F21DE999E7D1CC30880ECB8BA",
      "masterWidth": 1080,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FB124590FC5C68BF80966DBACB3AAF945C68212F21DE999E7D1CC30880ECB8BA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "default": {
      "default": {
      "masterId": "CA17EEE9C0945EC4794F2030864BA26A3055569863F8C8B1129525BC5A0DDA0E",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CA17EEE9C0945EC4794F2030864BA26A3055569863F8C8B1129525BC5A0DDA0E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Darth Vader",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      }
      ],
      "meta": {
      "hits": 25,
      "offset": 0,
      "page_size": 15
      },
      "setId": "c650aa1c-34cc-4fbe-8f62-46a6a9f77a2e",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Collections",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      },
      "type": "CuratedSet"
      },
      "type": "ShelfContainer",
      "style": "editorial"
      },
      {
      "set": {
      "contentClass": "editorial",
      "items": [
      {
      "contentId": "b02fab93-b010-4834-bc66-f477e6f1d501",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "1zyvW8wIgqET",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTMwNDQ",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "0c3fd170-f046-44d1-8602-0702d6154050",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Cool Runnings - movie - b02fab93-b010-4834-bc66-f477e6f1d501",
      "image": {
      "hero_tile": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "D09CEA53E5DB5AC17C8C81A324D39DD475695C60618B4E08C6CF7E1C896590B5",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D09CEA53E5DB5AC17C8C81A324D39DD475695C60618B4E08C6CF7E1C896590B5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "30D74C751869E5EB49097CA3B2355EEDB8FF82C65B8512C0E424A24EE871A961",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/30D74C751869E5EB49097CA3B2355EEDB8FF82C65B8512C0E424A24EE871A961/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "5241AE8844014DB695709F42140CC5C8C6DE2BF0003A7A90B10A4AA1FC38F963",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5241AE8844014DB695709F42140CC5C8C6DE2BF0003A7A90B10A4AA1FC38F963/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "program": {
      "default": {
      "masterId": "E74149BF1E2BA5B93B67B0918F94F9F0E444BC27A6B0410548FB9FCB97D52213",
      "masterWidth": 767,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E74149BF1E2BA5B93B67B0918F94F9F0E444BC27A6B0410548FB9FCB97D52213/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "D0970F1DA39C54C29BA5BFAD927B80B7BCFF9947860279FF1A61E3B22D4D8DA0",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D0970F1DA39C54C29BA5BFAD927B80B7BCFF9947860279FF1A61E3B22D4D8DA0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "313B71544CD1FFD78CFF49A6221D4EB7CFD7197BA79F730D53D58D68FDD42BFC",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/313B71544CD1FFD78CFF49A6221D4EB7CFD7197BA79F730D53D58D68FDD42BFC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "DC4C45708E39BED439C7706B301F5FD407983E818F1B810EA3E7EFF652DCFC5F",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DC4C45708E39BED439C7706B301F5FD407983E818F1B810EA3E7EFF652DCFC5F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "F68188093E3CF83F1614202C078B2A0BC26926372C73FBF830FED7F8F4C9C071",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F68188093E3CF83F1614202C078B2A0BC26926372C73FBF830FED7F8F4C9C071/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "6B8E57637A8D44ADFA2F7E69F115C2DB65050D51333D0E8E23EFB5ACDFBDCE4A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B8E57637A8D44ADFA2F7E69F115C2DB65050D51333D0E8E23EFB5ACDFBDCE4A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "6139F7E06999431BEF65A5AB467A9902EF2A5186FA35DF54B299FC76F02781A2",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6139F7E06999431BEF65A5AB467A9902EF2A5186FA35DF54B299FC76F02781A2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "167755A3DFCBC4EF1BA2FA0EF5DE42F7F30B39127185A35434B744FB46CFB82D",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/167755A3DFCBC4EF1BA2FA0EF5DE42F7F30B39127185A35434B744FB46CFB82D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "8C2E7AE071DF726CEE4CF8B8ABBCB782330D05C4EEA288202A4394074F1EA717",
      "masterWidth": 1344,
      "masterHeight": 757,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8C2E7AE071DF726CEE4CF8B8ABBCB782330D05C4EEA288202A4394074F1EA717/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "D2E77AC2373832C2C7F9409193DF31AD3D322793B2F3435E5AD60BB230F4CC75",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D2E77AC2373832C2C7F9409193DF31AD3D322793B2F3435E5AD60BB230F4CC75/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "AAEF8E17DD2021E1B7AD4BC69E06D71BB3DEF818D3CB9CADF4FB564A6222E5C7",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAEF8E17DD2021E1B7AD4BC69E06D71BB3DEF818D3CB9CADF4FB564A6222E5C7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "793F01E9984759F2F28CC97B6B6D5A3DD409EE36D5B91495B2DB241E0F70BF7E",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/793F01E9984759F2F28CC97B6B6D5A3DD409EE36D5B91495B2DB241E0F70BF7E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "D5F85F249107FDAB40FF812C2DE515EE0C81654B69053DC5405E269516676477",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D5F85F249107FDAB40FF812C2DE515EE0C81654B69053DC5405E269516676477/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "591be9e3-2016-4e96-849e-5f273c898426",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/591be9e3-2016-4e96-849e-5f273c898426/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 5925000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "0c3fd170-f046-44d1-8602-0702d6154050",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "cool-runnings",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Cool Runnings",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "E9F4-73C6-AA17-20F0-EDD5-X"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "1993-10-01",
      "releaseType": "original",
      "releaseYear": 1993,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "669f57a5-fd03-4fe1-bbd4-ed65ce405212"
      },
      {
      "contentId": "bda1337c-1668-4940-89a8-8f3f2826980b",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "7LzGbpg0fPJH",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTgzNjI2",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "97f95cf1-0864-4915-8593-c1182772cf09",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "The One and Only Ivan - movie - bda1337c-1668-4940-89a8-8f3f2826980b",
      "image": {
      "tile": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "CF4DA6C1E152C2478CE99FA0BC837370AEB5BED33B0AA628D496FB1F618ABAC1",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF4DA6C1E152C2478CE99FA0BC837370AEB5BED33B0AA628D496FB1F618ABAC1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "2A480D26E7F7F1BD3207783FA054AA144DCFF2D5F72DE24FB7CB92D500533B8A",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A480D26E7F7F1BD3207783FA054AA144DCFF2D5F72DE24FB7CB92D500533B8A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "E942008632F9FD1FBB6C3BB8537A94A63AA5C7A4E507EFE6113A618608BA9233",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E942008632F9FD1FBB6C3BB8537A94A63AA5C7A4E507EFE6113A618608BA9233/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "D772A54F8E47D985D4E0547C8CE29B4633E6E702F94528F404EB04FAB518070B",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D772A54F8E47D985D4E0547C8CE29B4633E6E702F94528F404EB04FAB518070B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "326F4AF93CA1C59F63AAE972EEA58F95BF358162984DAC501D762F0B6C3CFBCA",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/326F4AF93CA1C59F63AAE972EEA58F95BF358162984DAC501D762F0B6C3CFBCA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "program": {
      "default": {
      "masterId": "B21E69D4C7F5BAA9D0BEAD42C53B729B7C02BBAACD2482ECE350B11BD0B2BA3D",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B21E69D4C7F5BAA9D0BEAD42C53B729B7C02BBAACD2482ECE350B11BD0B2BA3D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "BECB5443F12905229C62609AB4AB04DEBC36CCDEEA5B9405CBF8040D7BEA5254",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BECB5443F12905229C62609AB4AB04DEBC36CCDEEA5B9405CBF8040D7BEA5254/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "1714661E824FAECDCF763DCBB6DAAC3BBFE7462DBC7F512965F2EC8819FDB116",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1714661E824FAECDCF763DCBB6DAAC3BBFE7462DBC7F512965F2EC8819FDB116/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "6C8ED0380A9E7887128013C827C380594812328A2BD5C3BE671BBBE48B1A0A68",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6C8ED0380A9E7887128013C827C380594812328A2BD5C3BE671BBBE48B1A0A68/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "51115CF3C3A76D10023B71DE9C80AD99397F0572AB8606D5774AC7AF42BCEA2E",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/51115CF3C3A76D10023B71DE9C80AD99397F0572AB8606D5774AC7AF42BCEA2E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "BAE6598E4709931B816CC1D19FD6C8B05DD70A9310C82ECB1E07DCBC0082C6BA",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BAE6598E4709931B816CC1D19FD6C8B05DD70A9310C82ECB1E07DCBC0082C6BA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "D0D0E0438183EE198B3EE873D7674621F8D7EBF1CBE7B879A51BC79A79A671C8",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D0D0E0438183EE198B3EE873D7674621F8D7EBF1CBE7B879A51BC79A79A671C8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "5A529FCD51942705CE4F768025A5BCF3CAD98660AC0AB49EFA655F4D43CAE926",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A529FCD51942705CE4F768025A5BCF3CAD98660AC0AB49EFA655F4D43CAE926/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "B02282F103462C9CD9F1509436A62CA68B7490F21827212423D81F7C592A16A7",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B02282F103462C9CD9F1509436A62CA68B7490F21827212423D81F7C592A16A7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "4B659F66E3742799A745B2C3D47D9AC3496C494AE114ACB3C5316AE926A2F6CD",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B659F66E3742799A745B2C3D47D9AC3496C494AE114ACB3C5316AE926A2F6CD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "5194BEE049E678DBBC182F3CAB07898FA33E3BC51C43CA5AAC1AD76E881238E9",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5194BEE049E678DBBC182F3CAB07898FA33E3BC51C43CA5AAC1AD76E881238E9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "4911DD8A4DF7EE39B02AFD292D153843BE7AF705C45EE4C3205EF02C0F223ED3",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4911DD8A4DF7EE39B02AFD292D153843BE7AF705C45EE4C3205EF02C0F223ED3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "7F7C0DF966727BA5A4F5812EF6C62FFAF727E0EF5326D02AAFC0449837FE88FA",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F7C0DF966727BA5A4F5812EF6C62FFAF727E0EF5326D02AAFC0449837FE88FA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.89": {
      "program": {
      "default": {
      "masterId": "60098BDEDDABBEE4136C3FE621BE0F81C7A62A3E62045FAE3A4EA3016E2A6FED",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/60098BDEDDABBEE4136C3FE621BE0F81C7A62A3E62045FAE3A4EA3016E2A6FED/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "UHD",
      "mediaId": "2b279205-9694-4b36-99d5-6177561b4a0e",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/2b279205-9694-4b36-99d5-6177561b4a0e/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 5867000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "97f95cf1-0864-4915-8593-c1182772cf09",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "the-one-and-only-ivan",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "The One and Only Ivan",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "6D81-F088-E4AE-587D-B06A-H"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-08-21",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/07/01/1593562383-183626.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ],
      "videoId": "565add87-60d3-48f6-a297-baaaf28b8dda"
      },
      {
      "contentId": "5ce23061-3c4a-40d8-9d08-179001be5a4f",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "4wCkPyO0JUux",
      "image": {
      "tile": {
      "2.29": {
      "series": {
      "default": {
      "masterId": "9F9C4A480357CD8D21E2C675B146D40782B92F570660B028AC7FA149E21B88D2",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F9C4A480357CD8D21E2C675B146D40782B92F570660B028AC7FA149E21B88D2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "3C33485A3043C22B8C89E131693E8B5B9306DAA4E48612A655560752977728A6",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3C33485A3043C22B8C89E131693E8B5B9306DAA4E48612A655560752977728A6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "77F330A7632751B58C45350F260F042927009949392B10C5620CD13A55EF20AA",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77F330A7632751B58C45350F260F042927009949392B10C5620CD13A55EF20AA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "5C324021D77E50FB9993F40BF1E9E83DBE5D2ABD397130F66E4230C12E3A243B",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C324021D77E50FB9993F40BF1E9E83DBE5D2ABD397130F66E4230C12E3A243B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "series": {
      "default": {
      "masterId": "00971BF089090B8BA61F543DE379A36CA590650DDBBABABE2E721FE5AC6536AB",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/00971BF089090B8BA61F543DE379A36CA590650DDBBABABE2E721FE5AC6536AB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "C5793DE80B8A3701B0FF495ECE0CBBC2D97511723142E59440C3EC7F0143F41A",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5793DE80B8A3701B0FF495ECE0CBBC2D97511723142E59440C3EC7F0143F41A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "95F4EECCB79C28B8053A8FDBE5F57094B676E1D46B7EDFA12270FA540B5D9BCE",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/95F4EECCB79C28B8053A8FDBE5F57094B676E1D46B7EDFA12270FA540B5D9BCE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "916F85C9B4DC3DD765D710300FE7F8393E9EAC567A962FD831B2C78E67555707",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/916F85C9B4DC3DD765D710300FE7F8393E9EAC567A962FD831B2C78E67555707/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "8B890539889105DA5714373C7C06F0555FBEAA59E9227E02ACF1F649DAD5EC15",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B890539889105DA5714373C7C06F0555FBEAA59E9227E02ACF1F649DAD5EC15/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "3BCFD2448B819EF8983CBC3F93382E76EE89835C62259B51F4A4191A2F6B050A",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3BCFD2448B819EF8983CBC3F93382E76EE89835C62259B51F4A4191A2F6B050A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "2.89": {
      "series": {
      "default": {
      "masterId": "4638F8EA49BCC02BE6888052EFC15A965A9FF60DA4B8813E8E607759D20B0CBD",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4638F8EA49BCC02BE6888052EFC15A965A9FF60DA4B8813E8E607759D20B0CBD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "3C202CE4006B6573AE4111DC6B2CF092CCEC5B55D1AB09372766A5925F6B4E73",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3C202CE4006B6573AE4111DC6B2CF092CCEC5B55D1AB09372766A5925F6B4E73/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "56DDB8146A8874CEC0DC37AC697F97D5EC9987CBF5515A171A64A08765F1B801",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56DDB8146A8874CEC0DC37AC697F97D5EC9987CBF5515A171A64A08765F1B801/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "C75D45969E9DBD112A1A60DA54A7E74980B0FA1D387EB8F03CEC49D9A80BC357",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C75D45969E9DBD112A1A60DA54A7E74980B0FA1D387EB8F03CEC49D9A80BC357/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "471269DBA563B0CFB0E88B8E68F5390CDBAD3018EB8E2347C06D7538C2ED6195",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/471269DBA563B0CFB0E88B8E68F5390CDBAD3018EB8E2347C06D7538C2ED6195/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "CECFB9E14CB377A7A947D549D6B9FBBEDD2D86D43CB177FBED7714EC21A1D864",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CECFB9E14CB377A7A947D549D6B9FBBEDD2D86D43CB177FBED7714EC21A1D864/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "FACEA0D36F7E2871FA2ED72452F3C6737B046E3124D380D38FA98F60813AEEDA",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FACEA0D36F7E2871FA2ED72452F3C6737B046E3124D380D38FA98F60813AEEDA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "0AB2C956E141BEC9D990DCDECBFDB1540119C0FE7CC0B269E4B89C63B40174F9",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0AB2C956E141BEC9D990DCDECBFDB1540119C0FE7CC0B269E4B89C63B40174F9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "5ce23061-3c4a-40d8-9d08-179001be5a4f",
      "text": {
      "title": {
      "slug": {
      "series": {
      "default": {
      "content": "the-right-stuff",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "full": {
      "series": {
      "default": {
      "content": "The Right Stuff",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "8869ca07-aba0-4671-9b03-3f3ed6fbfa79",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-14"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-10-09",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/08/07/1596826960-287438.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "7438e5e3-bb1a-4196-8027-4a287f353594",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "7BGWoWi2mVpk",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MzA1MDky",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "b6e7ad77-6d8e-433a-8168-7caf0f8e418e",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Non-TWDC",
      "partnerGroupId": "401208",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Clouds - movie - 7438e5e3-bb1a-4196-8027-4a287f353594",
      "image": {
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "F47E8E48A9541AD7F4BBB19C2F3DBA404A84A6B424AC1188DA7075B50C1E8529",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F47E8E48A9541AD7F4BBB19C2F3DBA404A84A6B424AC1188DA7075B50C1E8529/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.00": {
      "program": {
      "default": {
      "masterId": "C4B95007E493BF3BBF276FB99AEB9BF7384F8E98D8403A25E1A897F886BA3C3E",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C4B95007E493BF3BBF276FB99AEB9BF7384F8E98D8403A25E1A897F886BA3C3E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "26231F86004EF2C1F6842354B7D7C6CBEAB5FB28612672F10882C7A9B925604F",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/26231F86004EF2C1F6842354B7D7C6CBEAB5FB28612672F10882C7A9B925604F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "6832A6C798892B78D465AA2BABFAB60A6D4BA4AB47869C20029BACFC583026D0",
      "masterWidth": 2160,
      "masterHeight": 2880,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6832A6C798892B78D465AA2BABFAB60A6D4BA4AB47869C20029BACFC583026D0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "2951B8CEF641A7F9B1D9BFE21D638DA9C27EEE180845D86A6C40B708E6980E0A",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2951B8CEF641A7F9B1D9BFE21D638DA9C27EEE180845D86A6C40B708E6980E0A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "B99FF9FE0DECB1CA859F1FC231C883F0B898BDD90D02CDD26AE2F81024438FCD",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B99FF9FE0DECB1CA859F1FC231C883F0B898BDD90D02CDD26AE2F81024438FCD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "5A350FA7560BC10971E4A143C0885F220E203B6FFD795426E64C4C2E42E4E929",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A350FA7560BC10971E4A143C0885F220E203B6FFD795426E64C4C2E42E4E929/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "program": {
      "default": {
      "masterId": "2F2A7C6915C627023D6F697EC21B3458FE89711875687EC1445B52228091750E",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2F2A7C6915C627023D6F697EC21B3458FE89711875687EC1445B52228091750E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "4DD202DB0495E2535FA2BFBE7C21B5D9AF1C9778E221429775599ED1E54F1217",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4DD202DB0495E2535FA2BFBE7C21B5D9AF1C9778E221429775599ED1E54F1217/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "A43332360ADD2C06CC0DCCE9571D2A3C27544B400C872270368B4BCD38DF9923",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A43332360ADD2C06CC0DCCE9571D2A3C27544B400C872270368B4BCD38DF9923/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "207900D781500EC83AB16FD02934173AAA5B39AB73293B724E6EF9A555A25BF6",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/207900D781500EC83AB16FD02934173AAA5B39AB73293B724E6EF9A555A25BF6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "2D7B1C33316DA5949AFD9F076B224977ABEAA1EE8A0F83D7D798CCE9082EC6D3",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D7B1C33316DA5949AFD9F076B224977ABEAA1EE8A0F83D7D798CCE9082EC6D3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "193A462D46814A12FA146BC14F21011E9D80875B0BC82AC07C9C363D74CE9440",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/193A462D46814A12FA146BC14F21011E9D80875B0BC82AC07C9C363D74CE9440/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "A799C966BCE19F3C1C61208B8F47C9BC3FFE600D3AF140A1DE3169919184F76D",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A799C966BCE19F3C1C61208B8F47C9BC3FFE600D3AF140A1DE3169919184F76D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "35496B244A9FFC4E91A76399AB01AFCD668B8662B0A5C15524BD94381815FA35",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/35496B244A9FFC4E91A76399AB01AFCD668B8662B0A5C15524BD94381815FA35/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "08ADDA608A6169A9A82015EE0630B35EF54E8F3404B15F408E432D6E092514FC",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/08ADDA608A6169A9A82015EE0630B35EF54E8F3404B15F408E432D6E092514FC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "769CBE4C564A43C4B59C22088A35BFDB3387EBF2DF76427ED86F04690C979463",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/769CBE4C564A43C4B59C22088A35BFDB3387EBF2DF76427ED86F04690C979463/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "EC834E020D7615655B3423E9F678D62384201C1EE314FDEA4AC9B40220D17D68",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EC834E020D7615655B3423E9F678D62384201C1EE314FDEA4AC9B40220D17D68/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "D99BF043FE0ADD2C11961218D507287D82E65A95355DDA129DEA4017D2D414EE",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D99BF043FE0ADD2C11961218D507287D82E65A95355DDA129DEA4017D2D414EE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.89": {
      "program": {
      "default": {
      "masterId": "9F1EF3647F92E62D2F70D0D10C5BF9B9B14FA721CC5279F0553FD150076693EB",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F1EF3647F92E62D2F70D0D10C5BF9B9B14FA721CC5279F0553FD150076693EB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "UHD",
      "mediaId": "0c6307a1-f510-4a29-9dd7-4875f47e3db2",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/0c6307a1-f510-4a29-9dd7-4875f47e3db2/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 7370000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "b6e7ad77-6d8e-433a-8168-7caf0f8e418e",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Clouds",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "clouds",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      },
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "35F2-A0BC-04AC-9FA9-65B6-4"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": "For brief strong language",
      "system": "MPAA",
      "value": "PG-13"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-10-16",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/08/19/1597862081-305092.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ],
      "videoId": "4a070a92-828d-4bd2-9a77-8beb392f4efe"
      },
      {
      "contentId": "c0897957-9b0e-4a5c-a8b9-a51d2ae498b6",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": null
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "TOkRSKuK6saK",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6Mzk5NDc",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "0b91c1c7-9b35-416c-8e0f-5c45c1a2a451",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "The Rookie - movie - c0897957-9b0e-4a5c-a8b9-a51d2ae498b6",
      "image": {
      "tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "FD8BC7BCD8C3F3AD5F44BE0EFD0DF236F6A6F84AA9F21393B4EB96A8BE0974CB",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FD8BC7BCD8C3F3AD5F44BE0EFD0DF236F6A6F84AA9F21393B4EB96A8BE0974CB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "511D863C690092DA4F84A3CE7A589AD24EA467F5F44ADB12B0EA8E066C8898F3",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/511D863C690092DA4F84A3CE7A589AD24EA467F5F44ADB12B0EA8E066C8898F3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "6A32F7F2218C276B9E3482A67BC7692E7E78536ED6BD723920F1EC24407E9F3B",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A32F7F2218C276B9E3482A67BC7692E7E78536ED6BD723920F1EC24407E9F3B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "1EC8949545435730846C00B145D8811CC91C8D0A9C76A09F3C7BA7EFB459BCFA",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1EC8949545435730846C00B145D8811CC91C8D0A9C76A09F3C7BA7EFB459BCFA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "299F665377F30189238926DC017160C65D50E335FE462AC2675985264B7BCBE0",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/299F665377F30189238926DC017160C65D50E335FE462AC2675985264B7BCBE0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "52E54524DBC0DCE5962B473825C228BEC8F70FFC3787C08445E14D9134B2C96D",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52E54524DBC0DCE5962B473825C228BEC8F70FFC3787C08445E14D9134B2C96D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "685EB08987F68F01BC7AA1412312862D19BDE8895D2DC37F2E8D472DE1F18EF7",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/685EB08987F68F01BC7AA1412312862D19BDE8895D2DC37F2E8D472DE1F18EF7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "21AF90176D62654035AAEB58F7F3F1CED68E3B6C3674CC564FFF51E3CBF0A198",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/21AF90176D62654035AAEB58F7F3F1CED68E3B6C3674CC564FFF51E3CBF0A198/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "29B9B8EA32792E335DBD44F367522D93392F5E6F8CE45E5A84A8947488603EB2",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/29B9B8EA32792E335DBD44F367522D93392F5E6F8CE45E5A84A8947488603EB2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "26662CA3D064FC9485626F1A472128132C279410E30D64698D44CC6C6F0DEDEC",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/26662CA3D064FC9485626F1A472128132C279410E30D64698D44CC6C6F0DEDEC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "F4C7356E914D7A9E12283495FFB2459EF1C47825A9DC1C8C5CD27F0F1072C1E6",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F4C7356E914D7A9E12283495FFB2459EF1C47825A9DC1C8C5CD27F0F1072C1E6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "E142F118667CA1DFB4CA8B3B1CB808FE6D91CD8D52CADAACC5FF36948E5706A5",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E142F118667CA1DFB4CA8B3B1CB808FE6D91CD8D52CADAACC5FF36948E5706A5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "5CB16B0872951A4CD09FA94BFD3CB8DD8041A9075DA58D37DD10F638A5AB71C3",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5CB16B0872951A4CD09FA94BFD3CB8DD8041A9075DA58D37DD10F638A5AB71C3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "DD899C4BE1C8F19DD29BFF8465AC13BE289BCBE291D3F6846CF50368F6079F0E",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD899C4BE1C8F19DD29BFF8465AC13BE289BCBE291D3F6846CF50368F6079F0E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "8E90E99D7D12909F1C0BF68E9F1C9161343B39D06D243CE9802D1351D0CE7972",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8E90E99D7D12909F1C0BF68E9F1C9161343B39D06D243CE9802D1351D0CE7972/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "18F9A4E2F044C28BC8177ABD987238745C1CFA555B2386B21570229526A2AFAF",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/18F9A4E2F044C28BC8177ABD987238745C1CFA555B2386B21570229526A2AFAF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "c0b10276-726f-4f9d-b46d-435aaaf056fa",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/c0b10276-726f-4f9d-b46d-435aaaf056fa/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 7762000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "0b91c1c7-9b35-416c-8e0f-5c45c1a2a451",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "The Rookie",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "the-rookie",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "17FC-1FA7-988E-FE25-B5E2-B"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "G"
      }
      ],
      "releases": [
      {
      "releaseDate": "2002-03-29",
      "releaseType": "original",
      "releaseYear": 2002,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "fd8ec64b-6dcf-4962-8b6a-f6905d4c72fc"
      },
      {
      "contentId": "c9d09530-8b58-429d-918c-f7f9c9cd5a4b",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "46xK7HQNMAIy",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTMxOTcw",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "32a45205-e798-458d-b539-ffb1ce5b4a4b",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Saving Mr. Banks - movie - c9d09530-8b58-429d-918c-f7f9c9cd5a4b",
      "image": {
      "tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "7FF25F9E1DCBBCFD2EDEC848985BD06B7761083389C262CC1771A7348E28C00A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7FF25F9E1DCBBCFD2EDEC848985BD06B7761083389C262CC1771A7348E28C00A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "00569CD4E1CE146C8B96BF683C53556D3D7AF9B69EBCBEDCBA36F54D830DF444",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/00569CD4E1CE146C8B96BF683C53556D3D7AF9B69EBCBEDCBA36F54D830DF444/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "710C901C5E6EC67E2104782AC34AE1ADDE925C578DA138E13C0656C5EEA430F1",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/710C901C5E6EC67E2104782AC34AE1ADDE925C578DA138E13C0656C5EEA430F1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "AF9C725E0587B6FD2F07839ED9D311C3E00590C6526799F723C2447980CD1BEB",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AF9C725E0587B6FD2F07839ED9D311C3E00590C6526799F723C2447980CD1BEB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "26ECD33A6884A54AD18D9C7792668F9E74FF4CADA993652BD3B49637E41808B4",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/26ECD33A6884A54AD18D9C7792668F9E74FF4CADA993652BD3B49637E41808B4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "861E746F58F1D14483EAAEEDA6704ACF2860CDE97EBDC9FBC3927535103F9196",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/861E746F58F1D14483EAAEEDA6704ACF2860CDE97EBDC9FBC3927535103F9196/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "0B404432096159E44B2AA36D34B8272DEB62C8F028F15E8C1B17A158705C8FD6",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B404432096159E44B2AA36D34B8272DEB62C8F028F15E8C1B17A158705C8FD6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "D7E0F58A641852F26AB21A56875169A9F63D72D37D16373E8720207C4DB017E2",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7E0F58A641852F26AB21A56875169A9F63D72D37D16373E8720207C4DB017E2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "0A527E27DF528BD96D68F8A367FBFFBF48C96E19B4E133C81F06FF1B708EAFDF",
      "masterWidth": 1344,
      "masterHeight": 756,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0A527E27DF528BD96D68F8A367FBFFBF48C96E19B4E133C81F06FF1B708EAFDF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "EFFAF9190446F36C36952192E3D934E60B1CF6C5C3985CB9A93B13B8413E32D9",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EFFAF9190446F36C36952192E3D934E60B1CF6C5C3985CB9A93B13B8413E32D9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "895E599ECDFE194B0C3BD046AAACC22B73F198D332416209DB89059FFC082596",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/895E599ECDFE194B0C3BD046AAACC22B73F198D332416209DB89059FFC082596/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "EEBB70C1C68AD7183974774B37DFC8FD8E6711F63971B0CB2A37C67F4052EA70",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EEBB70C1C68AD7183974774B37DFC8FD8E6711F63971B0CB2A37C67F4052EA70/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "5C07FC1C43421251224668A1D4BF3CF383E31030455303AC627F07886C5AFFAA",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C07FC1C43421251224668A1D4BF3CF383E31030455303AC627F07886C5AFFAA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "11A614B26CF238B4823E48C5AB639345162F429C077AAE6E94971860505B4921",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/11A614B26CF238B4823E48C5AB639345162F429C077AAE6E94971860505B4921/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "47B0CAC11EF851228BAF799B39687F4CFBD10C2C9A08EE2431515FA10DD38D6F",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47B0CAC11EF851228BAF799B39687F4CFBD10C2C9A08EE2431515FA10DD38D6F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "0DC0DBCDC93E63E92EEC71277B865F70860A48B528BDC608DDFD39A799A25A8D",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0DC0DBCDC93E63E92EEC71277B865F70860A48B528BDC608DDFD39A799A25A8D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "2a6e8a8d-1059-43ff-8fb3-e730e42f4d7e",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/2a6e8a8d-1059-43ff-8fb3-e730e42f4d7e/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 7736000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "32a45205-e798-458d-b539-ffb1ce5b4a4b",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "saving-mr-banks",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Saving Mr. Banks",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      },
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "F867-764B-649F-F788-9B66-J"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "PG-13"
      }
      ],
      "releases": [
      {
      "releaseDate": "2013-12-13",
      "releaseType": "original",
      "releaseYear": 2013,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/27/1566944414-131970.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ],
      "videoId": "7c5a7715-784f-416b-ad02-ecd5739090a6"
      },
      {
      "contentId": "58965253-5387-4b68-8f99-28f96b19005d",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "7jEeXqS5aEVr",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTg1NjY2",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "4cf8c1fc-453b-434e-9662-fa8ed4f9b05a",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Togo - movie - 58965253-5387-4b68-8f99-28f96b19005d",
      "image": {
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "3345E6D178D5FD529E12A308FB3DBFADC71901FFA662EAC70B5422D4BA13A220",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3345E6D178D5FD529E12A308FB3DBFADC71901FFA662EAC70B5422D4BA13A220/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "FB7C332FB8214CA7665CB3D5E93614C7E2D83E5441541D534D9ABD0EE4F82D31",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FB7C332FB8214CA7665CB3D5E93614C7E2D83E5441541D534D9ABD0EE4F82D31/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "B18215E0AAFC57D4096C76D2BF063CC7145C8EC8A3E2C99163040103C877D2D1",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B18215E0AAFC57D4096C76D2BF063CC7145C8EC8A3E2C99163040103C877D2D1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.67": {
      "program": {
      "default": {
      "masterId": "FA75CAD23866028110FDF0339A6AE2D06BD500A1816D6C7B38E1B334A26CD2B9",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA75CAD23866028110FDF0339A6AE2D06BD500A1816D6C7B38E1B334A26CD2B9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "463CEE9381C298C97E5278FDBBA6197AD3AC0ED174D908048E47906910D249B2",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/463CEE9381C298C97E5278FDBBA6197AD3AC0ED174D908048E47906910D249B2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "80772CAEC0BF4D3FB153B4785B481F9AB67D60C5D2B0124A7973523915640C2E",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/80772CAEC0BF4D3FB153B4785B481F9AB67D60C5D2B0124A7973523915640C2E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "891D4AC02BA14E69AEE6E8D035BB6D7B31E0E27113FE4C379CF09C042F0123B8",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/891D4AC02BA14E69AEE6E8D035BB6D7B31E0E27113FE4C379CF09C042F0123B8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "D4DDC49C7A9CC9E217BB4534E329EE81FDB66BD19747BC6C0D4D4063E3893924",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D4DDC49C7A9CC9E217BB4534E329EE81FDB66BD19747BC6C0D4D4063E3893924/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "program": {
      "default": {
      "masterId": "6DD54C8E17F7792ECE9DE330F2C2ED6B750A24C794D59A1D577A7CAA586BF772",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6DD54C8E17F7792ECE9DE330F2C2ED6B750A24C794D59A1D577A7CAA586BF772/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "ED13318DD0C56D6A73DC956D5240D5D396B80BEFDDB6D38A88F04229A244D3FC",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ED13318DD0C56D6A73DC956D5240D5D396B80BEFDDB6D38A88F04229A244D3FC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "F47C93132F31A2DCD71164AA5D6AE8569B0E6E7CDB42084C85153E46CF7B447F",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F47C93132F31A2DCD71164AA5D6AE8569B0E6E7CDB42084C85153E46CF7B447F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "1C4875910C5419961795E72AEAF9CEC89B2DA2EA89F113C7854C7029879FA5A5",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C4875910C5419961795E72AEAF9CEC89B2DA2EA89F113C7854C7029879FA5A5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "071048946FD3AA370102AF9F39DE5209FE6E7465081FAD0FD82BC4F86603BFDE",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/071048946FD3AA370102AF9F39DE5209FE6E7465081FAD0FD82BC4F86603BFDE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "482DAE30E0505FEF90058BE6A2A43A62617AE8F1B7CB7FBB05B255FC3DA8177F",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/482DAE30E0505FEF90058BE6A2A43A62617AE8F1B7CB7FBB05B255FC3DA8177F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "8E97BD13A45FD9560FD63EF86B59BE01BCA060281DDB6FFC22238AF4B191D26F",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8E97BD13A45FD9560FD63EF86B59BE01BCA060281DDB6FFC22238AF4B191D26F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "8FD88868E6E152A91D64EA94DEAEC9CE0145AABD57740E6DD0F84AF25745851F",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8FD88868E6E152A91D64EA94DEAEC9CE0145AABD57740E6DD0F84AF25745851F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "7054E78D5D028340B0B52B3A580B809C20A0F329988A74924C0353F4A7750F40",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7054E78D5D028340B0B52B3A580B809C20A0F329988A74924C0353F4A7750F40/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "UHD",
      "mediaId": "a998d8fa-fe98-4481-98bb-d1aa7655d21a",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/a998d8fa-fe98-4481-98bb-d1aa7655d21a/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 7005000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "4cf8c1fc-453b-434e-9662-fa8ed4f9b05a",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "togo",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Togo",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "32C4-77DD-1EFD-1A0C-4C13-U"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": "for some peril, thematic elements and mild language.",
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2019-12-20",
      "releaseType": "original",
      "releaseYear": 2019,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/04/20/1587400887-185666.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ],
      "videoId": "2a91f749-4bcd-4b15-aaab-225542b333c6"
      },
      {
      "contentId": "e527663f-9c6f-4269-ad8d-72e8ab4b977e",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "4qRYVbzOHKwZ",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTQxOTMx",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "11380a6f-907b-4b34-9e45-a20b43e028fc",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "The Finest Hours - movie - e527663f-9c6f-4269-ad8d-72e8ab4b977e",
      "image": {
      "tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "3E0E7D9ADE0D0F5818C076931EC23897A62F6A12FB59B0F7BD364D0F5EAAF8E4",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3E0E7D9ADE0D0F5818C076931EC23897A62F6A12FB59B0F7BD364D0F5EAAF8E4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "6D2534D92D24F3EB754F67A31BEEF61F89F376C93E80CFF9E72C03D49FD45EED",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6D2534D92D24F3EB754F67A31BEEF61F89F376C93E80CFF9E72C03D49FD45EED/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "FD15A112CFD5F97108DC8A90303A3300320654EA4CF7C128A9194E85AEF85CBE",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FD15A112CFD5F97108DC8A90303A3300320654EA4CF7C128A9194E85AEF85CBE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "4F833FF927F4DD7A9ED83A342DEF1B2C9D04863DAEC0126A4CFD630B9FC03829",
      "masterWidth": 767,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F833FF927F4DD7A9ED83A342DEF1B2C9D04863DAEC0126A4CFD630B9FC03829/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "44BBE0F9ECEB8ECE63F8C2A96B7ADFC5FE9CA34DC2B165548E525E07F06A37AC",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/44BBE0F9ECEB8ECE63F8C2A96B7ADFC5FE9CA34DC2B165548E525E07F06A37AC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "program": {
      "default": {
      "masterId": "3BB6540FAB00F2FB860BE3EF4978AE7AED5DA98F66BFAEA0E9D6D25747DB8825",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3BB6540FAB00F2FB860BE3EF4978AE7AED5DA98F66BFAEA0E9D6D25747DB8825/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "FA0C58A84EC03D672A05A79CE5AB2BAB722A4D6045F98E4EF1A08110C88FA356",
      "masterWidth": 1344,
      "masterHeight": 756,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA0C58A84EC03D672A05A79CE5AB2BAB722A4D6045F98E4EF1A08110C88FA356/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "394D3807B07C26B5F189A3763B041CBE3104D2577EB9DF750E04A4F05CC96A47",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/394D3807B07C26B5F189A3763B041CBE3104D2577EB9DF750E04A4F05CC96A47/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "708C0DEA832E7F0F4ADC014F724066B148FCCE2433CC7371D5B329C3BA32993D",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/708C0DEA832E7F0F4ADC014F724066B148FCCE2433CC7371D5B329C3BA32993D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "5E26902BFBA046569BFBCE8A000CCCFFFEA9B03F647AB907C3C69ECA4BF7CD26",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5E26902BFBA046569BFBCE8A000CCCFFFEA9B03F647AB907C3C69ECA4BF7CD26/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "705E2B01EC3F47A5CFE54DADD6027AB7329C87769AD09BBFDFAFD2406F91109F",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/705E2B01EC3F47A5CFE54DADD6027AB7329C87769AD09BBFDFAFD2406F91109F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "A9D0264CA47F4833CEE5055AB45D62EA638E8B1C28D36386E75401BA7CC07E98",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A9D0264CA47F4833CEE5055AB45D62EA638E8B1C28D36386E75401BA7CC07E98/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "290C8318B3D1F5724D6B9C00EE2516FB834AC8595DBB28F9702038DE38421D45",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/290C8318B3D1F5724D6B9C00EE2516FB834AC8595DBB28F9702038DE38421D45/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "07A566F0A1F178B5DE94CB38F2DF85077E1E73DE3C7465C449D554B6192BA6D6",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07A566F0A1F178B5DE94CB38F2DF85077E1E73DE3C7465C449D554B6192BA6D6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "E8F5E023453C4DDC91540730D0DA6443233AA57902769E33F2BE2907F7003B72",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E8F5E023453C4DDC91540730D0DA6443233AA57902769E33F2BE2907F7003B72/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "208F0E06A7F5D404CB84B37B9E3990F9813E2A1F726782783B23671CE2060C3E",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/208F0E06A7F5D404CB84B37B9E3990F9813E2A1F726782783B23671CE2060C3E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "ef163d52-16ea-411c-9eb8-b54b5a4193de",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/ef163d52-16ea-411c-9eb8-b54b5a4193de/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 7143000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "11380a6f-907b-4b34-9e45-a20b43e028fc",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "the-finest-hours",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "The Finest Hours",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      },
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "E50E-ADBC-CB81-2CAD-5939-O"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "PG-13"
      }
      ],
      "releases": [
      {
      "releaseDate": "2016-01-29",
      "releaseType": "original",
      "releaseYear": 2016,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "24ba4169-a5e2-4e1c-bf12-2524964c3aef"
      },
      {
      "contentId": "4b5741a2-7119-46f0-a453-7876b98d9a0a",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "2xa2YdiOJXQt",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTkwNDc1",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "2787e7c3-a99c-4747-a3b1-36f52f7bff8f",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "TFCF - Other",
      "partnerGroupId": "373083",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Hidden Figures - movie - 4b5741a2-7119-46f0-a453-7876b98d9a0a",
      "image": {
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "013923B5A06B34E0A4A176C1A0A2CA754994A7FD0DCE6EF812AC5A82D2671EEF",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/013923B5A06B34E0A4A176C1A0A2CA754994A7FD0DCE6EF812AC5A82D2671EEF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "C483866D9D693A0AA5813FE464B49BFBE3459894D0B0E11365AE73EF929B88C4",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C483866D9D693A0AA5813FE464B49BFBE3459894D0B0E11365AE73EF929B88C4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "7B9929F9027E11AD28C187924305953D28EDA8E34D6E96FE7754CA278D989958",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B9929F9027E11AD28C187924305953D28EDA8E34D6E96FE7754CA278D989958/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.67": {
      "program": {
      "default": {
      "masterId": "3C1266CB629BC38054204E0754D261283FF99DA0CF424969D53F92C580CEECED",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3C1266CB629BC38054204E0754D261283FF99DA0CF424969D53F92C580CEECED/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "E8C448C115D4D34848F3CF22AA70AD80D3016D550A0874CFC966D96E910F0599",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E8C448C115D4D34848F3CF22AA70AD80D3016D550A0874CFC966D96E910F0599/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "ABE2F193EE05C6A87F242AA09A1EF90222BDF96314A4CA64FF06BF8D11D62E7B",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ABE2F193EE05C6A87F242AA09A1EF90222BDF96314A4CA64FF06BF8D11D62E7B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "C7C73F534376936DD2F999E44C0259578E1207D1D230D12AFDBA882A54245CDA",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C7C73F534376936DD2F999E44C0259578E1207D1D230D12AFDBA882A54245CDA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "855715989439890B3614A8E48AEC0A4A2862CBDBF6BAE97609553DC81C86C8B5",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/855715989439890B3614A8E48AEC0A4A2862CBDBF6BAE97609553DC81C86C8B5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "C50F6E6FE57334C0F9AE2ABA5BFBD0A8D75CC9B2DDB56D54ABB9B50F41ABFBFB",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C50F6E6FE57334C0F9AE2ABA5BFBD0A8D75CC9B2DDB56D54ABB9B50F41ABFBFB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "C14094ECD47BD0CCA651CEE6D1D6733D9092AAC11A48529049E57BB089066BCE",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C14094ECD47BD0CCA651CEE6D1D6733D9092AAC11A48529049E57BB089066BCE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "FF98B218DC10606B90B0CD2BB906A53AC56C2714B0D8CCABE7B8591012886F11",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FF98B218DC10606B90B0CD2BB906A53AC56C2714B0D8CCABE7B8591012886F11/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "F98D5EC4881AE48CFFA3A62791239CD08C9166DFDD801A84057EADA1A7ED5ADD",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F98D5EC4881AE48CFFA3A62791239CD08C9166DFDD801A84057EADA1A7ED5ADD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "8945D45D1BA32F0A142306B5253A5D868A4301EF7B13E02C2E63D57DC50A29A3",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8945D45D1BA32F0A142306B5253A5D868A4301EF7B13E02C2E63D57DC50A29A3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "program": {
      "default": {
      "masterId": "9F2EBB312ABAD478D3A12DB72015377F55B40E4DCA5FAADCAA5027248BF7A498",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F2EBB312ABAD478D3A12DB72015377F55B40E4DCA5FAADCAA5027248BF7A498/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "087D2E107B71664910B30523F3793E10B09FCB00DF068291FA725737990308F2",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/087D2E107B71664910B30523F3793E10B09FCB00DF068291FA725737990308F2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "AD6EDCA20B363C2F521A229E4498A85CD33FEFE189B8860DF1077D478B0CCE8A",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AD6EDCA20B363C2F521A229E4498A85CD33FEFE189B8860DF1077D478B0CCE8A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "587b6983-c4b6-488f-a326-ff89ea7f8155",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/587b6983-c4b6-488f-a326-ff89ea7f8155/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 7688000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "2787e7c3-a99c-4747-a3b1-36f52f7bff8f",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Hidden Figures",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "hidden-figures",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "CFF2-F7A0-766C-6824-0886-W"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": "For thematic elements and some language",
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2016-12-25",
      "releaseType": "original",
      "releaseYear": 2016,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "ce1390ee-3169-45fe-82f6-a137dda2eee2"
      },
      {
      "contentId": "826379aa-6b31-40ed-9377-b9699cb676fd",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "3uPmBHWlO6HJ",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTk0MTM1",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "2102dfac-198f-49b5-ad2a-4401e6fea3e1",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Hamilton - movie - 826379aa-6b31-40ed-9377-b9699cb676fd",
      "image": {
      "title_treatment_layer": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "357D98E13B15F431C2C9F5B39D85EF04D0656EAEC87BCC2CA1DA929D4B473ED3",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/357D98E13B15F431C2C9F5B39D85EF04D0656EAEC87BCC2CA1DA929D4B473ED3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "30C352C2C5186B6705FE8876ED2F8618D30D46A2991C95DE05F9F4228C8A952F",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/30C352C2C5186B6705FE8876ED2F8618D30D46A2991C95DE05F9F4228C8A952F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "925D883B7FA698264D04A53FEF82269B09AEFBC3F222CD7679E60CD9B6041C17",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/925D883B7FA698264D04A53FEF82269B09AEFBC3F222CD7679E60CD9B6041C17/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.67": {
      "program": {
      "default": {
      "masterId": "14048E08EA816B6F70FF686E28B54EA92854EEDEA53A3BC8ADA7BE248A154997",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/14048E08EA816B6F70FF686E28B54EA92854EEDEA53A3BC8ADA7BE248A154997/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "D13628D43D3D0F5B447D2CA019E6631B5FA1F4092222E3C60515C2C14B7AC76C",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D13628D43D3D0F5B447D2CA019E6631B5FA1F4092222E3C60515C2C14B7AC76C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "program": {
      "default": {
      "masterId": "9C7C723144F7A5CD8E49B025E394ACF149301C993DE420DEA3588C9C6B1FF089",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9C7C723144F7A5CD8E49B025E394ACF149301C993DE420DEA3588C9C6B1FF089/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "6E837BA81F99E22A757441ACBF96FFD86B2F8492FA281AD6CC0A9259DD2338D8",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E837BA81F99E22A757441ACBF96FFD86B2F8492FA281AD6CC0A9259DD2338D8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "4CDC035C7EAF12865E567748F902AAB649BAA979C3DBB4CE8ED51CC0DCEF021C",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4CDC035C7EAF12865E567748F902AAB649BAA979C3DBB4CE8ED51CC0DCEF021C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "F419156A3EA70000980F37E39D69D8B71CBBA39CAF6D0B3EC6DAABDB0B7DAA62",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F419156A3EA70000980F37E39D69D8B71CBBA39CAF6D0B3EC6DAABDB0B7DAA62/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "642BA568C81AE24D84AC5C086C124B54BEAB34B12445B9B46E12F8FDC6E73EAC",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/642BA568C81AE24D84AC5C086C124B54BEAB34B12445B9B46E12F8FDC6E73EAC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.89": {
      "program": {
      "default": {
      "masterId": "A5368F58DB68B87C2EB7EA60D6608B449E5760B9000B210EDDE087039080E412",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A5368F58DB68B87C2EB7EA60D6608B449E5760B9000B210EDDE087039080E412/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "program": {
      "default": {
      "masterId": "CFB77A43CD487A91447907957B5FE87A75E582CA3111DB2606CD5A9F7EEA72BA",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CFB77A43CD487A91447907957B5FE87A75E582CA3111DB2606CD5A9F7EEA72BA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "7068BF5C5AD6F17AA8DD5BCC16531A82B5B6C4FA6A4F6C0BCD49D62C899F5AEE",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7068BF5C5AD6F17AA8DD5BCC16531A82B5B6C4FA6A4F6C0BCD49D62C899F5AEE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "E5CFBFB2596916395386FB289A9A656A169ECA1D147703EA469CABFA2A1EAB3F",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E5CFBFB2596916395386FB289A9A656A169ECA1D147703EA469CABFA2A1EAB3F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "551C2AE6A5ACC19D173A1225096703E3159A469A231AE7A41619B8807C71ABE6",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/551C2AE6A5ACC19D173A1225096703E3159A469A231AE7A41619B8807C71ABE6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "2FE3FBE5A13754480EE3A956F016A7D842F09F00AE574FA5677EEF1F3560A19D",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2FE3FBE5A13754480EE3A956F016A7D842F09F00AE574FA5677EEF1F3560A19D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "7559B5D442FCB9F3E56C61461B3BC6774E6A3856A1FC7DD3560851897C6673F9",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7559B5D442FCB9F3E56C61461B3BC6774E6A3856A1FC7DD3560851897C6673F9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "1CD073C1B5CFAD1C8908D7171A97172EAF8E391ED06C821A10905FC762EEA938",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1CD073C1B5CFAD1C8908D7171A97172EAF8E391ED06C821A10905FC762EEA938/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "44BF5AB964B136A085AC5A43776B4058EB2993B9F39946DE8DEB1E46851C6761",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/44BF5AB964B136A085AC5A43776B4058EB2993B9F39946DE8DEB1E46851C6761/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "UHD",
      "mediaId": "24d75e77-ad96-4642-99c2-891f4f5283d2",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/24d75e77-ad96-4642-99c2-891f4f5283d2/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 9615000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "2102dfac-198f-49b5-ad2a-4401e6fea3e1",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Hamilton",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "hamilton",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "0536-0A84-9B78-3123-0545-E"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": "For language and some suggestive material",
      "system": "MPAA",
      "value": "PG-13"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-07-03",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/06/18/1592494238-194135.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ],
      "videoId": "86e2f689-ff98-4c4f-831d-b8185aa01ec4"
      },
      {
      "contentId": "c32aab97-4b91-4d81-99c5-1d23124cb576",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "6itmwJfRJIfd",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6Mzc1NjU",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "8419dafc-b4ab-4ad4-a0bb-64eae63a68cc",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Remember the Titans - movie - c32aab97-4b91-4d81-99c5-1d23124cb576",
      "image": {
      "title_treatment_layer": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "9DF83ADB2A8ED6FDF53D8D8730A8688D068043B7AFCD5652A21F79D2CD72542B",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9DF83ADB2A8ED6FDF53D8D8730A8688D068043B7AFCD5652A21F79D2CD72542B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "63B52A8EBB98475D14807635EAE97BD8AE57CF4C45F85BF14A16E98BCF28DDFA",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/63B52A8EBB98475D14807635EAE97BD8AE57CF4C45F85BF14A16E98BCF28DDFA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "D992EE5DB7EC176A7E35D22E25BF070826F146758F78149428C56F7C59558858",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D992EE5DB7EC176A7E35D22E25BF070826F146758F78149428C56F7C59558858/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "program": {
      "default": {
      "masterId": "C2071D88DE8E6BB49BF0707E764993E011BB6618A5F479ED42E72DFAAE7BB4CE",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C2071D88DE8E6BB49BF0707E764993E011BB6618A5F479ED42E72DFAAE7BB4CE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "283A9A5AFF26CD367360230EBABB5CAABB8CB73B3054B98FF9845EDD8A390534",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/283A9A5AFF26CD367360230EBABB5CAABB8CB73B3054B98FF9845EDD8A390534/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "F3EB59A272DBE5D306FC8AF7933E5DBF0D39F38070AD4CC5A0C9D973883B8146",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F3EB59A272DBE5D306FC8AF7933E5DBF0D39F38070AD4CC5A0C9D973883B8146/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "A55690E165A872F7AF93C24C942F4F2A919F114633D22C2FC02CBAC9AFDC0A5D",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A55690E165A872F7AF93C24C942F4F2A919F114633D22C2FC02CBAC9AFDC0A5D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "1A0D331E1EA9781C0D9EDC6D5368FABB9A9E9385E78A8185986A3B383DEE4F86",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1A0D331E1EA9781C0D9EDC6D5368FABB9A9E9385E78A8185986A3B383DEE4F86/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "F28E7D9BF8E6913AA085E9D205316E9AB61613CB12D8B85A909D38A3A5574352",
      "masterWidth": 1344,
      "masterHeight": 756,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F28E7D9BF8E6913AA085E9D205316E9AB61613CB12D8B85A909D38A3A5574352/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "D801B73A7D9719812735606D08BCF6FAC131E5E01C4A8D48F935A04327DA0D88",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D801B73A7D9719812735606D08BCF6FAC131E5E01C4A8D48F935A04327DA0D88/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "3900E74B64CF51FFE5C42C9954E8193469EDB2F7C5C3DA4B9E79FD6D77C02F4C",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3900E74B64CF51FFE5C42C9954E8193469EDB2F7C5C3DA4B9E79FD6D77C02F4C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "AA6CDDD4C04AF1D2F8B1275C6298889C6DF5B3F49C42AFEC13CA0F925786DBBD",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AA6CDDD4C04AF1D2F8B1275C6298889C6DF5B3F49C42AFEC13CA0F925786DBBD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "DFCF83BCCE96B3666719D811EDF617886A4AC03DF2A06EEF7A9A20A0EFB36452",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DFCF83BCCE96B3666719D811EDF617886A4AC03DF2A06EEF7A9A20A0EFB36452/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "8102A67E5EA8926D54DF5478108F4B1B820E2AEE6C6D991515A785355F28972A",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8102A67E5EA8926D54DF5478108F4B1B820E2AEE6C6D991515A785355F28972A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "2CB7BD85B861EF92E39690B38E3BF4BDD6E51CE97BE699BB80CC44B389F5DBA0",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2CB7BD85B861EF92E39690B38E3BF4BDD6E51CE97BE699BB80CC44B389F5DBA0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "8DC6DD3F9CF75EEA6701C837B8C7945BBE8E3D5B8D2B7DE9876CAB600568E7AE",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8DC6DD3F9CF75EEA6701C837B8C7945BBE8E3D5B8D2B7DE9876CAB600568E7AE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "UHD",
      "mediaId": "418c96ec-27c1-4837-a33d-755d843061f3",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/418c96ec-27c1-4837-a33d-755d843061f3/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 6843000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "8419dafc-b4ab-4ad4-a0bb-64eae63a68cc",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "remember-the-titans",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Remember the Titans",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "2450-A241-0100-0901-3821-M"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": "For Thematic Elements And Some Language.",
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2000-09-29",
      "releaseType": "original",
      "releaseYear": 2000,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "76e5053e-9986-4814-9a83-9c5c142c1191"
      },
      {
      "contentId": "0330e99c-6cab-4392-94fd-deab3aed7c53",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "18yDDh8FLsAe",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTE4MTgz",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "07112381-a905-4447-b42b-7ceaf0e5b42b",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Secretariat - movie - 0330e99c-6cab-4392-94fd-deab3aed7c53",
      "image": {
      "title_treatment_layer": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "D3C74B3FB1AFDC8483EE89A4C944570AC8E01C7E90C93935E267044A373FF64A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D3C74B3FB1AFDC8483EE89A4C944570AC8E01C7E90C93935E267044A373FF64A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "D460353FC1D34923BC899D5594C5712B2DE9FCD2785F54A4E21E58B09A62B5D1",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D460353FC1D34923BC899D5594C5712B2DE9FCD2785F54A4E21E58B09A62B5D1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "A90428655278FFA1507994B57AFE74939295EFBAAECAF0652F5575AD89F2E155",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A90428655278FFA1507994B57AFE74939295EFBAAECAF0652F5575AD89F2E155/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "4EAA7CCFF41B84F09C1926B742BF4D4EC626DC34978F44D92DDB1041613561F3",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4EAA7CCFF41B84F09C1926B742BF4D4EC626DC34978F44D92DDB1041613561F3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "8D0C86F7A1822466B59C013623553AFB98EB57349259E0B89534F9E8E2549805",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8D0C86F7A1822466B59C013623553AFB98EB57349259E0B89534F9E8E2549805/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "A6F9CBA517EB2CA26EBE3270837AD0A658AF126431C399783A1DEFFA92D79C03",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6F9CBA517EB2CA26EBE3270837AD0A658AF126431C399783A1DEFFA92D79C03/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "A0703383B360B286BE267FD1B038E56E0A0BC33436935D7E8E1F3110658C1F03",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A0703383B360B286BE267FD1B038E56E0A0BC33436935D7E8E1F3110658C1F03/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "A2F5071622FC45BAA6A1E7AA55216273D1AFC2AB32A8C3325D0C1048B3554B0D",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A2F5071622FC45BAA6A1E7AA55216273D1AFC2AB32A8C3325D0C1048B3554B0D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "C5A13DFB8D8533A6DB673B03FA3E6FC19BC7F1BD28C34D66A588D7A78C80F9D1",
      "masterWidth": 1344,
      "masterHeight": 756,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5A13DFB8D8533A6DB673B03FA3E6FC19BC7F1BD28C34D66A588D7A78C80F9D1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "AB9B42440C09DCEDBF6A6E1CC54742BBD4B85DC04BBA0DB99DCBF3288F39CED5",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AB9B42440C09DCEDBF6A6E1CC54742BBD4B85DC04BBA0DB99DCBF3288F39CED5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "F30415F63F54AD69B18D54EFFC6D67D01116571BCE792A6A5393460776221EB1",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F30415F63F54AD69B18D54EFFC6D67D01116571BCE792A6A5393460776221EB1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "79D7E1DB91860154C528FA3876EE55CCC5689CE2468ED0B5425CA1DBCDA39D29",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/79D7E1DB91860154C528FA3876EE55CCC5689CE2468ED0B5425CA1DBCDA39D29/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "479FA39510F50E69D1DE31B1F566E51FAFC566CF39A2B1DD6C603388373B0882",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/479FA39510F50E69D1DE31B1F566E51FAFC566CF39A2B1DD6C603388373B0882/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "47877B14720D936615323A7BF4BBCC0786C70DF018EDA3918312AE42D328F390",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47877B14720D936615323A7BF4BBCC0786C70DF018EDA3918312AE42D328F390/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "5CEFE184E103ACA1FBBBEE7E9E7FBBD7E11FBA83D1582FFDF27918F98037D510",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5CEFE184E103ACA1FBBBEE7E9E7FBBD7E11FBA83D1582FFDF27918F98037D510/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "B493AE1C7621A936205FAD81E8E0FCC0D374387E84216B1463B0D500906E73FD",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B493AE1C7621A936205FAD81E8E0FCC0D374387E84216B1463B0D500906E73FD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "e5b21fc7-1c26-4d61-b32e-dee84be521b0",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/e5b21fc7-1c26-4d61-b32e-dee84be521b0/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 7480000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "07112381-a905-4447-b42b-7ceaf0e5b42b",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "secretariat",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Secretariat",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "50D8-715B-8BCE-CAA4-64E0-9"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2010-10-08",
      "releaseType": "original",
      "releaseYear": 2010,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "ce97c2bb-fcd7-4a0d-9937-6ee0e7865794"
      },
      {
      "contentId": "81a4e53e-0cf7-41c1-a691-5a6862a93d94",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "6FtfjP77HPmS",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTUxMjUy",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "77f43e98-e78a-42f1-a3e3-9393bd91c157",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Queen of Katwe - movie - 81a4e53e-0cf7-41c1-a691-5a6862a93d94",
      "image": {
      "title_treatment_layer": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "9F3C7AA1F5C32CF634E4FE890056B144750E34FEB8A3E9D945BF4767AED8843C",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F3C7AA1F5C32CF634E4FE890056B144750E34FEB8A3E9D945BF4767AED8843C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "E8285EC38AFC6F7C4CB1B596EDA9D7E94B123E8A9B3384A338AC0E84B81C5384",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E8285EC38AFC6F7C4CB1B596EDA9D7E94B123E8A9B3384A338AC0E84B81C5384/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "27CC5E0932D9D20F63D2DE64F6D68EA4337459958D087A74A642858349AB9790",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/27CC5E0932D9D20F63D2DE64F6D68EA4337459958D087A74A642858349AB9790/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "D9EB112D8F789FA92E08827F5F6B71C9E0D1F814A04E5892A9EE2C803BC64EAD",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D9EB112D8F789FA92E08827F5F6B71C9E0D1F814A04E5892A9EE2C803BC64EAD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "C37D14B3E8F12F6FAA64D2D01F45A95A9311124A98FAC00E299F9F66D75F14E5",
      "masterWidth": 767,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C37D14B3E8F12F6FAA64D2D01F45A95A9311124A98FAC00E299F9F66D75F14E5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "215DD38F6AC07C53CF7D9AC6F296489B8490A898382470299C7C0A3025EF8597",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/215DD38F6AC07C53CF7D9AC6F296489B8490A898382470299C7C0A3025EF8597/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "569A3E376FE4B675C0ED1CAF1971AA8366EA8EC0C0110DD6C79E9D2A770D2DC8",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/569A3E376FE4B675C0ED1CAF1971AA8366EA8EC0C0110DD6C79E9D2A770D2DC8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "D75EE17AD10A4C285C37984B404C274740C84617A1E770DF14A5871056DC72E3",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D75EE17AD10A4C285C37984B404C274740C84617A1E770DF14A5871056DC72E3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "68622432AB7B4364417FF4845E04670C2CD0E04957C6143380614C4E9F1961C7",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/68622432AB7B4364417FF4845E04670C2CD0E04957C6143380614C4E9F1961C7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "5DE75610E627E34B87429FC13AD3A44FF2929512335BAE17B531800124ABF104",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5DE75610E627E34B87429FC13AD3A44FF2929512335BAE17B531800124ABF104/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "07BD0A2BEA406660F45417625A12D9C3C17C20A2C89A04883BB19F56CF5CAB58",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07BD0A2BEA406660F45417625A12D9C3C17C20A2C89A04883BB19F56CF5CAB58/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "F8B9F476026AB432000B2D95C412C21EFF331449E359AA9E907F0836117525A8",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8B9F476026AB432000B2D95C412C21EFF331449E359AA9E907F0836117525A8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "76B813D035DE34432339B1233AFD884F0652416E62C0D36269A05AEA240F0F61",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/76B813D035DE34432339B1233AFD884F0652416E62C0D36269A05AEA240F0F61/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "program": {
      "default": {
      "masterId": "B528BF28D190E1796E77261E3D699CE71CB9A5E625539FAF846A229B65B5BBDA",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B528BF28D190E1796E77261E3D699CE71CB9A5E625539FAF846A229B65B5BBDA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "59CDB9DBEB82EE2A7AB86BE3AC45411A22859D8D0EE5676ADD1E7277E80E27D4",
      "masterWidth": 1344,
      "masterHeight": 756,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/59CDB9DBEB82EE2A7AB86BE3AC45411A22859D8D0EE5676ADD1E7277E80E27D4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "D520E74E3A18FE4AAD4783634EFC6248F7A0500B03B388FFEFBC86744CEAF6E2",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D520E74E3A18FE4AAD4783634EFC6248F7A0500B03B388FFEFBC86744CEAF6E2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "04c8b7da-e4c4-401a-9628-ab1da007d33a",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/04c8b7da-e4c4-401a-9628-ab1da007d33a/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 7543000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "77f43e98-e78a-42f1-a3e3-9393bd91c157",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "queen-of-katwe",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Queen of Katwe",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "DA6C-8405-2BFA-1652-9541-P"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": "for thematic elements, an accident scene and some suggestive material.",
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2016-09-23",
      "releaseType": "original",
      "releaseYear": 2016,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/27/1566944942-151252.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ],
      "videoId": "3d00b4db-b947-4a78-9081-0f0e0726efde"
      },
      {
      "contentId": "631c19cb-0098-4322-ad43-b35fcc100405",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "2MVGNU4jqrII",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6OTM0NzI",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "3b001b66-9007-467f-becc-8af58ba674c8",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Eight Below - movie - 631c19cb-0098-4322-ad43-b35fcc100405",
      "image": {
      "tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "56D93C7051509C20018450AD47D2116FFD6AF910ED36739F8681642ADC751D61",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56D93C7051509C20018450AD47D2116FFD6AF910ED36739F8681642ADC751D61/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "CD94F180FE79C44AFCAA076465333D6B12676A56D85FDBE6B1A9ECA4312CE728",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CD94F180FE79C44AFCAA076465333D6B12676A56D85FDBE6B1A9ECA4312CE728/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "A02EEA217B0625488BBE6CA7A6500E84B250D3E6CABFB1A0678D08C0FCE02EDD",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A02EEA217B0625488BBE6CA7A6500E84B250D3E6CABFB1A0678D08C0FCE02EDD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "8E3B707EEABF9FF1D530C1553FD5085333AFFC7EDA8F6F0A3549C006DFE2CB28",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8E3B707EEABF9FF1D530C1553FD5085333AFFC7EDA8F6F0A3549C006DFE2CB28/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "176E712AF5B6E3C653C34CDE31BE9B43ACB5081C96DEB699776B5D75E76D03BF",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/176E712AF5B6E3C653C34CDE31BE9B43ACB5081C96DEB699776B5D75E76D03BF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "C7D1ECB6B41188741623B5870EE0FA4B9B823B99292A5EB60A41DF1B9CC592B7",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C7D1ECB6B41188741623B5870EE0FA4B9B823B99292A5EB60A41DF1B9CC592B7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "77296C01E59D52951C68B91BF1D04F4EF9C2656F904EBC49E4692ACDED088FAE",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77296C01E59D52951C68B91BF1D04F4EF9C2656F904EBC49E4692ACDED088FAE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "E95541FCDF9EF885BCC69BA4904EE6A01F8E2ACC817B77818FC333CCB0D8507D",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E95541FCDF9EF885BCC69BA4904EE6A01F8E2ACC817B77818FC333CCB0D8507D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "40C719649C32F385E20E022CC0CB54A770C5051041801FEDDE7811F23FABC635",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/40C719649C32F385E20E022CC0CB54A770C5051041801FEDDE7811F23FABC635/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "EBEB132F0DB855A6E688075E4B7005E51AB4C0507590CECE7F9F440D0AAB6478",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EBEB132F0DB855A6E688075E4B7005E51AB4C0507590CECE7F9F440D0AAB6478/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "CEA1EAC570808DE609E1D6482901592B2C01FFD4CD75AEB08F826840FE273C9C",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CEA1EAC570808DE609E1D6482901592B2C01FFD4CD75AEB08F826840FE273C9C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "C5338B0DC5F0BDC88553EFBCF3B8DCA141B3FFDF6243B938798332E41CE88B00",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5338B0DC5F0BDC88553EFBCF3B8DCA141B3FFDF6243B938798332E41CE88B00/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "E51A0F3D54E3CC51CE0F31BF6D4E39F17845091E9A1DE92EBED27A69EF19C022",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E51A0F3D54E3CC51CE0F31BF6D4E39F17845091E9A1DE92EBED27A69EF19C022/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "2B3BC4F4B743E9E61B4E0B8FCBAB75BD67B9A3F98166CE035812C72A64899514",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2B3BC4F4B743E9E61B4E0B8FCBAB75BD67B9A3F98166CE035812C72A64899514/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "A5C2BE2A39EDA5EFEE0EF65BFC2BE98EFC6EC55903CE0229C47AE9AC7C4BCCA9",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A5C2BE2A39EDA5EFEE0EF65BFC2BE98EFC6EC55903CE0229C47AE9AC7C4BCCA9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "3061F8120FB470CCC222B69341FBADE96ED27990714EF76F7244F6D45CE51614",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3061F8120FB470CCC222B69341FBADE96ED27990714EF76F7244F6D45CE51614/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "b5dd915e-f6d7-4c0c-bb73-29ada063473a",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/b5dd915e-f6d7-4c0c-bb73-29ada063473a/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 7307000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "3b001b66-9007-467f-becc-8af58ba674c8",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Eight Below",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "eight-below",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      },
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "3FCE-4B2C-5441-8676-A57B-V"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2006-02-17",
      "releaseType": "original",
      "releaseYear": 2006,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "3bf824b7-e0fa-4ed1-af70-8ecfde7016ef"
      },
      {
      "contentId": "3ff70c72-2cda-4828-803a-bd0d22c9a237",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "38uh6GJall9b",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6NjgyMDk",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "4097450e-5545-4a99-8565-f5aa3de726bd",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Miracle - movie - 3ff70c72-2cda-4828-803a-bd0d22c9a237",
      "image": {
      "hero_tile": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "C5C22A8C47AF4A21A1265E3B6849B20400DA700A6E512E4BF6F32A5B95A5F817",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5C22A8C47AF4A21A1265E3B6849B20400DA700A6E512E4BF6F32A5B95A5F817/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "66E03F8E9C22D70D5C8E46E349F769EC7A143B4CAB18ACAF3A236AEE79E5676E",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/66E03F8E9C22D70D5C8E46E349F769EC7A143B4CAB18ACAF3A236AEE79E5676E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "A210F9B32E5E46C9DF99F467F6CBE0D50E41F634CE584F333526B7673C304B31",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A210F9B32E5E46C9DF99F467F6CBE0D50E41F634CE584F333526B7673C304B31/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "A6009F7DFE8A2C76622B62BB2833B4BEE2CA3499EF2385D618D5AAE22EA53DA0",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6009F7DFE8A2C76622B62BB2833B4BEE2CA3499EF2385D618D5AAE22EA53DA0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "5A1B777D70A30E173A90746E51F168A685DB32C819BC7FEB266B8D45555AC3E9",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A1B777D70A30E173A90746E51F168A685DB32C819BC7FEB266B8D45555AC3E9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "3985C4F5A8F2F13E2D8C24FF50201A05FEC069169688FF376A85C300769674C9",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3985C4F5A8F2F13E2D8C24FF50201A05FEC069169688FF376A85C300769674C9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "FB3AA9B378125861792D2AF30FA1081623F9B21769438E63133B08C2C5ED5DAB",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FB3AA9B378125861792D2AF30FA1081623F9B21769438E63133B08C2C5ED5DAB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "627C3E6B8A3CF99F1EC75B974DC9DB32C4F2A89B8391D107D74EEBFA7B3BE7F3",
      "masterWidth": 724,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/627C3E6B8A3CF99F1EC75B974DC9DB32C4F2A89B8391D107D74EEBFA7B3BE7F3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "F51B02D722ECCF6798709532ABD4E00E4A7255439B2FAA40ECB5B6D4812C1BDA",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F51B02D722ECCF6798709532ABD4E00E4A7255439B2FAA40ECB5B6D4812C1BDA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "922896F89472A2993F2B8F924B796C3CCCFCD54BA4A2E6C7F619866C675BB23E",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/922896F89472A2993F2B8F924B796C3CCCFCD54BA4A2E6C7F619866C675BB23E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "73851FDBD38ED10ADBDDCFF007D73A0DC900B564120C9E57C27CE27B83A71CC1",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/73851FDBD38ED10ADBDDCFF007D73A0DC900B564120C9E57C27CE27B83A71CC1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "A519657F1CCD10CFAA83AD3DA2487D566D8CFA70F65712A601CD89E369637BC1",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A519657F1CCD10CFAA83AD3DA2487D566D8CFA70F65712A601CD89E369637BC1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "0131583BD90D4B98C8AC49AD1ECA017251B2E510FEC04DB2BDB62DBCC7EEC909",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0131583BD90D4B98C8AC49AD1ECA017251B2E510FEC04DB2BDB62DBCC7EEC909/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "14C2B223AB9C8E87776DA1217831DF5C8A00A54C5CDB32F7A7EE72DC50230A83",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/14C2B223AB9C8E87776DA1217831DF5C8A00A54C5CDB32F7A7EE72DC50230A83/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "9B27E01D6AEA0CF58565D48F361046D1AF64D20835D1D090428A706B81B8EFBE",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9B27E01D6AEA0CF58565D48F361046D1AF64D20835D1D090428A706B81B8EFBE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "2A6575EF327A287739474D59BDC70A484E8A2B220D8CD1F39ADA8EA2169C9387",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A6575EF327A287739474D59BDC70A484E8A2B220D8CD1F39ADA8EA2169C9387/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "2e171ed9-c940-4be9-8788-90f8d40df7be",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/2e171ed9-c940-4be9-8788-90f8d40df7be/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 8220000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "4097450e-5545-4a99-8565-f5aa3de726bd",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Miracle",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "miracle",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      },
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "F78A-A4F4-04AB-C066-AF57-G"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2004-02-06",
      "releaseType": "original",
      "releaseYear": 2004,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "c1f112b0-f1ae-4ec8-94ba-4d7df57f018c"
      }
      ],
      "meta": {
      "hits": 25,
      "offset": 0,
      "page_size": 15
      },
      "setId": "66f31225-18bd-48b7-84c1-17efba0aab16",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Inspired by True Stories",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      },
      "type": "CuratedSet"
      },
      "type": "ShelfContainer",
      "style": "editorial"
      },
      {
      "set": {
      "contentClass": "editorial",
      "items": [
      {
      "contentId": "0b9b3cb3-5dc5-4171-9020-e856afe84c6e",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "6PWutGrMQzCI",
      "image": {
      "title_treatment_layer": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "CBB2F77E5DABB31ECB275B82D8AA9874CAA97B83DB34B35C8D1F99283ABCDAF4",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CBB2F77E5DABB31ECB275B82D8AA9874CAA97B83DB34B35C8D1F99283ABCDAF4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "C9ED9F577C376E0697A40177C222E487C60D8648FBD7EB59756E91AEC00C1E91",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C9ED9F577C376E0697A40177C222E487C60D8648FBD7EB59756E91AEC00C1E91/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "1B9C9BEF9E6641D9DE50AD66FEDAB42D2E394016CECDD7AB77F8EA3C34F9B957",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1B9C9BEF9E6641D9DE50AD66FEDAB42D2E394016CECDD7AB77F8EA3C34F9B957/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "series": {
      "default": {
      "masterId": "62ED2DF878E4966401B51DCE75947D4CDFFD202A854C2C60BC3FF85B63D7BF2A",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/62ED2DF878E4966401B51DCE75947D4CDFFD202A854C2C60BC3FF85B63D7BF2A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "4E79E96D185C4AA07BBD74D6BD36344F703AC4F8BF4D9F797B81B7A5316BF942",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E79E96D185C4AA07BBD74D6BD36344F703AC4F8BF4D9F797B81B7A5316BF942/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "EF0C1A6A135ABC71F36C816EEE9DEA33AF2F614C26B24517C5873023816E7FAC",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF0C1A6A135ABC71F36C816EEE9DEA33AF2F614C26B24517C5873023816E7FAC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "series": {
      "default": {
      "masterId": "69BD58485CF936F1D12BE03F246BB2C7E08F7932E1A3C31843850D9C674D68A3",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/69BD58485CF936F1D12BE03F246BB2C7E08F7932E1A3C31843850D9C674D68A3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "series": {
      "default": {
      "masterId": "3FF51B377F717223C326612885A553860883ED59CF927F8E430911D838EEFEB7",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3FF51B377F717223C326612885A553860883ED59CF927F8E430911D838EEFEB7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "75179F38BBBFF4FA1AFD4C2C9C2887AE556460BC445689F31EC37E0DEAC9CE55",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/75179F38BBBFF4FA1AFD4C2C9C2887AE556460BC445689F31EC37E0DEAC9CE55/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "831A05FBA48704C226ABE41D7A6F3D1E928875AA8CC2F432857C52C699A4BEAE",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/831A05FBA48704C226ABE41D7A6F3D1E928875AA8CC2F432857C52C699A4BEAE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "660D7B5D59404ED003B2CD965BD46CFDF831A375E570DA2DC5B633E3EC0F31E7",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/660D7B5D59404ED003B2CD965BD46CFDF831A375E570DA2DC5B633E3EC0F31E7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "series": {
      "default": {
      "masterId": "EC29020F8E5C741D4071A521610F2B761D65DC8B4FE6BCED8B76B8C12150C946",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EC29020F8E5C741D4071A521610F2B761D65DC8B4FE6BCED8B76B8C12150C946/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "B2E33C950EA7D8966A799A7E48F6151E2F5D97190DA71DFEDEBB9296EF8825FE",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B2E33C950EA7D8966A799A7E48F6151E2F5D97190DA71DFEDEBB9296EF8825FE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "78DC2E89B30F6749CD753101BB1EEB75919BC455D8801FCE7E28FF8C2C1A16BC",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/78DC2E89B30F6749CD753101BB1EEB75919BC455D8801FCE7E28FF8C2C1A16BC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "5C64098B3034D278EF503B4647BF36BF9A41E188F73E94B0790237D1528EB9D6",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C64098B3034D278EF503B4647BF36BF9A41E188F73E94B0790237D1528EB9D6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "74A59B85BB832A90154657921CA80302050B2BF93F0809FC0373BE85F2D17CB9",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/74A59B85BB832A90154657921CA80302050B2BF93F0809FC0373BE85F2D17CB9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "21C2B880CC2D877F4FDF9413D364631D745410FFAB9B432B65828BC7ACB22D05",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/21C2B880CC2D877F4FDF9413D364631D745410FFAB9B432B65828BC7ACB22D05/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "1933A16979F4EAAE1705B3D86CA50837DCB366B59B56AFF960B42FDC4A8B6C2D",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1933A16979F4EAAE1705B3D86CA50837DCB366B59B56AFF960B42FDC4A8B6C2D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "2E8EC449EF45DD81890BBE447B53931E352043E588913DB358A0D532E8794C67",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2E8EC449EF45DD81890BBE447B53931E352043E588913DB358A0D532E8794C67/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "0b9b3cb3-5dc5-4171-9020-e856afe84c6e",
      "text": {
      "title": {
      "full": {
      "series": {
      "default": {
      "content": "Into the Unknown: Making Frozen 2",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "slug": {
      "series": {
      "default": {
      "content": "into-the-unknown-making-frozen-2",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "5270c6b5-f173-4fe2-bb0e-e33e019d8586",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-06-26",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/06/02/1591108013-191613.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "4a7525d4-c1d9-48ae-8371-6688b7e62832",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "59IcHw2Be9Rr",
      "image": {
      "tile": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "05F46C00E767644C4E45255AE344854AD57DF2F6931B92C77924F38C4B1028AD",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/05F46C00E767644C4E45255AE344854AD57DF2F6931B92C77924F38C4B1028AD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "6684ECDFE73338496D90966768C72B86C48B910990ADF28451A2DAB83920E320",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6684ECDFE73338496D90966768C72B86C48B910990ADF28451A2DAB83920E320/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "series": {
      "default": {
      "masterId": "8BE8532D26BEE4144AA5BCEE2758920DCF8437DF80307243BD841104899F8D29",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8BE8532D26BEE4144AA5BCEE2758920DCF8437DF80307243BD841104899F8D29/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "series": {
      "default": {
      "masterId": "E5AE531D275147EFCEA7B4BB7C11CFA783F85AEF603957A958AFBD1A7D19E37A",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E5AE531D275147EFCEA7B4BB7C11CFA783F85AEF603957A958AFBD1A7D19E37A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "DF0B97C126D9668F64B7AFC9BB22E7AD1664413ABA33A564ABD18A94EEFFAD6C",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DF0B97C126D9668F64B7AFC9BB22E7AD1664413ABA33A564ABD18A94EEFFAD6C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "D5A62BAEBBD63FAF812FA68B7D48958E23FCD492BEE16548C36019FA3B13A46F",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D5A62BAEBBD63FAF812FA68B7D48958E23FCD492BEE16548C36019FA3B13A46F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "series": {
      "default": {
      "masterId": "E4C77F6833816F9D777401731F3707FF8BCF8579F0757F67585488E0F18D5A5C",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E4C77F6833816F9D777401731F3707FF8BCF8579F0757F67585488E0F18D5A5C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "series": {
      "default": {
      "masterId": "F25A6765F4A7CD252A27A1FDA98C25BB12C3FE79DF711AFEB4CF240EA28BDAFB",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F25A6765F4A7CD252A27A1FDA98C25BB12C3FE79DF711AFEB4CF240EA28BDAFB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "F02E14728E98EDF1FB9B0820D91FA8C7F1E613CEE21B2633203E89A99E414CAA",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F02E14728E98EDF1FB9B0820D91FA8C7F1E613CEE21B2633203E89A99E414CAA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "1AB02677DC30DCA534644933E14B92BD3546FDD8F2CB3BE2A7C5E3EC35DD1BDE",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1AB02677DC30DCA534644933E14B92BD3546FDD8F2CB3BE2A7C5E3EC35DD1BDE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "C93E27D3E9C0832E0EED12A6E884FEAB160D43B04A4197B41384E2A578DDC29A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C93E27D3E9C0832E0EED12A6E884FEAB160D43B04A4197B41384E2A578DDC29A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "56F3AFF0D48C62AB0F1EDF687623B025AF69CB249CB0CA8A4054B196C334585D",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56F3AFF0D48C62AB0F1EDF687623B025AF69CB249CB0CA8A4054B196C334585D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "F7E437C87ECCE3F8E7892FA6EF3424B9EFB79DB5B6D5CC7389237286A0173480",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F7E437C87ECCE3F8E7892FA6EF3424B9EFB79DB5B6D5CC7389237286A0173480/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "6E482F0B1990CD258BF8072DF63D4EBCBCE46713B416DB1C54AD2CAFF9EC5B46",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E482F0B1990CD258BF8072DF63D4EBCBCE46713B416DB1C54AD2CAFF9EC5B46/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "66041CF853888BC91A22B27CE46C272AB6974501FA94566A031C2C51E85DBE5F",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/66041CF853888BC91A22B27CE46C272AB6974501FA94566A031C2C51E85DBE5F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "42D0A7CD918796BA8513B0944341CB3C7853DB8A681D25E435C4C52A406F17D6",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/42D0A7CD918796BA8513B0944341CB3C7853DB8A681D25E435C4C52A406F17D6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "AB05EA5D0D31221A176837EDF4992C8CF376635A0482EF2E7B5ABE4DFADED62D",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AB05EA5D0D31221A176837EDF4992C8CF376635A0482EF2E7B5ABE4DFADED62D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "55EE3BC4B064F7AB129A474FB3B8A143405317F904D9CBECE466F0F68608DBAE",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/55EE3BC4B064F7AB129A474FB3B8A143405317F904D9CBECE466F0F68608DBAE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "2.89": {
      "series": {
      "default": {
      "masterId": "EA133370D279EF1A9366C7585B3549922F5479156C6D452DBFA3F7EAB1E629E5",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EA133370D279EF1A9366C7585B3549922F5479156C6D452DBFA3F7EAB1E629E5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "5AAAC83C2697E24EF5C2B09823F37941C6007518E5E7671BCACB10D2E4BDCD8A",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5AAAC83C2697E24EF5C2B09823F37941C6007518E5E7671BCACB10D2E4BDCD8A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "4a7525d4-c1d9-48ae-8371-6688b7e62832",
      "text": {
      "title": {
      "full": {
      "series": {
      "default": {
      "content": "Becoming",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "slug": {
      "series": {
      "default": {
      "content": "becoming",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "cb2780aa-deee-47ef-bf0e-3a75c8d535d1",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-09-18",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/07/22/1595459670-192913.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "d55a9e17-588b-4ffb-a0a5-335bde5dae85",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "6ccrgpcKp2Fd",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MjAxNDMw",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "107a42cc-4443-482d-a780-9f880765731d",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "National Geographic",
      "partnerGroupId": "372084",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Lost on Everest - movie - d55a9e17-588b-4ffb-a0a5-335bde5dae85",
      "image": {
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "C2FEBE8BBEABBAC2A82C140DF9B41CA8292563E5E4252AE645B7F0332AD3FF45",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C2FEBE8BBEABBAC2A82C140DF9B41CA8292563E5E4252AE645B7F0332AD3FF45/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "CF6F135AE88597EA1C66B5E508CCDBC11A039DD85BA1622EDA77C16345F66370",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF6F135AE88597EA1C66B5E508CCDBC11A039DD85BA1622EDA77C16345F66370/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "DFB5300AA15BE8B9A90514D19E6C44072574905F3834EF0AF6B74398535FC8AA",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DFB5300AA15BE8B9A90514D19E6C44072574905F3834EF0AF6B74398535FC8AA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "program": {
      "default": {
      "masterId": "6062C9A941E4E3E698B4A0A954FEB6E2564A38B30A5B8AC8339857112CB21B73",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6062C9A941E4E3E698B4A0A954FEB6E2564A38B30A5B8AC8339857112CB21B73/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "B4E91EC424142C02D37AB709FC824A9BF4CFEE63D8A58447E750C8B0628E60CB",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B4E91EC424142C02D37AB709FC824A9BF4CFEE63D8A58447E750C8B0628E60CB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "5A0E9658EA9BB2040B6CA6A31C04E5C2C9C220E3431CFC81B95CBAC24A1863C0",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A0E9658EA9BB2040B6CA6A31C04E5C2C9C220E3431CFC81B95CBAC24A1863C0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "BC107719ED18CB592657E1B04CB887A34096CB199A75734B2E6ED6E891278743",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC107719ED18CB592657E1B04CB887A34096CB199A75734B2E6ED6E891278743/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "6B66B42268BB569B4DCCA1A2691BD302780AF0076B6B94991EFB9BC8733C54DC",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B66B42268BB569B4DCCA1A2691BD302780AF0076B6B94991EFB9BC8733C54DC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "770AE10B46218795A5D321531512048D75D0F708A20915D0B0D62A2ECA997C6B",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/770AE10B46218795A5D321531512048D75D0F708A20915D0B0D62A2ECA997C6B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "94E2A26E88AA8606B575545CAF6F5A208AE0FD2655C087DD6EE73ADF3134069E",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/94E2A26E88AA8606B575545CAF6F5A208AE0FD2655C087DD6EE73ADF3134069E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "76F4CCB530B671D021B55AA1F83B44AA5DCAB694FDEE1D264BE9FF00C3407B3F",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/76F4CCB530B671D021B55AA1F83B44AA5DCAB694FDEE1D264BE9FF00C3407B3F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "4CB82003DC27FD6C4BFF9895B9869851E65F903DC96224B83C935DDF509DF97C",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4CB82003DC27FD6C4BFF9895B9869851E65F903DC96224B83C935DDF509DF97C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "AF5E9354D6D49115E08B30021566C25BBDBC6A74B4DAFAAA04A43D9F1EE324B4",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AF5E9354D6D49115E08B30021566C25BBDBC6A74B4DAFAAA04A43D9F1EE324B4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "00237200ADF152BAD3B63246131B4D87C35C5D6163CA4E073B759BDCDB224396",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/00237200ADF152BAD3B63246131B4D87C35C5D6163CA4E073B759BDCDB224396/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "CC0C277E78EF7D99C35D37818D35C95685F1BBD9DCBE64FFAE3F37A4B2C98C45",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC0C277E78EF7D99C35D37818D35C95685F1BBD9DCBE64FFAE3F37A4B2C98C45/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "7a0d2b96-7aa7-44fb-b405-c29c6765fd00",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/7a0d2b96-7aa7-44fb-b405-c29c6765fd00/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 3603000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "107a42cc-4443-482d-a780-9f880765731d",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "lost-on-everest",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Lost on Everest",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "ED9C-29D9-0922-6E38-922C-S"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": "L",
      "system": "TVPG",
      "value": "TV-14"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-06-30",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "9e5d2797-2549-4890-b42f-d5bacd62cf82"
      },
      {
      "contentId": "0ba8ea07-cacc-45dc-818a-1362daa2633f",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "5rOeENEXQcTA",
      "image": {
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "1EB869C078992B94B225DC04C211EBE0839E942163F93FB20A23629AE1B49E67",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1EB869C078992B94B225DC04C211EBE0839E942163F93FB20A23629AE1B49E67/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "9A77CFC5AAEB8D1B5EF60C1B6CFBEA2FDB0B9179A3F93C5E4FA5088C7C1207CD",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9A77CFC5AAEB8D1B5EF60C1B6CFBEA2FDB0B9179A3F93C5E4FA5088C7C1207CD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "AFEB2296C65ECC93CB4E392F5210E8221E3DC4809A84B1982EB6B83C560F1460",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AFEB2296C65ECC93CB4E392F5210E8221E3DC4809A84B1982EB6B83C560F1460/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "series": {
      "default": {
      "masterId": "25F3B92553EFB01831DE1B2E6B4C43FB8460D26789C8ACC42715624D9A33043C",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/25F3B92553EFB01831DE1B2E6B4C43FB8460D26789C8ACC42715624D9A33043C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "series": {
      "default": {
      "masterId": "303E263FC51DB99580B8B8DC8FBF76441BB3DE08FF5017058909B2D17A32CF6F",
      "masterWidth": 1400,
      "masterHeight": 1400,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/303E263FC51DB99580B8B8DC8FBF76441BB3DE08FF5017058909B2D17A32CF6F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "ADBB2301638EE19BF5F3C4E6CE0B697008A508F60A3D1D0E0D6BBE8127A4F435",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ADBB2301638EE19BF5F3C4E6CE0B697008A508F60A3D1D0E0D6BBE8127A4F435/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "94A65BA7DB4DF407010E4E1455B7F994F504B3BC152DE434FEF1D9B9EEA89CB5",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/94A65BA7DB4DF407010E4E1455B7F994F504B3BC152DE434FEF1D9B9EEA89CB5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "92E26962D9C9B0BA944B8209CA68C1AD115F1F40DFF0152AB0AE68D1BAE423C8",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/92E26962D9C9B0BA944B8209CA68C1AD115F1F40DFF0152AB0AE68D1BAE423C8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "B87E14D53ADD0FA1A3C6D1A720DDBBABA72C783C4913C5421D0F9FD9AABF97B2",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B87E14D53ADD0FA1A3C6D1A720DDBBABA72C783C4913C5421D0F9FD9AABF97B2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "861F175023920DA6955BF3FB9E8666D77AF033BEC748559A28F8F685CE06CF60",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/861F175023920DA6955BF3FB9E8666D77AF033BEC748559A28F8F685CE06CF60/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "8462E9DC9785BD21BE9652AE951F49F4DAF1B8FAA7C437AC39C69490AC846C0F",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8462E9DC9785BD21BE9652AE951F49F4DAF1B8FAA7C437AC39C69490AC846C0F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "1CE4CB5077425E4115902F5B1F8E54DCBEA53B956C3121EC95C780992EEB29B8",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1CE4CB5077425E4115902F5B1F8E54DCBEA53B956C3121EC95C780992EEB29B8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "6AA140F04BD0A7B0617D97611AD0C3158EFADC057E47666E8C8FDB7B30051971",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6AA140F04BD0A7B0617D97611AD0C3158EFADC057E47666E8C8FDB7B30051971/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "EB47FAF75D299B1B851C5A4D33DCEA094CAA9163564D237FF72213E4A6CC53B4",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EB47FAF75D299B1B851C5A4D33DCEA094CAA9163564D237FF72213E4A6CC53B4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "0ED707F3D58196EECEAC7A010F932E4FEFBDCAC2D6FBD45F5ABF3B0019CB1219",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ED707F3D58196EECEAC7A010F932E4FEFBDCAC2D6FBD45F5ABF3B0019CB1219/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "73D33FF6D7F1C49E354E19E4A41BF6472DA21813A6D3F827B7FCB44874E2E8D7",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/73D33FF6D7F1C49E354E19E4A41BF6472DA21813A6D3F827B7FCB44874E2E8D7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "1FFB35224462843E268D9DB3D7255D840688BD489182DC1FEA5874C99FDB186E",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1FFB35224462843E268D9DB3D7255D840688BD489182DC1FEA5874C99FDB186E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "0ba8ea07-cacc-45dc-818a-1362daa2633f",
      "text": {
      "title": {
      "full": {
      "series": {
      "default": {
      "content": "Drain the Oceans",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "slug": {
      "series": {
      "default": {
      "content": "drain-the-oceans",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "0a2343a6-e9f7-47cd-aa12-171f32626d5e",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-14"
      }
      ],
      "releases": [
      {
      "releaseDate": "2018-05-28",
      "releaseType": "original",
      "releaseYear": 2018,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/28/1566950674-190916.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "3cacf189-e52d-4c00-9012-8542c00da1ea",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "133QEwnfPqw5",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTk1ODY0",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "2afd963c-7cdd-4823-b3e2-4008a82220f6",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "National Geographic",
      "partnerGroupId": "372084",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Titanic: 20 Years Later With James Cameron - movie - 3cacf189-e52d-4c00-9012-8542c00da1ea",
      "image": {
      "tile": {
      "0.71": {
      "program": {
      "default": {
      "masterId": "A7058F8355F8F80033FD90A271DBDF575AC24B8205E1C937C03793E3BEA536DD",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A7058F8355F8F80033FD90A271DBDF575AC24B8205E1C937C03793E3BEA536DD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "program": {
      "default": {
      "masterId": "DEF6E9BDA5E4AF8B03DCA8DDE6FBB42531362A08326F98BB93C551B36FEC435A",
      "masterWidth": 1400,
      "masterHeight": 1400,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DEF6E9BDA5E4AF8B03DCA8DDE6FBB42531362A08326F98BB93C551B36FEC435A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "77D291DC16697B3A3DAAA4EE4532021FA7D11B98BB6C1A77B157E66432E5142F",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77D291DC16697B3A3DAAA4EE4532021FA7D11B98BB6C1A77B157E66432E5142F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "AF579B7E2FE2B81F5A476ABBC88BFB7711916C0CCA4C9782B2377CD751A75F69",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AF579B7E2FE2B81F5A476ABBC88BFB7711916C0CCA4C9782B2377CD751A75F69/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "8ECD55D26D30F157166EAC9A845745B621D38FB4BD801DBEE8BF57F421E33BFA",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8ECD55D26D30F157166EAC9A845745B621D38FB4BD801DBEE8BF57F421E33BFA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "7F0BD8FB2266B9E546834AA8EBF71251D7F88ABD7AEB29837B0FA830E56C021D",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F0BD8FB2266B9E546834AA8EBF71251D7F88ABD7AEB29837B0FA830E56C021D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "2C1500E6B1DB9D576CCB557B937DB540BD5BA22697B08166B39E602FF36AD0B9",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2C1500E6B1DB9D576CCB557B937DB540BD5BA22697B08166B39E602FF36AD0B9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "8654490E57CEAEA2C9D1DA17C9F0FC2CD56EE97C6CCA706A5CE92E5450C3CB39",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8654490E57CEAEA2C9D1DA17C9F0FC2CD56EE97C6CCA706A5CE92E5450C3CB39/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "A10C430382C225F3F71A721FD4B7C5D3ADCB11FB5BC584F44B9197DE68D2DF4D",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A10C430382C225F3F71A721FD4B7C5D3ADCB11FB5BC584F44B9197DE68D2DF4D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "BDA990B26AB1350A7EC3DA3DE051C5A523EC60D43E7DE85586DD55D7FE08E72B",
      "masterWidth": 3420,
      "masterHeight": 874,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BDA990B26AB1350A7EC3DA3DE051C5A523EC60D43E7DE85586DD55D7FE08E72B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "E857CEDF0BAE29FE1A5695CDB16BDABB6C8A0AF6C463A32DAF228A19C9B493E8",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E857CEDF0BAE29FE1A5695CDB16BDABB6C8A0AF6C463A32DAF228A19C9B493E8/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "3D5E8A4FA1C41EC486082A990635C580EE55B41CADCFEDD9E371DD7729BA7D55",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D5E8A4FA1C41EC486082A990635C580EE55B41CADCFEDD9E371DD7729BA7D55/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "58A80B4B6EF15E61EDA9119785615F9ED4116A555980536AEC4317E838618336",
      "masterWidth": 3420,
      "masterHeight": 874,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/58A80B4B6EF15E61EDA9119785615F9ED4116A555980536AEC4317E838618336/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "606FC8ECA2186EA6F2F1F1F03A8CD0B11E617ECC6266173CB95DDDC299B8A0CE",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/606FC8ECA2186EA6F2F1F1F03A8CD0B11E617ECC6266173CB95DDDC299B8A0CE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "2D8CF491099E8C131BABCA8B09DC0C24103327D594E329591E4E199C5B3AB4BE",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D8CF491099E8C131BABCA8B09DC0C24103327D594E329591E4E199C5B3AB4BE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "E841AA28C0448CD1145CEFF938DB2948F0208BFB5ADADC1D7A3E70BC88B1BE2E",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E841AA28C0448CD1145CEFF938DB2948F0208BFB5ADADC1D7A3E70BC88B1BE2E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "B12FC92A514A121E3218CA6B555ABF4D7F2187C817C5758E4D6821C4CC549E2E",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B12FC92A514A121E3218CA6B555ABF4D7F2187C817C5758E4D6821C4CC549E2E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "f5d32437-ef07-4885-9950-905447ae2cf0",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/f5d32437-ef07-4885-9950-905447ae2cf0/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 2841000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "2afd963c-7cdd-4823-b3e2-4008a82220f6",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "titanic-20-years-later-with-james-cameron",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Titanic: 20 Years Later With James Cameron",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "4D10-E8A3-9857-4DEE-9111-D"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2017-11-26",
      "releaseType": "original",
      "releaseYear": 2017,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/29/1567113696-195864.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ],
      "videoId": "699009ca-3b23-4499-af41-aa429a55b6a7"
      },
      {
      "contentId": "aff7dd19-b721-4ae1-9c2a-70926e75ddb1",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "18F9hNDT0w1K",
      "image": {
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "B003596CDD8C2CF19C9F31E850B766CE8FD1966A1DBD7BFAE4C54464E3E41A88",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B003596CDD8C2CF19C9F31E850B766CE8FD1966A1DBD7BFAE4C54464E3E41A88/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "8525B0B6F6AA88CD903B4B68473DDE59A88FD36787FAD8B11726FC29CF9E9707",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8525B0B6F6AA88CD903B4B68473DDE59A88FD36787FAD8B11726FC29CF9E9707/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "EC4D97AF2181FA1AB8699D96FF2C56D0F4BC15D409F4124EA6EAF88D16104C1A",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EC4D97AF2181FA1AB8699D96FF2C56D0F4BC15D409F4124EA6EAF88D16104C1A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "B145C9DB8ACB39E82E23B7D8F85811E8FBDE9124426DB83E411C6C7D77F52B3C",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B145C9DB8ACB39E82E23B7D8F85811E8FBDE9124426DB83E411C6C7D77F52B3C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "AB39FC30CB88B190F61A736CA6C161FC61AB89EE8D195551DF50B8788922BB88",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AB39FC30CB88B190F61A736CA6C161FC61AB89EE8D195551DF50B8788922BB88/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.75": {
      "series": {
      "default": {
      "masterId": "07A262FE75A6DE582AC770E611DA8011961645D08BF8D35167671A21DE893390",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07A262FE75A6DE582AC770E611DA8011961645D08BF8D35167671A21DE893390/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "610134C854E80A17C62BC9EA95233C03B77D7310337CF8DEB5CF33A8E037B428",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/610134C854E80A17C62BC9EA95233C03B77D7310337CF8DEB5CF33A8E037B428/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "607DF7CA941FF63CB0D4984B6405A6B192F1B4CC186D26EAB289DA5E2CB3AED1",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/607DF7CA941FF63CB0D4984B6405A6B192F1B4CC186D26EAB289DA5E2CB3AED1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "C98BE2D0D46F4B05320A1DBB28153E762A5B736BAFD3A4DC8AA46221D2354180",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C98BE2D0D46F4B05320A1DBB28153E762A5B736BAFD3A4DC8AA46221D2354180/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "series": {
      "default": {
      "masterId": "933DAAEEBDE668CE002267E86C28986AC398D66B9B5058F68B07F5BC82555C31",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/933DAAEEBDE668CE002267E86C28986AC398D66B9B5058F68B07F5BC82555C31/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "series": {
      "default": {
      "masterId": "4F29D0B0BDA4B68F469531946E63D82829AE2763DE47B858C2DA1388882C3696",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F29D0B0BDA4B68F469531946E63D82829AE2763DE47B858C2DA1388882C3696/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "2E8CA17487525F7E42BADC6F1A4FFF4909F195A93DC701957579F8321B46CE1D",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2E8CA17487525F7E42BADC6F1A4FFF4909F195A93DC701957579F8321B46CE1D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "75686C0283C7FDB187E231EB893A674D6E508ED7A0628AA293A3F49310FC9803",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/75686C0283C7FDB187E231EB893A674D6E508ED7A0628AA293A3F49310FC9803/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "90F39BBE3C387F94E8315B9CCF08E873947337D8DD25EFFD2142283855486BFF",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/90F39BBE3C387F94E8315B9CCF08E873947337D8DD25EFFD2142283855486BFF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "BA2C4275BBCFE5043B3A0781DFB38A4194CB9C10EE722A4382D64CDA5E795C80",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BA2C4275BBCFE5043B3A0781DFB38A4194CB9C10EE722A4382D64CDA5E795C80/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "6BF0663A056E811696924B21555519BCCE437255903B909DD0172BF5C04D25CA",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6BF0663A056E811696924B21555519BCCE437255903B909DD0172BF5C04D25CA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "F2AC0C9E3D6AEA0BBD5F4ACB1B898D50C06FF3E29BD42A33C40E703A75A4A29D",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F2AC0C9E3D6AEA0BBD5F4ACB1B898D50C06FF3E29BD42A33C40E703A75A4A29D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "D8532BDD971572D072900A14BA3E3E3D7F694BA84D40D3B73CE6856363BED361",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D8532BDD971572D072900A14BA3E3E3D7F694BA84D40D3B73CE6856363BED361/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.89": {
      "series": {
      "default": {
      "masterId": "DAC612019CB7403553176018DBA8EE0329EFF1ABDD0AE75471A90643B73A5F8C",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DAC612019CB7403553176018DBA8EE0329EFF1ABDD0AE75471A90643B73A5F8C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "aff7dd19-b721-4ae1-9c2a-70926e75ddb1",
      "text": {
      "title": {
      "slug": {
      "series": {
      "default": {
      "content": "rogue-trip",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "full": {
      "series": {
      "default": {
      "content": "Rogue Trip",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "1783fa25-3e97-4557-877e-ffcc86e13157",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-07-24",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/07/02/1593723990-191611.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "36a6c1d5-4fb2-4878-8662-15414bb031b5",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "4j7q4cqOWOjO",
      "image": {
      "title_treatment_layer": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "4F7A15779B19EF87B1BCAEE7CF9A948352309C2DA47907A20C7C42608574E4C3",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F7A15779B19EF87B1BCAEE7CF9A948352309C2DA47907A20C7C42608574E4C3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "7C1E3F843797F51E338038EBB6940FA15A7C4B363A5D0CAE68EE39FAE182B603",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7C1E3F843797F51E338038EBB6940FA15A7C4B363A5D0CAE68EE39FAE182B603/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "D34301D52B38D9F7BCADC4893A57A0273AECED55745DA2AD969F408F77D74C04",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D34301D52B38D9F7BCADC4893A57A0273AECED55745DA2AD969F408F77D74C04/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "EE179C52DEB7DEDC5CB850266E8B80AD0DCD5BAE800C8C861A29ABF5489EA335",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EE179C52DEB7DEDC5CB850266E8B80AD0DCD5BAE800C8C861A29ABF5489EA335/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "E4548ADC3038AF2CF9DD1243152F8A9590FA2019EB4B630BF03CE24B60AC80DD",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E4548ADC3038AF2CF9DD1243152F8A9590FA2019EB4B630BF03CE24B60AC80DD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "series": {
      "default": {
      "masterId": "788499AE489692425871C88607966844E8AE36604FFE788A363B5F2487B8E7C6",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/788499AE489692425871C88607966844E8AE36604FFE788A363B5F2487B8E7C6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "series": {
      "default": {
      "masterId": "C9B70CA31DA87CA447300845F03D7349C605DB30FA0E45B184291048DD1527B0",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C9B70CA31DA87CA447300845F03D7349C605DB30FA0E45B184291048DD1527B0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "series": {
      "default": {
      "masterId": "70E2CBE7605F964A01C19E55192796CF91A66945819C5238533162B8C87E9302",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/70E2CBE7605F964A01C19E55192796CF91A66945819C5238533162B8C87E9302/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "CE0A8B5099616B45EB29E2A0F253C861E5EEB61A39EC120F7050378DC86B0951",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CE0A8B5099616B45EB29E2A0F253C861E5EEB61A39EC120F7050378DC86B0951/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "B441A88A0F49E7CC3D9D0210542496D4609FC55E32DDC9DC2DA613E54AED5A81",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B441A88A0F49E7CC3D9D0210542496D4609FC55E32DDC9DC2DA613E54AED5A81/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "EC639E1E1D893E949BEC33F3CB4CE4D6289EDCE19662190701E4E72EFFC5F271",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EC639E1E1D893E949BEC33F3CB4CE4D6289EDCE19662190701E4E72EFFC5F271/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "D609F0B7C2292254CB86D684270D75818D2DD75C603A21E257BD44FCC7B85B0D",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D609F0B7C2292254CB86D684270D75818D2DD75C603A21E257BD44FCC7B85B0D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "FA904D9AC63DAA0A745E6C53FC5540A1620B0AD41AE9DBD955B62BA74DC0FB0F",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA904D9AC63DAA0A745E6C53FC5540A1620B0AD41AE9DBD955B62BA74DC0FB0F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "EA7E8ABC84F5711113E3F59327520E72FC1BEEF2ABF0DDA04A2384F25CEA7AD5",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EA7E8ABC84F5711113E3F59327520E72FC1BEEF2ABF0DDA04A2384F25CEA7AD5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "E2D726498A96CB4DD02C0B1A34FCC7D1DCBA5BF4AADB7D069CC12DFCAD0D49D6",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E2D726498A96CB4DD02C0B1A34FCC7D1DCBA5BF4AADB7D069CC12DFCAD0D49D6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "C623EB5F79EC24EFBB187B19CC689912B68EE00B0AEC264C3EE5B69F1581C691",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C623EB5F79EC24EFBB187B19CC689912B68EE00B0AEC264C3EE5B69F1581C691/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.89": {
      "series": {
      "default": {
      "masterId": "0623705461DE5A06A0B1E4B282425A2F814DE1A1BE423C19D59CEE516A9D46D9",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0623705461DE5A06A0B1E4B282425A2F814DE1A1BE423C19D59CEE516A9D46D9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "C1A25A7E1099CA5376813A7A77744BDE45FA01A918851FB20B5A4CB52A1A13C1",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C1A25A7E1099CA5376813A7A77744BDE45FA01A918851FB20B5A4CB52A1A13C1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "B99B3C3119A2A269BD0BB10F47327503AA3AC959561078D434929A2B0BAB173A",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B99B3C3119A2A269BD0BB10F47327503AA3AC959561078D434929A2B0BAB173A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "36a6c1d5-4fb2-4878-8662-15414bb031b5",
      "text": {
      "title": {
      "full": {
      "series": {
      "default": {
      "content": "Lost Cities With Albert Lin",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "slug": {
      "series": {
      "default": {
      "content": "lost-cities-with-albert-lin",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "884b65a6-768e-41c3-aa64-845ca34c0288",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2019-10-20",
      "releaseType": "original",
      "releaseYear": 2019,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": []
      },
      {
      "contentId": "ba9c804f-51e2-41fb-9b23-41e698865602",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "6TfLFyQBFAjV",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6NDMxNjg",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "fd190e22-f703-4576-84da-2fc28f82822d",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Sacred Planet - movie - ba9c804f-51e2-41fb-9b23-41e698865602",
      "image": {
      "tile": {
      "0.67": {
      "program": {
      "default": {
      "masterId": "DEF3BE25B5BC57F0FE9640A21C3FEFB7A034C1E608781C4CF4E7C4ED60646E59",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DEF3BE25B5BC57F0FE9640A21C3FEFB7A034C1E608781C4CF4E7C4ED60646E59/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "B71AB90CA7CF0950A289806DA127E68ECA4506689B5BDC75ED697779E52C44EC",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B71AB90CA7CF0950A289806DA127E68ECA4506689B5BDC75ED697779E52C44EC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "6817F2C5A7DCDB6ED5F7255B61B3087B7DF1131087FD4BDE4AAAF777FAED326C",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6817F2C5A7DCDB6ED5F7255B61B3087B7DF1131087FD4BDE4AAAF777FAED326C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "32EF48D7C4991FA577A9F6E20885E6EC71FD623C34A174C0019A56AB2152E040",
      "masterWidth": 767,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/32EF48D7C4991FA577A9F6E20885E6EC71FD623C34A174C0019A56AB2152E040/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "2CA591443F81C229EE9D7476784229FBA8238D2A09827F899568E116FD253871",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2CA591443F81C229EE9D7476784229FBA8238D2A09827F899568E116FD253871/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "384A71B3B09870B3400963AB5B6CA2D67E40C3F3ECEAE27BA9E691414115A730",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/384A71B3B09870B3400963AB5B6CA2D67E40C3F3ECEAE27BA9E691414115A730/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "E61AF75ECB2E6EBACCB5DE20E390CCEDEDDE534848E7483B67541AEC7D72049D",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E61AF75ECB2E6EBACCB5DE20E390CCEDEDDE534848E7483B67541AEC7D72049D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "9E93107241EED4BF78FA357D71002F325A1C158986AB3FD69911475617FD8146",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9E93107241EED4BF78FA357D71002F325A1C158986AB3FD69911475617FD8146/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "program": {
      "default": {
      "masterId": "8772DF46E276662E43B6F969F055EF6AE6D76BAF228E6CD3913078430A8C71FA",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8772DF46E276662E43B6F969F055EF6AE6D76BAF228E6CD3913078430A8C71FA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "0EC51CDA5112B1BFE2009EAA04EA471E72F3B7A74805F2988D1F8B4B3E914F41",
      "masterWidth": 1344,
      "masterHeight": 756,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0EC51CDA5112B1BFE2009EAA04EA471E72F3B7A74805F2988D1F8B4B3E914F41/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "EBEE20BCFFE78935C85666D34930C2570D3C69F28D6260FB1149032DEB21DB2E",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EBEE20BCFFE78935C85666D34930C2570D3C69F28D6260FB1149032DEB21DB2E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "9D03B4A703BC7D83769D91D0C344CE8B08E2C670B206256840A3385B1AA055F5",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D03B4A703BC7D83769D91D0C344CE8B08E2C670B206256840A3385B1AA055F5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "59135785B0D6AB21273CF9545A2E56645D15B7D1DCE28A6E353F1BC98C7658AF",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/59135785B0D6AB21273CF9545A2E56645D15B7D1DCE28A6E353F1BC98C7658AF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "DE7F891C8500E9DEDB3DA1ECA4D6F9D4E5EB16AA6CA95F5ADB54F124EEBA7E23",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DE7F891C8500E9DEDB3DA1ECA4D6F9D4E5EB16AA6CA95F5ADB54F124EEBA7E23/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "B813CE497B053A21499A13E8610B1165B4C7702675467B1A7997745EF0040C7D",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B813CE497B053A21499A13E8610B1165B4C7702675467B1A7997745EF0040C7D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "47B080C0941ABACAFD7BA26E24DB5131306BD5D7484F930DE205BE0201996DEF",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47B080C0941ABACAFD7BA26E24DB5131306BD5D7484F930DE205BE0201996DEF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "d53c7e21-b28b-4d15-b94c-65d59c3db4b3",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/d53c7e21-b28b-4d15-b94c-65d59c3db4b3/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 2832000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "fd190e22-f703-4576-84da-2fc28f82822d",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Sacred Planet",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "sacred-planet",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "2BEA-9EF9-A308-37E2-EBFA-9"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "G"
      }
      ],
      "releases": [
      {
      "releaseDate": "2004-04-22",
      "releaseType": "original",
      "releaseYear": 2004,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "7739e9a8-a099-434e-a91a-633cd62c3cb0"
      },
      {
      "contentId": "f05e9dd6-b502-4d17-88f4-ca844b5554e4",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "17LvGq9oF1ka",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6NzI2NDE",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "35aca873-e4f0-45d4-bce7-f1a99d8b5e45",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Walt Disney Studios (Live Action)",
      "partnerGroupId": "531035",
      "type": "disneyPlusFranchise"
      },
      {
      "name": "Disney",
      "partnerGroupId": "427641",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Roving Mars - movie - f05e9dd6-b502-4d17-88f4-ca844b5554e4",
      "image": {
      "tile": {
      "0.67": {
      "program": {
      "default": {
      "masterId": "C58626A87FDF17578514A355EDFB267859E7E696ECD172A50D0540982408FAED",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C58626A87FDF17578514A355EDFB267859E7E696ECD172A50D0540982408FAED/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "4DB340ED0860752F2276027F3FA5E8E5C29518440FD8CB0728C14B28E881E001",
      "masterWidth": 767,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4DB340ED0860752F2276027F3FA5E8E5C29518440FD8CB0728C14B28E881E001/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "9F1410AFAE79D94E8AAC47E31E2E20ACF0498D0E155CB81C3FD45494B5251068",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F1410AFAE79D94E8AAC47E31E2E20ACF0498D0E155CB81C3FD45494B5251068/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "4673B4E388E69993A54B473742BBEC8619B96AD8D9780482D5803C2BC8EC4ECC",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4673B4E388E69993A54B473742BBEC8619B96AD8D9780482D5803C2BC8EC4ECC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "DE8DD29A1E4AA0A762457BA30D9D534D6C05702487FB5546B097318101CB8F05",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DE8DD29A1E4AA0A762457BA30D9D534D6C05702487FB5546B097318101CB8F05/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "74B677CEA376274EAD32B4F65A2CA9F5029637746D82B96873A7564F22BA7A60",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/74B677CEA376274EAD32B4F65A2CA9F5029637746D82B96873A7564F22BA7A60/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "0408186EBC6378E5591878E9898ECF78D601C736243DD1A5CA30AAE3BE8C771E",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0408186EBC6378E5591878E9898ECF78D601C736243DD1A5CA30AAE3BE8C771E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "F5870AE879FE136557A902085E74DBFA42182F42D1684447FF339485249144B4",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F5870AE879FE136557A902085E74DBFA42182F42D1684447FF339485249144B4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "381A6922BE470870EBD70A8D58FB4D88DBF836ECE69142D834FB0A7CC42027BC",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/381A6922BE470870EBD70A8D58FB4D88DBF836ECE69142D834FB0A7CC42027BC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "5357FF1C163AB8E655BFB1061378A602E108F8B02727A0F2774B0FC9F1C38EC2",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5357FF1C163AB8E655BFB1061378A602E108F8B02727A0F2774B0FC9F1C38EC2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "898D4FB20D8941BDF3AA7CB5B0BE3B157B06192D2BEE8B26E23FD8D6135A3A13",
      "masterWidth": 1344,
      "masterHeight": 756,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/898D4FB20D8941BDF3AA7CB5B0BE3B157B06192D2BEE8B26E23FD8D6135A3A13/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "4630E05843BE5667B5C25EEF5FCD7C5BD25E2159D84EEAA01C1272473DB2EA10",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4630E05843BE5667B5C25EEF5FCD7C5BD25E2159D84EEAA01C1272473DB2EA10/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "145E9E51907176B21569E153789EF954BB062994473E2FCEF167EA5341D37236",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/145E9E51907176B21569E153789EF954BB062994473E2FCEF167EA5341D37236/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "F47EED50E6F068534E2334A4ADC4C12E940A4DD1515444B8C7581CEC20980B11",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F47EED50E6F068534E2334A4ADC4C12E940A4DD1515444B8C7581CEC20980B11/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "9A2D67C4890A5CF460BC2772DD16149AC23002F5CC9EA20D41DEA8E1A8A308D3",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9A2D67C4890A5CF460BC2772DD16149AC23002F5CC9EA20D41DEA8E1A8A308D3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "9D00C86AC4542AE3FE673607CDBDC0C59CDEEFEFD92DB56AADCB1F97BE7A7823",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D00C86AC4542AE3FE673607CDBDC0C59CDEEFEFD92DB56AADCB1F97BE7A7823/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "f5d767da-7916-44b1-ab7d-2e0cda9f50c4",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/f5d767da-7916-44b1-ab7d-2e0cda9f50c4/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 2441000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "35aca873-e4f0-45d4-bce7-f1a99d8b5e45",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "slug": {
      "program": {
      "default": {
      "content": "roving-mars",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "full": {
      "program": {
      "default": {
      "content": "Roving Mars",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      },
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "C4A0-6D35-3FF6-A6CD-9BEF-K"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "MPAA",
      "value": "G"
      }
      ],
      "releases": [
      {
      "releaseDate": "2006-01-27",
      "releaseType": "original",
      "releaseYear": 2006,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "ff18f45a-4a44-4fd6-ac58-16f3b28d1aad"
      },
      {
      "contentId": "0c15e363-cc10-4823-95d7-a8381c6de67e",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "39IbWF2bThid",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MjAxMjQ5",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "96afec93-2452-45a1-a298-66dc182bf1a2",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "National Geographic",
      "partnerGroupId": "372084",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Mission to the Sun - movie - 0c15e363-cc10-4823-95d7-a8381c6de67e",
      "image": {
      "title_treatment_layer": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "B3F7E78E5C6A7327C9C66318C027F1F63AE736BCF17BCA95BA3D335A234E8A92",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B3F7E78E5C6A7327C9C66318C027F1F63AE736BCF17BCA95BA3D335A234E8A92/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "C6BF91DA6E0B8FA7E90F22DEB10EC9B21E58808AF6A8D3C7BC7995AC5F55D79D",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C6BF91DA6E0B8FA7E90F22DEB10EC9B21E58808AF6A8D3C7BC7995AC5F55D79D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "333F3D305FCADE532D4D0B5BCA9F0972330CAE22632E728828C201CEF24B704E",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/333F3D305FCADE532D4D0B5BCA9F0972330CAE22632E728828C201CEF24B704E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "0.71": {
      "program": {
      "default": {
      "masterId": "366B369C2AF85EF185DBFB0FD35B13FB7E676407B5FA3A143846D1CCB759E08B",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/366B369C2AF85EF185DBFB0FD35B13FB7E676407B5FA3A143846D1CCB759E08B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "E7D5D42087B81CE9F9907012E95BE3FF9FCD0601F448DD60866C16AEE6B0F95E",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7D5D42087B81CE9F9907012E95BE3FF9FCD0601F448DD60866C16AEE6B0F95E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "program": {
      "default": {
      "masterId": "B82A2B4CB8EA55BD5FBE666AE96E75A1CE881ACDF00FC5E1601EB1A55FD21EB2",
      "masterWidth": 1400,
      "masterHeight": 1400,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B82A2B4CB8EA55BD5FBE666AE96E75A1CE881ACDF00FC5E1601EB1A55FD21EB2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "8328C4C96D1A9EBBD16488F343B1D3AD3A86A0DD1F5CBEE64779979411E99440",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8328C4C96D1A9EBBD16488F343B1D3AD3A86A0DD1F5CBEE64779979411E99440/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "D145D5FF68A7885B037A3E2559A7AD39E92DE76C84D7E1D0BA12A06606E8AD68",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D145D5FF68A7885B037A3E2559A7AD39E92DE76C84D7E1D0BA12A06606E8AD68/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "E7D811E553212F504EE1BFD59AC297BA47859A6834607A2932D9F16E2C2BF9F0",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7D811E553212F504EE1BFD59AC297BA47859A6834607A2932D9F16E2C2BF9F0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "program": {
      "default": {
      "masterId": "FA4E5B96800E0DAEFD98C9CB41219799E384FE9DFC3ABE0287F5EF62BACA7944",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA4E5B96800E0DAEFD98C9CB41219799E384FE9DFC3ABE0287F5EF62BACA7944/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "86814293F5040510D08EFA10059AC858DF3BFD23F4510DF702E9FB3BE7BCA84D",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/86814293F5040510D08EFA10059AC858DF3BFD23F4510DF702E9FB3BE7BCA84D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "77971153FB72B18482DC147BA589E7928937A9A425AB6458569EEE633D80A70A",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77971153FB72B18482DC147BA589E7928937A9A425AB6458569EEE633D80A70A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "167FADD4CDA7539F05E0AB7FA1955F251428FF01184C2A0B7AE85ED17A3E9D75",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/167FADD4CDA7539F05E0AB7FA1955F251428FF01184C2A0B7AE85ED17A3E9D75/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "693A2F113430D821FA2D423C2CFB408091047702064EEF5D38C0E982899CD665",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/693A2F113430D821FA2D423C2CFB408091047702064EEF5D38C0E982899CD665/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "B1E784EAEEBA4A19E99D4E3A4C4DC95D6393284E36C08F123503CEEBDDD35E54",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B1E784EAEEBA4A19E99D4E3A4C4DC95D6393284E36C08F123503CEEBDDD35E54/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "F81F2A086B9BA60A06DB1C9331A2991EE2D2FDA1E73D83700195422C957D5195",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F81F2A086B9BA60A06DB1C9331A2991EE2D2FDA1E73D83700195422C957D5195/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "EE4C4825CAF743693013C92419208F6324C02747573B5BFDB9B2316647A639CC",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EE4C4825CAF743693013C92419208F6324C02747573B5BFDB9B2316647A639CC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "ce16dbfb-cbac-4da1-8f74-fca257b85f1e",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/ce16dbfb-cbac-4da1-8f74-fca257b85f1e/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 2621000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "96afec93-2452-45a1-a298-66dc182bf1a2",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Mission to the Sun",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "mission-to-the-sun",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      },
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "F6B5-FECF-1A32-AEB2-A8FA-O"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2018-11-19",
      "releaseType": "original",
      "releaseYear": 2018,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "27047900-1a1d-4b03-a606-8ee899dc5487"
      },
      {
      "contentId": "594b30b0-5065-48a4-9e5f-8ac3222e8e6e",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "4fkNq5DfRSr2",
      "image": {
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "BC0FC8A0E66457DC34A80EB428F5C91997F2F9BEEAB4AE6A4A6B43BEE4A2726D",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC0FC8A0E66457DC34A80EB428F5C91997F2F9BEEAB4AE6A4A6B43BEE4A2726D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "9590BD842CDF8C5D4EEC8A797D863A0DCB43D6899B032D8E36245CCE774C1C8E",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9590BD842CDF8C5D4EEC8A797D863A0DCB43D6899B032D8E36245CCE774C1C8E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "EDEB57346AD51806FF50D6A7901B19996EB4F197A9DE4D9FF29319F919C0C1E0",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EDEB57346AD51806FF50D6A7901B19996EB4F197A9DE4D9FF29319F919C0C1E0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "B386FF8B44F085BE6C751714693C4F7228792558FD8862844982AD4B1F6C8950",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B386FF8B44F085BE6C751714693C4F7228792558FD8862844982AD4B1F6C8950/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "0E30CB70613286CE87C90DA662EB4D4AD4BFD4B1FAAE461FB628D2F0E3A2B6E3",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0E30CB70613286CE87C90DA662EB4D4AD4BFD4B1FAAE461FB628D2F0E3A2B6E3/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "04BB37B3EAC7506F30854D015E16031D1C40B13FCEE11F154736235AA20D831F",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/04BB37B3EAC7506F30854D015E16031D1C40B13FCEE11F154736235AA20D831F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "45D8D724071A68083FC1F7A8A1F6E5DEB62ECA207033676B8814B04BD89C53A7",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/45D8D724071A68083FC1F7A8A1F6E5DEB62ECA207033676B8814B04BD89C53A7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "139C49B0B606C43DE3DBB11416AE40D4484A5E770BBFE3876B96E767755A7C55",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/139C49B0B606C43DE3DBB11416AE40D4484A5E770BBFE3876B96E767755A7C55/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "C935D0FCE7EFED00E526F58BCBBFDEA38989ACC9B0B33F833F5C404D19598B9B",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C935D0FCE7EFED00E526F58BCBBFDEA38989ACC9B0B33F833F5C404D19598B9B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "614D53A4EF9072BBA0064E1CCB99464EBF9F3AA7310DA77A22150C165853F8D0",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/614D53A4EF9072BBA0064E1CCB99464EBF9F3AA7310DA77A22150C165853F8D0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "037298068CF066E7F6B7D8488AA29C72E027901487A4FEA61216EBCFCB0480D0",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/037298068CF066E7F6B7D8488AA29C72E027901487A4FEA61216EBCFCB0480D0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "6F0AA1D804E020F020EB8B979AE22B726B1CEBC7A547DE08FC43CE8880779446",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6F0AA1D804E020F020EB8B979AE22B726B1CEBC7A547DE08FC43CE8880779446/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "F9E22E5560C2134A9D143948568E17129A82DDD8FF3362AAEC5FECF593D9BB82",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F9E22E5560C2134A9D143948568E17129A82DDD8FF3362AAEC5FECF593D9BB82/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "A3EB2554EA3261B25A2FEC9FDA86116A519ADEAE5807FDF29A446F722FFA3720",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A3EB2554EA3261B25A2FEC9FDA86116A519ADEAE5807FDF29A446F722FFA3720/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "9F99C9A200D922337341C4C13233913025246FF495397AD9FB100F8E84599642",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F99C9A200D922337341C4C13233913025246FF495397AD9FB100F8E84599642/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "594b30b0-5065-48a4-9e5f-8ac3222e8e6e",
      "text": {
      "title": {
      "slug": {
      "series": {
      "default": {
      "content": "magic-of-disneys-animal-kingdom",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "full": {
      "series": {
      "default": {
      "content": "Magic of Disney's Animal Kingdom",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "1c5079c4-41ab-4545-9ad8-8df39789ca27",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-09-25",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/07/22/1595459571-193411.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "5b100448-cdcb-4d88-8fde-781686fe757d",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "73ufxsUPRw3K",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTk1ODY4",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "f405d681-6b8e-4a44-a02e-65d98307080a",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "National Geographic",
      "partnerGroupId": "372084",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Mars: Inside SpaceX - movie - 5b100448-cdcb-4d88-8fde-781686fe757d",
      "image": {
      "title_treatment_layer": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "195D524B52AAD62297BC1312CE33400B3E8729574BCDDA8A5C5BEC069978FC86",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/195D524B52AAD62297BC1312CE33400B3E8729574BCDDA8A5C5BEC069978FC86/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "439CFE00BB43A6504F9712DA8BFFBCA9749645125FBE1E1DC4584FF41DBA82A0",
      "masterWidth": 3420,
      "masterHeight": 874,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/439CFE00BB43A6504F9712DA8BFFBCA9749645125FBE1E1DC4584FF41DBA82A0/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "505646EE455DF12AA2BB3DE77A4BA4480FF1C99E8A1AC27062BA88564B7F5425",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/505646EE455DF12AA2BB3DE77A4BA4480FF1C99E8A1AC27062BA88564B7F5425/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "tile": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "E853251557811B214C6BAE044F331DF7218314106DB6A7A26D63B685BE5DDEA1",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E853251557811B214C6BAE044F331DF7218314106DB6A7A26D63B685BE5DDEA1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "55A6F1847B1190C47E4ED58A3C899BFE0D323FB55392B6C0C399D66DDB232408",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/55A6F1847B1190C47E4ED58A3C899BFE0D323FB55392B6C0C399D66DDB232408/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "EC63605761FF0CE1789B07D2E25F859BEB26B0B8AC59B101587EAE6067E6870D",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EC63605761FF0CE1789B07D2E25F859BEB26B0B8AC59B101587EAE6067E6870D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "58CDBC4ECBEBA0BABC3FA5B8683036C9925585389D6B3A4920083E11A2A15B82",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/58CDBC4ECBEBA0BABC3FA5B8683036C9925585389D6B3A4920083E11A2A15B82/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "program": {
      "default": {
      "masterId": "EF6E2F96A1DC202B9B4B7AF358D160075491BC41C1354A32A789DAB7113E57D1",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF6E2F96A1DC202B9B4B7AF358D160075491BC41C1354A32A789DAB7113E57D1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "E5DDB1AF9C5657263E9D4D598FED5D5392D14E1512D1637A00863EFEFD261368",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E5DDB1AF9C5657263E9D4D598FED5D5392D14E1512D1637A00863EFEFD261368/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "C1FFB06AB779BAC40EA9F3FC45ECDBA534384432FCEEA62BA86763BEAFAEE12B",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C1FFB06AB779BAC40EA9F3FC45ECDBA534384432FCEEA62BA86763BEAFAEE12B/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "program": {
      "default": {
      "masterId": "A435E02F625BBA4608565682B9EEAD0B40B4C3985304ED0527CB27BEA83F376A",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A435E02F625BBA4608565682B9EEAD0B40B4C3985304ED0527CB27BEA83F376A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.00": {
      "program": {
      "default": {
      "masterId": "C969DD6E83A3458C78F9A974E672A045BB858959940149D10BCA1562989534C6",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C969DD6E83A3458C78F9A974E672A045BB858959940149D10BCA1562989534C6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "1C790122012C589C4CA076D828FAEA53992F50AE12712E92BB6B0A9808B637BF",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C790122012C589C4CA076D828FAEA53992F50AE12712E92BB6B0A9808B637BF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "program": {
      "default": {
      "masterId": "CBADD8A18F6075A7B7E92A6CA5571C966CED666A8FC5E8BF804DD4B0DD8237D7",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CBADD8A18F6075A7B7E92A6CA5571C966CED666A8FC5E8BF804DD4B0DD8237D7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "C24EEA7B8990335080B884EF680D6599EC71399A3DFD1705C48FBAC33B4FBFC7",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C24EEA7B8990335080B884EF680D6599EC71399A3DFD1705C48FBAC33B4FBFC7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "391CD3178A2E918BF2CC3082E586C52DE20FB16C3D37471862B4E3011A2C9F53",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/391CD3178A2E918BF2CC3082E586C52DE20FB16C3D37471862B4E3011A2C9F53/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "d78bf7ef-3e39-4bf6-845b-5574d8d99915",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/d78bf7ef-3e39-4bf6-845b-5574d8d99915/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 2815000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "f405d681-6b8e-4a44-a02e-65d98307080a",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Mars: Inside SpaceX",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "mars-inside-spacex",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "8ABB-5F05-88F8-BBF2-EE1C-3"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2018-11-12",
      "releaseType": "original",
      "releaseYear": 2018,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [],
      "videoId": "3e118f5b-c950-477e-a07f-0ce96d6cbd7f"
      },
      {
      "contentId": "5f939c3a-082c-43e8-982f-af647f6e910d",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "3sFK6iv7UwAX",
      "image": {
      "tile": {
      "1.00": {
      "series": {
      "default": {
      "masterId": "EB8B228B77C4765CBD955EC21CAA188856B9117F2650BE43D2574D07563DCAD9",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EB8B228B77C4765CBD955EC21CAA188856B9117F2650BE43D2574D07563DCAD9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "7794ED276EAC39CFC956959F0E668EB4F52042CF5441A65B999B2882A3428C3D",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7794ED276EAC39CFC956959F0E668EB4F52042CF5441A65B999B2882A3428C3D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "series": {
      "default": {
      "masterId": "1F321E3316F4C25E51DE644F21A688763ABCC820D224153658953C28C58A56CF",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1F321E3316F4C25E51DE644F21A688763ABCC820D224153658953C28C58A56CF/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "1F182AE1B4D63B550A8E768898FC14643C9B4827B7342C638DD0BD6CD609B7FC",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1F182AE1B4D63B550A8E768898FC14643C9B4827B7342C638DD0BD6CD609B7FC/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "68F0A7CFC95721A7575B9C348114C857A9220DB78976F8917428601F33776F2A",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/68F0A7CFC95721A7575B9C348114C857A9220DB78976F8917428601F33776F2A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "331886D448428D36B8519A03EBEAA791D35EF9266A8E32FD241F5DF2C1258F45",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/331886D448428D36B8519A03EBEAA791D35EF9266A8E32FD241F5DF2C1258F45/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "24B5DAA00E4EAA86529EB837339315E1DF96582F854FCB6CA62CD7EBE4B26B15",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/24B5DAA00E4EAA86529EB837339315E1DF96582F854FCB6CA62CD7EBE4B26B15/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "B2344F2E7C7C575B92944F4E280C881B208D61C515A45AF0B9B95526CA29F746",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B2344F2E7C7C575B92944F4E280C881B208D61C515A45AF0B9B95526CA29F746/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "E5D012DFAA3709D3675ED3C88451D37064A3011CC958F0C2A544D8E241CD3A87",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E5D012DFAA3709D3675ED3C88451D37064A3011CC958F0C2A544D8E241CD3A87/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "712B48A28F7CACB1F64FA2AB1346A64585D56621230B3989CD61F22A90694872",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/712B48A28F7CACB1F64FA2AB1346A64585D56621230B3989CD61F22A90694872/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "EDC839B719CB07F809346B542F24DCF12A4EC2F870391E857C6B5BADDCF09546",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EDC839B719CB07F809346B542F24DCF12A4EC2F870391E857C6B5BADDCF09546/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "A8BE94CE2FCD494887C562A98A9BE2DB8B92DE45E3C36560DEA771DA8D9F0900",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A8BE94CE2FCD494887C562A98A9BE2DB8B92DE45E3C36560DEA771DA8D9F0900/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "06263FAB7F5F316581C9C8293742A1560CCCEB62FFA6E209D5AB8177041E9FFD",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/06263FAB7F5F316581C9C8293742A1560CCCEB62FFA6E209D5AB8177041E9FFD/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "series": {
      "default": {
      "masterId": "CFB26260029A92B05A2CEBD680FEEBC6BC46136AC096C1D672187BEC60B48F3F",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CFB26260029A92B05A2CEBD680FEEBC6BC46136AC096C1D672187BEC60B48F3F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "4F4EE2AA5BB58A3F008D47E51293807230F870CE6D2D3DD15F4B249F4A375945",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F4EE2AA5BB58A3F008D47E51293807230F870CE6D2D3DD15F4B249F4A375945/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "E0B63FDC7D252BBCD930F08335316B29DDD8015896200EE3089DE96DF8429428",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E0B63FDC7D252BBCD930F08335316B29DDD8015896200EE3089DE96DF8429428/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "5f939c3a-082c-43e8-982f-af647f6e910d",
      "text": {
      "title": {
      "full": {
      "series": {
      "default": {
      "content": "X-Ray Earth",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "slug": {
      "series": {
      "default": {
      "content": "x-ray-earth",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "aee64795-d162-459f-ae5b-f921ee0a460b",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "false"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-08-11",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": []
      },
      {
      "contentId": "039189db-b0e8-4197-a8e3-bdec1868d53e",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": "3sQ41uetz3Cn",
      "image": {
      "tile": {
      "0.67": {
      "series": {
      "default": {
      "masterId": "DC3F0A42CF7A51D3428FE3127EA614EE1476F58CF757A978E55BA498A575FC7A",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DC3F0A42CF7A51D3428FE3127EA614EE1476F58CF757A978E55BA498A575FC7A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "series": {
      "default": {
      "masterId": "75FAE1463B7A19299E24CDADB62B6E5A03B154784BF5CA6F6E11DFEB58F767FB",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/75FAE1463B7A19299E24CDADB62B6E5A03B154784BF5CA6F6E11DFEB58F767FB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "series": {
      "default": {
      "masterId": "DB6F7E28E2CF633C3013389BAD5BEAA8B10332518F7FBF570A211FB982179F57",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB6F7E28E2CF633C3013389BAD5BEAA8B10332518F7FBF570A211FB982179F57/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "series": {
      "default": {
      "masterId": "30344668109BD5FA5C81301348F807106817589B4F31D2BF46AAFAE76DD9D5AA",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/30344668109BD5FA5C81301348F807106817589B4F31D2BF46AAFAE76DD9D5AA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "series": {
      "default": {
      "masterId": "94BF28DF2AD33D42B6C60B0D0EE8E2031B87CED3BE8F9458F86946C746BBD40A",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/94BF28DF2AD33D42B6C60B0D0EE8E2031B87CED3BE8F9458F86946C746BBD40A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "A48AFF6E3FF0F36F6AB75D8FF44E3A14157E15197226B46D4636AEEC213D84B2",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A48AFF6E3FF0F36F6AB75D8FF44E3A14157E15197226B46D4636AEEC213D84B2/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.75": {
      "series": {
      "default": {
      "masterId": "6975B31E67D1E20572B498FB479F5CC963F19FE3AC0D6740C667695751213012",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6975B31E67D1E20572B498FB479F5CC963F19FE3AC0D6740C667695751213012/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "42DB0455EAFDBE0CB2666740BE1F197B791875C4C186417BE721BF8BE1E5A770",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/42DB0455EAFDBE0CB2666740BE1F197B791875C4C186417BE721BF8BE1E5A770/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.32": {
      "series": {
      "default": {
      "masterId": "343579B1EB422FEC9E725DD3EC2C617FF062540079FA929983C6C4A4A62C26B7",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/343579B1EB422FEC9E725DD3EC2C617FF062540079FA929983C6C4A4A62C26B7/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.00": {
      "series": {
      "default": {
      "masterId": "D9303C178A32A3E06296179A6CE6569121F19DC22B2615E0A59C360CF105D829",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D9303C178A32A3E06296179A6CE6569121F19DC22B2615E0A59C360CF105D829/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "971CA57E4AB8B853F7C091990EB122C5C9C9FC14F8C52A70D1F351BCC1AE2280",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/971CA57E4AB8B853F7C091990EB122C5C9C9FC14F8C52A70D1F351BCC1AE2280/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "040E7F5E7633C0359B4504A55BD252481A9BD1D4C67A5457BE757F328C425AC6",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/040E7F5E7633C0359B4504A55BD252481A9BD1D4C67A5457BE757F328C425AC6/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "series": {
      "default": {
      "masterId": "02B332411554EFAA78681EA9717BF9D06579B58280F3A1B51C983D91F9E97699",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/02B332411554EFAA78681EA9717BF9D06579B58280F3A1B51C983D91F9E97699/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "series": {
      "default": {
      "masterId": "D5AF78DF6C0128ECFEE597760734D63875D8D2EBC59A87298BF3CF75784BF9D4",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D5AF78DF6C0128ECFEE597760734D63875D8D2EBC59A87298BF3CF75784BF9D4/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "08588D164C0295380021835FC9DD54DD4E0D81CC7F152D9681C1930C0354245F",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/08588D164C0295380021835FC9DD54DD4E0D81CC7F152D9681C1930C0354245F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.89": {
      "series": {
      "default": {
      "masterId": "1F6174DFF9F60BCFFB307BE7C745FA0509B63EF3B7C90E250934B6615550D69E",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1F6174DFF9F60BCFFB307BE7C745FA0509B63EF3B7C90E250934B6615550D69E/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "D4369F9BFFA854040C4A50A4FB14C8B547A0ABE7951A9ECEA41A37197D546694",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D4369F9BFFA854040C4A50A4FB14C8B547A0ABE7951A9ECEA41A37197D546694/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "1.78": {
      "series": {
      "default": {
      "masterId": "E9BE74097C82E619FFACFF2153EE46377DF89E789348587BDF906273D527846F",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E9BE74097C82E619FFACFF2153EE46377DF89E789348587BDF906273D527846F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.91": {
      "series": {
      "default": {
      "masterId": "E1D65350DD614768021CFBED4A2E46A47CE1379CA35EC67B9525B6F4F58F2A0A",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E1D65350DD614768021CFBED4A2E46A47CE1379CA35EC67B9525B6F4F58F2A0A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "series": {
      "default": {
      "masterId": "18C6FC9D4A1E09527178DEC0D53D116BE8C51635664CE49C1D609F0D08759D92",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/18C6FC9D4A1E09527178DEC0D53D116BE8C51635664CE49C1D609F0D08759D92/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "seriesId": "039189db-b0e8-4197-a8e3-bdec1868d53e",
      "text": {
      "title": {
      "slug": {
      "series": {
      "default": {
      "content": "meet-the-chimps",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      },
      "full": {
      "series": {
      "default": {
      "content": "Meet The Chimps",
      "language": "en",
      "sourceEntity": "series"
      }
      }
      }
      }
      },
      "textExperienceId": "ff9d10d8-ddaa-47b4-b710-efba55bb1255",
      "tags": [
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "mediaRights": {
      "downloadBlocked": true,
      "pconBlocked": false
      },
      "ratings": [
      {
      "advisories": [],
      "description": null,
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": null,
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcSeries",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/08/06/1596741316-209492.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ]
      },
      {
      "contentId": "f4bac471-bb34-4f50-9b58-2efa2e169a28",
      "contentType": "full",
      "callToAction": null,
      "currentAvailability": {
      "region": "US",
      "kidsMode": false
      },
      "encodedSeriesId": null,
      "episodeNumber": null,
      "episodeSequenceNumber": null,
      "episodeSeriesSequenceNumber": null,
      "family": {
      "encodedFamilyId": "5QQfqnXY36eG",
      "familyId": "ZGlzbmV5b3JnOmRpc25leS5jb206cmFkYXI6MTkxMDk5",
      "parent": true,
      "parentRef": {
      "encodedSeriesId": null,
      "programId": "6045bd8e-f25d-4ade-ae2c-0dcea364e857",
      "seasonId": null,
      "seriesId": null
      },
      "sequenceNumber": null
      },
      "groups": [
      {
      "name": "Non-TWDC",
      "partnerGroupId": "401208",
      "type": "disneyPlusStorefrontBrand"
      }
      ],
      "internalTitle": "Howard - movie - f4bac471-bb34-4f50-9b58-2efa2e169a28",
      "image": {
      "tile": {
      "0.75": {
      "program": {
      "default": {
      "masterId": "2FCD545B51ED5E607CEF0B58BC49D0229A55E7949D908AC0EE8EADC151C4E3CB",
      "masterWidth": 600,
      "masterHeight": 800,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2FCD545B51ED5E607CEF0B58BC49D0229A55E7949D908AC0EE8EADC151C4E3CB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.33": {
      "program": {
      "default": {
      "masterId": "A61D1F16806A32C448FED94416BBF334E47C4F79E3CD8DCDAC07128C77B92EBB",
      "masterWidth": 1440,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A61D1F16806A32C448FED94416BBF334E47C4F79E3CD8DCDAC07128C77B92EBB/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.67": {
      "program": {
      "default": {
      "masterId": "88FB9894DFF59DC213FF4C3EBA461D32B00AF939ED31926DBFFB110A5ADB4368",
      "masterWidth": 2000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/88FB9894DFF59DC213FF4C3EBA461D32B00AF939ED31926DBFFB110A5ADB4368/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "4CD4903D2DF89FFE4CFE4D28A646B9DEB025D4A920FC7811C71A8D8EC9635020",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4CD4903D2DF89FFE4CFE4D28A646B9DEB025D4A920FC7811C71A8D8EC9635020/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.00": {
      "program": {
      "default": {
      "masterId": "83C6297180B47DD943C2BF17E4BB4A884DBD8AE6EA775A5AB4F3628263292083",
      "masterWidth": 3000,
      "masterHeight": 3000,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/83C6297180B47DD943C2BF17E4BB4A884DBD8AE6EA775A5AB4F3628263292083/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "0.71": {
      "program": {
      "default": {
      "masterId": "68ECBE2454724F232A5E9940F3351E246EE376B2AD45B8520F149B2D79A0CD7D",
      "masterWidth": 2000,
      "masterHeight": 2818,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/68ECBE2454724F232A5E9940F3351E246EE376B2AD45B8520F149B2D79A0CD7D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "2.29": {
      "program": {
      "default": {
      "masterId": "9AA0EFBA83E1D9081EED738CB66BBDD3B07820945C2A159251643A71386EFB8D",
      "masterWidth": 3840,
      "masterHeight": 1680,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9AA0EFBA83E1D9081EED738CB66BBDD3B07820945C2A159251643A71386EFB8D/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment_layer": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "77DC51244511FFDCCC6E8E0E9202F767683F1A20FB9A8CC973289B33D39DB7BE",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77DC51244511FFDCCC6E8E0E9202F767683F1A20FB9A8CC973289B33D39DB7BE/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "EEEC50F3130B61747A50B0BC0FB399751EA440EC04800DB7E8E136FFE724225A",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EEEC50F3130B61747A50B0BC0FB399751EA440EC04800DB7E8E136FFE724225A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "8C8028D3D2482ADA5B43A1828B11FF08C6C33655886A75E66DF99C5A4D376737",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8C8028D3D2482ADA5B43A1828B11FF08C6C33655886A75E66DF99C5A4D376737/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background_details": {
      "1.33": {
      "program": {
      "default": {
      "masterId": "5CF36ECE591D70558E12A7E599E7743FE7B9A206AC50CB95641A2FAEAF9A3340",
      "masterWidth": 2880,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5CF36ECE591D70558E12A7E599E7743FE7B9A206AC50CB95641A2FAEAF9A3340/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "D6E5AFB6BE19BAA14418C60549989DAF0932E34E30EC0B3929A3BD3A9BD0805F",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D6E5AFB6BE19BAA14418C60549989DAF0932E34E30EC0B3929A3BD3A9BD0805F/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "title_treatment": {
      "3.32": {
      "program": {
      "default": {
      "masterId": "02DE36D009BA674924302B6EB905CBB5A0F8511F98AF1D8DEC3D7F4FBB04EF52",
      "masterWidth": 4320,
      "masterHeight": 1300,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/02DE36D009BA674924302B6EB905CBB5A0F8511F98AF1D8DEC3D7F4FBB04EF52/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "4C93E27104A780D77BFFA20244A2BE36B6E04147723BD57D80C7656F60E2B1E9",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4C93E27104A780D77BFFA20244A2BE36B6E04147723BD57D80C7656F60E2B1E9/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_tile": {
      "3.91": {
      "program": {
      "default": {
      "masterId": "8DF4A85DD50BB825E6704AC5EB828DECE32BFBBDBAFF0ED2BCD56C5F728C487A",
      "masterWidth": 3840,
      "masterHeight": 982,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8DF4A85DD50BB825E6704AC5EB828DECE32BFBBDBAFF0ED2BCD56C5F728C487A/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "DB4B31E85E77004AAE6327001C2EFB338B779F6BD5DEFE092FCF84FB422618B5",
      "masterWidth": 1920,
      "masterHeight": 1080,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB4B31E85E77004AAE6327001C2EFB338B779F6BD5DEFE092FCF84FB422618B5/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "3.00": {
      "program": {
      "default": {
      "masterId": "CDE3B31A17A42D46AB27050E90C192341EF211C84E5D60C1F8D2EBD25C0B8076",
      "masterWidth": 3840,
      "masterHeight": 1280,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CDE3B31A17A42D46AB27050E90C192341EF211C84E5D60C1F8D2EBD25C0B8076/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "hero_collection": {
      "1.78": {
      "program": {
      "default": {
      "masterId": "7B94069042F553CDF1009BFA57476A3AC493238AF2DF511238F2F04057BABED1",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B94069042F553CDF1009BFA57476A3AC493238AF2DF511238F2F04057BABED1/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      },
      "background": {
      "2.89": {
      "program": {
      "default": {
      "masterId": "0C0A88415EEA5F4DB6FC5BB28A889A1FF570A018691816F7FDCD101E5BB584FA",
      "masterWidth": 3840,
      "masterHeight": 1330,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0C0A88415EEA5F4DB6FC5BB28A889A1FF570A018691816F7FDCD101E5BB584FA/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      },
      "1.78": {
      "program": {
      "default": {
      "masterId": "10417996D2C091656CF050B4C3F48CC062F169F55200E47F8B72A1832073A76C",
      "masterWidth": 3840,
      "masterHeight": 2160,
      "url": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/10417996D2C091656CF050B4C3F48CC062F169F55200E47F8B72A1832073A76C/scale?format=jpeg&quality=90&scalingAlgorithm=lanczos3&width=500"
      }
      }
      }
      }
      },
      "mediaMetadata": {
      "format": "HD",
      "mediaId": "af33ed77-62c8-4638-b7cc-a7f1b1915576",
      "phase": "active",
      "playbackUrls": [
      {
      "rel": "video",
      "href": "https://global.edge.bamgrid.com/media/af33ed77-62c8-4638-b7cc-a7f1b1915576/scenarios/{scenario}",
      "templated": true,
      "params": [
      {
      "name": "scenario",
      "description": "Playback scenario"
      }
      ]
      }
      ],
      "productType": "VOD",
      "runtimeMillis": 5733000,
      "state": "ON",
      "type": "VIDEO"
      },
      "mediaRights": {
      "violations": [],
      "downloadBlocked": true,
      "pconBlocked": false,
      "rewind": true
      },
      "originalLanguage": "en",
      "programId": "6045bd8e-f25d-4ade-ae2c-0dcea364e857",
      "programType": "movie",
      "seasonId": null,
      "seasonSequenceNumber": null,
      "seriesId": null,
      "text": {
      "title": {
      "full": {
      "program": {
      "default": {
      "content": "Howard",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      },
      "slug": {
      "program": {
      "default": {
      "content": "howard",
      "language": "en",
      "sourceEntity": "program"
      }
      }
      }
      }
      },
      "tags": [
      {
      "displayName": null,
      "type": "titleEidr",
      "value": "84D9-21C1-89DF-5696-BA33-P"
      },
      {
      "displayName": null,
      "type": "disneyPlusOriginal",
      "value": "true"
      }
      ],
      "targetLanguage": "en",
      "ratings": [
      {
      "advisories": [],
      "description": "D",
      "system": "TVPG",
      "value": "TV-PG"
      }
      ],
      "releases": [
      {
      "releaseDate": "2020-08-07",
      "releaseType": "original",
      "releaseYear": 2020,
      "territory": null
      }
      ],
      "type": "DmcVideo",
      "videoArt": [
      {
      "mediaMetadata": {
      "urls": [
      {
      "url": "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/06/26/1593202881-191099.mp4"
      }
      ]
      },
      "purpose": "full_bleed"
      }
      ],
      "videoId": "0ca8bd90-7c42-4696-9473-a9aac515a5e5"
      }
      ],
      "meta": {
      "hits": 23,
      "offset": 0,
      "page_size": 15
      },
      "setId": "23f87cf1-fbdc-4d02-845c-01d735c793b6",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Documentaries",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      },
      "type": "CuratedSet"
      },
      "type": "ShelfContainer",
      "style": "editorial"
      },
      {
      "set": {
      "contentClass": "BecauseYouSet",
      "refId": "bd1bfb9a-bbf7-43a0-ac5e-3e3889d7224d",
      "refIdType": "setId",
      "refType": "BecauseYouSet",
      "type": "SetRef",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Because You Watched Gordon Ramsey",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      }
      },
      "type": "ShelfContainer",
      "style": "BecauseYouSet"
      },
      {
      "set": {
      "contentClass": "TrendingSet",
      "refId": "25b87551-fd19-421a-be0f-b7f2eea978b3",
      "refIdType": "setId",
      "refType": "TrendingSet",
      "type": "SetRef",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Trending",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      }
      },
      "type": "ShelfContainer",
      "style": "TrendingSet"
      },
      {
      "set": {
      "contentClass": "editorial",
      "refId": "a3203f93-32ab-4e41-b95b-b4d3c2b9702a",
      "refIdType": "setId",
      "refType": "CuratedSet",
      "type": "SetRef",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Reimagined Classics",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      }
      },
      "type": "ShelfContainer",
      "style": "editorial"
      },
      {
      "set": {
      "contentClass": "editorial",
      "refId": "67afebcf-bb9f-46dc-8d0f-a483accde416",
      "refIdType": "setId",
      "refType": "CuratedSet",
      "type": "SetRef",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Nostalgic Movies",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      }
      },
      "type": "ShelfContainer",
      "style": "editorial"
      },
      {
      "set": {
      "contentClass": "editorial",
      "refId": "327aeff3-fe4d-4971-ad95-a78acc884079",
      "refIdType": "setId",
      "refType": "CuratedSet",
      "type": "SetRef",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Ultra HD and HDR",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      }
      },
      "type": "ShelfContainer",
      "style": "editorial"
      },
      {
      "set": {
      "contentClass": "editorial",
      "refId": "721d2dd2-bd35-4876-ada5-f965b053a658",
      "refIdType": "setId",
      "refType": "CuratedSet",
      "type": "SetRef",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Animals and Nature",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      }
      },
      "type": "ShelfContainer",
      "style": "editorial"
      },
      {
      "set": {
      "contentClass": "editorial",
      "refId": "b831b63d-26e8-4dd9-a3cc-073264808a6e",
      "refIdType": "setId",
      "refType": "CuratedSet",
      "type": "SetRef",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Feel-Good Sports Movies",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      }
      },
      "type": "ShelfContainer",
      "style": "editorial"
      },
      {
      "set": {
      "contentClass": "PersonalizedCuratedSet",
      "refId": "736e91f8-32bf-41e4-bf36-836cb22660fe",
      "refIdType": "setId",
      "refType": "PersonalizedCuratedSet",
      "type": "SetRef",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Animated Movies",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      }
      },
      "type": "ShelfContainer",
      "style": "PersonalizedCuratedSet"
      },
      {
      "set": {
      "contentClass": "PersonalizedCuratedSet",
      "refId": "f506622c-4f75-4f87-bafe-3e08a4433914",
      "refIdType": "setId",
      "refType": "PersonalizedCuratedSet",
      "type": "SetRef",
      "text": {
      "title": {
      "full": {
      "set": {
      "default": {
      "content": "Mickey and Friends",
      "language": "en",
      "sourceEntity": "set"
      }
      }
      }
      }
      }
      },
      "type": "ShelfContainer",
      "style": "PersonalizedCuratedSet"
      }
      ],
      "image": {},
      "text": {
      "title": {
      "full": {
      "collection": {
      "default": {
      "content": "Home",
      "language": "en",
      "sourceEntity": "collection"
      }
      }
      }
      }
      },
      "type": "StandardCollection",
      "videoArt": []
      }
      };
};