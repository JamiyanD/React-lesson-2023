import { cutTextToLength,slugify,composeArticleSlug,extractArticleIdFromSlug } from "../index";


const str = "The quick brown fox jumps over the lazy dog.";
const array = [1,2,3,4,5]

describe("slugify", () => {
//       it("should cut text to length", () => {
//     expect(cutTextToLength(str, 20))
//            .toBe("The quick brown fox ...");
//   });


//   it("should not cut text to length", () => {
//     expect(cutTextToLength(str, 100)).toBe(str);
//   });

//     it("should cut text to length", () => {
//       expect(slugify(str))
//              .toBe("the-quick-brown-fox-jumps-over-the-lazy-dog");
//     });
  
//     it("should cut text to length", () => {
//         expect(composeArticleSlug(2,str))
//                .toBe("the-quick-brown-fox-jumps-over-the-lazy-dog-2");
//       });

      it("should cut text to length", () => {
        expect(extractArticleIdFromSlug(array))
               .toBe("The quick brown fox jumps over the lazy dog.");
      });
   
  });