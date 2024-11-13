import React from 'react'
import CardProduct from './CardProduct'
import Ashwagandha from "./images/products-ashwa.jpg"
import Brahmi from "./images/products-brahmi.jpg"
import Amla from "./images/products-amla.jpg"
import HairOil from "./images/products-hairoil.jpg"
import NeemOil from "./images/products-neemoil.jpg"
import BodyOil from "./images/products-bodyoil.jpg"
import Soap from "./images/products-soap.jpg"
import FaceWash from "./images/products-facewash.jpg"
import Moist from "./images/products-moist.jpg"
import Tulsi from "./images/products-tulsi.jpg"
import Lemon from "./images/products-lemon.jpg"
import Turmeric from "./images/products-turmeric.jpg"

function Products() {
  return (
    <>
        <div className="text-left ml-8 mt-4">
            <h1 className="text-4xl mb-4">Our Products</h1>
            <p className="mb-10">Choose from our diverse range of Ayurvedic offerings:</p>
        </div>
        <h1 className="text-3xl mb-6 mt-8 ml-20">Herbal Supplements</h1>
        <div className="flex gap-8 mt-10 justify-center">
        <CardProduct title="Ashwagandha" image={Ashwagandha} desc="An adaptogen that helps the body manage stress and anxiety. Supports energy, stamina, and mental clarity, while balancing stress." BText="Add to Cart" price="Rs.499"/>
        <CardProduct title="Brahmi" image={Brahmi} desc="Enhances cognitive function and memory. Known for its calming properties, it supports mental clarity and reduces stress." BText="Add to Cart" price="Rs.499"/>
        <CardProduct title="Amla" image={Amla} desc="Rich in vitamin C and antioxidants, Amla supports immune health, promotes radiant skin, and aids digestion." BText="Add to Cart" price="Rs.499"/>
        </div>
        <h1 className="text-3xl mb-6 mt-8 ml-20">Essential Oils</h1>
        <div className="flex gap-8 mt-10 justify-center">
        <CardProduct title="Muscle Massage Oil" image={BodyOil} desc="Formulated with a blend of herbal extracts and oils such as Mahanarayan oil and Sesame oil, this massage oil soothes sore muscles and relieves tension. Rich in anti-inflammatory properties." BText="Add to Cart" price="Rs.499"/>
        <CardProduct title="Pure Neem Oil" image={NeemOil} desc="Extracted from the seeds of the neem tree, this oil has strong antibacterial and anti-inflammatory properties. It’s commonly used for skin care, helping to treat acne, rashes, and other skin conditions." BText="Add to Cart" price="Rs.499"/>
        <CardProduct title="Hair Oil" image={HairOil} desc="Blend of nourishing herbs and oils designed to promote healthy hair growth and scalp health. Typically enriched with ingredients like Brahmi, Amla, and Bhringraj, it strengthens hair, reduces dandruff, and enhances shine" BText="Add to Cart" price="Rs.499"/>
        </div>
        <h1 className="text-3xl mb-6 mt-8 ml-20">Skin Care Products</h1>
        <div className="flex gap-8 mt-10 justify-center">
        <CardProduct title="Herbal Moisturizer" image={Moist} desc="A lightweight cream infused with natural oils like Jojoba and Almond, along with soothing herbs such as Chamomile. It hydrates and nourishes the skin, providing a protective barrier while promoting a soft, radiant complexion. Rich in antioxidants, it helps combat environmental stressors while promoting elasticity and a radiant complexion." BText="Add to Cart" price="Rs.499"/>
        <CardProduct title="Herbal Face Wash" image={FaceWash} desc="A gentle cleanser formulated with natural ingredients like Aloe Vera, Neem, and Turmeric. It removes impurities and excess oil while maintaining the skin's moisture balance. Suitable for all skin types, it refreshes and rejuvenates the complexion, promoting a healthy glow." BText="Add to Cart" price="Rs.499"/>
        <CardProduct title="Herbal Soap" image={Soap} desc="A handcrafted soap made from natural oils and botanical extracts. Infused with nourishing ingredients like Coconut oil and Lavender, it cleanses without stripping moisture. Gentle on the skin, it promotes hydration and leaves a subtle, refreshing fragrance after each wash." BText="Add to Cart" price="Rs.499"/>
        </div>
        <h1 className="text-3xl mb-6 mt-8 ml-20">Tea and Infusions</h1>
        <div className="flex gap-8 mt-10 justify-center">
        <CardProduct title="Tulsi Tea" image={Tulsi} desc="Made from holy basil leaves, Tulsi tea is known for its stress-relieving and immune-boosting properties. It aids digestion and supports respiratory health, providing a soothing and aromatic experience that promotes overall well-being." BText="Add to Cart" price="Rs.499"/>
        <CardProduct title="Ginger & Turmeric Infusion" image={Turmeric} desc="This warming infusion combines ginger and turmeric, both renowned for their anti-inflammatory benefits. It supports digestion, boosts immunity, and enhances circulation, making it a comforting drink that helps relieve cold symptoms and promotes vitality." BText="Add to Cart" price="Rs.499"/>
        <CardProduct title="Mint and Lemon Balm Tea" image={Lemon} desc="A refreshing blend of mint and lemon balm, this tea is perfect for calming the mind and soothing the digestive system. It helps alleviate stress, promotes relaxation, and provides a gentle energy boost, making it an excellent choice for any time of day." BText="Add to Cart" price="Rs.499"/>
        </div>
    </>
  )
}
export default Products
